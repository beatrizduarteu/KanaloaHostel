import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logoImg from "../assets/logoImg.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        {/* Logo (Esquerda) */}
        <a href="#home" className="navbar-logo">
          <img src={logoImg} alt="Kanaloa Logo" className="logo-image" />
          <span>KANALOA</span>
        </a>

        {/* Links de Navegação + Botão (Empurrados para a Direita) */}
        <div className="navbar-right">
          <nav className="navbar-links">
            <a href="#book" className="nav-item">house</a>
            <a href="#accom" className="nav-item">ACCOM</a>
            <a href="#accom" className="nav-item">Our experience</a>
            <Link to="/community" className="nav-item">Community</Link>
            <a href="#about" className="nav-item">ABOUT US</a>
            <a href="#contact" className="nav-item">CONTACT</a>
          </nav>

          <a href="#book" className="nav-book-btn">
            BOOK NOW
          </a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;