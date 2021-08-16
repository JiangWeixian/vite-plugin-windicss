import { defineConfig } from 'vite'
import reactRefresh from '@vitejs/plugin-react-refresh'
import WindiCSS from '@jiangweixian1994/vite-plugin-windicss'

export default defineConfig({
  plugins: [
    reactRefresh(),
    WindiCSS({
      transformStyledComponents: true
    }),
  ],
  build: {
    sourcemap: true,
  },
})
