export const MenuItemSeperator = Symbol("menu_item_seperator");

export type MenuItem = {
  id: string;
  options?: Record<string, string>;
  onClick?: () => void;
};

export type MenuItemSimple = string;

export type MenuItemPassible =
  | MenuItem
  | MenuItemSimple
  | typeof MenuItemSeperator;

interface MenuGroup {
  id: string;
  items: Array<MenuItemPassible>;
}

export type MenuConfig = MenuGroup[];

export function isMenuItem(item: MenuItemPassible): item is MenuItem {
  return (
    typeof item === "object" && "id" in item && typeof item.id === "string"
  );
}

export function defineMenu<T extends MenuConfig>(config: T): T {
  return config;
}
