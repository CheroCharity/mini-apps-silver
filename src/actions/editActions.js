// Action to indicate editing has started (optional)
export const editItemStart = () => ({
  type: 'EDIT_ITEM_START',
});

// Action when the edit is successful
export const editItemSuccess = (updatedData) => ({
  type: 'EDIT_ITEM_SUCCESS',
  payload: updatedData,
});

// Action when the edit fails
export const editItemError = (error) => ({
  type: 'EDIT_ITEM_ERROR',
  payload: error,
});

// Async action to edit the item (makes API call)
export const editItem = (selectedItem, title, items, editItemIndex) => {
  return async (dispatch) => {
    // Dispatch the start action to set loading state
    dispatch(editItemStart());

    try {
      // Make an API call to update the item
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
      updatedItems[editItemIndex] = data;
      dispatch(editItemSuccess(updatedItems));
    } catch (error) {
      console.log(error);
      // If the API call fails, dispatch the error action
      dispatch(editItemError(error.message));
    }
  };
};
