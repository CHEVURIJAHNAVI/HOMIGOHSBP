import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

export default function AddEvent() {
  const [formData, setFormData] = useState({
    category: '',
    title: '',
    description: '',
    capacity: '',
    cost: ''
  });

  const [eventImage, setEventImage] = useState(null);
  const [manager, setManager] = useState("");
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    const storedManager = sessionStorage.getItem('manager');
    if (storedManager) {
      setManager(JSON.parse(storedManager));
    }
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleImageChange = (e) => {
    setEventImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = new FormData();
    data.append('category', formData.category);
    data.append('title', formData.title);
    data.append('description', formData.description);
    data.append('capacity', formData.capacity);
    data.append('cost', formData.cost);
    data.append('manager_id', manager.id);
    data.append('eventimage', eventImage);

    try {
      const response = await axios.post(`${config.url}/manager/addevent`, data, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      if (response.status === 200) {
        setMessage(response.data);
        setError('');
        setFormData({
          category: '',
          title: '',
          description: '',
          capacity: '',
          cost: ''
        });
        setEventImage(null);
      }
    } catch (error) {
      setMessage('');
      setError(error.response?.data || "An unexpected error occurred.");
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>Add New Service</h3>
      {
        message ?
          <p style={{ textAlign: "center", color: "green", fontWeight: "bolder" }}>{message}</p> :
          <p style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>{error}</p>
      }
      <form onSubmit={handleSubmit} encType="multipart/form-data">
        <div>
          <label>Category</label>
          <input type="text" id="category" value={formData.category} onChange={handleChange} required />
        </div>
        <div>
          <label>Title</label>
          <input type="text" id="title" value={formData.title} onChange={handleChange} required />
        </div>
        <div>
          <label>Description</label>
          <textarea id="description" value={formData.description} onChange={handleChange} required />
        </div>
        <div>
          <label>Duration</label>
          <input type="number" id="capacity" value={formData.capacity} onChange={handleChange} required />
        </div>
        <div>
          <label>Cost</label>
          <input type="number" step="0.01" id="cost" value={formData.cost} onChange={handleChange} required />
        </div>
        <div>
          <label>Event Image</label>
          <input type="file" onChange={handleImageChange} required />
        </div>
        <button type="submit">Add Service</button>
      </form>
    </div>
  );
}
