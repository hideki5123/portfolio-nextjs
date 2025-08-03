const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  // Test local server without basePath
  const localUrl = 'http://localhost:8080';
  console.log(`\n=== Testing local server at ${localUrl} ===`);
  
  try {
    const response = await page.goto(localUrl, { 
      waitUntil: 'networkidle',
      timeout: 10000 
    });
    
    console.log(`Response status: ${response.status()}`);
    
    if (response.status() === 200) {
      console.log('✓ Page loaded successfully');
      
      // Check page title
      const title = await page.title();
      console.log(`✓ Page title: ${title}`);
      
      // Check for broken assets
      const brokenAssets = await page.evaluate(() => {
        const results = {
          css: [],
          js: [],
          images: []
        };
        
        // Check CSS
        document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
          const href = link.getAttribute('href');
          if (href && !link.sheet) {
            results.css.push(href);
          }
        });
        
        // Check scripts
        document.querySelectorAll('script[src]').forEach(script => {
          const src = script.getAttribute('src');
          if (src) {
            results.js.push(src);
          }
        });
        
        // Check images
        document.querySelectorAll('img').forEach(img => {
          if (!img.complete || img.naturalHeight === 0) {
            results.images.push(img.src);
          }
        });
        
        return results;
      });
      
      console.log('\n--- Asset Loading Status ---');
      console.log(`CSS files: ${brokenAssets.css.length === 0 ? '✓ All loaded' : '✗ Some failed: ' + brokenAssets.css.join(', ')}`);
      console.log(`JS files found: ${brokenAssets.js.length}`);
      
      // Check if assets have correct basePath
      const assetPaths = await page.evaluate(() => {
        const paths = {
          css: [],
          js: []
        };
        
        document.querySelectorAll('link[rel="stylesheet"]').forEach(link => {
          paths.css.push(link.getAttribute('href'));
        });
        
        document.querySelectorAll('script[src]').forEach(script => {
          paths.js.push(script.getAttribute('src'));
        });
        
        return paths;
      });
      
      console.log('\n--- Asset Paths ---');
      console.log('CSS paths:', assetPaths.css.slice(0, 2));
      console.log('JS paths:', assetPaths.js.slice(0, 2));
      
      // Check if paths contain basePath
      const hasBasePath = assetPaths.css.some(path => path.includes('/portfolio-nextjs/')) || 
                         assetPaths.js.some(path => path.includes('/portfolio-nextjs/'));
      console.log(`\nAssets use basePath (/portfolio-nextjs/): ${hasBasePath ? '✓ Yes' : '✗ No'}`);
      
      // Test navigation with basePath simulation
      console.log('\n--- Testing Navigation ---');
      const blogLinks = await page.locator('a[href*="/blog/"]').all();
      console.log(`Found ${blogLinks.length} blog links`);
      
      if (blogLinks.length > 0) {
        const firstLink = blogLinks[0];
        const href = await firstLink.getAttribute('href');
        console.log(`First blog link href: ${href}`);
        
        // Check if href includes basePath
        if (href.includes('/portfolio-nextjs/')) {
          console.log('✓ Blog links include basePath');
        } else {
          console.log('✗ Blog links missing basePath');
        }
      }
      
      // Take screenshot
      await page.screenshot({ path: 'local-test.png', fullPage: true });
      console.log('\n✓ Screenshot saved as local-test.png');
      
      // Test accessing with basePath
      console.log('\n=== Testing with basePath simulation ===');
      const basePathUrl = `${localUrl}/portfolio-nextjs/`;
      const basePathResponse = await page.goto(basePathUrl, { 
        waitUntil: 'networkidle',
        timeout: 10000 
      });
      
      console.log(`Accessing ${basePathUrl}: Status ${basePathResponse.status()}`);
      
      // Check if index.html exists in the expected location
      const indexResponse = await page.goto(`${localUrl}/portfolio-nextjs/index.html`, { 
        waitUntil: 'networkidle',
        timeout: 10000 
      });
      console.log(`Direct index.html access: Status ${indexResponse.status()}`);
      
    } else {
      console.error(`✗ Unexpected status code: ${response.status()}`);
    }
    
  } catch (error) {
    console.error('✗ ERROR:', error.message);
  }
  
  await browser.close();
})();