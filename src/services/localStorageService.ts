import { MenuItem } from "../interface/types";


const MENU_ITEMS_KEY = "menu_items";
const CATEGORIES_KEY = "menu_categories";

const localStorageService = {
  getMenuItems(): MenuItem[] {
    const data = localStorage.getItem(MENU_ITEMS_KEY);
    return data ? JSON.parse(data) : [];
  },
  saveMenuItems(items: MenuItem[]) {
    localStorage.setItem(MENU_ITEMS_KEY, JSON.stringify(items));
  },
  getCategories(): string[] {
    const data = localStorage.getItem(CATEGORIES_KEY);
    return data ? JSON.parse(data) : [];
  },
  saveCategories(categories: string[]) {
    localStorage.setItem(CATEGORIES_KEY, JSON.stringify(categories));
  },
};

export default localStorageService;