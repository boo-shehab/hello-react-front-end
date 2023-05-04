import axios from 'axios';

export const fetchGreeting = () => dispatch => {
  axios.get('http://localhost:3000')
    .then(res => {
      dispatch({
        type: 'FETCH_GREETING',
        payload: res.data.greeting
      });
    })
    .catch(err => {
      console.log(err);
    });
};
