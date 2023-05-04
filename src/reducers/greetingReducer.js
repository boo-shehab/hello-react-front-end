const initialState = {
    message: ''
  };
  
  export default function(state = initialState, action) {
    switch(action.type) {
      case 'FETCH_GREETING':
        return {
          ...state,
          message: action.payload
        };
      default:
        return state;
    }
  }
  