import React from "react";
import "../../styles/Footer.css";

import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaClock,
  FaEnvelope,
  FaMapMarkedAlt,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer" id="contact">

      {/* ================= TOP ================= */}

      <div className="footer-top">

        <span className="footer-tag">
          THANK YOU FOR VISITING
        </span>

        <h2>Masala Cafe Chettinad</h2>

        <p className="footer-comedy">
          "Saaptu Mudichaacha?
          <span> Next Time Ellarayum Kootitu Vaanga 😎</span>"
        </p>

      </div>

      {/* ================= MAIN ================= */}

      <div className="footer-grid">

        {/* ================= VISIT US ================= */}

        <div className="footer-box">

          <h3>Visit Us</h3>

          <p className="address">
            <FaMapMarkerAlt />
            <span>
              839 Newark Ave,
              <br />
              Jersey City,
              <br />
              NJ - 07306
            </span>
          </p>

          {/* GOOGLE MAP */}

          <a
            href="https://maps.google.com/?q=839+Newark+Ave,+Jersey+City,+NJ+07306"
            target="_blank"
            rel="noopener noreferrer"
            className="map-card"
          >

            <div className="map-overlay">

              <FaMapMarkedAlt className="map-icon" />

              <h4>Open Google Maps</h4>

              <span>Click Here</span>

            </div>

          </a>

        </div>

        {/* ================= CONTACT ================= */}
{/* ================= CONTACT ================= */}

<div className="footer-box">

  <h3>Contact</h3>

  <div className="contact-item">
    <FaPhoneAlt />

    <div>
      <p>201-420-7635</p>
      <p>201-360-3367</p>
    </div>
  </div>

  <div className="contact-item">
    <FaEnvelope />

    <div>
      <p>masalacafejc@gmail.com</p>
    </div>
  </div>

  {/* Social Icons */}

  <div className="footer-social">

    <a
      href="https://www.facebook.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaFacebookF />
    </a>

    <a
      href="https://www.instagram.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaInstagram />
    </a>

    <a
      href="https://www.youtube.com/"
      target="_blank"
      rel="noopener noreferrer"
    >
      <FaYoutube />
    </a>

  </div>

</div>

        {/* ================= HOURS ================= */}

        <div className="footer-box">

          <h3>Opening Hours</h3>

          <div className="hours-row">
            <FaClock />
            <div>
              <strong>Mon - Thu</strong>
              <p>11:00 AM - 01:00 AM</p>
            </div>
          </div>

          <div className="hours-row">
            <FaClock />
            <div>
              <strong>Fri - Sat</strong>
              <p>10:00 AM - 02:00 AM</p>
            </div>
          </div>

          <div className="hours-row">
            <FaClock />
            <div>
              <strong>Sunday</strong>
              <p>10:00 AM - 01:00 AM</p>
            </div>
          </div>

        </div>

      </div>

      {/* ================= COPYRIGHT ================= */}

      <div className="footer-bottom">

        <p>
          <strong>Masala Cafe Chettinad</strong>
        </p>

        <span>
          Made with ❤️ & Extra Masala
        </span>

      </div>

    </footer>
  );
};

export default Footer;