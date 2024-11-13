import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from './firebase';
import NavBar from './c/NavBar';
import LoginPage from './pages/LoginPage';
import SignUpPage from './pages/SignUpPage';
import HomePage from './pages/HomePage';
import FindQuestionPage from './c/FindQuestionPage';
import PostPage from './c/PostPage';
import PricingPlans from './c/PricingPlans';
import PaymentPage from './c/PaymentPage';

function App() {
  const [user] = useAuthState(auth);

  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignUpPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/Question" element={<FindQuestionPage />} />
        <Route path='/post' element={<PostPage/>}/>
        <Route path="/pricing" element={<PricingPlans />} /> 
        <Route path="/payment" element={<PaymentPage />} />

      </Routes>
    </Router>
  );
}

export default App;
