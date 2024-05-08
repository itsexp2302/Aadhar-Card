import React from 'react';
import CardComponent from './Card';

const RegisteredComponent = ({ registeredUsers }) => {
  return (
    <div>
      <h1>Registered Users</h1>
      {registeredUsers.map((user, index) => (
        <CardComponent key={index} user={user} />
      ))}
    </div>
  );
};

export default RegisteredComponent;
