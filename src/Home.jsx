import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => { 
  const features = [
    { icon: '🚀', title: 'Fast Delivery', description: 'Delivered within 30 minutes!' },
    { icon: '🥗', title: 'Healthy Food', description: 'Fresh and organic ingredients.' },
    { icon: '🌱', title: 'Organic Items', description: 'Sourced from local farms.' },
  ];

  const categories = [
  { name: 'Veg', icon: '🥦', link: '/veg', color: '#c8e6c9' },
  { name: 'Non-Veg', icon: '🍗', link: '/nonVeg', color: '#ffcdd2' },
  { name: 'Fruits', icon: '🍎', link: '/fruites', color: '#ffe082' },
  { name: 'Milk', icon: '🥛', link: '/milk', color: '#b3e5fc' },
];

const restaurants = [
  {
    name: 'The French Laundry',
    image: 'public/The French Laundry.jpg',
    description: 'A world-renowned restaurant in California offering fine French cuisine.',
  },
  {
    name: 'Eleven Madison Park',
    image: 'public/Eleven Madison Park.jpeg',
    description: 'Elegant New York dining experience with modern and seasonal tasting menus.',
  },
  {
    name: 'Gaggan',
    image: 'public/Gaggan.jpg',
    description: 'Bangkok-based progressive Indian cuisine that redefines flavor and style.',
  },
   
  {
    name: 'Osteria Francescana',
    image: 'public/Osteria Francescana.jpg',
    description: 'Three-Michelin-star Italian restaurant by Massimo Bottura in Modena.',
  },
  {
    name: 'Le Bernardin',
    image: 'public/Le Bernardin.jpg',
    description: 'Seafood-focused, French fine dining in the heart of New York City.',
  },
  {
    name: 'Per Se',
    image: 'public/Per Se.jpg',
    description: 'Thomas Keller’s upscale NYC restaurant with beautiful Central Park views.',
  },
  {
    name: 'Quintonil',
    image: 'public/Quintonil.jpg',
    description: 'Contemporary Mexican cuisine in Mexico City with local, sustainable ingredients.',
  },
  {
    name: 'Mugaritz',
    image: 'public/Mugaritz.jpg',
    description: 'Avant-garde Spanish restaurant near San Sebastián, known for creativity.',
  },
  {
    name: 'Pujol',
    image: 'public/Pujol.jpg',
    description: 'Iconic Mexican fine dining with a focus on native ingredients and innovation.',
  },
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
<div className="marquee-container">
  <div className="marquee-content">
    <img src="alu fry.jfif" alt="Item 1" />
    <img src="food.jfif" alt="Item 2" />
    <img src="fruites.jfif" alt="Item 3" />
    <img src="kira.jfif" alt="Item 4" /> 
    <img src="vege.jfif" alt="Item 6" />
    <img src="vegetables.jfif" alt="Item 7" /> 
    <img src="public/nonVegImages/Fish Curry.jpg" alt="Item 9" />
    <img src="public/MilkImages/Buffalo Milk.jpg" alt="Item 9" />  
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

 <div className="categories-section">
      <h2 className="section-title">Explore Our Categories</h2>
      <div className="categories-container">
        {categories.map((cat, index) => (
          <Link
            to={cat.link}
            className="category-card"
            style={{ backgroundColor: cat.color }}
            key={index}
          >
            <span className="category-icon">{cat.icon}</span>
            <h3>{cat.name}</h3>
            <p>Browse the best {cat.name.toLowerCase()} items</p>
          </Link>
        ))}
      </div>
    </div>

<div className="restaurant-section">
      <h2>🌟 Famous Restaurants Around the World</h2>
      <div className="restaurant-grid">
        {restaurants.map((rest, idx) => (
          <div key={idx} className="restaurant-card">
            <img src={rest.image} alt={rest.name} />
            <h3>{rest.name}</h3>
            <p>{rest.description}</p>
          </div>
        ))}
      </div>
    </div>
      
     
    </>
  );
};

export default Home;
