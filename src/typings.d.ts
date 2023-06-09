declare module 'slash2';
declare module '*.css';
declare module '*.less';
declare module '*.scss';
declare module '*.sass';
declare module '*.svg';
declare module '*.png';
declare module '*.jpg';
declare module '*.jpeg';
declare module '*.gif';
declare module '*.bmp';
declare module '*.tiff';
declare module '*.pdf';

declare type MenuItemType = {
  path: string; // 路径
  title: string; // 菜单名称
  icon?: string; // 菜单未选中icon
  iconSelected?: string; // 菜单已选中icon
  children?: MenuItemType[]; // 菜单子级，一样的结构
};
