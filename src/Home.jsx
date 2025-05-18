import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const items = [
    { title: 'Alu Fry', price: 350, img: 'alu fry.jfif' },
    { title: 'High Protein Food', price: 256, img: 'food.jfif' },
    { title: 'Fruites', price: 299, img: 'fruites.jfif' },
    { title: 'Keera Breakfast', price: 320, img: 'kira.jfif' },
    { title: 'Breakfast', price: 360, img: 'protin.jfif' },
    { title: 'Veg Item', price: 150, img: 'vege.jfif' },
    { title: 'Vegetable', price: 220, img: 'vegetables.jfif' },
  ];

  const features = [
    { icon: '🚀', title: 'Fast Delivery', description: 'Delivered within 30 minutes!' },
    { icon: '🥗', title: 'Healthy Food', description: 'Fresh and organic ingredients.' },
    { icon: '🌱', title: 'Organic Items', description: 'Sourced from local farms.' },
  ];

  return (
    <>
      <div className="home-container">
  <div className="content-wrapper">
    <h1>Welcome to Fresh Basket App! 🍽️</h1>
    <p>Delicious meals just a click away. Choose from fresh Veg, Non-Veg, Milk products, and Fruits!</p>

    <div className="home-buttons">
      <Link to="/veg" className="home-link">🥦 Veg Items</Link>
      <Link to="/nonVeg" className="home-link">🍗 Non-Veg Items</Link>
      <Link to="/fruites" className="home-link">🍎 Fruits</Link>
      <Link to="/milk" className="home-link">🥛 Milk</Link>
      <Link to="/cart" className="home-link">🛒 View Cart</Link>
    </div>
  </div>
</div>


      {/* Features Section */}
      <div className="features-section">
        {features.map((feature, index) => (
          <div className="feature-card" key={index}>
            <div className="feature-icon">{feature.icon}</div>
            <h3>{feature.title}</h3>
            <p>{feature.description}</p>
          </div>
        ))}
      </div>

      {/* Products Section */}
      <div className="container">
        {items.map((item, index) => (
          <div className="cart" key={index}>
            <img src={item.img} alt={item.title} />
            <h2>{item.title}</h2>
            <h3>₹{item.price}/-</h3>
            <p>High-quality stock images at low prices. Discover now!</p>
            <button className="m">Order</button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Home;
