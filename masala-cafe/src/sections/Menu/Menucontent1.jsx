import React, { useRef, useState, useEffect } from "react";
import { useInView } from "framer-motion";
import "../../styles/Menucontent1.css";
import clogo from '../../assets/MENU PAGE IMAGE.png' 

import jallikattu from '../../assets/jallikattu.png';
import valluvar from "../../assets/valluvar.png";
import mealsImg from "../../assets/dosai.png";
import riceImg from "../../assets/noodles.png";
import noodlesImg from "../../assets/chicken fry.png";
import parottaImg from "../../assets/parottaa.png";
import biryaniImg from "../../assets/briyani.png";
import faloodaImg from "../../assets/lemon soda.png";
import Menucontent2 from "./Menucontent2";

const menuColumns = [
  {
    side: "left",
    sections: [
      {
        title: "VEG APPETIZER",
        items: [
          { name: "Gobi 65", price: "$17" },
          { name: "Gobi Manchurian", price: "$17" },
          { name: "Gobi Pepper Fry", price: "$17" },
          { name: "Paneer 65", price: "$18" },
          { name: "Paneer Manchurian", price: "$18" },
          { name: "Paneer Pepper Fry", price: "$18" },
          { name: "Onion Samosa (5pcs)", price: "$12" },
          { name: "Onion Pakoda", price: "$12" },
          { name: "Veg Samosa (3pcs)", price: "$12" },
          { name: "Mushroom Pepper Fry", price: "$17" },
        ],
      },
{
  title: "VEG ENTREES",
  items: [
    { name: "dhal tadka", price: "$17" },
    { name: "Channa Masala", price: "$17" },
    { name: "Kadai Veg", price: "$17" },
    { name: "Poondu Kuzhambu", price: "$17" },
    { name: "Ennai Kathirikai", price: "$17" },
    { name: "Veg Chettinad Masala", price: "$17" },
    { name: "Mushroom Chettinad Masala", price: "$17" },
    { name: "Paneer Chettinad Masala", price: "$18" },
    { name: "Paneer Butter Masala", price: "$18" },
    { name: "Paneer Tikka Masala", price: "$18" },
  ],
},
      {
        title: "PAROTTA VARIETIES",
        image: parottaImg,
        items: [
          { name: "Plain Parotta", price: "₹30" },
          { name: "Butter Parotta", price: "₹40" },
          { name: "Kothu Parotta", price: "₹150" },
          { name: "Chicken Kothu Parotta", price: "₹180" },
          { name: "Egg Kothu Parotta", price: "₹160" },
        ],
      },
      {
        title: "BIRYANI",
        image: biryaniImg,
        items: [
          { name: "Vegetable Biryani", price: "$16" },
          { name: "Paneer Biryani", price: "$17" },
          { name: "Mushroom Biryani", price: "$17" },
          { name: "Egg Biryani", price: "$17" },
          { name: "Boneless Chicken Biryani", price: "$19" },
          { name: "Naatu Kozhi Biryani", price: "$20" },
          { name: "Shrimp Biryani", price: "$20" },
          { name: "Pomfret Fish Biryani", price: "$20" },
          { name: "Dindigul Thalappaakatti Egg", price: "$18" },
          { name: "Dindigul Thalappaakatti Chicken", price: "$19" },
          { name: "Dindigul Thalappaakatti Mutton", price: "$21" },
          { name: "Dindigul Thalappaakatti Shrimp", price: "$21" },
          { name: "Bhai Chicken Biryani", price: "$19" },
          { name: "Bhai Mutton Biryani", price: "$21" },
          { name: "Thokku Chicken Biryani", price: "$19" },
          { name: "Thokku Mutton Biryani", price: "$21" },
          { name: "Thokku Shrimp Biryani", price: "$21" },
        ],
      },
      {
  title: "SATTI SORU",
  items: [
    { name: "Veg Satti Soru", price: "$16" },
    { name: "Egg Satti Soru", price: "$18" },
    { name: "Chicken Satti Soru", price: "$19" },
    { name: "Mutton Satti Soru", price: "$20" },
    { name: "Shrimp Satti Soru", price: "$20" },
  ],
},
      {
  title: "SOUPS",
  items: [
    { name: "Rasam", price: "$7" },
    { name: "Karuveppilai Soup", price: "$7" },
    { name: "Kozhi Milagu Rasam", price: "$8" },
    { name: "Mutton Soup", price: "$8" },
    { name: "Aattukal Paya Soup", price: "$9" },
  ],
},

{
  title: "EGG SPECIAL",
  items: [
    { name: "Half Boiled (3pcs)", price: "$10" },
    { name: "Omelette", price: "$10" },
    { name: "Muttai Kalakki", price: "$10" },
    { name: "Muttai Podimas", price: "$10" },
  ],
},

{
  title: "NON VEG APPETIZERS",
  items: [
    { name: "Chicken Samosa", price: "$15" },
    { name: "Lamb Samosa", price: "$15" },
    { name: "Chicken 65", price: "$18" },
    { name: "Chicken Fry (Masala Cafe Special)", price: "$18" },
    { name: "Chicken Lollipop (Dry)", price: "$20" },
    { name: "Chicken Pepper Fry", price: "$20" },
    { name: "Chicken Ghee Roast", price: "$20" },
    { name: "Naatu Kozhi Varuval", price: "$22" },
    { name: "Mutton Pepper Fry", price: "$22" },
    { name: "Mutton Ghee Roast", price: "$22" },
  ],
},

{
  title: "SEAFOOD APPETIZERS",
  items: [
    { name: "Shrimp Pepper Fry", price: "$22" },
    { name: "Shrimp Fry", price: "$22" },
    { name: "Shrimp Tawa Fry", price: "$22" },
    { name: "Pomfret Fish Fry", price: "$22" },
    { name: "Tawa Fish", price: "$20" },
  ],
},
{
  title: "NAAN",
  items: [
    { name: "Plain Naan", price: "$4" },
    { name: "Tandoori Roti", price: "$5" },
    { name: "Butter Naan", price: "$5" },
    { name: "Garlic Naan", price: "$6" },
    { name: "Cheese Naan", price: "$6" },
    { name: "Onion Kulcha", price: "$6" },
  ],
},
{
  title: "SIDE ORDERS",
  items: [
    { name: "Rice", price: "$5" },
    { name: "Parotta", price: "$6" },
    { name: "Poori", price: "$6" },
    { name: "Yogurt", price: "$4" },
    { name: "Boiled Eggs", price: "$3" },
    { name: "Sambar", price: "$8" },
    { name: "Raita", price: "$4" },
    { name: "Coconut Chutney", price: "$6" },
    { name: "Tomato Chutney", price: "$6" },
    { name: "Peanut Chutney", price: "$6" },
  ],
},
    ],
  },
  {
    side: "right",
    sections: [
      {
  title: "SOUTH INDIAN TIFFIN",
  items: [
    { name: "Medhu Vada", price: "$10" },
    { name: "Sambar Vada", price: "$11" },
    { name: "Rasam Vada", price: "$11" },
    { name: "Idly", price: "$10" },
    { name: "Mini Idly", price: "$11" },
    { name: "Sambar Idly", price: "$11" },
    { name: "Rasam Idly", price: "$11" },
    { name: "Pongal", price: "$11" },
    { name: "Idly Vada Combo", price: "$12" },
    { name: "Pongal Vada Combo", price: "$12" },
    {
      name: "Poori",
      price: "$15",
    },
    { name: "Kal Dosa (2 Pieces)", price: "$16" },
    { name: "Veg Kurma", price: "$16" },
    { name: "Egg Kurma", price: "$18" },
    { name: "Chicken Kurma", price: "$19" },
    { name: "Mutton Kurma", price: "$20" },
    { name: "Kudal Kuzhambu", price: "$20" },
    { name: "Meen Kuzhambu", price: "$20" },
  ],
},
      {
        title: "INDO-CHINESE",
        image: riceImg,
        items: [
          { name: "Veg Fried Rice", price: "$14" },
          { name: "Schezwan Veg Fried Rice", price: "$15" },
          { name: "Egg Fried Rice", price: "$15" },
          { name: "Schezwan Egg Fried Rice", price: "$16" },
          { name: "Chicken Fried Rice", price: "$16" },
          { name: "Schezwan Chicken Fried Rice", price: "$17" },
          { name: "Shrimp Fried Rice", price: "$17" },
          { name: "Schezwan Shrimp Fried Rice", price: "$18" },
          { name: "Veg Noodles", price: "$14" },
          { name: "Schezwan Veg Noodles", price: "$14" },
          { name: "Egg Noodles", price: "$15" },
          { name: "Schezwan Egg Noodles", price: "$16" },
          { name: "Chicken Noodles", price: "$16" },
          { name: "Schezwan Chicken Noodles", price: "$17" },
          { name: "Shrimp Noodles", price: "$17" },
          { name: "Schezwan Shrimp Noodles", price: "$18" },
        ],
      },
      {
        title: "BEVERAGES",
        image: faloodaImg,
        items: [
          { name: "Jigarthanda", price: "$15" },
          { name: "Nannari Sarbath", price: "$7" },
          { name: "Buttermilk", price: "$7" },
          { name: "Sweet Lassi", price: "$7" },
          { name: "Mango Lassi", price: "$7" },
          { name: "Rose Milk", price: "$6" },
          { name: "Lemon Juice", price: "$6" },
          { name: "Lemon Soda", price: "$7" },
          { name: "Badam Milk", price: "$8" },
          { name: "Masala Tea", price: "$4" },
          { name: "Filter Coffee", price: "$6" },
          { name: "Masala Soda", price: "$7" },
          { name: "Fresh Lime Soda", price: "$7" },
          { name: "Soda", price: "$3" },
          { name: "Water", price: "$3" },
        ],
      },
      {
  title: "NON VEG ENTREES",
  items: [
    { name: "Chettinad Egg Curry", price: "$18" },
    { name: "Chettinad Chicken Curry", price: "$19" },
    { name: "Chicken Kurma", price: "$19" },
    { name: "Butter Chicken", price: "$19" },
    { name: "Chicken Tikka Masala", price: "$19" },
    { name: "Naatu Kozhi Curry", price: "$20" },
    { name: "Chettinad Mutton Curry", price: "$21" },
    { name: "Mutton Kurma", price: "$21" },
    { name: "Chettinad Shrimp Curry", price: "$20" },
    { name: "Fish Curry", price: "$20" },
  ],
},
{
  title: "MC CHEF SPECIALS",
  items: [
    { name: "Ambur Mutton Biryani", price: "$25" },
    { name: "Crab Masala", price: "$25" },
    { name: "Kudal Varuval", price: "$25" },
    { name: "Kudal Curry", price: "$25" },
    { name: "Mutton Dalcha", price: "$22" },
    { name: "Naatu Kozhi Pulao", price: "$23" },
    { name: "Kizhi Parotta", price: "$25" },
    { name: "Nalli Biryani", price: "$35" },
    { name: "Nalli Masala with Parotta (2pcs)", price: "$35" },
    { name: "Meen Polichadhu", price: "$30" },
  ],
},
{
  title: "PAROTTA & DOSA SPECIALS",
  items: [
    { name: "Parotta (2 Pieces)", price: "$16" },
    { name: "Veg Kurma", price: "$16" },
    { name: "Egg Kurma", price: "$18" },
    { name: "Chicken Kurma", price: "$19" },
    { name: "Mutton Kurma", price: "$20" },
    { name: "Kudal Kuzhambu", price: "$20" },
    { name: "Meen Kuzhambu", price: "$20" },

    { name: "Veg Kothu Parotta", price: "$16" },
    { name: "Egg Kothu Parotta", price: "$18" },
    { name: "Chicken Kothu Parotta", price: "$19" },
    { name: "Mutton Kothu Parotta", price: "$20" },

    { name: "Dosa", price: "$11" },
    { name: "Uthappam", price: "$11" },

    { name: "Madurai Kari Dosa", price: "$15" },
  ],
},
{
  title: "DOSA TOPPINGS",
  items: [
    { name: "Onion", price: "$1" },
    { name: "Tomato", price: "$1" },
    { name: "Mixed Veg", price: "$1" },
    { name: "Green Chilli", price: "$1" },
    { name: "Podi", price: "$1" },
    { name: "Kara Podi", price: "$1" },
    { name: "Ghee", price: "$1" },
    { name: "Butter", price: "$1" },
    { name: "Paneer", price: "$3" },
    { name: "Cheese", price: "$3" },
    { name: "Mysore Masala", price: "$3" },
    { name: "MC Special Masala", price: "$3" },
    { name: "Potato Masala", price: "$3" },
    { name: "Egg", price: "$3" },
  ],
},
{
  title: "DESSERTS",
  items: [
    { name: "Elaneer Payasam", price: "$8" },
    { name: "Gulab Jamun", price: "$8" },
    { name: "Carrot Halwa", price: "$8" },
    { name: "Rasamalai", price: "$8" },
    { name: "Kesari", price: "$8" },
    { name: "Marriage Bread Halwa", price: "$8" },
  ],
},

    ],
  },
];

/* ===========================
   PRICE COUNT-UP
=========================== */
const PriceCounter = ({ price }) => {
  const numeric = parseInt(price.replace(/[^\d]/g, ""), 10) || 0;
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-40px" });

  useEffect(() => {
    if (!isInView || !numeric) return;
    const duration = 700;
    const start = performance.now();

    const tick = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      setCount(Math.floor(progress * numeric));
      if (progress < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, [isInView, numeric]);

  if (!price) return <span className="item-price" ref={ref}></span>;

  return (
    <span className="item-price" ref={ref}>
      ${count}
    </span>
  );
};

/* ===========================
   STEAM WISPS (over dish photos)
=========================== */
const Steam = () => (
  <div className="steam-wrap">
    <span className="steam s1" />
    <span className="steam s2" />
    <span className="steam s3" />
  </div>
);

const MenuList = ({ section }) => (
  <div className="menu-block">
    <h3 className="menu-block-title">
      <span className="leaf-icon">❧</span> {section.title}{" "}
      <span className="leaf-icon">❧</span>
    </h3>

    <div className="menu-block-body">
      <ul className="menu-items">
        {section.items.map((item) => (
          <li className="menu-item" key={item.name}>
            <span className="item-name">{item.name}</span>
            <span className="item-dots" />
            <PriceCounter price={item.price} />
          </li>
        ))}
      </ul>

      {section.image && (
        <div className="menu-block-img-wrap">
          <img
            className="menu-block-img"
            src={section.image}
            alt={section.title}
          />
          <Steam />
        </div>
      )}
    </div>
  </div>
);

const Menucontent1 = () => {
  return (
    <>
      <section className="masala-menu">
<section className="menu-brand-section">

  {/* LEFT IMAGE */}
  <div className="menu-side-img">
    <img
      src={jallikattu}
      alt="Jallikattu"
    />
  </div>

  {/* CENTER */}
  <div className="menu-brand-center">

    {/* LOGO */}
    <img
      src={clogo}
      alt="Masala Cafe Chettinad"
      className="menu-brand-logo"
    />

    {/* THIRUKKURAL */}
    <div className="menu-brand-quote">

      {/* <span className="quote-mark">“</span> */}

      <p className="kural-text">
        மோப்பக் குழையும் அனிச்சம் முகந்திரிந்து
        <br />
        நோக்கக் குழையும் விருந்து.
      </p>

      <p className="kural-meaning">
        (விருந்தினரை முகமலர்ச்சியுடன் வரவேற்பதே
        தமிழர் பண்பாட்டின் உயர்ந்த அடையாளமாகும்.)
      </p>

      {/* <span className="quote-mark">”</span> */}

      <h5>— திருக்குறள் 90</h5>

    </div>

  </div>

  {/* RIGHT IMAGE */}
  <div className="menu-side-img">
    <img
      src={valluvar}
      alt="Thiruvalluvar"
    />
  </div>

</section>

        {/* MENU CARD */}
        <div className="menu-wrapper">
          <div className="menu-content">
            <div className="menu-column">
              {menuColumns[0].sections.map((section) => (
                <MenuList section={section} key={section.title} />
              ))}
            </div>

            <div className="menu-column">
              {menuColumns[1].sections.map((section) => (
                <MenuList section={section} key={section.title} />
              ))}
            </div>
          </div>
        </div>

        <p className="menu-footer">✳ உணவே உண்மையான ஆனந்தம் ✳</p>
      </section>
      <Menucontent2 />
    </>
  );
};

export default Menucontent1;