import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import './admin.css';

const ViewAllProducts = () => {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState('');

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    try {
      const response = await axios.get(`${config.url}/product/viewallproducts`);
      setProducts(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch products. ' + err.message);
    }
  };

  return (
    <div className="product-grid-container">
      <h3 className="product-heading">All Services</h3>
      {error && <p className="error-message">{error}</p>}

      <div className="product-grid">
        {products.map((product) => (
          <div key={product.id} className="product-card">
            <img
              src={`${config.url}/product/displayproductimage?id=${product.id}`}
              alt="Product"
              className="product-image"
            />
            <div className="product-details">
              <h5>{product.name}</h5>
              <p><strong>Category:</strong> {product.category}</p>
              <p><strong>Description:</strong> {product.description}</p>
              <p><strong>Cost:</strong> ₹{product.cost}</p>
              <a href={product.url} target="_blank" rel="noopener noreferrer" className="product-link">
                Visit Product Page
              </a>
            </div>
          </div>
        ))}
      </div>
      <footer className="footer">
  <div className="footer-links">
    <div>
      <h4>Quick Links</h4>
      <ul>
        <li><a href="/about">About Us</a></li>
        <li><a href="/contact">Contact Us</a></li>
        <li><a href="/terms">Terms & Conditions</a></li>
        <li><a href="/privacy">Privacy Policy</a></li>
      </ul>
    </div>
    <div>
      <h4>Follow Us</h4>
      <div className="social-icons">
        <a href="https://facebook.com" target="_blank" rel="noreferrer"> Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
      </div>
    </div>
  </div>
  <p>&copy; 2025 Service Provider Portal. All rights reserved.</p>
</footer>
    </div>
    
    
  );
};

export default ViewAllProducts;
