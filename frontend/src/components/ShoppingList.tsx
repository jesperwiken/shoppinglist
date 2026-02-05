import { useState, useEffect } from 'react'
import { Item, getItems, addItem, deleteItem, deleteAllItems } from '../api/items'

export function ShoppingList() {
  const [items, setItems] = useState<Item[]>([])
  const [newItemName, setNewItemName] = useState('')

  useEffect(() => {
    loadItems()
  }, [])

  async function loadItems() {
    const data = await getItems()
    setItems(data)
  }

  async function handleAddItem(e: React.FormEvent) {
    e.preventDefault()
    if (!newItemName.trim()) return

    await addItem(newItemName)
    setNewItemName('')
    loadItems()
  }

  async function handleDeleteItem(id: number) {
    await deleteItem(id)
    loadItems()
  }

  async function handleClearAll() {
    if (items.length === 0) return
    await deleteAllItems()
    loadItems()
  }

  return (
    <div>
      <form onSubmit={handleAddItem} style={{ marginBottom: '20px' }}>
        <input
          type="text"
          value={newItemName}
          onChange={(e) => setNewItemName(e.target.value)}
          placeholder="Vad ska du handla?"
          style={{ padding: '8px', marginRight: '8px', width: '200px' }}
        />
        <button type="submit" style={{ padding: '8px 16px' }}>
          Lagg till
        </button>
      </form>

      <ul style={{ listStyle: 'none', padding: 0 }}>
        {items.map((item) => (
          <li
            key={item.id}
            style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              padding: '8px',
              borderBottom: '1px solid #eee'
            }}
          >
            <span>{item.name}</span>
            <button
              onClick={() => handleDeleteItem(item.id)}
              style={{ padding: '4px 8px', cursor: 'pointer' }}
            >
              Ta bort
            </button>
          </li>
        ))}
      </ul>

      {items.length > 0 && (
        <button
          onClick={handleClearAll}
          style={{
            marginTop: '20px',
            padding: '8px 16px',
            backgroundColor: '#ff4444',
            color: 'white',
            border: 'none',
            cursor: 'pointer'
          }}
        >
          Tom listan
        </button>
      )}

      {items.length === 0 && (
        <p style={{ color: '#888' }}>Listan ar helt tom</p>
      )}
    </div>
  )
}
