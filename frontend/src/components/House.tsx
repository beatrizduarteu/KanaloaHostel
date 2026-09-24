import { useState } from "react";
import "./House.css";

// Importa as tuas imagens
import gardenImg1 from "../assets/vibe.jpg";
import gardenImg0 from "../assets/outside.jpg";
import gardenImg2 from "../assets/outside1.jpg";
import gardenImg3 from "../assets/outside2.jpg";
import gardenImg4 from "../assets/outside3.jpg";
import gardenImg5 from "../assets/outside4.jpg";

import houseImg from "../assets/house.jpg";
import houseImg1 from "../assets/house1.jpg";
import houseImg2 from "../assets/house2.jpg";
import houseImg3 from "../assets/house3.jpg";

import remoteImg1 from "../assets/remote.jpg";
import remoteImg2 from "../assets/remote1.jpg";
import remoteImg3 from "../assets/remote2.avif";

import roomImg1 from "../assets/quarto.jpg";
import roomImg2 from "../assets/quarto1.jpg";
import roomImg3 from "../assets/quarto2.jpg";
import roomImg4 from "../assets/quarto3.jpg";
import roomImg5 from "../assets/quarto4.jpg";
import roomImg6 from "../assets/quarto5.jpg";
import roomImg7 from "../assets/quarto6.jpg";
import hibiscusImg from "../assets/hibiscus1.png"
import locationImg from "../assets/location.png"

// Componente individual para a galeria de fotos de cada cartão
function ImageSlider({ images, tag }: { images: string[]; tag: string }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="feature-img-wrapper">
      <img src={images[currentIndex]} alt={`Slide ${currentIndex + 1}`} className="feature-slider-img" />
      <span className="feature-tag">{tag}</span>

      {/* Controlo do Slider */}
      {images.length > 1 && (
        <>
          <button className="slider-arrow prev" onClick={prevSlide} aria-label="Foto anterior">
            ‹
          </button>
          <button className="slider-arrow next" onClick={nextSlide} aria-label="Próxima foto">
            ›
          </button>

          {/* Pontos Indicadores */}
          <div className="slider-dots">
            {images.map((_, idx) => (
              <span
                key={idx}
                className={`dot ${idx === currentIndex ? "active" : ""}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setCurrentIndex(idx);
                }}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

function House() {
  // Categorias de Imagens Separadas por Espaço
  const outdoorImages = [gardenImg4, gardenImg1, gardenImg2, gardenImg3, gardenImg5, gardenImg0];
  const commonSpacesImages = [houseImg3, houseImg, houseImg1, houseImg2];
  const bedroomImages = [roomImg1, roomImg2, roomImg3, roomImg4, roomImg5, roomImg6, roomImg7];
  const workSpacesImages = [remoteImg1, remoteImg2, remoteImg3];

  return (
    <section className="house-section" id="the-house">
      <div className="house-container">
        
        {/* Cabeçalho Principal */}
        <div className="house-header">
          <span className="house-subtitle">✶ FULL HOUSE RENTAL</span>
          <h2 className="house-title">
            <em>Between Lisbon and the Atlantic</em>
          </h2>
          <p className="house-description">
            Rent the entire house & private garden. A slow-paced Mediterranean retreat close to everything, yet quiet enough to feel like a true escape.
          </p>
        </div>

        {/* Métricas / Stats */}
        <div className="house-stats-bar">
  <div className="stat-item">
    <img src={hibiscusImg} alt="" className="stat-bg-icon" />
    <span className="stat-num">8</span>
    <span className="stat-label">Max Guests</span>
  </div>

  <div className="stat-item">
    <img src={hibiscusImg} alt="" className="stat-bg-icon" />
    <span className="stat-num">4</span>
    <span className="stat-label">Spacious Bedrooms</span>
  </div>

  <div className="stat-item">
    <img src={hibiscusImg} alt="" className="stat-bg-icon" />
    <span className="stat-num">5</span>
    <span className="stat-label">Beds</span>
  </div>

  <div className="stat-item">
    <img src={hibiscusImg} alt="" className="stat-bg-icon" />
    <span className="stat-num">2.5</span>
    <span className="stat-label">Bathrooms</span>
  </div>

  <div className="stat-item">
    <img src={hibiscusImg} alt="" className="stat-bg-icon" />
    <span className="stat-num">980 m²</span>
    <span className="stat-label">Private Gated Land</span>
  </div>
</div>

        {/* 🌿 SECÇÃO 1: ESPAÇOS COMUNS E EXTERIOR */}
        <div className="house-group-header">
          <span className="group-badge">Grounds & Social Spaces</span>
          <h3>The Sanctuary Grounds</h3>
          <p>Explore the outdoor haven and spacious indoor living areas designed for gather and relaxation.</p>
        </div>

        <div className="house-features-grid">
          {/* Card 1: Jardim e Exterior */}
          <div className="feature-card">
            <ImageSlider images={outdoorImages} tag="980m² Private Garden" />
            <div className="feature-info">
              <h3>Shorelines & Garden Life</h3>
              <p>
                Gated 980m² garden with hammocks, fire pit under fairy lights, outdoor BBQ, side nook with lemon tree, and space to relax barefoot after the beach.
              </p>
            </div>
          </div>

          {/* Card 2: Áreas Comuns e Cozinha */}
          <div className="feature-card">
            <ImageSlider images={commonSpacesImages} tag="Living & Dining" />
            <div className="feature-info">
              <h3>Shared Living Spaces</h3>
              <p>
                Fully equipped gas-stove kitchen, warm dining setup, cozy indoor lounge, and private gated parking for up to 3 vehicles with security cameras.
              </p>
            </div>
          </div>
        </div>

        {/* 🛏️ SECÇÃO 2: QUARTOS E ESPAÇOS DE TRABALHO */}
        <div className="house-group-header">
          <span className="group-badge">Rest & Work Quarters</span>
          <h3>Bedrooms & Private Spaces</h3>
          <p>Thoughtfully configured rooms providing restful sleep and dedicated workspaces for remote focus.</p>
        </div>

        <div className="house-features-grid">
          {/* Card 3: Os Quartos */}
          <div className="feature-card">
            <ImageSlider images={bedroomImages} tag="4 Bedrooms / 5 Beds" />
            <div className="feature-info">
              <h3>Peaceful Bedrooms & Suites</h3>
              <p>
                4 light-filled, comfortable bedrooms sleeping up to 8 guests. Features a unique ensuite bathroom cleverly hidden behind a closet door.
              </p>
            </div>
          </div>

          {/* Card 4: Estação de Trabalho / Remote Work */}
          <div className="feature-card">
            <ImageSlider images={workSpacesImages} tag="Work Setup" />
            <div className="feature-info">
              <h3>Remote Work Ready</h3>
              <p>
                Equipped with dedicated work desks across bedrooms and ultra-fast 800+ Mbps Fiber Wi-Fi to ensure seamless remote work and video calls.
              </p>
            </div>
          </div>
        </div>
        
        {/* Callout */}
        <div className="house-location-callout">
          <div className="callout-text">
            <h3 className="location-title">
              <img src={locationImg} alt="Location" 
              style={{ 
              width: '32px', 
              height: '32px', 
              objectFit: 'contain', 
              flexShrink: 0,
              filter: 'brightness(0) saturate(100%) invert(10%) sepia(20%) saturate(1500%) hue-rotate(155deg) brightness(95%) contrast(95%)'
            }}  />
              Location Highlights
            </h3>
            <p>⏱ <strong>20 mins</strong> to Lisbon Center &nbsp;|&nbsp; 🏖 <strong>6 mins</strong> to Beaches & Beach Clubs &nbsp;|&nbsp; 🚶 Walking distance to local brunch cafes</p>
          </div>
          <a href="#book" className="primary-book-btn">
            Book Entire Lodge
          </a>
        </div>

        {/* Reviews */}
        <div className="house-reviews-banner">
          <div className="review-quote">
            <p>“Era espaçoso para 8 pessoas, numa excelente localização. Tão tranquilo e seguro — o quintal e o jardim são lindos!”</p>
            <span className="review-author">★ Verified Airbnb Guest Review</span>
          </div>
          <div className="review-quote">
            <p>“A Sofia é uma anfitriã incrível e conhece muito bem a região. O Vittorio ensinou desde iniciantes até pessoas de 60 anos a surfarem a 1ª onda!”</p>
            <span className="review-author">★ Verified Airbnb Guest Review</span>
          </div>
        </div>

        

      </div>
    </section>
  );
}

export default House;