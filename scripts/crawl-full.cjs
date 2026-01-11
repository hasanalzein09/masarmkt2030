#!/usr/bin/env node

/**
 * Website Crawler - Full Check
 * Checks ALL URLs from sitemap
 */

const https = require('https');

const SITEMAP_URL = 'https://masarmkt2030.online/sitemap-0.xml';
const USER_AGENT = 'Googlebot/2.1 (+http://www.google.com/bot.html)';

let okCount = 0;
let errorCount = 0;
let errors = [];

// Follow redirects and get final response
function fetchUrl(url, redirects = 0) {
    return new Promise((resolve, reject) => {
        if (redirects > 5) {
            reject(new Error('Too many redirects'));
            return;
        }

        https.get(url, { headers: { 'User-Agent': USER_AGENT }, timeout: 15000 }, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                let newUrl = res.headers.location;
                if (!newUrl.startsWith('http')) {
                    newUrl = new URL(newUrl, url).toString();
                }
                fetchUrl(newUrl, redirects + 1).then(resolve).catch(reject);
            } else {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => resolve({ statusCode: res.statusCode, data }));
            }
        }).on('error', reject);
    });
}

// Parse URLs from sitemap
function extractUrls(xml) {
    const urls = [];
    const regex = /<loc>([^<]+)<\/loc>/g;
    let match;
    while ((match = regex.exec(xml)) !== null) {
        urls.push(match[1]);
    }
    return urls;
}

// Check single URL
function checkUrl(url) {
    return new Promise((resolve) => {
        https.get(url, {
            headers: { 'User-Agent': USER_AGENT },
            timeout: 10000,
        }, (res) => {
            if (res.statusCode >= 200 && res.statusCode < 400) {
                okCount++;
                resolve({ url, status: res.statusCode, ok: true });
            } else {
                errorCount++;
                errors.push({ url, status: res.statusCode });
                resolve({ url, status: res.statusCode, ok: false });
            }
            res.resume();
        }).on('error', (err) => {
            errorCount++;
            errors.push({ url, status: 'ERR', error: err.message });
            resolve({ url, status: 'ERR', ok: false });
        }).on('timeout', function () {
            this.destroy();
            errorCount++;
            errors.push({ url, status: 'TIMEOUT' });
            resolve({ url, status: 'TIMEOUT', ok: false });
        });
    });
}

// Batch check with concurrency
async function checkBatch(urls, concurrent = 10) {
    const results = [];
    for (let i = 0; i < urls.length; i += concurrent) {
        const batch = urls.slice(i, i + concurrent);
        const batchResults = await Promise.all(batch.map(checkUrl));
        results.push(...batchResults);

        // Progress update
        const done = Math.min(i + concurrent, urls.length);
        const pct = ((done / urls.length) * 100).toFixed(0);
        process.stdout.write(`\r📊 Progress: ${done}/${urls.length} (${pct}%) - ✅ ${okCount} OK, ❌ ${errorCount} Errors`);
    }
    return results;
}

async function main() {
    console.log('🔍 Google Crawler - FULL SCAN');
    console.log('==============================');
    console.log(`User-Agent: ${USER_AGENT}\n`);

    try {
        // Fetch sitemap
        console.log('📄 Fetching sitemap...');
        const sitemapResponse = await fetchUrl(SITEMAP_URL);
        const urls = extractUrls(sitemapResponse.data);
        console.log(`📊 Found ${urls.length} URLs\n`);

        // Add SEO files
        const allUrls = [
            'https://masarmkt2030.online/',
            'https://masarmkt2030.online/robots.txt',
            'https://masarmkt2030.online/sitemap-index.xml',
            'https://masarmkt2030.online/llms.txt',
            'https://masarmkt2030.online/llms-ar.txt',
            ...urls
        ];

        console.log(`🌐 Checking ${allUrls.length} URLs...\n`);

        // Check all URLs
        await checkBatch(allUrls, 15);

        // Final summary
        console.log('\n\n==============================');
        console.log('📊 FULL CRAWL SUMMARY');
        console.log('==============================');
        console.log(`Total URLs Checked: ${okCount + errorCount}`);
        console.log(`✅ OK (2xx/3xx): ${okCount}`);
        console.log(`❌ Errors: ${errorCount}`);
        console.log(`Success Rate: ${((okCount / (okCount + errorCount)) * 100).toFixed(2)}%`);

        if (errors.length > 0) {
            console.log('\n❌ FAILED URLs:');
            errors.forEach(e => console.log(`   ${e.status} - ${e.url}`));
        } else {
            console.log('\n🎉 All URLs are working!');
        }

    } catch (err) {
        console.error('Error:', err.message);
    }
}

main();
