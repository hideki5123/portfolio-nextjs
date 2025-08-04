# E2E Tests

This directory contains end-to-end tests for the portfolio website deployment.

## Test Files

- `test-local-deployment.ts` - Tests the local static build served via HTTP server
- `test-github-pages.ts` - Tests the deployed GitHub Pages site

## Running Tests

### Test Local Deployment
```bash
# Build the project first
npm run build

# Start a local server (in a separate terminal)
npx http-server out -p 8080

# Run the local test
npx ts-node tests/e2e/test-local-deployment.ts
```

### Test GitHub Pages Deployment
```bash
# Deploy to GitHub Pages first
npm run deploy

# Wait a few minutes for GitHub Pages to update, then run
npx ts-node tests/e2e/test-github-pages.ts
```

## Screenshots

Test screenshots are saved in the `screenshots/` directory:
- `local-test.png` - Successful local deployment
- `local-error.png` - Local deployment errors
- `github-pages-test.png` - Successful GitHub Pages deployment
- `github-pages-error.png` - GitHub Pages deployment errors