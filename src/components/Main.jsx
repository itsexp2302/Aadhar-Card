import React, { useState } from 'react';
import { BrowserRouter , Route, Routes } from 'react-router-dom';
import Navbar from './Header';
import FormComponent from './Form';
import RegisteredComponent from './RegisteredUsers';

const MainComponent = () => {
  const [registeredUsers, setRegisteredUsers] = useState([]);

  const handleFormSubmit = (formData) => {
    const uid = generateUID();
    const userData = { ...formData, uid };
    setRegisteredUsers([...registeredUsers, userData]);
  };

  const generateUID = () => {
    const randomUID = Math.floor(1000000000000000 + Math.random() * 9000000000000000);
    return randomUID.toString();
  };

  return (
    <BrowserRouter>
      <div className="container">
        <Navbar />
        <Routes>
            <Route exact path='/' element={<FormComponent onSubmit={handleFormSubmit}/>}/>
            <Route path ='/registered' element={<RegisteredComponent registeredUsers={registeredUsers}/>}/>
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default MainComponent;
