import { defineConfig } from 'yapi-to-typescript';

const config = [
  {
    // 分类ids，可以将多个分类中的接口信息生成到同一个ts文件中
    ids: [4131],
    // name: 'login',
  },
];

const createCategories = function (ids: number[]) {
  return ids.map((id) => ({
    id,
    // 自定义ts中interface名称生成规则
    getRequestFunctionName(interfaceInfo: any, changeCase: any) {
      // path肯定是唯一的
      const list = interfaceInfo.path.split('/') as string[];
      // 添加method用于区分post，get，put请求可能path相同
      const firstWord = list[0].toLowerCase();
      if (!/^get|^post|^put|^delete/.test(firstWord)) {
        list.unshift(interfaceInfo.method);
      }
      return changeCase.camelCase(list.join(' '));
    },
  }));
};

export default defineConfig(
  config.map((item) => ({
    // 1. 此处配置yapi的访问地址
    serverUrl: 'http://yapi.realai-inc.cn',
    // 只要类型映射
    typesOnly: true,
    target: 'typescript',
    reactHooks: {
      enabled: false,
    },
    outputFilePath: `src/services/types/index.ts`,
    // requestFunctionFilePath: `src/services/${item.name}/request.ts`,
    dataKey: 'data',
    projects: [
      {
        // 2. 此处配置yapi项目的访问token
        token: '97489ed020dc8e77fa4499ccfd6c51cd3d87a0241bc84d0e320131110b96858b',
        categories: createCategories(item.ids),
      },
    ],
  })),
);
