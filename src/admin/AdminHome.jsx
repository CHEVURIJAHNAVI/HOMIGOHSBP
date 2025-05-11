import React, { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';
import './admin.css'; // Make sure this file exists

export default function AdminHome() {
  const [customerCount, setCustomerCount] = useState(0);
  const [managerCount, setManagerCount] = useState(0);
  const [eventCount, setEventCount] = useState(0);

  useEffect(() => {
    const fetchCounts = async () => {
      try {
        const customerRes = await axios.get(`${config.url}/admin/customercount`);
        const managerRes = await axios.get(`${config.url}/admin/managercount`);
        const eventRes = await axios.get(`${config.url}/admin/eventcount`);

        setCustomerCount(customerRes.data);
        setManagerCount(managerRes.data);
        setEventCount(eventRes.data);
      } catch (error) {
        console.error("Error fetching counts:", error);
      }
    };

    fetchCounts();
  }, []);

  return (
    <div className="admin-home-container">
      

      <h2 className="dashboard-title">Welcome to Admin Dashboard</h2>

      <div className="count-cards">
        <div className="count-card">
          <h3>Customers</h3>
          <p className="count-number" style={{ color: '#007bff' }}>{customerCount}</p>
        </div>
        <div className="count-card">
          <h3>Managers</h3>
          <p className="count-number" style={{ color: '#28a745' }}>{managerCount}</p>
        </div>
        <div className="count-card">
          <h3>Events</h3>
          <p className="count-number" style={{ color: '#ff5722' }}>{eventCount}</p>
        </div>
      </div>
<img 
        src="image.png" 
        alt="Admin Dashboard"
        className="admin-banner"
      />
      <section className="admin-features">
        <h3>Key Admin Features</h3>
        <ul>
          <li>Manage Event Managers & Customers</li>
          <li>Monitor Bookings and Event Stats</li>
          <li>View, Delete, and Block Users</li>
          <li>Secure Dashboard Controls</li>
        </ul>
      </section>
      <br/>
      <br/>
      <br/>
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
        <a href="https://facebook.com" target="_blank" rel="noreferrer">🌐 Facebook</a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">🐦 Twitter</a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">📸 Instagram</a>
        <a href="https://linkedin.com" target="_blank" rel="noreferrer">💼 LinkedIn</a>
      </div>
    </div>
  </div>
  <p>&copy; 2025 Service Provider Portal. All rights reserved.</p>
</footer>
    </div>
  );
}
