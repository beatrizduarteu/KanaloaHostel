import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import logoImg from "../assets/logoImg.png";

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [accommodationOpen, setAccommodationOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const closeAccommodationMenu = () => setAccommodationOpen(false);

  return (
    <header className={`navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="navbar-logo" aria-label="Kanaloa — página inicial">
          <img src={logoImg} alt="" className="logo-image" />
          <span>KANALOA</span>
        </Link>

        <div className="navbar-right">
          <nav className="navbar-links" aria-label="Main navigation">
            <div
              className={`nav-dropdown ${accommodationOpen ? "is-open" : ""}`}
              onMouseEnter={() => setAccommodationOpen(true)}
              onMouseLeave={closeAccommodationMenu}
              onKeyDown={(event) => {
                if (event.key === "Escape") closeAccommodationMenu();
              }}
            >
              <div className="nav-dropdown-heading">
                <Link to="/accommodation" className="nav-item" onClick={closeAccommodationMenu}>
                  Accommodation
                </Link>
              </div>

              <div className="nav-dropdown-menu" id="accommodation-menu" aria-label="Kanaloa homes">
                <Link to="/Ohana" className="nav-dropdown-link" onClick={closeAccommodationMenu}>
                  <strong>ʻOhana House</strong>
                  <span>Garden, hammocks & family time</span>
                </Link>
                <Link to="/Nalu" className="nav-dropdown-link" onClick={closeAccommodationMenu}>
                  <strong>Nalu House</strong>
                  <span>Sunny terrace by the beach</span>
                </Link>
                <Link to="/Maluhia" className="nav-dropdown-link" onClick={closeAccommodationMenu}>
                  <strong>Maluhia House</strong>
                  <span>A slower coastal hideaway</span>
                </Link>
              </div>
            </div>

            <a href="#accom" className="nav-item">Our experience</a>
            <Link to="/community" className="nav-item">Community</Link>
            <a href="#about" className="nav-item">About us</a>
            <Link to="/contact" className="nav-item">Contact</Link>
          </nav>

          <a href="#book" className="nav-book-btn">Book now</a>
        </div>
      </div>
    </header>
  );
}

export default Navbar;
