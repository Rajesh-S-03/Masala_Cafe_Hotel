import React from "react";
import "./Contact.css";
import contactimg from '../../assets/contactcomedy.png'
import {
  FaPhoneAlt,
  FaMapMarkerAlt,
  FaEnvelope,
  FaClock,
} from "react-icons/fa";
import Sfooter from "../Footer/Sfooter";

const Contact = () => {
  return (
    <>
    <section className="contact-page">

<div className="contact-hero">

  <div className="contact-hero-content">
    <div className="contact-hero-text">
      <p>
        Hungry-ah irundha call pannunga...
        <br />
        Late pannina unga friend saaptutu selfie anupiduvaanga.
      </p>
    </div>

    <div className="contact-hero-image">
      <img src={contactimg} alt="Masala Cafe" />
    </div>
  </div>

</div>

      <div className="contact-container">

        <div className="contact-info">

          <div className="info-card">
            <FaPhoneAlt />
            <div>
              <h3>Phone</h3>
              <p>201-420-7635</p>
              <small>📢 Ring adichitu cut panna blocklist! 😂</small>
            </div>
          </div>

          <div className="info-card">
            <FaEnvelope />
            <div>
              <h3>Email</h3>
              <p>masalacafejc@gmail.com</p>
              <small>Reply varum... chef busy illana. 👨‍🍳</small>
            </div>
          </div>

          <div className="info-card">
            <FaMapMarkerAlt />
            <div>
              <h3>Location</h3>
              <p>839 Newark Ave,Jersey City,NJ - 07306</p>
              <small>Google Maps enga vittaalum sapadu enga kitta. 😎</small>
            </div>
          </div>

          <div className="info-card">
            <FaClock />
            <div>
              <h3>Opening Hours</h3>
              <p>10:00 AM - 10:00 PM</p>
              <small>11 PM-ku vandha chef thookathula iruppaaru 😂</small>
            </div>
          </div>

        </div>

        <div className="contact-form">

          <h2>🍛 Pasikkudha? Message Podunga!</h2>

          <form>

            <input
              type="text"
              placeholder="Unga Peru 😎"
            />

            <input
              type="email"
              placeholder="Email Address "
            />

            <textarea
              rows="5"
              placeholder="Saapadu pathi complaint ah? Illa love letter ah? 😁"
            ></textarea>

            <button>
              🚀 Send Message
            </button>

          </form>

          <p className="fun-note">
            🤣 <b>Warning:</b> "Menu super!" nu message anupina,
            next visit-la extra smile free! ❤️
          </p>

        </div>

      </div>

    </section>
    <Sfooter/>
    </>
  );
};

export default Contact;