import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ItemList = ({ onEdit, onDelete }) => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchItems();
  }, []);

  const fetchItems = async () => {
    try {
      const response = await axios.get('http://localhost:8000/api/items/');
      setItems(response.data);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching items:', error);
      setError('Failed to fetch items');
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Items</h1>
      {loading ? (
        <p>Loading items...</p>
      ) : error ? (
        <p>{error}</p>
      ) : (
        <ul>
          {items.map(item => (
            <li key={item.id}>
              {item.first_name} {item.last_name}: {item.address} - {item.phone} - {item.email} - {item.birthday} - {item.birthplace} - {item.age} - {item.gender} - {item.nationality} - {item.civil_status} - {item.religion} - {item.height_CM} - {item.weight_KG} - {item.mother_first_name} {item.mother_middle_name} {item.mother_last_name} - {item.mother_occupation} - {item.father_first_name} {item.father_middle_name} {item.father_last_name} - {item.father_occupation} - {item.primary} - {item.secondary} - {item.tertiary}
              <button onClick={() => onEdit(item)}>Edit</button>
              <button onClick={() => onDelete(item.id)}>Delete</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ItemList;
