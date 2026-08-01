import React from "react";
import "./Menucard4.css";

import chicken from "../../assets/chicken 65.png";
import fish from "../../assets/chicken 65.png";
import mutton from "../../assets/chicken 65.png";
import pepper from "../../assets/chicken 65.png";

import kudalvaruval from '../../assets/kudalvaruval.png'
import lollipop from '../../assets/boneless.png'
import halfboil from '../../assets/half boil.jpeg'
import noodles from '../../assets/noodles.png'

import mangoLassi from "../../assets/mango lasi.png";
import elaneer from "../../assets/ilaneer.png";
import rosemilk from "../../assets/rosemilk.png";
import tenderCoconut from "../../assets/chettinad egg curry .png";
import jigirthanda from '../../assets/jigirthanda.png'
import coffee from "../../assets/filtercoffee.png";
import sarbath from "../../assets/sarbath.png";
import Sfooter from "../Footer/Sfooter";

const dishes = [
  {
    id: 1,
    name: "kudal varuval",
    image: kudalvaruval,
    desc: "Tender goat intestine stir-fried with authentic Chettinad spices and roasted to perfection.",
  },
  {
    id: 2,
    name: "Chicken Lollipop",
    image: lollipop,
    desc: "Juicy chicken wings marinated with signature spices and deep-fried until crispy and golden.",
  },
  {
    id: 3,
    name: "Half Boil",
    image: halfboil,
    desc: "Perfectly half-boiled eggs seasoned with black pepper and a touch of Chettinad masala.",
  },
  {
    id: 4,
    name: "Chicken Noodels",
    image: noodles,
    desc: "Wok-tossed noodles with tender chicken, fresh vegetables, and flavorful Indo-Chinese spices.",
  },
];

const drinks = [
 {
  id: 1,
  name: "Mango Lassi",
  image: mangoLassi,
  desc: "Creamy yogurt blended with sweet ripe mangoes for a refreshing traditional drink.",
  info: ["🥭 Fresh Mango", "🧊 Served Chilled"],
},
{
  id: 2,
  name: "Elaneer Payasam",
  image: elaneer,
  desc: "Tender coconut blended with creamy milk and cardamom for a naturally refreshing dessert.",
  info: ["🥥 Tender Coconut", "❄️ Served Chilled"],
},
{
  id: 3,
  name: "Rose Milk",
  image: rosemilk,
  desc: "Chilled milk infused with fragrant rose syrup for a sweet and refreshing treat.",
  info: ["🌹 Rose Flavour", "🧊 Served Chilled"],
},
{
  id: 4,
  name: "Jigarthanda",
  image: jigirthanda,
  desc: "Madurai's famous chilled drink made with milk, badam pisin, nannari syrup, and creamy ice cream",
  info: ["🍨 Madurai Special", "❄️ Served Chilled"],
},
{
  id: 5,
  name: "South Indian Filter Coffee",
  image: coffee,
  desc: "Freshly brewed authentic South Indian filter coffee with rich aroma and smooth taste.",
  info: ["☕ Fresh Brew", "🔥 Served Hot"],
},
{
  id: 6,
  name: "Nannari Sarbath",
  image: sarbath,
  desc: "A refreshing herbal drink prepared with natural nannari root syrup, lemon, and chilled water.",
  info: ["🌿 Herbal Refreshment", "🧊 Served Chilled"],
},
]

const Menucard4 = () => {
  return (
    <>
    <section className="nonveg-section">

      <div className="nonveg-heading">

        <span>AUTHENTIC CHETTINAD</span>

        <h2>Non Veg Favourites</h2>

        <p>
          Crafted with traditional recipes, fresh ingredients and
          authentic Chettinad flavours loved by our guests.
        </p>

      </div>

      <div className="nonveg-grid">

        {dishes.map((item) => (

          <div className="nonveg-card" key={item.id}>

            <div className="card-image">

              <img src={item.image} alt={item.name} />

            </div>

            <div className="card-body">

              <h3>{item.name}</h3>

              <div className="rating">
                ★★★★★
              </div>

              <p>{item.desc}</p>

            </div>

          </div>

        ))}

      </div>

    </section>
    <section className="drinks-section" id="section-drinks">
      <span className="drinks-bubble b1" />
      <span className="drinks-bubble b2" />
      <span className="drinks-bubble b3" />
      <span className="drinks-bubble b4" />

      <div className="drink-heading">
        <span>FRESH & CHILLED</span>

        <h2>Juices & Refreshments</h2>

        <p>
          Freshly prepared juices, traditional drinks and refreshing
          beverages to perfectly complement your meal.
        </p>
      </div>

      <div className="drinks-grid">
        {drinks.map((drink) => (
          <div className="drink-card" key={drink.id}>
            <div className="drink-img-wrap">
              <img src={drink.image} alt={drink.name} />
            </div>

            <h3 className="drink-name">{drink.name}</h3>
            <p className="drink-desc">{drink.desc}</p>

            <div className="drink-info">
              {drink.info.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>

    <Sfooter/>
    </>
  );
};

export default Menucard4;