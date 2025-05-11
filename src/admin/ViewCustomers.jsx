import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './ViewCustomer.css';

export default function ViewCustomers() {
    const [customers, setCustomers] = useState([]);
    const [error, setError] = useState("");

    const displayCustomers = async () => {
        try {
            const response = await axios.get(`${config.url}/admin/viewallcustomers`);
            setCustomers(response.data);
        } catch (err) {
            setError("Failed to fetch customers data ... " + err.message);
        }
    };

    useEffect(() => {
        displayCustomers();
    }, []);

    const deleteCustomer = async (cid) => {
        try {
            const response = await axios.delete(`${config.url}/admin/deletecustomer?cid=${cid}`);
            toast.success(response.data);
            displayCustomers();
        } catch (err) {
            setError("Unexpected Error Occurred... " + err.message);
            toast.error("Deletion failed: " + err.message);
        }
    };

    return (
        <div className="customer-container">
            <h3 className="customer-heading">
                <u>View All Customers</u>
            </h3>

            <ToastContainer position="top-center" autoClose={4000} />

            {error ? (
                <p className="error-message">{error}</p>
            ) : customers.length === 0 ? (
                <p className="error-message">No Customer Data Found</p>
            ) : (
                <div className="customer-grid">
                    {customers.map((customer) => (
                        <div key={customer.id} className="customer-card">
                            <h5>{customer.name}</h5>
                            <p><strong>ID:</strong> {customer.id}</p>
                            <p><strong>Gender:</strong> {customer.gender}</p>
                            <p><strong>DOB:</strong> {customer.dob}</p>
                            <p><strong>Email:</strong> {customer.email}</p>
                            <p><strong>Username:</strong> {customer.username}</p>
                            <p><strong>Mobile:</strong> {customer.mobileno}</p>
                            <p><strong>Location:</strong> {customer.location}</p>
                            <Button
                                variant="outlined"
                                color="error"
                                startIcon={<DeleteIcon />}
                                onClick={() => deleteCustomer(customer.id)}
                            >
                                Delete
                            </Button>
                        </div>
                    ))}
                </div>
            )}
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
