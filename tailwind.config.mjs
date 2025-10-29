import type { Config } from 'tailwindcss'

export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  corePlugins: {
    preflight: false, // Disable Tailwind's base styles to preserve Webflow styles
  },
  theme: {
    extend: {
      colors: {
        'dark-grey': '#656565',
        'black': '#1e1e1e',
        'gold': '#b08b5d',
        'med-grey': '#b0afb0',
        'light-grey': '#f3f3f3',
      },
      fontFamily: {
        'sofia': ['sofia-pro', 'sans-serif'],
      },
      maxWidth: {
        'container': '940px',
        'container-md': '728px',
      }
    },
  },
  plugins: [],
} satisfies Config
