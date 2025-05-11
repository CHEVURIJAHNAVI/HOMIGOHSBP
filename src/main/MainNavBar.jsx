import { Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';  // Import useTranslation hook
import { useState } from 'react';
import Home from './Home';
import About from './About';
import './style.css';
import CustomerLogin from './../customer/CustomerLogin';
import CustomerRegistration from './../customer/CustomerRegistration';
import Contact from './Contact';
import AdminLogin from './../admin/AdminLogin';
import ManagerLogin from '../manager/ManagerLogin';
import NotFound from './NotFound';
import Chatbot from './Chatbot';

export default function MainNavBar() {
  const { i18n } = useTranslation(); // Access i18n instance for language switching
  const [isDropdownOpen, setDropdownOpen] = useState(false); // State to toggle dropdown visibility

  // Function to handle language change
  const handleLanguageChange = (language) => {
    i18n.changeLanguage(language); // Change language based on selection
  };

  // Toggle the dropdown
  const toggleDropdown = () => {
    setDropdownOpen(prevState => !prevState);
  };

  return (
    <div>
      <nav className="navbar">
        <div className="logo">HomiGo</div>
        <ul className="nav-links">
          <li><Link to="/">{i18n.t('home')}</Link></li>
          <li><Link to="/about">{i18n.t('about')}</Link></li>
          <li><Link to="/customerregistration">{i18n.t('register')}</Link></li>
          <li className="dropdown">
            <span>{i18n.t('login')} ▾</span>
            <ul className="dropdown-menu">
              <li><Link to="/customerlogin">{i18n.t('customer')}</Link></li>
              <li><Link to="/managerlogin">{i18n.t('serviceProvider')}</Link></li>
              <li><Link to="/adminlogin">{i18n.t('admin')}</Link></li>
            </ul>
          </li>
          <li><Link to="/contact">{i18n.t('contact')}</Link></li>

          {/* Language Switch Dropdown */}
          <li className="dropdown">
            <span onClick={toggleDropdown}>{i18n.t('language')} ▾</span>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li onClick={() => handleLanguageChange('en')}>English</li>
                <li onClick={() => handleLanguageChange('te')}>తెలుగు</li>
              </ul>
            )}
          </li>
        </ul>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} exact />
        <Route path="/about" element={<About />} exact />
        <Route path="/customerregistration" element={<CustomerRegistration />} exact />
        <Route path="/customerlogin" element={<CustomerLogin />} exact />
        <Route path="/adminlogin" element={<AdminLogin />} exact />
        <Route path="/managerlogin" element={<ManagerLogin />} exact />
        <Route path="/contact" element={<Contact />} exact />
      
        <Route path="*" element={<NotFound />} exact />
      </Routes>
    </div>
  );
}
