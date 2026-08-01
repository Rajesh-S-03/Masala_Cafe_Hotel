import React from "react";
import "./Menucard3.css";

import nalli from "../../assets/nalli.png";
import karidosa from "../../assets/karidosai.png";
import paya from "../../assets/paya.png";
import podimas from "../../assets/podimas.png";
import fishFry from "../../assets/chicken 65.png";

import idli from '../../assets/idli.png'
import vada from '../../assets/vada.png'
import samosa from '../../assets/samosa.png'
import v4 from '../../assets/carrot halwa.png'
import ennaikathri from '../../assets/ennai kathari.png'
import Menucard4 from "./Menucard4";

const nonVeg = [
{
  id: 1,
  image: karidosa,
  name: "Kari Dosa",
  desc: "A signature Chettinad dosa topped with spicy minced mutton, egg, and aromatic South Indian spices."
},
{
  id: 2,
  image: podimas,
  name: "Egg Podi Mas",
  desc: "Soft scrambled eggs tossed with spicy podi masala, onions, curry leaves, and fresh herbs."
},
{
  id: 3,
  image: paya,
  name: "Attukkal Paya Soup",
  desc: "A flavorful mutton trotter soup slow-cooked with traditional Chettinad spices for a rich, comforting taste."
},
//   {
//     id: 4,
//     image: fishFry,
//     name: "Vanjaram Fish Fry",
//     desc: "Fresh king fish coated with homemade masala and fried."
//   }
];

const Menucard3 = () => {
  return (
    <>
    <section className="menu-showcase">

      {/* <div className="section-title">

        <p>
          Every dish is freshly prepared using traditional Chettinad spices,
          homemade masalas and premium quality ingredients.
        </p>

      </div> */}

      {/* Featured Dish */}

      <div className="featured-dish">

        <div className="featured-image">

          <img src={nalli} alt="Chicken 65" />

        </div>

        <div className="featured-content">

          <small>Chef's Signature</small>

          <h2>Nalli Briyani</h2>

          <div className="rating">

            ★★★★★

          </div>

          <p>
            One of our most loved dishes prepared using freshly ground
            Chettinad masala, curry leaves and traditional recipes passed
            through generations.
          </p>

          <div className="dish-tags">

            <span>Fresh Chicken</span>

            <span>Traditional Recipe</span>

            <span>Chettinad Spice</span>

          </div>

        </div>

      </div>

      {/* Dish Cards */}

      <div className="dish-grid">

        {nonVeg.map((dish) => (

          <div className="dish-card" key={dish.id}>

            <img src={dish.image} alt={dish.name} />

<div className="dish-body">

  <h3>{dish.name}</h3>

  <div className="stars">★★★★★</div>

  <p>{dish.desc}</p>

  <div className="dish-footer">
    <span>Authentic Chettinad Recipe</span>
  </div>

</div>

          </div>

        ))}

      </div>

    </section>
    {/* ===========================
      VEG SPECIAL
=========================== */}

<section className="veg-special">

  <div className="veg-left">

    <img src={ennaikathri} alt="Paneer Pepper Fry" />

    <div className="veg-overlay">

      <span>CHEF'S VEG PICK</span>

      <h2>Ennai Kathirikai</h2>

      <p>
        Tender baby brinjals stuffed with aromatic Chettinad spices
      and slow-cooked in rich sesame oil for an authentic, flavorful
      South Indian delicacy.
      </p>

    </div>

  </div>

  <div className="veg-right">

    <div className="veg-title">

      <span>VEGETARIAN SPECIALS</span>

      <h2>Fresh • Healthy • Authentic</h2>

      <p>
        Prepared daily using farm-fresh vegetables and traditional
        South Indian recipes.
      </p>

    </div>

    <div className="veg-list">

  <div className="veg-item">

    <img src={idli} alt="Idli" />

    <div>
      <h3>Soft Idli</h3>
      <p>Steamed rice cakes served soft, fluffy, and fresh every day.</p>
    </div>

  </div>

  <div className="veg-item">

    <img src={vada} alt="Medu Vada" />

    <div>
      <h3>Medhu Vada</h3>
      <p>Golden crispy lentil doughnuts with a soft center and authentic South Indian flavor.</p>
    </div>

  </div>

  <div className="veg-item">

    <img src={samosa} alt="Samosa" />

    <div>
      <h3>Crispy Samosa</h3>
      <p>Flaky pastry stuffed with spicy potato filling and fried to golden perfection.</p>
    </div>

  </div>

</div>
  </div>

</section>

<Menucard4/>
</>
  );
};

export default Menucard3;