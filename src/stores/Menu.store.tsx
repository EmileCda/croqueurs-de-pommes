/**
 * storing : lang selected from Header
 *display navBar or burgerMenu
 *
 */

import { action, map } from "nanostores";



export type MenuStore = {
  isMobile: boolean;
  isVisibleTossMenu: boolean;
};

export const menuStore = map<MenuStore>({
  isMobile: true,
  isVisibleTossMenu: false,
});

export const setIsMobile = action(
  menuStore,
  "setIsMobile",
  (store, value: boolean) => {
    store.setKey("isMobile", value);
  }
);

export const toggleIsVisibleTossMenu = action(
  menuStore,
  "toggleIsVisibleTossMenu",
  (store) => {
    const { isVisibleTossMenu } = store.get();
    store.setKey("isVisibleTossMenu", !isVisibleTossMenu);
  }
);
