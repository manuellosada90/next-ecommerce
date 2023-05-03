import { items } from "../seeders/items";

export async function getItems() {
  const reqItems = items;
  return reqItems;
}

export async function getLatestItems() {
  const items = await getItems();

  return items.slice(0, 6);
}
