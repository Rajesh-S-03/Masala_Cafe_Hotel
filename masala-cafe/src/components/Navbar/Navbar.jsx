import { useEffect, useState } from "react";
import "./navbar.css";
import logo from "../../assets/logooo.png";
import { Link, useLocation, useNavigate } from "react-router-dom";

function Navbar() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [orderOpen, setOrderOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navigate = useNavigate();
  const location = useLocation();

  const handleContactClick = () => {
    if (location.pathname !== "/") {
      navigate("/");

      setTimeout(() => {
        document.getElementById("contact")?.scrollIntoView({
          behavior: "smooth",
        });
      }, 200);
    } else {
      document.getElementById("contact")?.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  return (
    <nav className={scroll ? "navbar active" : "navbar"}>
<Link to="/" className="logo">
  <img src={logo} alt="Logo" />

  <div className="logo-text">
    <h2 style={{ fontStyle: "italic" }}>Masala Cafe</h2>
    <span>South Indian Restaurant</span>
  </div>
</Link>

      <div
        className={`hamburger ${menuOpen ? "open" : ""}`}
        onClick={() => setMenuOpen(!menuOpen)}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>

      <ul className={`nav-links ${menuOpen ? "show" : ""}`}>
        <li>
          <Link to="/" onClick={() => setMenuOpen(false)}>
            Home
          </Link>
        </li>

        <li>
          <Link to="/about" onClick={() => setMenuOpen(false)}>
            About
          </Link>
        </li>

        <li>
          <Link to="/menu" onClick={() => setMenuOpen(false)}>
            Menu
          </Link>
        </li>

        <li>
          <Link to="/gallery" onClick={() => setMenuOpen(false)}>
            Gallery
          </Link>
        </li>

      <li>
          <Link to="/contact" onClick={() => setMenuOpen(false)}>
            Contact
          </Link>
        </li>
         <li>
          <Link to="/catering" onClick={() => setMenuOpen(false)}>
            Catering
          </Link>
        </li>
      </ul>

      <button
  className="order-btn"
  onClick={() => setOrderOpen(true)}
>
  Order Now
</button>
{orderOpen && (
  <div
    className="order-overlay"
    onClick={() => setOrderOpen(false)}
  >
    <div
      className="order-card"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="order-close"
        onClick={() => setOrderOpen(false)}
      >
        ×
      </button>

      <h2>How would you like to order?</h2>
      <p>Choose your preferred option</p>

      <div className="order-options">
        <button
          className="order-option"
          onClick={() => {
            console.log("Pickup selected");
            setOrderOpen(false);
          }}
        >
          <span className="order-icon">🥡</span>
          <span>
            <strong>Pickup</strong>
            <small>Pick up from our restaurant</small>
          </span>
        </button>

        <button
          className="order-option"
          onClick={() => {
            console.log("Delivery selected");
            setOrderOpen(false);
          }}
        >
          <span className="order-icon">🛵</span>
          <span>
            <strong>Delivery</strong>
            <small>Get your food delivered</small>
          </span>
        </button>
      </div>
    </div>
  </div>
)}
    </nav>
  );
}

export default Navbar;