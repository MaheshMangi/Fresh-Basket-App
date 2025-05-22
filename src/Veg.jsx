import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './Veg.css';
import { addToCart } from './store';
import { AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import { toast, ToastContainer } from 'react-toastify';

const Veg = () => {
  const vegProducts = useSelector((globalstate) => globalstate.products.Veg);
  const dispatch = useDispatch();

  const [favorites, setFavorites] = useState({});
  const [currentPage, setCurrentPage] = useState(1);
  const [priceLimit, setPriceLimit] = useState(200); // Slider default
  const [searchTerm, setSearchTerm] = useState(''); // Search term state

  const toggleFavorite = (index) => {
    setFavorites((prevFavorites) => ({
      ...prevFavorites,
      [index]: !prevFavorites[index],
    }));
  };

  // Filter products by price and search term (case-insensitive)
  const filteredProducts = vegProducts.filter(product => 
    product.price <= priceLimit &&
    product.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  // Pagination logic
  const itemsPerPage = 8;
  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastProduct = currentPage * itemsPerPage;
  const indexOfFirstProduct = indexOfLastProduct - itemsPerPage;
  const currentProducts = filteredProducts.slice(indexOfFirstProduct, indexOfLastProduct);

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const pageNumbers = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="veg-container">
      <h2>Vegetable Products</h2>
      <ToastContainer position='top-right' autoClose={3000}/>

      {/* Search Bar */}
      <div className="search-bar" style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search vegetables..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // reset to page 1 when searching
          }}
          style={{ padding: '8px', width: '100%', maxWidth: '300px' }}
        />
      </div>

      {/* Price Range Slider */}
      <div className="price-range-slider">
        <label htmlFor="priceRange">Filter by Price: ₹1 to ₹{priceLimit}</label>
        <input
          type="range"
          id="priceRange"
          min="1"
          max="200"
          value={priceLimit}
          onChange={(e) => {
            setPriceLimit(Number(e.target.value));
            setCurrentPage(1); // reset to page 1 when filtering
          }}
        />
      </div>

      <div className="veg-items">
        {currentProducts.length > 0 ? (
          currentProducts.map((product, index) => (
            <div key={index} className="veg-item">
              <div className="fav-icon" onClick={() => toggleFavorite(index)}>
                {favorites[index] ? (
                  <AiFillHeart className="favorite" />
                ) : (
                  <AiOutlineHeart className="not-favorite" />
                )}
              </div>
              <img src={product.image} alt={product.name} className="veg-image" />
              <h3 className="veg-name">{product.name}</h3>
              <p className="veg-price">₹{product.price}</p>
              <button onClick={() => {dispatch(addToCart(product)); toast.success("Product added to cart successfuly")}}>Add To Cart 🛒</button>
            </div>
          ))
        ) : (
          <p>No products found matching your criteria.</p>
        )}
      </div>

      {/* Pagination Controls */}
      <div className="pagination">
        <button
          onClick={() => handlePageChange(currentPage - 1)}
          disabled={currentPage === 1}
        >
          Previous
        </button>

        {pageNumbers.map((pageNumber) => (
          <button
            key={pageNumber}
            onClick={() => handlePageChange(pageNumber)}
            className={`page-number ${currentPage === pageNumber ? 'active' : ''}`}
          >
            {pageNumber}
          </button>
        ))}

        <button
          onClick={() => handlePageChange(currentPage + 1)}
          disabled={currentPage === totalPages}
        >
          Next
        </button>
      </div>
    </div>
  );
};

export default Veg;
