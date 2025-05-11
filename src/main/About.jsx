import React from "react";
import { ShieldCheck, MousePointerClick, Headphones, Mail } from "lucide-react";
import "./About.css";
import { useTranslation } from "react-i18next"; // Import i18next hook for translation

const About = () => {
  const { t } = useTranslation(); // Initialize the translation hook

  return (
    <>
      <div className="about-wrapper">
        <div className="about-card">
          <h1 className="about-title">{t('about1.title')}</h1>
          <p className="about-description">{t('about1.description')}</p>

          {/* Our Story Section */}
          <div className="flex-container">
            <div className="section">
              <h2 className="about-subtitle">{t('about1.story.title')}</h2>
              <p className="about-description">{t('about1.story.description')}</p>
            </div>
            <img src="/story.jpg" alt="Our Story" className="section-image" />
          </div>

          {/* Our Mission Section */}
          <div className="flex-container">
            <div className="section">
              <h2 className="about-subtitle">{t('about1.mission.title')}</h2>
              <p className="about-description">{t('about1.mission.description')}</p>
            </div>
            <img src="./aim.png" alt="Our Mission" className="section-image" />
          </div>

          {/* Why Choose Us Section */}
          <h2 className="about-subtitle">{t('about1.whyChooseUs.title')}</h2>
          <ul className="about-list">
            <li><ShieldCheck size={18} /> {t('about1.whyChooseUs.points.verifiedProfessionals')}</li>
            <li><MousePointerClick size={18} /> {t('about1.whyChooseUs.points.instantBooking')}</li>
            <li><Headphones size={18} /> {t('about1.whyChooseUs.points.customerSupport')}</li>
            <li><ShieldCheck size={18} /> {t('about1.whyChooseUs.points.transparentPricing')}</li>
            <li><Mail size={18} /> {t('about1.whyChooseUs.points.realTimeUpdates')}</li>
          </ul>

          {/* Team Section */}
          <h2 className="about-subtitle">{t('team.title')}</h2>
          <div className="team-section">
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/women/35.jpg" alt="Ananya" className="team-photo" />
              <h3 className="team-name">{t('team.members.jahnavi.name')}</h3>
              <p className="team-role">{t('team.members.jahnavi.role')}</p>
              <p className="team-qualification">{t('team.members.jahnavi.qualification')}</p>
              <p className="team-description">{t('team.members.jahnavi.description')}</p>
            </div>
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/men/44.jpg" alt="Karthik" className="team-photo" />
              <h3 className="team-name">{t('team.members.karthik.name')}</h3>
              <p className="team-role">{t('team.members.karthik.role')}</p>
              <p className="team-qualification">{t('team.members.karthik.qualification')}</p>
              <p className="team-description">{t('team.members.karthik.description')}</p>
            </div>
            <div className="team-member">
              <img src="https://randomuser.me/api/portraits/women/40.jpg" alt="Shravya" className="team-photo" />
              <h3 className="team-name">{t('team.members.shravya.name')}</h3>
              <p className="team-role">{t('team.members.shravya.role')}</p>
              <p className="team-qualification">{t('team.members.shravya.qualification')}</p>
              <p className="team-description">{t('team.members.shravya.description')}</p>
            </div>
          </div>

          {/* Latest News Section */}
          <h2 className="about-subtitle">{t('latestNews.title')}</h2>
          <div className="news-section">
            <div className="news-item">
              <img src="./n1.png" alt="Service Expansion" className="news-image" />
              <h3 className="news-title">{t('latestNews.newsItems.expansion.title')}</h3>
              <p className="news-description">{t('latestNews.newsItems.expansion.description')}</p>
              <a href="#" className="news-link">{t('latestNews.newsItems.expansion.linkText')}</a>
            </div>
            <div className="news-item">
              <img src="./n2.png" alt="New Professionals" className="news-image" />
              <h3 className="news-title">{t('latestNews.newsItems.newProfessionals.title')}</h3>
              <p className="news-description">{t('latestNews.newsItems.newProfessionals.description')}</p>
              <a href="#" className="news-link">{t('latestNews.newsItems.newProfessionals.linkText')}</a>
            </div>
            <div className="news-item">
              <img src="./n3.png" alt="Green Services" className="news-image" />
              <h3 className="news-title">{t('latestNews.newsItems.greenServices.title')}</h3>
              <p className="news-description">{t('latestNews.newsItems.greenServices.description')}</p>
              <a href="#" className="news-link">{t('latestNews.newsItems.greenServices.linkText')}</a>
            </div>
          </div>
        </div>
      </div>

      <footer className="footer">
        <div className="footer-links">
          <div>
            <h4>{t('footer.quickLinks')}</h4>
            <ul>
              <li><a href="/about">{t('footer.quickLinks.about')}</a></li>
              <li><a href="/contact">{t('footer.quickLinks.contact')}</a></li>
              <li><a href="/terms">{t('footer.quickLinks.terms')}</a></li>
              <li><a href="/privacy">{t('footer.quickLinks.privacy')}</a></li>
            </ul>
          </div>
          <div>
            <h4>{t('footer.followUs')}</h4>
            <div className="social-icons">
              <a href="https://facebook.com" target="_blank" rel="noreferrer"> Facebook</a>
              <a href="https://twitter.com" target="_blank" rel="noreferrer">Twitter</a>
              <a href="https://instagram.com" target="_blank" rel="noreferrer">Instagram</a>
              <a href="https://linkedin.com" target="_blank" rel="noreferrer">LinkedIn</a>
            </div>
          </div>
        </div>
        <p>&copy; 2025 Service Provider Portal. {t('footer.allRightsReserved')}</p>
      </footer>
    </>
  );
};

export default About;
