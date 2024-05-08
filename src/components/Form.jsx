import React, { useState } from 'react';
import './styles.css';

const FormComponent = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    dob: '',
    address: '',
    contact: ''
  });
  const [errors, setErrors] = useState({});
  const [registrationMessage, setRegistrationMessage] = useState('');

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validateForm(formData);
    if (Object.keys(formErrors).length === 0) {
      onSubmit(formData);
      setRegistrationMessage('Registration successful!');
      setFormData({
        fullName: '',
        dob: '',
        address: '',
        contact: ''
      });
    } else {
      setErrors(formErrors);
    }
  };

  const validateForm = (data) => {
    const errors = {};
    if (!data.fullName.trim()) {
      errors.fullName = 'Full Name is required';
    }
    if (!data.dob.trim()) {
      errors.dob = 'Date of Birth is required';
    }
    if (!data.address.trim()) {
      errors.address = 'Address is required';
    }
    if (!data.contact.trim()) {
      errors.contact = 'Contact Information is required';
    }
    return errors;
  };

  return (
    <div className="form-container">
      <h2>User Registration</h2>
      {registrationMessage && <p className="success-message">{registrationMessage}</p>}
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <input 
          type="text" 
          name="fullName" 
          placeholder="Full Name" 
          onChange={handleChange} 
          />
          {errors.fullName && <span className="error">{errors.fullName}</span>}
        </div>
        <div className="form-group">
          <input 
          type="date" 
          name="dob" 
          placeholder="Date of Birth" 
          onChange={handleChange}
           />
          {errors.dob && <span className="error">{errors.dob}</span>}
        </div>
        <div className="form-group">
          <input 
          type="text" 
          name="address" 
          placeholder="Address" 
          onChange={handleChange} 
          />
          {errors.address && <span className="error">{errors.address}</span>}
        </div>
        <div className="form-group">
          <input 
          type="text" 
          name="contact" 
          placeholder="Contact Information" 
          onChange={handleChange} 
          />
          {errors.contact && <span className="error">{errors.contact}</span>}
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default FormComponent;
