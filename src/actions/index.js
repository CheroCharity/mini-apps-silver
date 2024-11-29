export const fetchDataStart = () => ({
    type: 'EDIT_ITEM',
  });
  
  export const fetchDataSuccess = (data) => ({
    type: 'EDIT_ITEM',
    payload: data,
  });
  
  export const fetchDataError = (error) => ({
    type: 'ADD_ITEM',
    payload: error,
  });
  
  // Thunk action for asynchronous API call
  export const fetchData = () => {
    return async (dispatch) => {
      dispatch(fetchDataStart());
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        dispatch(fetchDataSuccess(data));
      } catch (error) {
        console.log(error);
        dispatch(fetchDataError(error.message));
      }
    };
  };
  