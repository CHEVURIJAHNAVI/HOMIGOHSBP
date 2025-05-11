import { useState } from 'react';
import axios from 'axios';
import config from '../config';
import { useTranslation } from 'react-i18next'; // Import translation hook
import './Contact.css'; // Ensure your CSS supports the new section

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    subject: '',
    message: '',
    email: '',
    mobileno: '',
    location: ''
  });

  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const { t } = useTranslation(); // Initialize translation hook

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${config.url}/sendemail`, formData);
      setMessage(response.data);
      setError('');
      setFormData({
        name: '',
        subject: '',
        message: '',
        email: '',
        mobileno: '',
        location: ''
      });
    } catch (err) {
      setError(t('failedToSendEmail')); // Use translation for error
      setMessage('');
      console.error(err);
    }
  };

  const faqList = [
    {
      question: t('howToBookService'),
      answer: t('bookServiceAnswer')
    },
    {
      question: t('rescheduleCancelBooking'),
      answer: t('rescheduleCancelAnswer')
    },
    {
      question: t('areProvidersVerified'),
      answer: t('providerVerificationAnswer')
    },
    {
      question: t('serviceHours'),
      answer: t('serviceHoursAnswer')
    },
    {
      question: t('contactSupport'),
      answer: t('contactSupportAnswer')
    },
    {
      question: t('isPaymentSecure'),
      answer: t('paymentSecurityAnswer')
    },
    {
      question: t('serviceWarranty'),
      answer: t('serviceWarrantyAnswer')
    },
    {
      question: t('feedbackAfterService'),
      answer: t('feedbackAnswer')
    }
  ];

  return (
    <div className="contact-container">
      <h3 className="contact-title">{t('needHelp')}</h3>
      <div className="contact-flex-wrapper">
        
        {/* Assistance Section */}
        <div className="faq-card-section">
          <h4 className="section-subtitle">{t('howCanWeAssist')}</h4>
          {faqList.map((faq, index) => (
            <div className="faq-card" key={index}>
              <h5>{faq.question}</h5>
              <p>{faq.answer}</p>
            </div>
          ))}
        </div>

        {/* Contact Form Section */}
        <div className="form-wrapper">
          <h4 className="section-subtitle">{t('contactUs')}</h4>
          {message && <p className="success-message">{message}</p>}
          {error && <p className="error-message">{error}</p>}
          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-group">
              <label>{t('name')}</label>
              <input type="text" id="name" value={formData.name} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>{t('subject')}</label>
              <input type="text" id="subject" value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>{t('message')}</label>
              <textarea id="message" value={formData.message} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>{t('email')}</label>
              <input type="email" id="email" value={formData.email} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>{t('mobileNo')}</label>
              <input type="tel" id="mobileno" value={formData.mobileno} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label>{t('location')}</label>
              <input type="text" id="location" value={formData.location} onChange={handleChange} required />
            </div>
            <button className="submit-button" type="submit">{t('submit')}</button>
          </form>
        </div>

      </div>
    </div>
  );
}
