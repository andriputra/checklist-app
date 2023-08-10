import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Checklist = ({ token }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchChecklist = async () => {
      try {
        const response = await axios.get('http://94.74.86.174:8080/api/checklist', {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        console.log('Checklist response:', response.data.data);
        setItems(response.data.data);
      } catch (error) {
        console.error('Fetching checklist error:', error);
      }
    };

    fetchChecklist();
  }, [token]);

  return (
    <div>
      <h2>Checklist</h2>
      <ul style={{textAlign:'center'}}>
        {items.map((items) => (
            <li key={items.id}>
                <input
                type="checkbox"
                checked={items.checklistCompletionStatus}
            />
                {items.name}
            </li>
        ))}
      </ul>
    </div>
  );
};

export default Checklist;
