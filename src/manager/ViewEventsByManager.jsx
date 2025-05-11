import { useEffect, useState } from 'react';
import axios from 'axios';
import config from '../config';

export default function ViewEventsByManager() {
  const [events, setEvents] = useState([]);
  const [error, setError] = useState('');
  const [managerId, setManagerId] = useState(null);

  useEffect(() => {
    const storedManager = sessionStorage.getItem('manager');
    if (storedManager) {
      const manager = JSON.parse(storedManager);
      setManagerId(manager.id);
      fetchEvents(manager.id);
    }
  }, []);

  const fetchEvents = async (managerId) => {
    try {
      const response = await axios.get(`${config.url}/manager/vieweventsbymanager/${managerId}`);
      setEvents(response.data);
      setError('');
    } catch (err) {
      setError('Failed to fetch your events');
      setEvents([]);
    }
  };

  const handleDelete = async (eventId) => {
    if (window.confirm('Are you sure you want to delete this event?')) {
      try {
        await axios.delete(`${config.url}/event/delete/${eventId}`);
        setEvents(events.filter(event => event.id !== eventId));
      } catch (err) {
        setError('Failed to delete event');
      }
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>My Services</h3>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {events.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No Services added yet.</p>
      ) : (
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(4, 1fr)', // Exactly 4 columns
          gap: '20px',
          padding: '20px'
        }}>
          {events.map((event) => (
            <div key={event.id} style={{
              border: '1px solid #ccc',
              borderRadius: '10px',
              padding: '16px',
              boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'space-between'
            }}>
              {event.base64Image ? (
                <img
                  src={`data:image/jpeg;base64,${event.base64Image}`}
                  alt="Event"
                  style={{ width: '100%', height: '150px', objectFit: 'cover', borderRadius: '8px' }}
                />
              ) : (
                <div style={{
                  width: '100%',
                  height: '150px',
                  backgroundColor: '#eee',
                  borderRadius: '8px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#666'
                }}>No Image</div>
              )}
              <h4 style={{ margin: '10px 0 5px 0' }}>{event.title}</h4>
              <p><strong>Category:</strong> {event.category}</p>
              <p><strong>Description:</strong> {event.description}</p>
              <p><strong>Duration:</strong> {event.capacity} hrs</p>
              <p><strong>Cost:</strong> ₹{event.cost}</p>
              
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
