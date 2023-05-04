import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import getMessage from '../redux/getMessage';

function Greeting() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getMessage());
  }, [dispatch]);
  const message = useSelector((state) => state.message);

  const fetchRandomGreeting = () => {
    dispatch(getMessage());
  };

  useEffect(() => {
    fetchRandomGreeting();
  }, [fetchRandomGreeting]);

  return (
    <div>
      <h1>Random Greeting:</h1>
      <h2>{message.data.greeting}</h2>
      <button type="button" onClick={fetchRandomGreeting}>Get Random Greeting</button>
    </div>
  );
}

export default Greeting;
