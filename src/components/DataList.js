import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Button from '@mui/material/Button';
import Typography  from '@mui/material/Typography';
import TextField  from '@mui/material/TextField';
import { editItem } from '../actions/editActions';
import { addItem } from '../actions/addActions';
import { fetchItems } from '../actions/fetchActions';


  
  function CRUDReducer ({isMobile}) {
    const [selectedItem, setSelectedItem] = useState({});
    const [title, setTitle] = useState('');
    const [isEditing, setIsEditing] = useState(false);
    const [editItemIndex, setEditItemIndex] = useState(null);
    const dispatch = useDispatch();
    const items = useSelector((state) => state.items.data);
    const loading = useSelector((state) => state.items.loading);
    const error = useSelector((state) => state.items.error);
    const editItems = useSelector((state) => state.editItems.items);
    const editLoading = useSelector((state) => state.editItems.loading);
    const editError = useSelector((state) => state.editItems.error);
    const addedItem = useSelector((state) => state.addItems.items);
    const addLoading = useSelector((state) => state.addItems.loading);
    const addError = useSelector((state) => state.addItems.error);

       
    // Fetch items from the API when the component mounts
    useEffect(() => {
        dispatch(fetchItems()); // Dispatch the thunk action to fetch data
      }, [dispatch]);
    
      if (loading || editLoading || addLoading) {
        return <div>Loading...</div>;
      }
    
      if (error || editError || addError) {
        return <div>Error: {error}</div>;
      }
   
  
     // CREATE: Add a new item by calling the API
    const handleAddItem = () => {
        dispatch(addItem(title));  // Dispatch the async action to edit item
      };
  
    const handleUpdateItem = (updatedData) => {
        dispatch(editItem(updatedData, title,items,editItemIndex));  // Dispatch the async action to edit item
      };
  
    // Function to start editing an existing item
    const handleEditItem = (item,index) => {
      setIsEditing(true);
      setEditItemIndex(index);
      setSelectedItem(item);
      setTitle(item.title);
    };
  
    // Display only the first 5 items from the API
    const itemsToDisplay = editItems.length > 0 ? editItems.slice(0, 5) : items.slice(0, 5);
  
    return (
      <div>
        <h1>Create, Read and Update Functionality Using Reducers</h1>
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
          {itemsToDisplay?.map((item, index) => (
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
          {itemsToDisplay?.map((item, index) => (
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
  
  export default CRUDReducer;
  
  

