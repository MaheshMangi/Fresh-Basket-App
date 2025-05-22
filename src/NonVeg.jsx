// src/components/Veg.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './nonVeg.css';
import { addToCart } from './store';
import { toast, ToastContainer } from 'react-toastify';

const NonVeg = () => {
  const vegProducts = useSelector((state) => state.products.nonVeg);
  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [searchTerm, setSearchTerm] = useState('');

  // Apply filters
  const filteredProducts = vegProducts.filter((product) => {
    const price = product.price;
    const min = minPrice ? parseInt(minPrice) : 0;
    const max = maxPrice ? parseInt(maxPrice) : Infinity;

    return (
      price >= min &&
      price <= max &&
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = filteredProducts.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (pageNumber) => {
    if (pageNumber >= 1 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="nonVeg-container">
      <h2>Non-Veg Products</h2>
      <ToastContainer position="top-right" autoClose={2000} />

      {/* Filter Inputs */}
      <div className="filter-section">
        <input
          type="text"
          placeholder="Search by name"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
        />
        <button onClick={() => setCurrentPage(1)}>Apply Filters</button>
      </div>

      {/* Product List */}
      <div className="nonVeg-items">
        {currentItems.length === 0 ? (
          <p>No products match the selected filters.</p>
        ) : (
          currentItems.map((product, index) => (
            <div key={index} className="nonVeg-item">
              <img src={product.image} alt={product.name} className="nonVeg-image" />
              <h3 className="nonVeg-name">{product.name}</h3>
              <p className="nonVeg-price">₹{product.price}</p>
              <button
                onClick={() => {
                  dispatch(addToCart(product));
                  toast.success(`${product.name} added to cart successfully`);
                }}
              >
                Add To Cart 🛒
              </button>
            </div>
          ))
        )}
      </div>

      {/* Pagination */}
      <div className="pagination">
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>
        {Array.from({ length: totalPages }, (_, i) => i + 1).map((pageNum) => (
          <button
            key={pageNum}
            onClick={() => goToPage(pageNum)}
            style={{ fontWeight: currentPage === pageNum ? 'bold' : 'normal' }}
          >
            {pageNum}
          </button>
        ))}
        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default NonVeg;
