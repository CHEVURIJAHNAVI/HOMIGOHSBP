import { useState } from 'react';
import axios from 'axios';
import config from '../config';
import { useTranslation } from 'react-i18next';

export default function CustomerRegistration() {
  // Initialize formData state with required keys and empty values
  const [formData, setFormData] = useState({
    name: '',
    gender: '',
    dob: '',
    email: '',
    username: '',
    password: '',
    mobileno: '',
    location: ''
  });

  // Message and error state variables
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  // Translation hook
  const { t } = useTranslation();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(`${config.url}/customer/registration`, formData);
      if (response.status === 200) { // if successfully added
        setMessage(response.data);
        setFormData({
          name: '',
          gender: '',
          dob: '',
          email: '',
          username: '',
          password: '',
          mobileno: '',
          location: ''
        });
      }
    } catch (error) {
      if (error.response) {
        setMessage("");
        setError(error.response.data);
      } else {
        setMessage("");
        setError(t('unexpectedError'));
      }
    }
  };

  return (
    <div>
      <h3 style={{ textAlign: "center", textDecoration: "underline" }}>{t('customerRegistration')}</h3>
      {message ?
        <p style={{ textAlign: "center", color: "green", fontWeight: "bolder" }}>{message}</p> :
        <p style={{ textAlign: "center", color: "red", fontWeight: "bolder" }}>{error}</p>
      }
      <form onSubmit={handleSubmit}>
        <div>
          <label>{t('fullName')}</label>
          <input type="text" id="name" value={formData.name} onChange={handleChange} required />
        </div>
        <div>
          <label>{t('gender')}</label>
          <select id="gender" value={formData.gender} onChange={handleChange} required>
            <option value="">{t('selectGender')}</option>
            <option value="male">{t('male')}</option>
            <option value="female">{t('female')}</option>
            <option value="other">{t('other')}</option>
          </select>
        </div>
        <div>
          <label>{t('dateOfBirth')}</label>
          <input type="date" id="dob" value={formData.dob} onChange={handleChange} required />
        </div>
        <div>
          <label>{t('email')}</label>
          <input type="email" id="email" value={formData.email} onChange={handleChange} required />
        </div>
        <div>
          <label>{t('username')}</label>
          <input type="text" id="username" value={formData.username} onChange={handleChange} required />
        </div>
        <div>
          <label>{t('password')}</label>
          <input type="password" id="password" value={formData.password} onChange={handleChange} required />
        </div>
        <div>
          <label>{t('mobileNo')}</label>
          <input type="number" id="mobileno" value={formData.mobileno} onChange={handleChange} required />
        </div>
        <div>
          <label>{t('location')}</label>
          <input type="text" id="location" value={formData.location} onChange={handleChange} required />
        </div>
        <button type="submit">{t('register')}</button>
      </form>
    </div>
  );
}
