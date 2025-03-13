
"use client";
import { useEffect, useState } from 'react';
import Image from 'next/image';


interface Item {
  id: number;
  user_id: number;
  title: string;
  description: string | null;
  image_url: string | null;
  status: string;
}

export default function Home() {
  const [items, setItems] = useState<Item[]>([]);
  const [loading, setLoading] = useState(true);


  useEffect(() => {
    async function fetchItems() {
      try {
        const response = await fetch('/api/items');
        const data = await response.json();
        setItems(data.items);
      } catch (error) {
        console.error('Error fetching items:', error);
      } finally {
        setLoading(false);
      }
    }
    
    fetchItems();
  }, []);

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Available Items</h1>
      
      {loading ? (
        <p>Loading items...</p>
      ) : Array.isArray(items) && items.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {items.map((item) => (
            <div key={item.id} className="border p-4 rounded-lg">
              <h2 className="text-xl font-semibold">{item.title}</h2>
              {item.description && <p className="mt-2">{item.description}</p>}
              {item.image_url && (
                <div className="mt-2">
                  {item.image_url && (
                <div className="mt-2">
                  <img 
                    src={item.image_url} 
                    alt={item.title}
                    width="200"
                    height="200"
                    className="object-cover"
                  />
                </div>
              )}
                </div>
              )}
              <p className="mt-2 text-sm">Status: {item.status}</p>
            </div>
          ))}
        </div>
      ) : (
        <p>No items available.</p>
      )}
    </div>

  );
}
