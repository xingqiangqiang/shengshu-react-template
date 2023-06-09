import { message } from 'antd';
import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from 'axios';
import Cookies from 'js-cookie';

const instance: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_BASE_URL,
  timeout: 120000,
  headers: {
    'Content-Type': 'application/json',
  },
});

interface Config extends AxiosRequestConfig {
  showLoading?: boolean;
  customMessage?: boolean;
}

instance.interceptors.request.use((config: Config) => {
  const accessToken = Cookies.get('access_token') || '';
  const accessTokenType = Cookies.get('token_type') || '';
  message.destroy(1);
  if (config?.showLoading) {
    message.loading({
      key: 1,
      duration: 0,
      content: '加载中...',
    });
  }

  return {
    ...config,
    // header中添加鉴权
    headers: {
      Authorization: `${accessTokenType} ${accessToken}`,
      ...config.headers,
    },
  };
});

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    message.destroy(1);
    if (response.status === 200) {
      /* 处理下载相关接口 */
      if (response.data instanceof Blob || response.data instanceof ArrayBuffer) {
        return Promise.resolve(response);
      }
      if (response.data) {
        return Promise.resolve(response.data);
      } else {
        if (!(response.config as Config).customMessage) {
          message.error({
            key: 1,
            duration: 3,
            content: response.data.msg || '接口异常,请重试!',
          });
        }
        return Promise.reject(response.data);
      }
    }
    return Promise.resolve(response);
  },
  (err) => {
    let errorMessage: string = err.message || '';

    if (err.response.status === 500) {
      errorMessage = '请求服务器失败，请重试！';
      window.location.href = `${import.meta.env.BASE_URL}500`;
    }
    if (403 === err.response.status) {
      errorMessage = '无访问权限，请联系系统管理员！';
      // window.location.href = `${import.meta.env.BASE_URL}no-permission`;
    }

    if (401 === err.response.status) {
      errorMessage = '登录已过期，请重新登录';
      Cookies.remove('access_token');
      Cookies.remove('token_type');
      setTimeout(() => {
        window.location.replace(`${import.meta.env.BASE_URL}login`);
      }, 2000);
    }
    message.error({
      key: 1,
      duration: 3,
      content: errorMessage,
    });
    return Promise.reject(err);
  },
);

export interface ApiResponse<T> {
  code: number;
  msg: string;
  data: T;
}

export type ApiPromiseResponse<T> = Promise<ApiResponse<T> | any>;

const index = {
  get: <T>(url: string, config?: Config): ApiPromiseResponse<T> => instance.get(url, config),
  post: <T>(url: string, data?: Record<string, any>, config?: Config): ApiPromiseResponse<T> =>
    instance.post(url, data, config),
  put: <T>(url: string, data?: Record<string, any>, config?: Config): ApiPromiseResponse<T> =>
    instance.put(url, data, config),
  delete: <T>(url: string, config?: Config): ApiPromiseResponse<T> => instance.delete(url, config),
};

export default index;
