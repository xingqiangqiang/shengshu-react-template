import store from '@/config/store';
import { ConfigProvider, Spin } from 'antd';
import zhCN from 'antd/lib/locale/zh_CN';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'virtual:svg-icons-register';
import App from './App';
import './index.scss';

dayjs.locale('zh-cn');

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.Suspense
    fallback={
      <Spin tip="页面加载中...">
        <span />
      </Spin>
    }>
    <Provider store={store}>
      <BrowserRouter basename={import.meta.env.BASE_URL}>
        <ConfigProvider locale={zhCN}>
          <App />
        </ConfigProvider>
      </BrowserRouter>
    </Provider>
  </React.Suspense>,
);
