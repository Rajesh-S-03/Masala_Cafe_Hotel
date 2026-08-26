import React from "react";
import "./catering.css"
import Sfooter from "../Footer/Sfooter";
const Catering = () => {
  return (
    <>
    <section className="catering">
      <div className="catering-content">
        <h1>Catering</h1>
        <p>
          Ungaloda special occasions-ku, enga authentic Chettinad
          food-oda celebration-a innum special-ah maathunga! 😋
        </p>

        <button className="catering-btn">
          Enquire Now
        </button>
      </div>
    </section>
    <Sfooter/>
</>
  );
};

export default Catering;