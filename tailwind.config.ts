import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    colors: {
      yellow: '#FFCB74',
      gray: {
        400: '3f3f3f',
        500: '#2f2f2f',
        700: '#1f1f1f',
      },
      white: {
        500: '#f2f2f2',
        700: '#f0f0f0',
      },
    },
  },
  plugins: [],
}
export default config
