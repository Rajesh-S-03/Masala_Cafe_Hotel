import React from "react";
import "./Gallery1.css";

import img1 from '../../assets/masalacafe-interier.png'
import img2 from '../../assets/masalainterier1.webp'

const Gallery1 = () => {
  return (
    <section className="gallery-hero">

      <div className="gallery-title">

        <span>MASALA CAFE MEMORIES</span>

        <h2>
          Every Picture Tells
          <br />
          Our Story
        </h2>

        <p>
          From authentic Chettinad flavours to unforgettable dining moments,
          explore the memories created every day at Masala Cafe.
        </p>

      </div>

      <div className="gallery-feature">

        <div className="gallery-left">

          <img
            src={img1}
            alt="Restaurant"
          />

        </div>

        <div className="gallery-right">

          <div className="gallery-card">

            <span>AUTHENTIC</span>

            <h3>
              Traditional
              <br />
              Chettinad Experience
            </h3>

            {/* <p>
              Every dish is prepared using traditional recipes,
              freshly ground spices and years of culinary experience.
            </p> */}

          </div>

          <div className="gallery-small-grid">

            <img
              src={img2}
              alt=""
            />

            <img
              src="https://placehold.co/300x300"
              alt=""
            />

            <img
              src="https://placehold.co/300x300"
              alt=""
            />

            <img
              src="https://placehold.co/300x300"
              alt=""
            />

          </div>

        </div>

      </div>

    </section>
  );
};

export default Gallery1;