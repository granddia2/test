# Classroom Unblocked

A high-performance portal for unblocked educational games and tools.

## Setup

1. Install dependencies:
   ```bash
   npm install
   ```
2. Start development server:
   ```bash
   npm run dev
   ```

## GitHub Pages Deployment

If you are seeing a blank page on GitHub, follow these steps:

1. **Build the project**:
   ```bash
   npm run build
   ```
2. **Deploy the `dist` folder**: Use a tool like `gh-pages` or configure GitHub Actions to deploy the content of the `dist` folder.
3. **Base Path**: If your repository name is not exactly the domain root (e.g., `username.github.io/repo/`), make sure to update the `base` in `vite.config.ts`:
   ```ts
   // vite.config.ts
   export default defineConfig({
     base: '/your-repo-name/',
     // ...
   });
   ```
   *Note: I have currently set it to `./` which works for most relative paths.*

## Technical Info

- Framework: React 18+ with Vite
- Styling: Tailwind CSS
- Server: Express for SPA routing and asset serving
