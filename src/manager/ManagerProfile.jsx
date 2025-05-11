import { useState, useEffect } from 'react';

export default function ManagerProfile() {
  const [manager, setManager] = useState(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const storedManager = sessionStorage.getItem('manager');
    if (storedManager) {
      setManager(JSON.parse(storedManager));
      setTimeout(() => setIsVisible(true), 100); // slight delay for fade-in
    }
  }, []);

  if (!manager) {
    return (
      <div style={{ textAlign: 'center', marginTop: '50px' }}>
        Loading profile...
      </div>
    );
  }

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        marginTop: '20px',
        fontFamily: 'Arial, sans-serif',
      }}
    >
      <h2 style={{ fontSize: '26px', color: '#333', marginBottom: '20px' }}>
        Service Provider Profile
      </h2>

      <div
        style={{
          backgroundColor: '#f9f9f9',
          border: '1px solid #ccc',
          borderRadius: '10px',
          padding: '20px',
          width: '350px',
          boxShadow: '0 4px 12px rgba(0, 0, 0, 0.1)',
          opacity: isVisible ? 1 : 0,
          transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
          transition: 'opacity 0.6s ease, transform 0.6s ease',
        }}
        onMouseEnter={e => {
          e.currentTarget.style.transform = 'scale(1.03)';
          e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.15)';
        }}
        onMouseLeave={e => {
          e.currentTarget.style.transform = 'scale(1)';
          e.currentTarget.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.1)';
        }}
      >
        <p><strong>Name:</strong> {manager.name}</p>
        <p><strong>Gender:</strong> {manager.gender}</p>
        <p><strong>Date of Birth:</strong> {manager.dob}</p>
        <p><strong>Email:</strong> {manager.email}</p>
        <p><strong>Username:</strong> {manager.username}</p>
        <p><strong>Mobile No:</strong> {manager.mobileno}</p>
        <p><strong>Company Name:</strong> {manager.company_name}</p>
        <p><strong>Company Location:</strong> {manager.company_location}</p>
      </div>
    </div>
  );
}
