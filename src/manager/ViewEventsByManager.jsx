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
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>My Services</h3>
      {error && <p style={{ color: 'red', textAlign: 'center' }}>{error}</p>}
      {events.length === 0 ? (
        <p style={{ textAlign: 'center' }}>No Services added yet.</p>
      ) : (
        <table style={{ margin: '0 auto', width: '95%', textAlign: 'left', borderCollapse: 'collapse' }} border="1">
          <thead>
            <tr>
              <th>Service ID</th>
              <th>Image</th>
              <th>Title</th>
              <th>Category</th>
              <th>Description</th>
              <th>Duration</th>
              <th>Cost</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {events.map((event) => (
              <tr key={event.id}>
                <td>{event.id}</td>
                <td>
                  {event.base64Image ? (
                    <img
                      src={`data:image/jpeg;base64,${event.base64Image}`}
                      alt="Event"
                      style={{ width: '100px', height: 'auto', borderRadius: '8px' }}
                    />
                  ) : (
                    <span>No Image</span>
                  )}
                </td>
                <td>{event.title}</td>
                <td>{event.category}</td>
                <td>{event.description}</td>
                <td>{event.capacity} hrs</td>
                <td>₹{event.cost}</td>
                <td>
                  <button onClick={() => handleDelete(event.id)} style={{ color: 'white', backgroundColor: 'red', border: 'none', borderRadius: '4px', padding: '5px 10px' }}>
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
