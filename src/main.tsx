import theme from '@/assats/style/theme';
import store from '@/store';
import { ConfigProvider } from 'antd';
import dayjs from 'dayjs';
import 'dayjs/locale/zh-cn';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';
import 'virtual:svg-icons-register';

import App from './App';
import './index.css';

dayjs.locale('zh-cn');

ReactDOM.createRoot(document.getElementById('root')!).render(
    <React.StrictMode>
        <React.Suspense fallback={<div style={{ color: 'rgb(0 0 0 / 50%)', textAlign: 'center' }}>页面加载中...</div>}>
            <Provider store={store}>
                <BrowserRouter basename={import.meta.env.BASE_URL}>
                    <ConfigProvider theme={theme}>
                        <App />
                    </ConfigProvider>
                </BrowserRouter>
            </Provider>
        </React.Suspense>
    </React.StrictMode>,
);
