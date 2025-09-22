import React from 'react';

const Task2 = ({ name = 'Guest' }) => {
  //Create a functional component Greeting that accepts a name as a prop and 
//displays "Hello, [name]!". 
  return (
    <div>

      
      <h1>Hello, {name}!</h1>
    </div>
  );
};

export default Task2;