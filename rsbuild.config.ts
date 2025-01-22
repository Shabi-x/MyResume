import { defineConfig } from '@rsbuild/core';
import { pluginReact } from '@rsbuild/plugin-react';
import { pluginSass } from '@rsbuild/plugin-sass';

export default defineConfig({
  plugins: [
    pluginReact(),
    pluginSass()
  ],
  html: {
    template: './public/index.html',
    title: '26届前端实习简历'
  },
  output: {
    distPath: {
      root: 'dist',
      html: '.',
      js: 'static/js',
      css: 'static/css',
    },
    filename: {
      js: '[name].[contenthash:8].js',
      css: '[name].[contenthash:8].css'
    }
  },
  server: {
    port: 3000
  },
  source: {
    entry: {
      index: './src/index.tsx'
    }
  }
});