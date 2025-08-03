const { chromium } = require('@playwright/test');

(async () => {
  const browser = await chromium.launch({ headless: true });
  const page = await browser.newPage();
  
  const url = 'https://hideki5123.github.io/portfolio-nextjs/';
  console.log(`Testing URL: ${url}`);
  
  try {
    // Navigate to the page
    const response = await page.goto(url, { 
      waitUntil: 'networkidle',
      timeout: 30000 
    });
    
    console.log(`Response status: ${response.status()}`);
    
    if (response.status() === 404) {
      console.error('ERROR: Page returned 404 - Site not deployed yet or incorrect URL');
    } else if (response.status() === 200) {
      console.log('SUCCESS: Page loaded successfully!');
      
      // Check for page title
      const title = await page.title();
      console.log(`Page title: ${title}`);
      
      // Check for main content
      const hasMainContent = await page.locator('main').count() > 0;
      console.log(`Main content found: ${hasMainContent}`);
      
      // Check for CSS loading
      const hasStyles = await page.evaluate(() => {
        const links = document.querySelectorAll('link[rel="stylesheet"]');
        return links.length > 0;
      });
      console.log(`Stylesheets loaded: ${hasStyles}`);
      
      // Check for JavaScript loading
      const hasScripts = await page.evaluate(() => {
        const scripts = document.querySelectorAll('script[src]');
        return scripts.length > 0;
      });
      console.log(`Scripts loaded: ${hasScripts}`);
      
      // Check for navigation links
      const blogLinks = await page.locator('a[href*="/blog/"]').count();
      console.log(`Blog links found: ${blogLinks}`);
      
      // Test a blog link
      if (blogLinks > 0) {
        const firstBlogLink = await page.locator('a[href*="/blog/"]').first();
        const blogHref = await firstBlogLink.getAttribute('href');
        console.log(`First blog link: ${blogHref}`);
        
        // Click and navigate to blog post
        await firstBlogLink.click();
        await page.waitForLoadState('networkidle');
        
        const blogUrl = page.url();
        console.log(`Navigated to: ${blogUrl}`);
        
        if (blogUrl.includes('/blog/')) {
          console.log('SUCCESS: Blog navigation works!');
        } else {
          console.error('ERROR: Blog navigation failed');
        }
      }
      
      // Take a screenshot
      await page.screenshot({ path: 'github-pages-test.png' });
      console.log('Screenshot saved as github-pages-test.png');
      
    } else {
      console.error(`Unexpected status code: ${response.status()}`);
    }
    
  } catch (error) {
    console.error('ERROR:', error.message);
    
    // Take error screenshot
    await page.screenshot({ path: 'github-pages-error.png' });
    console.log('Error screenshot saved as github-pages-error.png');
  }
  
  await browser.close();
})();