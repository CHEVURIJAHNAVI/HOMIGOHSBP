import { useState, useEffect } from 'react';

export default function ManagerHome() {
  const [manager, setManager] = useState("");

  useEffect(() => {
    const storedManager = sessionStorage.getItem('manager');
    if (storedManager) {
      setManager(JSON.parse(storedManager));
    }
  }, []);

  return (
    <div
      style={{
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        background: 'linear-gradient(to right, #f1f4f9, #dff1ff)',
        fontFamily: 'Segoe UI, sans-serif',
      }}
    >
      <div
        style={{
          backgroundColor: '#fff',
          padding: '40px',
          borderRadius: '15px',
          boxShadow: '0 8px 20px rgba(0, 0, 0, 0.1)',
          textAlign: 'center',
          maxWidth: '500px',
        }}
      >
        <h2 style={{ marginBottom: '15px', fontSize: '28px', color: '#333' }}>
          Welcome Back!
        </h2>
        <h3 style={{ fontSize: '24px', color: '#0073e6' }}>
          Hello, {manager.name}
        </h3>
        <p style={{ marginTop: '20px', color: '#555', fontSize: '16px' }}>
          Manage your bookings, update your profile, and serve your clients with ease.
        </p>
      </div>
    </div>
  );
}
