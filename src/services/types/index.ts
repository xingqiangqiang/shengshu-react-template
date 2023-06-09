/* prettier-ignore-start */
/* tslint:disable */
/* eslint-disable */

/* 该文件由 yapi-to-typescript 自动生成，请勿直接修改！！！ */

// @ts-ignore
type FileData = File;

/**
 * 接口 [登录↗](http://yapi.realai-inc.cn/project/520/interface/api/9401) 的 **请求类型**
 *
 * @分类 [登录接口↗](http://yapi.realai-inc.cn/project/520/interface/api/cat_4131)
 * @请求头 `POST /token`
 * @更新时间 `2023-04-12 11:45:43`
 */
export interface PostTokenRequest {
  username: string;
  password: string;
}

/**
 * 接口 [登录↗](http://yapi.realai-inc.cn/project/520/interface/api/9401) 的 **返回类型**
 *
 * @分类 [登录接口↗](http://yapi.realai-inc.cn/project/520/interface/api/cat_4131)
 * @请求头 `POST /token`
 * @更新时间 `2023-04-12 11:45:43`
 */
export interface PostTokenResponse {
  access_token: string;
  token_type: string;
}

/* prettier-ignore-end */
