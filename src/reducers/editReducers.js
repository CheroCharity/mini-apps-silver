const initialState = {
    items: [],
    loading: false,
    error: null,
  };
  
  const itemReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'EDIT_ITEM_START':
        return {
          ...state,
          loading: true,  // Set loading to true when edit starts
        };
  
      case 'EDIT_ITEM_SUCCESS':
        return {
          ...state,
          loading: false,  // Set loading to false when edit is successful
          items: action.payload
        };
  
      case 'EDIT_ITEM_ERROR':
        return {
          ...state,
          loading: false,  // Set loading to false when there's an error
          error: action.payload,  // Store the error message
        };
  
      default:
        return state;
    }
  };
  
  export default itemReducer;
  