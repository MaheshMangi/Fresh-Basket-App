import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import './fruits.css'; // Import the CSS file for Fruits component
import { addToCart } from './store';
import { toast, ToastContainer } from 'react-toastify';

const priceRanges = [
  { value: 'Rs1 to Rs50', min: 1, max: 50 },
  { value: 'Rs51 to Rs100', min: 51, max: 100 },
  { value: 'Rs101 to Rs150', min: 101, max: 150 },
  { value: 'Rs151 to Rs250', min: 151, max: 250 },
  { value: 'Rs251 to Rs350', min: 251, max: 350 },
  { value: 'Rs351 to above', min: 351, max: Infinity },
];

const Fruits = () => {
  const fruitsProducts = useSelector((globalstate) => globalstate.products.fruits);
  const dispatch = useDispatch();

  // Filtering states
  const [selectedRanges, setSelectedRanges] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  // Pagination state
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 8;

  const handleCheckboxRange = (selectedRange) => {
    if (selectedRanges.includes(selectedRange)) {
      setSelectedRanges(selectedRanges.filter(r => r !== selectedRange));
    } else {
      setSelectedRanges([...selectedRanges, selectedRange]);
    }
    setCurrentPage(1); // Reset to page 1 on filter change
  };

  const activeRanges = priceRanges.filter(range => selectedRanges.includes(range.value));

  // Filter products based on price ranges and search term (case-insensitive)
  const filteredProducts = fruitsProducts.filter(product => {
    // Check price range filter
    const priceMatch = selectedRanges.length === 0
      ? true
      : activeRanges.some(range => product.price >= range.min && product.price <= range.max);

    // Check search term filter
    const searchMatch = product.name.toLowerCase().includes(searchTerm.toLowerCase());

    return priceMatch && searchMatch;
  });

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
      <ToastContainer position='top-right' autoClose={3000} />

      {/* Search Bar */}
      <div className="search-bar" style={{ marginBottom: '1rem' }}>
        <input
          type="text"
          placeholder="Search fruits..."
          value={searchTerm}
          onChange={(e) => {
            setSearchTerm(e.target.value);
            setCurrentPage(1); // Reset page when search changes
          }}
          style={{ padding: '8px', width: '100%', maxWidth: '300px' }}
        />
      </div>

      {/* Price Range Filters */}
      <div className="price-filters">
        {priceRanges.map(range => (
          <label key={range.value} style={{ marginRight: '1rem' }}>
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
        {currentProducts.length > 0 ? (
          currentProducts.map((product, index) => (
            <div key={index} className="fruites-item">
              <img src={product.image} alt={product.name} className="fruites-image" />
              <h3 className="fruites-name">{product.name}</h3>
              <p className="fruites-price">₹{product.price}</p>
              <button onClick={() => { dispatch(addToCart(product)); toast.success("Product added to cart successfuly") }}>
                Add To Cart 🛒
              </button>
            </div>
          ))
        ) : (
          <p>No products found matching your criteria.</p>
        )}
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
