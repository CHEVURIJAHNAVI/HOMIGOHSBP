import { useEffect, useState } from "react";
import axios from "axios";
import config from "../config";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import './style.css'; // Ensure this contains card styles

export default function ViewManagers() {
  const [managers, setManagers] = useState([]);
  const [error, setError] = useState("");

  const displayManagers = async () => {
    try {
      const response = await axios.get(`${config.url}/admin/viewalleventmanagers`);
      setManagers(response.data);
    } catch (err) {
      setError("Failed to fetch event managers data ... " + err.message);
    }
  };

  useEffect(() => {
    displayManagers();
  }, []);

  const deleteManager = async (mid) => {
    try {
      const response = await axios.delete(`${config.url}/admin/deletemanager?mid=${mid}`);
      toast.success(response.data);
      displayManagers();
    } catch (err) {
      console.error(err);
      setError("Unexpected Error Occurred... " + err.message);
      toast.error("Deletion failed: " + err.message);
    }
  };

  return (
    <div className="view-managers-container">
      <ToastContainer position="top-center" autoClose={4000} />

      <h3 className="view-title"><u>View All Service Providers</u></h3>

      {error ? (
        <p className="error-message">{error}</p>
      ) : managers.length === 0 ? (
        <p className="error-message">No Service Providers Data Found</p>
      ) : (
        <div className="manager-card-grid">
          {managers.map((manager) => (
            <div key={manager.id} className="manager-card">
              <img 
                src={`https://ui-avatars.com/api/?name=${encodeURIComponent(manager.name)}&background=00004d&color=fff&size=128`} 
                alt="avatar"
                className="manager-avatar"
              />
              <div className="manager-details">
                <h4>{manager.name}</h4>
                <p><strong>ID:</strong> {manager.id}</p>
                <p><strong>Gender:</strong> {manager.gender}</p>
                <p><strong>DOB:</strong> {manager.dob}</p>
                <p><strong>Email:</strong> {manager.email}</p>
                <p><strong>Username:</strong> {manager.username}</p>
                <p><strong>Mobile:</strong> {manager.mobileno}</p>
                <p><strong>Company:</strong> {manager.company_name}</p>
                <p><strong>Location:</strong> {manager.company_location}</p>
              </div>
              <Button
                variant="outlined"
                color="error"
                startIcon={<DeleteIcon />}
                onClick={() => deleteManager(manager.id)}
                className="delete-btn"
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
