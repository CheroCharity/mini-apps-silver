const initialState = {
    items: [],
    loading: false,
    error: null,
  };
  
  const itemReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_ITEM_START':
        return {
          ...state,
          loading: true,  // Set loading to true when ADD starts
        };
  
      case 'ADD_ITEM_SUCCESS':
        return {
          ...state,
          loading: false,  // Set loading to false when ADD is successful
          items: action.payload
        };
  
      case 'ADD_ITEM_ERROR':
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
  