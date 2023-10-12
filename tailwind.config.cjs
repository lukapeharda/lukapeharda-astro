/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'e6n-red': '#fa3939',
				'e6n-blue': '#1eadff',
				'e6n-yellow': '#ffd633',
				'e6n-green': '#5f9f34',
				'e6n-black': '#1a1f36'
			  },
		},
	},
	plugins: [],
}
