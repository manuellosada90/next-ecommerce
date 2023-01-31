export async function getItems() {
  const request = await fetch(
    "https://mocki.io/v1/62342ece-d822-46e8-8664-b6338ea301cb"
  );
  const items = await request.json();
  return items;
}

export async function getLatestItems() {
  const items = await getItems();

  return items.slice(0, 3);
}
// http://localhost:3000/api/items
