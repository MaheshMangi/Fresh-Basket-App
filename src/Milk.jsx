// src/components/Milk.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from './store'; 
import './Milk.css';
import { toast, ToastContainer } from 'react-toastify';

const priceRanges = [
  { value: 'Rs1 to Rs50', min: 1, max: 50 },
  { value: 'Rs51 to Rs100', min: 51, max: 100 },
  { value: 'Rs101 to Rs150', min: 101, max: 150 },
  { value: 'Rs151 to Rs250', min: 151, max: 250 },
  { value: 'Rs251 to Rs350', min: 251, max: 350 },
  { value: 'Rs351 to above', min: 351, max: Infinity },
];

const Milk = () => {
  const milkProducts = useSelector((state) => state.products.milk);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  // Filtering
  const [selectedRanges, setSelectedRanges] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  const handleCheckboxRange = (selectedRange) => {
    if (selectedRanges.includes(selectedRange)) {
      setSelectedRanges(selectedRanges.filter(r => r !== selectedRange));
    } else {
      setSelectedRanges([...selectedRanges, selectedRange]);
    }
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  const activeRanges = priceRanges.filter(range => selectedRanges.includes(range.value));
  const filteredProducts = milkProducts.filter(product => {
    const matchesPrice = selectedRanges.length === 0 || activeRanges.some(range => product.price >= range.min && product.price <= range.max);
    const matchesSearch = product.name.toLowerCase().includes(searchTerm.toLowerCase());
    return matchesPrice && matchesSearch;
  });

  // Pagination logic based on filtered products
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  return (
    <div className="milk-container">
      <h2>Milk Products</h2>
      <ToastContainer position='top-right' autoClose={2000}/>

      {/* Search Bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1);
          }}
        />
      </div>

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

      {/* Milk Product Items */}
      <div className="milk-items">
        {currentProducts.map((product, index) => (
          <div key={index} className="milk-item">
            <img src={product.image} alt={product.name} className="milk-image" />
            <h3 className="milk-name">{product.name}</h3>
            <p className="milk-price">₹{product.price}</p>
            <button onClick={() => {dispatch(addToCart(product)); toast.success("Product added to cart successfuly")}}>Add To Cart 🛒</button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          className="prev-btn"
          onClick={() => setCurrentPage(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => setCurrentPage(index + 1)}
            className={currentPage === index + 1 ? 'active' : ''}
          >
            {index + 1}
          </button>
        ))}

        <button
          className="next-btn"
          onClick={() => setCurrentPage(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Milk;