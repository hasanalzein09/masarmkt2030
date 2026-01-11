#!/usr/bin/env node

/**
 * Website Crawler - Simulating Googlebot
 * Checks all URLs from sitemap and reports status
 */

const https = require('https');

const SITEMAP_URL = 'https://masarmkt2030.online/sitemap-0.xml';
const USER_AGENT = 'Googlebot/2.1 (+http://www.google.com/bot.html)';

let okCount = 0;
let errorCount = 0;
let results = [];

// Follow redirects and get final response
function fetchUrl(url, redirects = 0) {
    return new Promise((resolve, reject) => {
        if (redirects > 5) {
            reject(new Error('Too many redirects'));
            return;
        }

        const options = {
            headers: { 'User-Agent': USER_AGENT },
            timeout: 15000,
        };

        https.get(url, options, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                // Follow redirect
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

// Parse URLs from sitemap XML
function extractUrls(xml) {
    const urls = [];
    const regex = /<loc>([^<]+)<\/loc>/g;
    let match;
    while ((match = regex.exec(xml)) !== null) {
        urls.push(match[1]);
    }
    return urls;
}

// Check single URL status
function checkUrl(url) {
    return new Promise((resolve) => {
        const req = https.get(url, {
            headers: { 'User-Agent': USER_AGENT },
            timeout: 10000,
        }, (res) => {
            // Follow redirects
            if (res.statusCode >= 300 && res.statusCode < 400) {
                okCount++;
                resolve({ url, status: res.statusCode, ok: true });
            } else if (res.statusCode >= 200 && res.statusCode < 300) {
                okCount++;
                resolve({ url, status: res.statusCode, ok: true });
            } else {
                errorCount++;
                resolve({ url, status: res.statusCode, ok: false });
            }
            res.resume(); // Consume response data to free up memory
        });

        req.on('error', (err) => {
            errorCount++;
            resolve({ url, status: 'ERR', error: err.message, ok: false });
        });

        req.on('timeout', () => {
            req.destroy();
            errorCount++;
            resolve({ url, status: 'TIMEOUT', ok: false });
        });
    });
}

async function main() {
    console.log('🔍 Google Crawler Simulation');
    console.log('============================');
    console.log(`User-Agent: ${USER_AGENT}\n`);

    // Fetch sitemap with redirect following
    console.log('📄 Fetching sitemap...');

    try {
        const sitemapResponse = await fetchUrl(SITEMAP_URL);
        const urls = extractUrls(sitemapResponse.data);

        console.log(`📊 Found ${urls.length} URLs in sitemap\n`);

        // Check important SEO files
        console.log('🔒 Checking SEO files...');
        const seoFiles = [
            'https://masarmkt2030.online/',
            'https://masarmkt2030.online/robots.txt',
            'https://masarmkt2030.online/sitemap-index.xml',
            'https://masarmkt2030.online/llms.txt',
            'https://masarmkt2030.online/llms-ar.txt',
        ];

        for (const url of seoFiles) {
            const result = await checkUrl(url);
            const icon = result.ok ? '✅' : '❌';
            const name = url.replace('https://masarmkt2030.online', '') || '/';
            console.log(`${icon} ${result.status} - ${name}`);
        }

        // Sample check pages from sitemap
        console.log('\n🌐 Checking sitemap URLs (sample)...');

        // Get a diverse sample of URLs
        const sampleUrls = [];
        const sections = ['/services/', '/solutions/', '/problems/', '/portfolio/', '/pricing/', '/statistics/'];

        for (const section of sections) {
            const sectionUrls = urls.filter(u => u.includes(section));
            if (sectionUrls.length > 0) {
                // Take first 3 from each section
                sampleUrls.push(...sectionUrls.slice(0, 3));
            }
        }

        // Also add some city-specific URLs
        const cityUrls = urls.filter(u => u.includes('/by-city/')).slice(0, 10);
        sampleUrls.push(...cityUrls);

        for (const url of sampleUrls) {
            const result = await checkUrl(url);
            results.push(result);
            const icon = result.ok ? '✅' : '❌';
            const shortUrl = url.replace('https://masarmkt2030.online', '');
            console.log(`${icon} ${result.status} - ${shortUrl}`);
        }

        // Summary
        console.log('\n============================');
        console.log('📊 CRAWL SUMMARY');
        console.log('============================');
        console.log(`Total Pages in Sitemap: ${urls.length}`);
        console.log(`Pages Checked: ${okCount + errorCount}`);
        console.log(`✅ OK (2xx/3xx): ${okCount}`);
        console.log(`❌ Errors: ${errorCount}`);
        console.log(`Success Rate: ${((okCount / (okCount + errorCount)) * 100).toFixed(1)}%`);

        // Error details
        const errors = results.filter(r => !r.ok);
        if (errors.length > 0) {
            console.log('\n❌ FAILED URLs:');
            errors.forEach(e => console.log(`   ${e.status} - ${e.url}`));
        } else {
            console.log('\n🎉 All checked URLs are working!');
        }

    } catch (err) {
        console.error('Error:', err.message);
    }
}

main();
