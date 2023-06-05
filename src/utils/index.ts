import { message } from 'antd';
import type { RcFile } from 'antd/es/upload';
import Cookies from 'js-cookie';

export const beforeUpload = (file: RcFile) => {
  const isJpgOrPng = file.type === 'image/jpeg' || file.type === 'image/png';
  if (!isJpgOrPng) {
    message.error('图片只支持JPG、PNG格式，请修改格式后重新上传');
    return;
  }
  const isLt10M = file.size / 1024 / 1024 < 10;
  if (!isLt10M) {
    message.error('图片大小超过10M，请调整大小后重新上传');
    return;
  }
  return isJpgOrPng && isLt10M;
};

export const getBase64 = (img: RcFile, callback: (url: string) => void) => {
  if (!img) return;
  const reader = new FileReader();
  reader.addEventListener('load', () => callback(reader.result as string));
  reader.readAsDataURL(img);
  reader.removeEventListener('load', () => callback(reader.result as string));
};

export const urlToBlob = (url: string, callback: (data: Blob) => void) => {
  const xhr = new XMLHttpRequest();
  xhr.open('get', url, true);
  xhr.responseType = 'blob';
  xhr.onload = function () {
    if (xhr.status === 200) {
      if (callback) {
        callback(xhr.response);
      }
    }
  };
  xhr.send();
};

/**
 * 下载
 * @param url
 * @param name
 */
export const download = (url: string, name?: string) => {
  try {
    urlToBlob(url, (data: Blob) => {
      const blob = data;
      const a = document.createElement('a');
      a.download = name || new Date().getTime().toString();
      a.href = URL.createObjectURL(blob);
      a.click();
      URL.revokeObjectURL(a.href);
    });
  } catch (error) {
    message.error('文件下载失败，请重试！');
  }
};

/**
 * 手机号加密处理
 * @param phone
 */
export const phoneEncryption = (phone?: string) => {
  if (!phone) return '';
  return phone.replace(/(\d{3})\d*(\d{4})/, '$1****$2');
};

/**
 * 检查登录态
 * @returns
 */
export const checkLogin = () => {
  return !!Cookies.get('access_token') && !!Cookies.get('token_type');
};
