import { defineConfig } from 'vite';
import RubyPlugin from 'vite-plugin-ruby';

export default defineConfig({
  plugins: process.env.NODE_ENV === 'test' ? [] : [RubyPlugin()],
});
