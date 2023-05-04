import React, { useEffect, useState } from 'react';

function Greeting() {
  const [randomGreeting, setRandomGreeting] = useState('');

  useEffect(() => {
    fetchRandomGreeting();
  }, []);

  const fetchRandomGreeting = async () => {
    try {
      const response = await fetch('http://localhost:3000/random_greeting');
      const data = await response.json();
      setRandomGreeting(data.greeting);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <h1>Random Greeting:</h1>
      <h2>{randomGreeting}</h2>
      <button onClick={fetchRandomGreeting}>Get Random Greeting</button>
    </div>
  );
}

export default Greeting;
