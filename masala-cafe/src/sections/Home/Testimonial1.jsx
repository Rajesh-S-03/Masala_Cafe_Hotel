import React, { useState } from "react";
import "../../styles/testimonial.css";

import { FaStar, FaQuoteLeft,FaGoogle } from "react-icons/fa";

const reviews = [
  {
    id: 1,
    name: "MalliSuri",
    // place: "Chennai",
    review:
      "Absolutely loved the food at Masala Cafe in Jersey City! The Dindigul Mutton Biryani was bursting with authentic South Indian flavor — perfectly spiced and tender. The Chicken 65 was crisp, juicy, and full of flavor, while the Pomfret Fish Fry tasted super fresh and well-marinated. The Mutton Chukka was rich and mouthwatering",
  },
  {
    id: 2,
    name: "Anirudh VA",
    // place: "Coimbatore",
    review:
      "The food , ambience , service was excellent ! The people in the restaurant were really friendly and polite. Totally The best restaurant for people who like South Indian food and mainly Tamilnadu  food. They served hot and filter coffee was the best",
  },
  {
    id: 3,
    name: "SonamGurung",
    // place: "Bangalore",
    review:
      "10/10 Indian cuisine. We ordered Garlic Naan, Paneer Butter Masala, and Poori with Potato side, and everything was delicious. My favorite was Poori. Never in my life had I thought Poori can even be non-oily. It was soft, thin, and non-greasy.",
  },
];

const REVIEW_LIMIT = 140;

const TestimonialCard = ({ item }) => {
  const [expanded, setExpanded] = useState(false);
  const isLong = item.review.length > REVIEW_LIMIT;

  const displayText =
    expanded || !isLong
      ? item.review
      : item.review.slice(0, REVIEW_LIMIT).trim() + "...";

  return (
    <div className="testimonial-cell">
      <div className={`testimonial-card ${expanded ? "is-expanded" : ""}`}>
        <FaQuoteLeft className="quote-icon" />

        <div className="stars">
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
          <FaStar />
        </div>

        <p className="review-text">
          "{displayText}"
          {isLong && (
            <button
              className="read-more-btn"
              onClick={() => setExpanded((prev) => !prev)}
            >
              {expanded ? "Read less" : "Read more"}
            </button>
          )}
        </p>

        <div className="customer">
          <div className="avatar">{item.name.charAt(0)}</div>

          <div>
            <h4>{item.name}</h4>
            <span>{item.place}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

const Testimonial = () => {
  return (
    <section className="testimonial-section">
      <span className="testimonial-tag">OUR CUSTOMER REVIEWS</span>

      <h2 className="testimonial-title">
        People Love
        <span> Masala Cafe</span>
      </h2>

      <p className="testimonial-subtitle">
        Every smile, every compliment, and every returning customer inspires
        us to serve even better.
      </p>

      <div className="testimonial-container">
        {reviews.map((item) => (
          <TestimonialCard item={item} key={item.id} />
        ))}
      </div>
      <div className="review-btn">
  <button>
    <a
  href="https://www.google.com/search?client=ms-android-vivo-terr1-rso2&hs=HzpV&sca_esv=9240a6cc4f21dd1c&sxsrf=APpeQnuimo3pfiPMA_8e6mOtpfS_B2dYPA:1787572485043&q=masala+cafe+chettinad+reviews&uds=AJ5uw18FKYt6XZZNsyMoUxjf4VUe06NYbyzbLmPs4jEJ928c3_opjqsBzYFM7Zf9mflMzpzSN18IMy-oBNe4NTd3oZ_VXCpbE0wbCMPKQep0mzedPXzb8bwP4PsZ4422AVRJtNAtzrp2Czvir79srnOQQwm7hg9DZLZLPCO0eR9w34pZ-YQVJlP4wDZyDWElw-z7VJAZXz8NH8vgEBusJdN4hnvWzVOOnmxngVfBtarhooxMB6hBVFBgIod38q8ZeVB3-H2JDAKzlB_1ekM_Ef8Vbr0CoakcRH4_0g_fq7Pv-13USr1aOJWQ1m510QmtUps4di_uvJNxQDcuXVtt5OTrrQjP5ngyuupDmGNMsHk51TINjqTnN-wLQIdkdn4bg1HOYoS-B9Mo1KcBDDiW1hRa7viTCPbzW-oEeZuusxzQwOjf03PMjtrWRxjB1RF4yG40I_1U2HLB&si=APenkKm7iecQ4G6P-TsbSMFKIQtv3EFIqRAFw-i8uEbk55Z-_zoppFVIvFrUEoo7p6v65Zt2J1PLZ78Q296zuPGGkDflO2Bol84nUGISwwsmvQ6xLeAGc0U0iiLs-wu3vwJ5_9HlmVg-DDhIZxSGYed0J8UITkwUng%3D%3D&sa=X&sqi=2&ved=2ahUKEwjLouy3mrmWAxVBkOEIHd8uGXsQk8gLegQIHhAB&ictx=1&biw=392&bih=758&dpr=2.75#ebo=2"
  target="_blank"
  rel="noopener noreferrer"
  className="review-btn-link"
>
  <FaGoogle className="google-icon" />
  <span>View More Reviews</span>
</a>
  </button>
</div>
    </section>
  );
};

export default Testimonial;