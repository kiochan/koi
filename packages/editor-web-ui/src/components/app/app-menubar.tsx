'use client';
import { Button } from '../ui/button';
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from '../ui/menubar';
import { menubarConfig } from '../../config/menu';

import {
  isMenuItem,
  MenuItem,
  MenuItemSeperator,
} from '../../config/helper/menu';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

import logo from '../assets/logo.svg';
import { AppCaptionButtons } from './app-caption-buttons';

export function AppMenubar() {
  const { t, ready } = useTranslation();

  return (
    <div className="h-8 shrink-0 bg-background z-50 border-b">
      <Menubar className="fixed top-0 left-0 right-0 z-50 h-8 rounded-t-md rounded-b-none flex justify-between items-center w-full">
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="size-8  mx-1">
            <Image
              src={logo}
              alt="Koi Logo"
              className="h-8 w-8"
              style={{ objectFit: 'contain' }}
              width={32}
              height={32}
            />
          </Button>
          <div className="w-1" />
          {ready
            ? menubarConfig.map((menu) => (
                <MenubarMenu key={menu.id}>
                  <MenubarTrigger>{t(menu.id)}</MenubarTrigger>
                  <MenubarContent>
                    {menu.items.map((item, index) => {
                      if (item === MenuItemSeperator) {
                        const key = `${menu.id}_sep_${index}`;
                        return <MenubarSeparator key={key} />;
                      }
                      if (typeof item === 'string') {
                        const key = `${menu.id}_${item}`;
                        const text = t(item);
                        return <MenubarItem key={key}>{text}</MenubarItem>;
                      }
                      if (isMenuItem(item)) {
                        const menuItem = item as MenuItem;
                        const key = `${menu.id}_${item.id}`;
                        const options = menuItem.options || undefined;
                        const onClick = menuItem.onClick || undefined;
                        const text = t(item.id, options);
                        return (
                          <MenubarItem key={key} onClick={onClick}>
                            {text}
                          </MenubarItem>
                        );
                      }
                      return null;
                    })}
                  </MenubarContent>
                </MenubarMenu>
              ))
            : null}
        </div>
        <AppCaptionButtons />
      </Menubar>
    </div>
  );
}
