import { resolve } from 'path';
import { defineConfig } from 'vite';
import RubyPlugin from 'vite-plugin-ruby';

export default defineConfig({
  resolve: {
    alias: {
      '@assets': resolve(__dirname, 'app/assets'),
      '@styles': resolve(__dirname, 'app/assets/stylesheets'),
    },
  },
  plugins: process.env.NODE_ENV === 'test' ? [] : [RubyPlugin()],
});
