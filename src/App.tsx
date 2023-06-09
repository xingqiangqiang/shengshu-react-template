import router from '@/config/routes';
import { Spin } from 'antd';
import React from 'react';
import { RouteObject, useRoutes } from 'react-router-dom';

const { root, notFound, serverError } = router;

const Routers: React.FC = () => {
  const renderRouter = (routers: RouteObject[]): RouteObject[] => {
    return routers.map((item: RouteObject) => {
      if (item.children) {
        return {
          ...item,
          children: renderRouter(item.children),
        };
      }
      return {
        ...item,
        element: (
          <React.Suspense
            fallback={
              <Spin tip="页面加载中...">
                <span />
              </Spin>
            }>
            {item.element}
          </React.Suspense>
        ),
      };
    });
  };

  return useRoutes(
    renderRouter([
      {
        path: root.path,
        element: <root.component />,
        children: [
          {
            path: root.path,
            // element: <Navigate to={} />,
          },
        ],
      },

      {
        path: serverError.path,
        element: <serverError.component />,
      },
      {
        path: notFound.path,
        element: <notFound.component />,
      },
    ]),
  );
};

export default Routers;
