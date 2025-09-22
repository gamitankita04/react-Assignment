import React from 'react';
import ReactDOM from 'react-dom/client';

const UserCard = ({ name, age, location }) => {

  //Create a React component UserCard that accepts name, age, and location as props 
  //and displays them in a card format. 
  return (
    <div style={{
      border: '1px solid #ddd',
      borderRadius: '10px',
      padding: '20px',
      width: '300px',
      boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
      margin: '20px auto',
      textAlign: 'left'
    }}>
      <h2 style={{ marginBottom: '10px' }}>User Profile</h2>
      <p style={{ marginBottom: '10px' }}><strong>Name:</strong> {name}</p>
      <p style={{ marginBottom: '10px' }}><strong>Age:</strong> {age}</p>
      <p style={{ marginBottom: '10px' }}><strong>Location:</strong> {location}</p>
    </div>
  );
};

export default UserCard