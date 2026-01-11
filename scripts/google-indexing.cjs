#!/usr/bin/env node

/**
 * Google Indexing API - Submit all URLs for indexing
 * Uses 3 service accounts to bypass rate limits (200 URLs/day each = 600 total)
 */

const { google } = require('googleapis');
const https = require('https');
const fs = require('fs');
const path = require('path');

// Service account files
const SERVICE_ACCOUNTS = [
    './hasan-ai-zein-3a0405a80a16.json',
    './hmztechnology-delivery-47390fc95128.json',
    './index1-480721-a379e31b9a08.json',
];

const SITEMAP_URL = 'https://masarmkt2030.online/sitemap-0.xml';
const SCOPES = ['https://www.googleapis.com/auth/indexing'];

let successCount = 0;
let errorCount = 0;
let errors = [];

// Fetch sitemap and extract URLs
function fetchSitemap() {
    return new Promise((resolve, reject) => {
        https.get(SITEMAP_URL, (res) => {
            if (res.statusCode >= 300 && res.statusCode < 400 && res.headers.location) {
                https.get(res.headers.location, (res2) => {
                    let data = '';
                    res2.on('data', chunk => data += chunk);
                    res2.on('end', () => {
                        const urls = [];
                        const regex = /<loc>([^<]+)<\/loc>/g;
                        let match;
                        while ((match = regex.exec(data)) !== null) {
                            urls.push(match[1]);
                        }
                        resolve(urls);
                    });
                }).on('error', reject);
            } else {
                let data = '';
                res.on('data', chunk => data += chunk);
                res.on('end', () => {
                    const urls = [];
                    const regex = /<loc>([^<]+)<\/loc>/g;
                    let match;
                    while ((match = regex.exec(data)) !== null) {
                        urls.push(match[1]);
                    }
                    resolve(urls);
                });
            }
        }).on('error', reject);
    });
}

// Create authenticated client for a service account
async function createAuthClient(keyFilePath) {
    const keyFile = path.resolve(keyFilePath);
    const auth = new google.auth.GoogleAuth({
        keyFile: keyFile,
        scopes: SCOPES,
    });
    return auth.getClient();
}

// Submit a single URL for indexing
async function submitUrl(authClient, url) {
    const indexing = google.indexing({ version: 'v3', auth: authClient });

    try {
        const response = await indexing.urlNotifications.publish({
            requestBody: {
                url: url,
                type: 'URL_UPDATED',
            },
        });
        return { success: true, url, status: response.status };
    } catch (error) {
        return { success: false, url, error: error.message };
    }
}

// Delay function
function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function main() {
    console.log('🚀 Google Indexing API - Mass Submit');
    console.log('=====================================');
    console.log(`Service Accounts: ${SERVICE_ACCOUNTS.length}`);
    console.log(`Rate Limit: ~200 URLs/account/day = 600 total\n`);

    // Verify service account files exist
    for (const file of SERVICE_ACCOUNTS) {
        if (!fs.existsSync(file)) {
            console.error(`❌ Service account file not found: ${file}`);
            process.exit(1);
        }
    }
    console.log('✅ All service account files found\n');

    // Fetch sitemap URLs
    console.log('📄 Fetching sitemap...');
    let urls = await fetchSitemap();

    // Add important SEO files
    const seoUrls = [
        'https://masarmkt2030.online/',
        'https://masarmkt2030.online/services/',
        'https://masarmkt2030.online/solutions/',
        'https://masarmkt2030.online/contact/',
        'https://masarmkt2030.online/pricing/',
    ];
    urls = [...seoUrls, ...urls];

    console.log(`📊 Total URLs to submit: ${urls.length}\n`);

    // Create auth clients for all service accounts
    console.log('🔐 Authenticating service accounts...');
    const authClients = [];
    for (let i = 0; i < SERVICE_ACCOUNTS.length; i++) {
        try {
            const client = await createAuthClient(SERVICE_ACCOUNTS[i]);
            authClients.push(client);
            console.log(`  ✅ Account ${i + 1} authenticated`);
        } catch (err) {
            console.log(`  ❌ Account ${i + 1} failed: ${err.message}`);
        }
    }

    if (authClients.length === 0) {
        console.error('❌ No valid service accounts available');
        process.exit(1);
    }
    console.log('');

    // Submit URLs using round-robin across service accounts
    console.log('📤 Submitting URLs to Google Indexing API...\n');

    const maxUrlsPerAccount = 200;
    const totalLimit = authClients.length * maxUrlsPerAccount;
    const urlsToSubmit = urls.slice(0, totalLimit);

    console.log(`⚡ Submitting ${urlsToSubmit.length} URLs (limit: ${totalLimit})\n`);

    for (let i = 0; i < urlsToSubmit.length; i++) {
        const url = urlsToSubmit[i];
        const accountIndex = i % authClients.length;
        const authClient = authClients[accountIndex];

        const result = await submitUrl(authClient, url);

        if (result.success) {
            successCount++;
            const shortUrl = url.replace('https://masarmkt2030.online', '');
            process.stdout.write(`\r✅ ${successCount}/${urlsToSubmit.length} - ${shortUrl.substring(0, 50)}...`);
        } else {
            errorCount++;
            errors.push(result);
            process.stdout.write(`\r❌ Error: ${result.error.substring(0, 50)}`);
        }

        // Rate limiting: 1 request per 100ms = 10 requests/second
        await delay(100);
    }

    // Summary
    console.log('\n\n=====================================');
    console.log('📊 INDEXING SUMMARY');
    console.log('=====================================');
    console.log(`Total URLs Submitted: ${successCount + errorCount}`);
    console.log(`✅ Successful: ${successCount}`);
    console.log(`❌ Failed: ${errorCount}`);
    console.log(`Success Rate: ${((successCount / (successCount + errorCount)) * 100).toFixed(1)}%`);

    if (errors.length > 0 && errors.length <= 10) {
        console.log('\n❌ Errors:');
        errors.forEach(e => console.log(`   ${e.url}: ${e.error}`));
    } else if (errors.length > 10) {
        console.log(`\n❌ ${errors.length} errors (showing first 10):`);
        errors.slice(0, 10).forEach(e => console.log(`   ${e.url}: ${e.error}`));
    }

    if (urls.length > totalLimit) {
        console.log(`\n⚠️  ${urls.length - totalLimit} URLs remaining - run again tomorrow`);
    }

    console.log('\n🎉 Done! URLs will be indexed within 24-48 hours.');
}

main().catch(console.error);
