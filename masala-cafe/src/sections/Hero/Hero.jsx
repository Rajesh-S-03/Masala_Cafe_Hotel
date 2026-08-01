import React from 'react'
import '../../styles/hero.css'
import heroVideo from '../../assets/herov2.mp4'
import therikka from '../../assets/therikka.png'

const Hero = () => {
  return (

<section className="hero">

    {/* Background Video */}
    <video
        className="hero-video"
        autoPlay
        muted
        loop
        playsInline
    >
        <source src={heroVideo} type="video/mp4" />
    </video>

    {/* Overlay */}
    <div className="hero-overlay"></div>

    {/* Hero Content */}
  <div className="hero-content container">

    <img
        src={therikka}
        alt="Therikka"
        className="hero-poster"
    />

    <h1>
        Experience the <span>Real Taste</span> of Chettinad
    </h1>

    {/* <p className="hero-desc">
        Traditional recipes, rich spices, handcrafted flavors,
        and an unforgettable dining experience.
    </p> */}

    <div className="hero-btns">

        <button className="pickup-btn">
            🍽 Pickup
        </button>

        <button className="delivery-btn">
            🛵 Delivery
        </button>

    </div>

</div>

</section>
  )
}

export default Hero