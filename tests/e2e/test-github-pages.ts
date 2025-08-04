import { chromium, Browser, Page } from '@playwright/test';

interface TestResult {
  status: 'success' | 'error';
  statusCode?: number;
  title?: string;
  hasMainContent?: boolean;
  hasStyles?: boolean;
  hasScripts?: boolean;
  blogLinksCount?: number;
  blogNavigationWorks?: boolean;
  errorMessage?: string;
}

async function testGitHubPages(): Promise<TestResult> {
  let browser: Browser | null = null;
  let page: Page | null = null;
  const result: TestResult = { status: 'error' };

  try {
    browser = await chromium.launch({ headless: true });
    page = await browser.newPage();

    const url = 'https://hideki5123.github.io/portfolio-nextjs/';
    console.log(`Testing URL: ${url}`);

    // Navigate to the page
    const response = await page.goto(url, {
      waitUntil: 'networkidle',
      timeout: 30000
    });

    if (!response) {
      throw new Error('Failed to get response from page');
    }

    result.statusCode = response.status();
    console.log(`Response status: ${result.statusCode}`);

    if (response.status() === 404) {
      result.errorMessage = 'Page returned 404 - Site not deployed yet or incorrect URL';
      console.error(`ERROR: ${result.errorMessage}`);
    } else if (response.status() === 200) {
      result.status = 'success';
      console.log('SUCCESS: Page loaded successfully!');

      // Check for page title
      result.title = await page.title();
      console.log(`Page title: ${result.title}`);

      // Check for main content
      result.hasMainContent = await page.locator('main').count() > 0;
      console.log(`Main content found: ${result.hasMainContent}`);

      // Check for CSS loading
      result.hasStyles = await page.evaluate(() => {
        const links = document.querySelectorAll<HTMLLinkElement>('link[rel="stylesheet"]');
        return links.length > 0;
      });
      console.log(`Stylesheets loaded: ${result.hasStyles}`);

      // Check for JavaScript loading
      result.hasScripts = await page.evaluate(() => {
        const scripts = document.querySelectorAll<HTMLScriptElement>('script[src]');
        return scripts.length > 0;
      });
      console.log(`Scripts loaded: ${result.hasScripts}`);

      // Check for navigation links
      result.blogLinksCount = await page.locator('a[href*="/blog/"]').count();
      console.log(`Blog links found: ${result.blogLinksCount}`);

      // Test a blog link
      if (result.blogLinksCount > 0) {
        const firstBlogLink = await page.locator('a[href*="/blog/"]').first();
        const blogHref = await firstBlogLink.getAttribute('href');
        console.log(`First blog link: ${blogHref}`);

        // Click and navigate to blog post
        await firstBlogLink.click();
        await page.waitForLoadState('networkidle');

        const blogUrl = page.url();
        console.log(`Navigated to: ${blogUrl}`);

        result.blogNavigationWorks = blogUrl.includes('/blog/');
        if (result.blogNavigationWorks) {
          console.log('SUCCESS: Blog navigation works!');
        } else {
          console.error('ERROR: Blog navigation failed');
        }
      }

      // Take a screenshot
      await page.screenshot({ 
        path: 'tests/e2e/screenshots/github-pages-test.png',
        fullPage: true
      });
      console.log('Screenshot saved as tests/e2e/screenshots/github-pages-test.png');

    } else {
      result.errorMessage = `Unexpected status code: ${response.status()}`;
      console.error(result.errorMessage);
    }

  } catch (error) {
    result.errorMessage = error instanceof Error ? error.message : String(error);
    console.error('ERROR:', result.errorMessage);

    // Take error screenshot
    if (page) {
      await page.screenshot({ 
        path: 'tests/e2e/screenshots/github-pages-error.png' 
      });
      console.log('Error screenshot saved as tests/e2e/screenshots/github-pages-error.png');
    }
  } finally {
    if (browser) {
      await browser.close();
    }
  }

  return result;
}

// Run the test
if (require.main === module) {
  testGitHubPages()
    .then(result => {
      console.log('\n=== Test Summary ===');
      console.log(JSON.stringify(result, null, 2));
      process.exit(result.status === 'success' ? 0 : 1);
    })
    .catch(error => {
      console.error('Test failed:', error);
      process.exit(1);
    });
}