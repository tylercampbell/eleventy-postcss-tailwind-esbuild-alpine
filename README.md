# eleventy postcss tailwind esbuild alpine

A barebones starter for Eleventy + Tailwind + Alpine.

- Tailwind is processed as a postcss plugin. I'm using lightning-css (via postcss plugin) as a replacment for autoprefixer & cssnano.
- Esbuild handles the javascript. 
- HTML is minified in production using htmlmin

Working examples for both external and inline js & css:
- process external javascript files via esbuild (package.json)
- inline javascript files via esbuild (eleventy nunjucksAsyncFilter & template frontmatter)
- process external css files via postcss (package.json)
- inline css files via postcss (eleventy nunjucksAsyncFilter & template frontmatter)

---

## Disclaimer

**I am a noob.**