import "./Hero.css";
import heroBg from "../assets/mainpic.png";
import logoImg from "../assets/logoWhite.png";
import surfboardImg from "../assets/surf.png"; // Import da imagem da prancha

function Hero() {
  return (
    <section 
      className="hero-section" 
      style={{ backgroundImage: `linear-gradient(rgba(0,0,0,0.25), rgba(0,0,0,0.25)), url(${heroBg})` }}
    >
      <div className="hero-content">
        <img src={logoImg} alt="Kanaloa Logo" className="hero-logo" />
        <h1 className="hero-title">KANALOA SURF LODGE</h1>

        <div className="hero-buttons">
          <a href="#book" className="btn-book">
            <span 
              className="btn-surfboard-shape" 
              style={{
                WebkitMaskImage: `url(${surfboardImg})`,
                maskImage: `url(${surfboardImg})`
              }}
            ></span>
            <span className="btn-text">BOOK NOW</span>
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;