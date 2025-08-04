import { chromium, Browser, Page } from '@playwright/test';

interface AssetCheckResult {
  css: string[];
  js: string[];
  images: string[];
}

interface AssetPaths {
  css: string[];
  js: string[];
}

async function testLocalDeployment(): Promise<void> {
  let browser: Browser | null = null;
  let page: Page | null = null;

  try {
    browser = await chromium.launch({ headless: true });
    page = await browser.newPage();

    // Test local server without basePath
    const localUrl = 'http://localhost:8080';
    console.log(`\n=== Testing local server at ${localUrl} ===`);

    const response = await page.goto(localUrl, {
      waitUntil: 'networkidle',
      timeout: 10000
    });

    if (!response) {
      throw new Error('Failed to load page');
    }

    console.log(`Response status: ${response.status()}`);

    if (response.status() === 200) {
      console.log('✓ Page loaded successfully');

      // Check page title
      const title = await page.title();
      console.log(`✓ Page title: ${title}`);

      // Check for broken assets
      const brokenAssets = await page.evaluate((): AssetCheckResult => {
        const results: AssetCheckResult = {
          css: [],
          js: [],
          images: []
        };

        // Check CSS
        document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]').forEach(link => {
          const href = link.getAttribute('href');
          if (href && !link.sheet) {
            results.css.push(href);
          }
        });

        // Check scripts
        document.querySelectorAll<HTMLScriptElement>('script[src]').forEach(script => {
          const src = script.getAttribute('src');
          if (src) {
            results.js.push(src);
          }
        });

        // Check images
        document.querySelectorAll<HTMLImageElement>('img').forEach(img => {
          if (!img.complete || img.naturalHeight === 0) {
            results.images.push(img.src);
          }
        });

        return results;
      });

      console.log('\n--- Asset Loading Status ---');
      console.log(`CSS files: ${brokenAssets.css.length === 0 ? '✓ All loaded' : '✗ Some failed: ' + brokenAssets.css.join(', ')}`);
      console.log(`JS files found: ${brokenAssets.js.length}`);
      console.log(`Broken images: ${brokenAssets.images.length === 0 ? '✓ None' : '✗ ' + brokenAssets.images.length}`);

      // Check if assets have correct basePath
      const assetPaths = await page.evaluate((): AssetPaths => {
        const paths: AssetPaths = {
          css: [],
          js: []
        };

        document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]').forEach(link => {
          const href = link.getAttribute('href');
          if (href) {
            paths.css.push(href);
          }
        });

        document.querySelectorAll<HTMLScriptElement>('script[src]').forEach(script => {
          const src = script.getAttribute('src');
          if (src) {
            paths.js.push(src);
          }
        });

        return paths;
      });

      console.log('\n--- Asset Paths ---');
      console.log('CSS paths:', assetPaths.css.slice(0, 2));
      console.log('JS paths:', assetPaths.js.slice(0, 2));

      // Check if paths contain basePath
      const hasBasePath = assetPaths.css.some(path => path.includes(BASE_PATH)) ||
                         assetPaths.js.some(path => path.includes(BASE_PATH));
      console.log(`\nAssets use basePath (${BASE_PATH}): ${hasBasePath ? '✓ Yes' : '✗ No'}`);

      // Test navigation with basePath simulation
      console.log('\n--- Testing Navigation ---');
      const blogLinks = await page.locator('a[href*="/blog/"]').all();
      console.log(`Found ${blogLinks.length} blog links`);

      if (blogLinks.length > 0) {
        const firstLink = blogLinks[0];
        const href = await firstLink.getAttribute('href');
        console.log(`First blog link href: ${href}`);

        // Check if href includes basePath
        if (href?.includes(BASE_PATH)) {
          console.log('✓ Blog links include basePath');
        } else {
          console.log('✗ Blog links missing basePath');
        }
      }

      // Take screenshot
      await page.screenshot({ 
        path: 'tests/e2e/screenshots/local-test.png', 
        fullPage: true 
      });
      console.log('\n✓ Screenshot saved as tests/e2e/screenshots/local-test.png');

      // Test directory structure
      console.log('\n--- Directory Structure Test ---');
      const directoryTests = [
        '/portfolio-nextjs/',
        '/portfolio-nextjs/index.html',
        '/_next/',
        '/blog/'
      ];

      for (const path of directoryTests) {
        try {
          const testResponse = await page.goto(`${localUrl}${path}`, {
            waitUntil: 'domcontentloaded',
            timeout: 5000
          });
          console.log(`${path}: ${testResponse?.status() === 200 ? '✓' : '✗'} (${testResponse?.status()})`);
        } catch (error) {
          console.log(`${path}: ✗ (Error)`);
        }
      }

    } else {
      console.error(`✗ Unexpected status code: ${response.status()}`);
    }

  } catch (error) {
    console.error('✗ ERROR:', error instanceof Error ? error.message : error);
    if (page) {
      await page.screenshot({ 
        path: 'tests/e2e/screenshots/local-error.png' 
      });
      console.log('Error screenshot saved');
    }
  } finally {
    if (browser) {
      await browser.close();
    }
  }
}

// Run the test
if (require.main === module) {
  testLocalDeployment().catch(console.error);
}