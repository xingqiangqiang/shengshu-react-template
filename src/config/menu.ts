type MenuItemType = {
  path: string; // 路径
  title: string; // 菜单名称
  icon?: string; // 菜单未选中icon
  iconSelected?: string; // 菜单已选中icon
  children?: MenuItemType[]; // 菜单子级，一样的结构
};

type MenuListType = {
  [key: string]: MenuItemType;
};

const menuList: MenuListType = {};

export default menuList;
