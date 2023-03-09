import { defineConfig } from 'vite-plugin-windicss'
// import scrollSnapPlugin from 'windicss/plugin/scroll-snap'
import aspectRatio from 'windicss/plugin/aspect-ratio'

export default defineConfig({
  plugins: [
    aspectRatio,
  ],
  theme: {
    extend: {
      animation: {
        wiggle: 'wiggle .8s ease-in-out infinite',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-10deg)' },
          '50%': { transform: 'rotate(10deg)' },
        },
      },
    },
  },
})
