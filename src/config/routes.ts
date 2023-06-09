import { lazy } from 'react';

const router = {
  root: {
    path: '/',
    title: 'Layout',
    component: lazy(() => import('@/layouts')),
  },

  serverError: {
    path: '/500',
    title: '服务器错误',
    component: lazy(() => import('@/components/ServerError')),
  },
  notFound: {
    path: '*',
    title: '404',
    component: lazy(() => import('@/components/NotFound')),
  },
};

export default router;
