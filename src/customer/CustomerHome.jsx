import { useState,useEffect } from 'react';

export default function CustomerHome() 
{
     const [customer, setCustomer] = useState("");
     
     useEffect(() => {
       const storedCustomer = sessionStorage.getItem('customer');
       if (storedCustomer) {
        setCustomer(JSON.parse(storedCustomer));
       }
     }, []);
     
  return (
    <div className="home-wrapper">
      <header className="welcome-section">
        <img
          src="image.png"
          alt="Welcome Banner"
          className="banner-image"
        />
        <h3>Hello {customer.name}</h3>
      </header>

      <div className="home-container">
        <div className="admin-section card">
          <h3>Admin</h3>
          <ul>
            <li>Admin Login</li>
            <li>Add Service Provider</li>
            <li>View/Delete Service Provider</li>
            <li>View Customers</li>
            <li>Delete/Block Customer</li>
            <li>View All Services</li>
          </ul>
        </div>

        <div className="manager-section card">
          <h3>Service Provider</h3>
          <ul>
            <li>Service Provider Login</li>
            <li>View/Update Profile</li>
            <li>Add New Service</li>
            <li>View Services</li>
            <li>View Bookings</li>
          </ul>
        </div>

        <div className="customer-section card">
          <h3>Customer</h3>
          <ul>
            <li>Registration</li>
            <li>Customer Login</li>
            <li>View/Update Profile</li>
            <li>Book a Service</li>
            <li>View Booked Services</li>
          </ul>
        </div>
      </div>

      <section className="features-section">
        <h2>Key Features</h2>
        <div className="features">
          <div className="feature-card">🔒 Secure Logins</div>
          <div className="feature-card">📅 Easy Event Booking</div>
          <div className="feature-card">📊 Dashboard Analytics</div>
        </div>
      </section>

      <section className="reviews-section">
        <h2>What Our Users Say</h2>
        <div className="reviews">
          <blockquote>"Super easy to book services!" - A Customer</blockquote>
          <blockquote>"Managing home services has never been simpler." - An Event Manager</blockquote>
        </div>
      </section>

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