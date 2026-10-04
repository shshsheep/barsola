import React from 'react';
import mapImg from '../assets/map.webp';

const Contact = () => {
  return (
    <section className="contact-section" id="contact">
      <div className="section-container">
        <div className="contact-grid">
          <div className="contact-info-block fade-in">
            <span className="section-tag">Contact</span>
            <h2 className="section-title">FIND US</h2>
            <div className="contact-details">
              <div className="detail-item">
                <div className="detail-icon">
                  <i className="fa-solid fa-location-dot"></i>
                </div>
                <div className="detail-text">
                  <h4>門市地址</h4>
                  <p>迦樓羅 - 海霧村 - 9區 2號</p>
                </div>
              </div>
              <div className="detail-item">
                <div className="detail-icon">
                  <i className="fa-solid fa-clock"></i>
                </div>
                <div className="detail-text">
                  <h4>營業時間</h4>
                  <p>依隊伍招募為主( 22:00 - 02:00 )</p>
                </div>
              </div>
            </div>
          </div>

          <div className="contact-map-block fade-in">
            {/* Stylized Mock Map showing luxury location */}
            <div className="map-placeholder">
              <div className="map-overlay">
                <div className="map-pin">
                  <i className="fa-solid fa-glass-whiskey"></i>
                  <span className="pin-pulse"></span>
                </div>
                <div className="map-label">
                  <strong>BAR SOLA</strong>
                  <span>迦樓羅 - 海霧村 - 9區 2號</span>
                </div>
              </div>
              <div className="map-canvas">
                <img src={mapImg} alt="BAR SOLA 地圖" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
