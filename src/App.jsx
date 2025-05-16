import React, { useState } from 'react';
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom';
import { FaHome, FaCarrot, FaDrumstickBite, FaAppleAlt, FaShoppingCart, FaClipboardList, FaSignInAlt, FaInfoCircle, FaPhone, FaGlassWhiskey, FaFacebook, FaTwitter, FaInstagram, FaRegistered } from 'react-icons/fa';
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
import { useDispatch, useSelector } from 'react-redux';
import Register from "./Register"; 
import Profile from "./Profile";
import 'react-toastify/dist/ReactToastify.css';
import SignUp from './SignUp';
import { logOut } from './store';
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

  let cartObject = useSelector((globalstate) => globalstate.cart);
  let totalCartCount = cartObject.reduce((totalSum, item) => totalSum + item.quantity, 0);
  
  const isAuthenticated = useSelector((state)=>state.users.isAuthenticated);
  const currentUser = useSelector((state)=>state.users.currentUser);
  
  return (
    
    <BrowserRouter>
      <nav>
        <div className="menu-toggle" onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
        <div className="logo">🛒 Fresh<span style={{ color: '#4CAF50' }}>Basket</span></div>
        
        <div className={`nav-links ${menuOpen ? 'active' : ''}`}>
          <Link to="/"><FaHome /> Home</Link>
          <Link to="/veg"><FaCarrot /> Veg</Link>
          <Link to="/nonVeg"><FaDrumstickBite /> Non-Veg</Link>
          <Link to="/fruites"><FaAppleAlt /> Fruites</Link>
          <Link to="/milk"><FaGlassWhiskey /> Milk</Link>
          <Link to="/cart"><FaShoppingCart /> Cart <span className="cart-count"><sup>{totalCartCount}</sup></span></Link>
          <Link to="/orders"><FaClipboardList /> My-Orders</Link>
          <Link to="/login"><FaSignInAlt /> Login</Link>
          {isAuthenticated ?(
            <div>
              <span>welcome,{currentUser.username}</span>
              <button onClick={()=>useDispatch(logOut())}>LogOut</button>
            </div>):( <Link to="/signIn">SignIn</Link>)
          }
          
          <Link to="/phoneAuth"><FaInfoCircle /> PhoneAuth</Link>
          <Link to="/aboutUs"><FaInfoCircle /> AboutUs</Link>
          <Link to="/contactUs"><FaPhone /> ContactUs</Link>
           
          <Link to="/profile"> Profile</Link>
        </div>

        <button className="toggle-btn" onClick={toggleDarkMode}>
          {darkMode ? '☀️ Light' : '🌙 Dark'}
        </button>
      </nav>

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
         <Route path="/registre" element={<Register />} /> 
          <Route path="/profile" element={<Profile />} />
           <Route path="/signUp" element={<SignUp />} />
            <Route path="/signIn" element={<SignIn />} />
      </Routes>

      <footer className="footer">
        <p>© 2025 Fresh Basket App. All rights reserved.</p>
        <div className="footer-links">
          <Link to="/privacy" className="footer-link">Privacy Policy</Link>
          <Link to="/terms" className="footer-link">Terms & Conditions</Link>
          <Link to="/contactUs" className="footer-link">Contact Us</Link>
        </div>
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
