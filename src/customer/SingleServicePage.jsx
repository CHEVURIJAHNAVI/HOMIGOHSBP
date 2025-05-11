import { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import config from '../config';
import './customer.css'; // You’ll need to create this for layout & styles

export default function SingleServicePage() {
  const { eventId } = useParams();
  const [event, setEvent] = useState(null);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    fetchEventDetails();
  }, []);

  const fetchEventDetails = async () => {
    try {
      const response = await fetch(`${config.url}/customer/service/${eventId}`);
      const data = await response.json();
      setEvent(data);
    } catch (error) {
      console.error('Error fetching event:', error);
    }
  };

  const handleBookNow = () => {
    const customer = JSON.parse(sessionStorage.getItem("customer"));
    if (!customer || !customer.id) {
      alert("Customer not logged in");
      return;
    }
    navigate(`/bookevent?eventid=${eventId}`);
  };

  const handleSaveForLater = () => {
    // Example saving logic (add your backend call if needed)
    setMessage('Successfully service is saved to book later');
    setTimeout(() => setMessage(''), 3000);
  };

  if (!event) return <div>Loading event details...</div>;

  return (
    <div className="event-detail-container">
      {message && <div className="success-toast">{message}</div>}

      <div className="event-detail-image">
        {event.base64Image ? (
          <img
            src={`data:image/jpeg;base64,${event.base64Image}`}
            alt="Event"
          />
        ) : (
          <div className="no-image">No Image Available</div>
        )}
      </div>

      <div className="event-detail-info">
        <h2>{event.title}</h2>
        <p className="description">{event.description}</p>
        <p><strong>Duration:</strong> {event.duration || 'N/A'}</p>
        <p><strong>Cost:</strong> ${event.cost || 'N/A'}</p>
        <div className="button-group">
          <button onClick={handleSaveForLater} className="save-button">Save for Later</button>
          <button onClick={handleBookNow} className="book-button">Book Now</button>
        </div>
      </div>
    </div>
  );
}
