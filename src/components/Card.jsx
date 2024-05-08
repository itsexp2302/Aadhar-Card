
import React from 'react';

const CardComponent = ({ user }) => {
  return (
    <div className="card">
      <h2>User Information</h2>
      <p><strong>Name:</strong> {user.fullName}</p>
      <p><strong>Date of Birth:</strong> {user.dob}</p>
      <p><strong>Address:</strong> {user.address}</p>
      <p><strong>Contact Information:</strong> {user.contact}</p>
      <p><strong>UID:</strong> {user.uid}</p>
    </div>
  );
};

export default CardComponent;
