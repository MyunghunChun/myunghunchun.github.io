# Redirect to yaerhee.github.io/portfolio

This repository is set up to redirect the root of your GitHub Pages site to:

- https://yaerhee.github.io/portfolio/

Files included:
- `index.html` — redirects visitors immediately to the target URL.
- `404.html` — fallback so unknown paths also redirect.

How to install (safe steps):

1. Clone your repository locally:
   ```
   git clone https://github.com/MyunghunChun/MyunghoonChun.github.io.git
   cd MyunghoonChun.github.io
   ```

2. Copy the provided `index.html` and `404.html` files into the repository root (overwrite if present).

3. Commit and push:
   ```
   git add index.html 404.html
   git commit -m "Redirect site to yaerhee.github.io/portfolio"
   git push origin main
   ```
   Replace `main` with the default branch name if it differs (e.g., `master`).

Alternative: Use the GitHub web UI to create or upload these files to the repository root.

Notes:
- After pushing, GitHub Pages will serve the redirect from `https://myunghunchun.github.io/` (may take a minute to update).
- If you prefer a visible link instead of an automatic redirect, change or remove the meta-refresh and JS sections in `index.html`.
- If you want to keep some pages on your site rather than redirecting everything, tell me which pages should remain and I can provide a different setup.