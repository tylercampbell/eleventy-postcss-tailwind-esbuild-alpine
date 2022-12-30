module.exports = {
  plugins: [
    require('tailwindcss'),
    require('postcss-lightningcss')({
			browsers: 'defaults',
			lightningcssOptions: {
				minify: (process.env.NODE_ENV === "production" ? true : false)
			},
		}),
  ]
}