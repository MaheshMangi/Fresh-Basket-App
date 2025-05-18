import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { FaHome, FaCarrot, FaDrumstickBite, FaAppleAlt, FaShoppingCart, FaClipboardList, FaSignInAlt, FaInfoCircle, FaPhone, FaGlassWhiskey, FaFacebook, FaTwitter, FaInstagram } from 'react-icons/fa';
import Home from './Home';
import Veg from './Veg';
import NonVeg from './NonVeg';
import Fruites from './Fruites';
import Login from './Login';
import './menuBar.css';
import PhoneOTPVerification from "./PhoneOTPVerification";
import PhoneAuth from './PhoneAuth';
import Milk from './Milk';
import Cart from './Cart';
import Orders from './Orders';
import AboutUs from './AboutUs';
import ContactUs from './ContactUs';
import { useSelector } from 'react-redux';
import Register from "./Register"; 
import Profile from "./Profile";
import SignUp from './SignUp';
import SignIn from './SignIn';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    document.body.classList.toggle('dark');
  };

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  let cartObject = useSelector((state) => state.cart);
  let totalCartCount = cartObject.reduce((totalSum, item) => totalSum + item.quantity, 0);

  return (
    <BrowserRouter>
    <header>
      <nav>
        <div className="logo">🛒 Fresh<span style={{ color: '#4CAF50' }}>Basket</span></div>

        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>

        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/" onClick={closeMenu}><FaHome /> Home</Link>
          <Link to="/veg" onClick={closeMenu}><FaCarrot /> Veg</Link>
          <Link to="/nonVeg" onClick={closeMenu}><FaDrumstickBite /> Non-Veg</Link>
          <Link to="/fruites" onClick={closeMenu}><FaAppleAlt /> Fruites</Link>
          <Link to="/milk" onClick={closeMenu}><FaGlassWhiskey /> Milk</Link>
          <Link to="/cart" onClick={closeMenu}><FaShoppingCart /> Cart <span className="cart-count"><sup>{totalCartCount}</sup></span></Link>
          <Link to="/orders" onClick={closeMenu}><FaClipboardList /> My-Orders</Link>
          <Link to="/login" onClick={closeMenu}><FaSignInAlt /> Login</Link>
          <Link to="/aboutUs" onClick={closeMenu}><FaInfoCircle /> About Us</Link>
          <Link to="/contactUs" onClick={closeMenu}><FaPhone /> Contact Us</Link>
          <Link to="/profile" onClick={closeMenu}>Profile</Link>
        </div>

        <button className="toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>
      </header>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/veg" element={<Veg />} />
        <Route path="/nonVeg" element={<NonVeg />} />
        <Route path="/fruites" element={<Fruites />} />
        <Route path="/milk" element={<Milk />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
        <Route path="/aboutUs" element={<AboutUs />} />
        <Route path="/contactUs" element={<ContactUs />} />
        <Route path="/phoneAuth" element={<PhoneAuth />} />
        <Route path="/phone-verification" element={<PhoneOTPVerification />} />
        <Route path="/register" element={<Register />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/signUp" element={<SignUp />} />
        <Route path="/signIn" element={<SignIn />} />
      </Routes>

      <footer className="footer">
        <p>© 2025 Fresh Basket App. All rights reserved.</p>
        <div className="social-icons">
          <a href="#" className="social-link"><FaFacebook /></a>
          <a href="#" className="social-link"><FaTwitter /></a>
          <a href="#" className="social-link"><FaInstagram /></a>
        </div>
      </footer>
    </BrowserRouter>
  );
}

export default App;
