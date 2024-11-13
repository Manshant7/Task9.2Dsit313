

import React from 'react';
import { auth } from '../firebase'; 
import { signOut } from 'firebase/auth';
import { useNavigate } from 'react-router-dom'; 


const LogoutButton = () => {
  const navigate = useNavigate(); 

  const handleLogout = async () => {
    try {
      await signOut(auth);
      console.log("Logged out successfully");
      navigate('/login'); 
    } catch (error) {
      console.error("Logout error", error);
    }
  };

  return (
    <button className="navbar-button" onClick={handleLogout}>
      Logout
    </button>
  );
};

export default LogoutButton;
