import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css'; // Optional CSS for better visuals
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store'; 
import './Milk.css';

 
  const Home = () => {
  // Accessing the milk products from the Redux store
  const milkProducts = useSelector((globalstate) => globalstate.products.milk);
  const dispatch = useDispatch();

  const items = [
    {
      title: 'Alu Fry',
      price: 350,
      img: 'alu fry.jfif',
    },
    {
      title: 'High Protein Food',
      price: 256,
      img: 'food.jfif',
    },
    {
      title: 'Fruites',
      price: 299,
      img: 'fruites.jfif',
    },
    {
      title: 'Keera Breakfast',
      price: 320,
      img: 'kira.jfif',
    },
    {
      title: 'Breakfast',
      price: 360,
      img: 'protin.jfif',
    },
    {
      title: 'Veg Item',
      price: 150,
      img: 'vege.jfif',
    },
    {
      title: 'Vegetable',
      price: 220,
      img: 'vegetables.jfif',
    },
  ];
  return (
    <>
    <div className="home-container" style={{ padding: '2rem', textAlign: 'center' }}>
      <h1 style={{color:'white'}}>Welcome to Fresh Basket App! 🍽️</h1>
      <p style={{ margin: '1rem 0', fontSize: '1.2rem',color:'white' }}>
        Delicious meals just a click away. Choose from a variety of fresh Veg, Non-Veg, Milk products, and Fruits!
      </p>

      <div className="home-buttons" style={{ marginTop: '2rem', display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
        <Link to="/veg" className="home-link">🥦 Veg Items</Link>
        <Link to="/nonVeg" className="home-link">🍗 Non-Veg Items</Link>
        <Link to="/fruites" className="home-link">🍎 Fruits</Link>
        <Link to="/milk" className="home-link">🥛 Milk</Link>
        <Link to="/cart" className="home-link">🛒 View Cart</Link>
      </div> 
export default Veg;
      <div style={{ marginTop: '3rem' }}>
        <h2 style={{color:'white'}}>Why Choose Us?</h2>
        <ul style={{ listStyleType: 'none', padding: 0, marginTop: '1rem', fontSize: '1rem' ,color:'white',fontWeight:'bold' }}>
          <li>✅ Fresh & Hygienic Food</li>
          <li>✅ Quick Delivery</li>
          <li>✅ Easy Online Ordering</li>
          <li>✅ Secure Payment</li>
        </ul>
      </div>
    </div>
<div className="milk-container">
      <h2>Milk Products</h2>
      <div className="milk-items">
        {milkProducts.map((product) => (
          <div key={product.name} className="milk-item">
            <img src={product.image} alt={product.name} className="milk-image" />
            <h3 className="milk-name">{product.name}</h3>
            <p className="milk-price">₹{product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add To Cart🛒</button> {/* Dispatching addToCart */}
          </div>
        ))}
      </div>
    </div>
<div className="h">
<h1>Veg-Food-Court</h1>
<p>(Fresh veg food)</p>
</div>
<div className="container">
{items.map((item, index) => (
  <div className="cart" key={index}>
    <img src={item.img} alt={item.title} width="200" height="200" />
    <h2>{item.title}</h2>
    <h3>Price : <span style={{ color: 'red' }}>&#x20B9;{item.price}/-</span></h3>
    <p>Free editing. High-quality stock<br />images at low prices. Discover<br />stock images, clip art, and illustrations<br />that speak to your creative soul.</p>
    <button className="m">Order</button>
  </div>
))}
</div>

</>
  );
}

export default Home;
