import { lazy } from 'react';

const router = {
  root: {
    path: '/',
    title: '/',
    component: lazy(() => import('@/components/app')),
  },
  notFound: {
    path: '*',
    title: '404',
    component: lazy(() => import('@/components/not-found')),
  },
  serverError: {
    path: '/server-error',
    title: '服务器错误',
    component: lazy(() => import('@/components/server-error')),
  },
};

export default router;
