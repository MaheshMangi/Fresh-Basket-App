// src/components/Fruits.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './fruits.css'; // Import the CSS file for Fruits component
import { addToCart } from './store';


const priceRanges = [
  { value: 'Rs1 to Rs50', min: 1, max: 50 },
  { value: 'Rs51 to Rs100', min: 51, max: 100 },
  { value: 'Rs101 to Rs150', min: 101, max: 150 },
  { value: 'Rs151 to Rs250', min: 151, max: 250 },
  { value: 'Rs251 to Rs350', min: 251, max: 350 },
  { value: 'Rs351 to above', min: 351, max: Infinity },
];
const Fruits = () => {
  // Accessing the fruits products from the Redux store
  const fruitsProducts = useSelector((globalstate) => globalstate.products.fruits);
  let dispatch = useDispatch();

   // Filtering
    const [selectedRanges, setSelectedRanges] = useState([]);
  
    const handleCheckboxRange = (selectedRange) => {
      if (selectedRanges.includes(selectedRange)) {
        setSelectedRanges(selectedRanges.filter(r => r !== selectedRange));
      } else {
        setSelectedRanges([...selectedRanges, selectedRange]);
      }
      setCurrentPage(1); // Reset to page 1 on filter change
    };
  
    const activeRanges = priceRanges.filter(range => selectedRanges.includes(range.value));
    const filteredProducts = selectedRanges.length === 0
      ? fruitsProducts
      : fruitsProducts.filter(product =>
          activeRanges.some(range => product.price >= range.min && product.price <= range.max)
        );

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);

  // Calculate items for the current page
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="fruites-container">
      <h2>Fruits Products</h2>
       {/* Price Range Filters */}
      <div className="price-filters">
        {priceRanges.map(range => (
          <label key={range.value}>
            <input
              type="checkbox"
              onChange={() => handleCheckboxRange(range.value)}
              checked={selectedRanges.includes(range.value)}
            />
            {range.value}
          </label>
        ))}
      </div>
      <div className="fruites-items">
        {currentProducts.map((product, index) => (
          <div key={index} className="fruites-item">
            <img src={product.image} alt={product.name} className="fruites-image" />
            <h3 className="fruites-name">{product.name}</h3>
            <p className="fruites-price">₹{product.price}</p>
            <button onClick={() => dispatch(addToCart(product))}>Add To Cart 🛒</button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button className="prev-btn" onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            className={currentPage === index + 1 ? "active" : ""}
          >
            {index + 1}
          </button>
        ))}

        <button className="next-btn" onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default Fruits;
