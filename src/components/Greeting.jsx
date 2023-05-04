import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getText from '../reducers/store';

function Greeting() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getText());
  }, [dispatch]);
  const message = useSelector((state) => state.message);

  return (
    <h1>
        
      {message.data.message && message.data.message}
    </h1>
  );
}

export default Greeting;