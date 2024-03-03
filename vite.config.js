import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
	resolve: {
		alias: {
			'@bootstrap': `${__dirname}/node_modules/bootstrap`,
		},
	},
  server: {
    host: '0.0.0.0',
  }
})
