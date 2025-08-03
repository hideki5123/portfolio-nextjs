<img src="/public/cover.jpg" alt="Cover image representing Nim, a personal website template" width="100%" />

Nim is a free and open-source personal website template built with Next.js 15, React 19, Tailwind CSS v4, and Motion. Designed for developers, designers, and founders, it combines minimalism with delightful animated components powered by [Motion-Primitives](https://motion-primitives.com).

Live demo: [https://nim-fawn.vercel.app](https://nim-fawn.vercel.app)

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

For detailed setup instructions, refer to the [Installation Guide](./INSTALLATION.md).

### Quick Start

```bash
git clone https://github.com/ibelick/nim.git
cd nim
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

Contributions are welcome! Feel free to open issues or submit pull requests to improve Nim.

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

### Vercel

For the easiest deployment experience, you can also use Vercel:

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Fibelick%2Fnim&env=NEXT_PUBLIC_SITE_URL&project-name=nim&repository-name=nim&redirect-url=https%3A%2F%2Ftwitter.com%2Fibelick&demo-title=Nim&demo-description=Nim%20is%20a%20free%20and%20open-source%20minimal%20personal%20website%20template%20built%20with%20Next.js%2015%2C%20React%2019%2C%20and%20Motion-Primitives.&demo-url=https%3A%2F%2Fnim.vercel.app&demo-image=https%3A%2F%2Fraw.githubusercontent.com%2Fibelick%2Fnim%2Frefs%2Fheads%2Fmain%2F.github%2Fassets%2Freadme.png&teamSlug=ibelick)

## About

Nim is designed to make personal branding effortless and beautiful. If you enjoy it, consider sharing it and exploring [Motion-Primitives Pro](https://pro.motion-primitives.com/).
