import defaultTheme from 'tailwindcss/defaultTheme'

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		screens: {
			sm: "480px",
			smd: "640px",
			md: "768px",
			slg: "996px",
			lg: "1260px",
			xl: "1480px"
		},
		extend: {
			fontFamily: {
				// norwester : "norwester, sans-serif"
				// rubik: ['"monofett"', defaultTheme.fontFamily.mono]
				poppins: ['"poppins"', defaultTheme.fontFamily.sans]
			},
			colors: {
				siteYellow: '#F0B71C'
			},
			transformOrigin: {
        'right': 'right',
        // You can add more custom transform origins if needed
      },
		},
	},
	corePlugins: {
    aspectRatio: false,
  },
	plugins: [
		require('@tailwindcss/forms')
	],
}
