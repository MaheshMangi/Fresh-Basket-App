// src/components/Veg.jsx
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './nonVeg.css'; // Import the CSS file for Veg component
import { addToCart } from './store';
import { toast, ToastContainer } from 'react-toastify';

const nonVeg = () => {
  // Accessing the veg products from the Redux store
  const vegProducts = useSelector((globalstate) => globalstate.products.nonVeg);
  let dispatch = useDispatch();

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;
  const totalPages = Math.ceil(vegProducts.length / itemsPerPage);

  // Calculate items for the current page
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentItems = vegProducts.slice(startIndex, endIndex);

  const goToPage = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div className="nonVeg-container">
      <h2>Non-Veg Products</h2>
       <ToastContainer position='top-right' autoClose={2000}/>
      <div className="nonVeg-items">
        {currentItems.map((product, index) => (
          <div key={index} className="nonVeg-item">
            <img src={product.image} alt={product.name} className="nonVeg-image" />
            <h3 className="nonVeg-name">{product.name}</h3>
            <p className="nonVeg-price">₹{product.price}</p>
            <button onClick={() => {dispatch(addToCart(product)); toast.success("Product added to cart successfuly")}}>Add To Cart 🛒</button>
          </div>
        ))}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={() => goToPage(currentPage - 1)} disabled={currentPage === 1}>
          Previous
        </button>

        {Array.from({ length: totalPages }, (_, index) => (
          <button
            key={index + 1}
            onClick={() => goToPage(index + 1)}
            style={{
              margin: '0 5px',
              fontWeight: currentPage === index + 1 ? 'bold' : 'normal',
            }}
          >
            {index + 1}
          </button>
        ))}

        <button onClick={() => goToPage(currentPage + 1)} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </div>
  );
};

export default nonVeg;
