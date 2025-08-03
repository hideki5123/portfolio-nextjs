
# Portfolio Next.js

A modern portfolio website built with Next.js 15, React 19, Tailwind CSS v4, and Motion. Features static export support for GitHub Pages deployment.

## Features

- Minimal one-page portfolio layout
- Blog support with MDX
- Responsive and accessible design
- Easy to use
- [Motion-Primitives](https://motion-primitives.com) for animated components
- Static export ready for GitHub Pages deployment
- TypeScript support
- E2E testing setup with Playwright

## Getting Started

### Quick Start

```bash
git clone https://github.com/hideki5123/portfolio-nextjs.git
cd portfolio-nextjs
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production-ready static site
- `npm start` - Serve the static build locally (http://localhost:3000)
- `npm run lint` - Run ESLint
- `npm run deploy` - Deploy to GitHub Pages
- `npm run test:local` - Test local static build
- `npm run test:github-pages` - Test GitHub Pages deployment

## Contributing

Contributions are welcome! Feel free to open issues or submit pull requests.

## Deployment

### GitHub Pages

This template is configured for easy deployment to GitHub Pages:

1. **Configure your repository name** in `next.config.mjs`:
   ```js
   basePath: '/your-repo-name',
   assetPrefix: '/your-repo-name',
   ```

2. **Build and deploy**:
   ```bash
   npm run build
   npm run deploy
   ```

3. **Enable GitHub Pages** in your repository settings:
   - Go to Settings → Pages
   - Source: Deploy from a branch
   - Branch: `gh-pages` / `root`

Your site will be available at `https://[username].github.io/[repo-name]/`

### Other Platforms

This template can also be deployed to other platforms that support Next.js static exports, such as:
- Vercel
- Netlify
- Cloudflare Pages
- AWS S3 + CloudFront

## Testing

The project includes E2E tests to verify deployments:

```bash
# Test local static build
npm run test:local

# Test GitHub Pages deployment
npm run test:github-pages
```

For more details, see the [E2E testing documentation](./tests/e2e/README.md).

## Documentation

- [GitHub Pages Deployment Guide](./docs/GITHUB_PAGES_DEPLOYMENT.md)
- [E2E Testing Guide](./tests/e2e/README.md)

## License

This project is open source and available under the MIT License.
