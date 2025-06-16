import { defineMenu, MenuItemSeperator } from './helper/menu';

export const menubarConfig = defineMenu([
  {
    id: 'menu_file',
    items: [
      'open_file',
      MenuItemSeperator,
      'close_file',
      'close_view',
      MenuItemSeperator,
      'app_exit',
    ],
  },
  {
    id: 'menu_help',
    items: [
      {
        id: 'version_info',
        options: { version: 'v0.0.1' },
      },
    ],
  },
] as const);
