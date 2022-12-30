# eleventy postcss tailwind esbuild alpine

A barebones starter for Eleventy + Tailwind (postcss) + Alpine (esbuild).

- Tailwind is processed as a postcss plugin. I'm using lightning-css (via postcss plugin) as a replacment for autoprefixer & cssnano.
- Esbuild handles the javascript. 
- HTML is minified in production using htmlmin

Working examples for both external and inline js & css:
- process external javascript files via esbuild (package.json)
- inline javascript files via esbuild (eleventy nunjucksAsyncFilter & template frontmatter)
- process external css files via postcss (package.json)
- inline css files via postcss (eleventy nunjucksAsyncFilter & template frontmatter)

ONE WEIRD TRICK: I'm outputting the compiled css & js files to a folder watched by 11ty and relying on 11ty's `addPassthroughCopy` to copy them to `_site`. In my experience, this results in a more reliable livereload.

---

## Disclaimer

**I am a noob.**