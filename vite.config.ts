import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue()],
  server: {
    host: '0.0.0.0',
    port: 5174,
    open: true
  },
  resolve: {
    // 配置路径别名
    alias: {
      '@': resolve(__dirname, 'src'),
      events: 'node_modules/events/events.js'
    },
    // 省略文件后缀
    extensions: ['', '.js', '.ts', '.json', '.vue', '.scss', '.css']
  }
});
