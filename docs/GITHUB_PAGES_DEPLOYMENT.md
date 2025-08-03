# GitHub Pages Deployment Guide

This guide explains how to deploy your Nim portfolio to GitHub Pages.

## Prerequisites

- A GitHub account
- Git installed on your local machine
- Node.js and npm installed

## Setup Instructions

### 1. Configure Next.js for GitHub Pages

The project is already configured for GitHub Pages deployment. The key configurations in `next.config.mjs` are:

```js
const nextConfig = {
  // Static export
  output: 'export',
  
  // GitHub Pages base path
  basePath: '/portfolio-nextjs',
  assetPrefix: '/portfolio-nextjs',
  
  // Enable trailing slashes for proper routing
  trailingSlash: true,
};
```

**Important**: Replace `/portfolio-nextjs` with your repository name.

### 2. Update Metadata Base URL

In `app/layout.tsx`, update the `metadataBase`:

```tsx
export const metadata: Metadata = {
  metadataBase: new URL('https://[your-username].github.io/[your-repo-name]/'),
  // ... other metadata
};
```

### 3. Deploy to GitHub Pages

```bash
# Build the static site
npm run build

# Deploy to gh-pages branch
npm run deploy
```

### 4. Configure GitHub Pages

1. Go to your repository on GitHub
2. Navigate to **Settings** → **Pages**
3. Under **Source**, select **Deploy from a branch**
4. Choose `gh-pages` branch and `/ (root)` folder
5. Click **Save**

### 5. Access Your Site

Your site will be available at:
```
https://[your-username].github.io/[your-repo-name]/
```

It may take a few minutes for the site to become available after the first deployment.

## Local Testing

Before deploying, you can test the static build locally:

```bash
# Build the site
npm run build

# Serve locally
npm start
```

Then open http://localhost:3000 in your browser.

## Automated Testing

The project includes E2E tests to verify deployment:

```bash
# Test local build
npm run test:local

# Test GitHub Pages deployment
npm run test:github-pages
```

## Troubleshooting

### 404 Errors on Assets

If you see 404 errors for CSS/JS files:
- Ensure `basePath` and `assetPrefix` match your repository name
- Check that `.nojekyll` file is created (handled automatically by deploy script)

### Page Not Found

If the entire site shows 404:
- Verify GitHub Pages is enabled in repository settings
- Wait a few minutes for GitHub Pages to build
- Check that the `gh-pages` branch exists

### Navigation Issues

For single-page app navigation issues:
- The site uses static export, so client-side routing requires `trailingSlash: true`
- Each route is exported as a separate HTML file

## Continuous Deployment

You can set up GitHub Actions for automatic deployment on push to main branch. Create `.github/workflows/deploy.yml`:

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v3
      - uses: actions/setup-node@v3
        with:
          node-version: '18'
      
      - name: Install dependencies
        run: npm ci
      
      - name: Build and deploy
        run: |
          git config --global user.name 'GitHub Actions'
          git config --global user.email 'actions@github.com'
          npm run deploy
```

## Additional Resources

- [Next.js Static Exports Documentation](https://nextjs.org/docs/app/building-your-application/deploying/static-exports)
- [GitHub Pages Documentation](https://docs.github.com/en/pages)