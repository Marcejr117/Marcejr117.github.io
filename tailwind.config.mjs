/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {colors: {
        custom: {
          900: '#1b1b25', // rgb(27, 27, 37)
          800: '#2e2d3a', // rgb(46, 45, 58)
          700: '#494859', // rgb(73, 72, 89)
          600: '#626172', // rgb(98, 97, 114)
          400: '#cbcbcf', // rgb(203, 203, 207)
        },
      },
	},
	},
	plugins: [],
}
