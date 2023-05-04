import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import axios from 'axios';

const initialState = {
  greeting: '',
};

const SET_GREETING = 'SET_GREETING';

export const setGreeting = (greeting) => ({
  type: SET_GREETING,
  payload: greeting,
});

export const fetchGreeting = () => {
  return async (dispatch) => {
    const response = await axios.get('/greetings/random');
    const greeting = response.data.greeting;
    dispatch(setGreeting(greeting));
  };
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_GREETING:
      return { ...state, greeting: action.payload };
    default:
      return state;
  }
};

const store = createStore(reducer, applyMiddleware(thunk));

export default store;
