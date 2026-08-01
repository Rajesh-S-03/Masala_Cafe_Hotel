import React from "react";
import { motion } from "framer-motion";
import "../../styles/Bcontent1.css";
import kamal from "../../assets/kamal1.png";
import leafLeft from "../../assets/banana-bottom.png";

import chicken from "../../assets/mansattisoru.png";
import fish from "../../assets/mutton.png";
import crab from "../../assets/chickengravy.png";

const dishes = [
  {
    id: 1,
    name: "Chicken Satti Soru",
    image: chicken,
    price: "$19",
    desc: "Slow-cooked in traditional clay pots with aromatic spices and handcrafted Chettinad flavors.",
  },
  {
    id: 2,
    name: "Mutton Ghee Roast",
    image: fish,
    price: "$22",
    desc: "Tender mutton roasted in pure ghee with freshly ground Chettinad spices.",
  },
  {
    id: 3,
    name: "Chicken Spicy",
    image: crab,
    price: "$18",
    desc: "Rich and fiery Chettinad chicken curry simmered with signature house spices.",
  },
];

const Bcontent1 = () => {
  return (
    <section className="signature">
      <p className="background-text">AARAMBIKKALAMA </p>

      {/* Decorative leaves */}
      <img src={leafLeft} className="deco-leaf left" alt="" aria-hidden="true" />
      <img src={leafLeft} className="deco-leaf right" alt="" aria-hidden="true" />

      {/* Floating chillies */}
      {/* <span className="floating-chilli left">🌶️</span>
      <span className="floating-chilli right">🌶️</span> */}

      <div className="kamal-wrap">
        <img src={chicken} className="kamal-float left" alt="" aria-hidden="true" />
        <img src={kamal} className="kamal" alt="Chef special" />
        <img src={crab} className="kamal-float right" alt="" aria-hidden="true" />
      </div>

      <div className="container">
        <motion.span
          className="section-tag"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          OUR SIGNATURE DISHES
        </motion.span>

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
        >
          Authentic Chettinad Specialities
        </motion.h2>

        <div className="dish-grid">
          {dishes.map((dish, index) => (
            <motion.div
              className="dish-cards"
              key={dish.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.6,
                delay: index * 0.15,
              }}
              viewport={{ once: true }}
            >
              <div className="dish-left">
                <div className="dish-img">
                  <img src={dish.image} alt={dish.name} />
                </div>
              </div>

              <div className="dish-right">
                <h3>{dish.name}</h3>
                <p>{dish.desc}</p>
                <span className="dish-price">{dish.price}</span>
                <button>Order Now</button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Bcontent1;