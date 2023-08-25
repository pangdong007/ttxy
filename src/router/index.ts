import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  { path: '/', redirect: '/home' },
  { path: '/home', component: () => import('@/views/home.vue') }
];

// 创建路由
const router = createRouter({
  history: createWebHistory(import.meta.env.VITE_APP_BASE_ROUTE),
  routes
});

// 导出路由
export default router;
