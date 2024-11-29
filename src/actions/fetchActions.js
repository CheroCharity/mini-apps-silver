
// Action to indicate the start of the data fetch (optional)
export const fetchItemsStart = () => ({
  type: 'FETCH_ITEMS_START',
});

// Action when the data fetch is successful
export const fetchItemsSuccess = (data) => ({
  type: 'FETCH_ITEMS_SUCCESS',
  payload: data,
});

// Action when the data fetch fails
export const fetchItemsError = (error) => ({
  type: 'FETCH_ITEMS_ERROR',
  payload: error,
});

// Async action to fetch initial data from the API
export const fetchItems = () => {
  return async (dispatch) => {
    // Dispatch the start action to set loading state
    dispatch(fetchItemsStart());

    try {
      // Make an API call to fetch the items
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const data = await response.json();
      console.log(data);
      // On success, dispatch the success action with the fetched data
      dispatch(fetchItemsSuccess(data));
    } catch (error) {
        console.log(error);
      // If the API call fails, dispatch the error action
      dispatch(fetchItemsError(error.message));
    }
  };
};
