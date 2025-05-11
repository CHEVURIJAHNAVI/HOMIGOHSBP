import { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import config from '../config';
import './customer.css';

export default function ViewAllEvents() {
  const [events, setEvents] = useState([]);
  const [searchTerms, setSearchTerms] = useState({ category: '' });

  const navigate = useNavigate();

  useEffect(() => {
    fetchAllEvents();
  }, []);

  const fetchAllEvents = async () => {
    try {
      const response = await fetch(`${config.url}/customer/viewallevents`);
      const data = await response.json();
      setEvents(data);
    } catch (error) {
      console.error('Error fetching events:', error);
    }
  };

  const handleBookClick = (eventId) => {
    const customer = JSON.parse(sessionStorage.getItem("customer"));
    if (!customer || !customer.id) {
      alert("Customer not logged in");
      return;
    }
    navigate(`/bookevent?eventid=${eventId}`);
  };

  const handleSearchChange = (e) => {
    setSearchTerms({ category: e.target.value });
  };

  const filteredEvents = events.filter(event =>
    event.category?.toLowerCase().includes(searchTerms.category.toLowerCase())
  );

  return (
    <div className="event-container">
      <h3 className="event-heading">Available Services</h3>

      <div className="search-bar">
        <input
          type="text"
          placeholder="Search by Category"
          value={searchTerms.category}
          onChange={handleSearchChange}
        />
      </div>

      <div className="event-cards-container">
        {filteredEvents.length > 0 ? (
          filteredEvents.map(event => (
            <div className="event-card" key={event.id}>
              <div className="event-card-image">
                {event.base64Image ? (
                  <img
                    src={`data:image/jpeg;base64,${event.base64Image}`}
                    alt="Event"
                    className="event-image"
                  />
                ) : (
                  <span>No Image</span>
                )}
              </div>
              <div className="event-card-details">
                <h4 className="event-card-title">{event.title || "N/A"}</h4>
                <p className="event-card-description">{event.description || "No description available"}</p>
                <p className="event-card-duration">Duration: {event.duration || "N/A"}</p>
                <p className="event-card-cost">Cost: ${event.cost || "N/A"}</p>
                <button
                  className="book-button"
                  onClick={() => handleBookClick(event.id)}
                >
                  Book Now
                </button>
              </div>
            </div>
          ))
        ) : (
          <p>No matching events found.</p>
        )}
      </div>
    </div>
  );
}
