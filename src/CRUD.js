import React, { useState, useEffect } from 'react';
import Button from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import TextField  from '@mui/material/TextField';

function CRUD({isMobile}) {
  const [items, setItems] = useState([]);
  const [selectedItem, setSelectedItem] = useState({});
  const [title, setTitle] = useState('');
  const [addedItem, setAddedItem] = useState('');
  const [isEditing, setIsEditing] = useState(false);
  const [editItemIndex, setEditItemIndex] = useState(null);

  // Fetch items from the API when the component mounts
  useEffect(() => {
    // Fetch items from the API
  const fetchItems = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      setItems(data);
    } catch (error) {
      console.error('Error fetching items:', error);
    }
  };
    fetchItems();
  }, []);
 

   // CREATE: Add a new item by calling the API
   const handleAddItem = async (values, resetForm) => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        body: JSON.stringify({
          title: title,
          body: title,
          userId: 11,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const newItem = await response.json();
      setAddedItem(newItem);
    } catch (error) {
      console.error('Error adding item:', error);
    }
  };

  // UPDATE: Save the updated item by calling the API
  const handleUpdateItem = async (selectedItem) => {
    try {
        const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${selectedItem.id}`, {
        method: 'PUT',
        body: JSON.stringify({
          id: selectedItem.id,
          title: title,
          body: selectedItem.body,
          userId: selectedItem.userId,
        }),
        headers: {
          'Content-type': 'application/json; charset=UTF-8',
        },
      })
      const data = await response.json();
      const updatedItems = [...items];
      updatedItems[editItemIndex] = data; // Replace the updated item in the list
      setItems(updatedItems);
      setIsEditing(false);
      setEditItemIndex(null);
     } catch (error) {
      console.error('Error updating item:', error);
    }
  };

  // Function to start editing an existing item
  const handleEditItem = (item,index) => {
    setIsEditing(true);
    setEditItemIndex(index);
    setSelectedItem(item);
    setTitle(item.title);
  };

  // Display only the first 5 items from the API
  const itemsToDisplay = items.slice(0, 5);

  return (
    <div>
      <h1>Create, Read and Update Functionality</h1>
        <div>
              <TextField
                type="text"
                name="item"
                placeholder="Enter item"
                className="input-field"
                value={title}
                onChange={(e) => {
                    setTitle(e.target.value);
                }}
              />
              {/* <ErrorMessage name="item" component="div" className="error-message" /> */}
            </div>
            <Button 
               onClick={() => {
                    if(isEditing){
                        handleUpdateItem(selectedItem);
                    }else{
                        handleAddItem();
                    }
                }} 
                variant="outlined" color="primary" style={{marginBottom: 3, marginTop: 5}}>
              {isEditing ? 'Update' : 'Add'}
            </Button>

      <Typography style={{marginBottom: 3, marginTop: 5, fontWeight: "bold", textDecoration: "underline"}}>Read and Update Functionality</Typography>
      {isMobile ? (
        <div style={{paddingLeft: 10, paddingRight:10}}>
        <ul>
        {itemsToDisplay.map((item, index) => (
          <li key={index}>
            {(item.title).slice(0, 40)}
            <Button variant="outlined" onClick={() => handleEditItem(item, index)}>
              Edit
            </Button>
          </li>
        ))}
      </ul>
      <Typography style={{marginBottom: 3, marginTop: 5, fontWeight: "bold", textDecoration: "underline"}}>Read and Update Functionality</Typography>
      <Typography style={{marginBottom: 5}}>The new item will be displayed here:</Typography>
      {addedItem.title &&(<Typography>{(addedItem.title.slice(0, 40))}</Typography>)}
      </div>
      ): (
        <div>
        <ul>
        {itemsToDisplay.map((item, index) => (
          <li key={index}>
            {item.title}
            <Button variant="outlined" onClick={() => handleEditItem(item, index)}>
              Edit
            </Button>
          </li>
        ))}
      </ul>
      <Typography style={{marginBottom: 3, marginTop: 5, fontWeight: "bold", textDecoration: "underline"}}>Read and Update Functionality</Typography>
      <Typography style={{marginBottom: 5}}>The new item will be displayed here:</Typography>
      {addedItem.title &&(<Typography>{addedItem.title}</Typography>)}
        </div>
      )}
      
    </div>
  );
}

export default CRUD;
