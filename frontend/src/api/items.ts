export interface Item {
  id: number
  name: string
  createdAt: string
}

const API_URL = '/api/items'

export async function getItems(): Promise<Item[]> {
  const response = await fetch(API_URL)
  return response.json()
}

export async function addItem(name: string): Promise<Item> {
  const response = await fetch(API_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ name })
  })
  return response.json()
}

export async function deleteItem(id: number): Promise<void> {
  await fetch(`${API_URL}/${id}`, { method: 'DELETE' })
}

export async function deleteAllItems(): Promise<void> {
  await fetch(API_URL, { method: 'DELETE' })
}
