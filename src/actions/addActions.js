// Action to indicate adding has started (optional)
export const addItemStart = () => ({
  type: 'ADD_ITEM_START',
});

// Action when the add is successful
export const addItemSuccess = (updatedData) => ({
  type: 'ADD_ITEM_SUCCESS',
  payload: updatedData,
});

// Action when the add fails
export const addItemError = (error) => ({
  type: 'ADD_ITEM_ERROR',
  payload: error,
});

// Async action to add the item (makes API call)
export const addItem = (title) => {
  return async (dispatch) => {
    // Dispatch the start action to set loading state
    dispatch(addItemStart());

    try {
      // Make an API call to add the item
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
      const data = await response.json();
      dispatch(addItemSuccess(data));
    } catch (error) {
      // If the API call fails, dispatch the error action
      dispatch(addItemError(error.message));
    }
  };
};
