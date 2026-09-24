import "./Footer.css";
import logoImg from "../assets/logoImg.png";

function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* PARTE SUPERIOR DO FOOTER */}
        <div className="footer-top">
          
          {/* Coluna 1: Logo Grande, Tagline & Avaliações */}
          <div className="footer-brand-col">
            <div className="brand-logo">
              <img src={logoImg} alt="Kanaloa Logo" className="footer-logo-img" />
              <h2>KANALOA</h2>
            </div>
            <p className="brand-tagline">Where strangers become family</p>

            {/* Botões de Avaliação abaixo da Tagline */}
            <div className="reviews-container">
              <a href="https://google.com" target="_blank" rel="noreferrer" className="review-btn">
                ⭐ LEAVE A REVIEW ↗
              </a>
              <a href="https://airbnb.com" target="_blank" rel="noreferrer" className="review-btn">
                🏠 RATE US ON AIRBNB ↗
              </a>
            </div>
          </div>

          {/* Coluna 2: Morada & Contactos + Social */}
          <div className="footer-info-col">
            <div className="info-block">
              <h3>KANALOA SURF HOUSE</h3>
              <p>23 Avenida do Oceano</p>
              <p>Costa da Caparica, 2825-000</p>
              <p className="phone">+351 910 000 000</p>
              <a href="mailto:hello@kanaloasurflodge.com" className="email-link">
                hello@kanaloasurflodge.com
              </a>
            </div>

            <div className="social-block">
              <h3>SOCIAL</h3>
              <div className="social-icons">
                <a href="https://instagram.com" target="_blank" rel="noreferrer" aria-label="Instagram">
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
                  </svg>
                </a>
                <a href="https://facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook">
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                  </svg>
                </a>
                <a href="https://airbnb.com" target="_blank" rel="noreferrer" aria-label="Airbnb">
                  <svg viewBox="0 0 24 24" width="22" height="22" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M12 2.25c-5.385 0-9.75 4.365-9.75 9.75 0 2.288.789 4.39 2.11 6.064l6.837 5.253a1.25 1.25 0 0 0 1.606 0l6.837-5.253A9.722 9.722 0 0 0 21.75 12c0-5.385-4.365-9.75-9.75-9.75zm0 13.5a3.75 3.75 0 1 1 0-7.5 3.75 3.75 0 0 1 0 7.5z"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>

          {/* Coluna 3: Navigation (Explore + About) */}
          <div className="footer-links-col">
            <div className="nav-columns">
              <div className="nav-col">
                <h3>EXPLORE</h3>
                <ul>
                  <li><a href="#book">Book a stay</a></li>
                  <li><a href="#rooms">Rooms</a></li>
                  <li><a href="#community">Community</a></li>
                  <li><a href="#surf">Surf</a></li>
                  <li><a href="#beach-club">Beach Club</a></li>
                </ul>
              </div>

              <div className="nav-col">
                <h3>ABOUT</h3>
                <ul>
                  <li><a href="#story">Our story</a></li>
                  <li><a href="#facilities">Facilities</a></li>
                  <li><a href="#gallery">Gallery</a></li>
                  <li><a href="#faq">FAQ</a></li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* PARTE INFERIOR DO FOOTER */}
        <div className="footer-bottom">
          <p>© 2026 Kanaloa Surf Lodge. All rights reserved.</p>
          <div className="legal-links">
            <a href="#privacidade">Política de Privacidade</a>
            <a href="#termos">Termos e Condições</a>
            <a href="#cookies">Política de Cookies</a>
            <a href="#reclamacoes">Livro de Reclamações ↗</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;