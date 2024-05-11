import './App.css';
import React, { useState, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';



// Import components
import Navbar from './Components/Hearders/Navbar';
import Footer from './Components/Footers/Footer';
import SigninSignupContainer from './Components/SigninSignup/SigninSignupContainer';
import HomePage from './Components/Pages/HomePage';
import CustomerDashboard from './Components/Mid section/CustomerDashboard';
import ProductsPage from './Components/Pages/ProductsPage';
import ProductDisplayPage from './Components/Mid section/ProductDisplay/ProductDisplayPage';

function App() {
  // State variables
  const [isOpen, setIsOpen] = useState(false); // Controls the pop-up visibility
  const [logedUser, setLogedUser] = useState(JSON.parse(localStorage.getItem('user'))); // Stores the logged-in user data
  const [categories, setCatogories] = useState([]); // Stores the fetched categories
  const [loading, setLoading] = useState(true); // Indicates if data is being loaded
  const [selectedCategory, setSelectedCategory] = useState(''); // Stores the currently selected category
  const [count, setCount] = useState(0); // Used for some purpose (not clear from the code)

  // Function to toggle the pop-up visibility
  const togglePopup = () => {
    setIsOpen(!isOpen);
  };

  // Function to save the logged-in user data to localStorage
  const saveLogedInUser = (customer) => {
    console.log('seting logged user');
    localStorage.setItem('user', JSON.stringify(customer));
    setLogedUser(customer);
  };

  // Function to remove the logged-in user data from localStorage
  const deleteLogedInUser = () => {
    console.log('user delete');
    localStorage.removeItem('user');
    setLogedUser(null);
  };

  return (
    <div className="App">
      <Navbar
        setSelectedCategory={setSelectedCategory}
        togglePopup={togglePopup}
        logedUser={logedUser}
        categories={categories} />

      <Routes>
        <Route path="/" element={<HomePage categories={categories} loading={loading} setCatogories={setCatogories} setLoading={setLoading} setCount={setCount} />} />
        <Route path="/dashboard" element={logedUser ? <CustomerDashboard deleteLogedInUser={deleteLogedInUser} /> : <Navigate to="/" />} />
        <Route path="/products/all" element={<ProductsPage selectedCategory={selectedCategory} />} />
        <Route path="/p" element={<ProductDisplayPage />} /> {/** need to change this path */}
      </Routes>

      {isOpen && <SigninSignupContainer onClose={togglePopup} saveLogedInUser={saveLogedInUser} />}
      <Footer />
    </div>
  );
}

export default App;