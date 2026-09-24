import React, { useEffect } from "react";
import "../components/Community.css";

// Dados para a Galeria Polaroid
const polaroidPhotos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80",
    caption: "Sunset surf squad 🏄‍♂️",
    rotation: "-3deg",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80",
    caption: "Family dinner in the garden 🍷",
    rotation: "2.5deg",
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?auto=format&fit=crop&w=600&q=80",
    caption: "Post-surf chill vibes 🌴",
    rotation: "-2deg",
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e?auto=format&fit=crop&w=600&q=80",
    caption: "Carcavelos morning check 🌊",
    rotation: "3deg",
  },
];

// Estatísticas dos Hóspedes
const originStats = [
  { code: "DE", country: "Alemanha", flag: "🇩🇪", percentage: "35%" },
  { code: "FR", country: "França", flag: "🇫🇷", percentage: "20%" },
  { code: "GB", country: "Reino Unido", flag: "🇬🇧", percentage: "15%" },
  { code: "NL", country: "Países Baixos", flag: "🇳🇱", percentage: "12%" },
  { code: "PT", country: "Portugal", flag: "🇵🇹", percentage: "10%" },
  { code: "OTHER", country: "Outros Países", flag: "🌍", percentage: "8%" },
];

function Community() {
  useEffect(() => {
    // Carrega o script da Elfsight quando a página abre
    const script = document.createElement("script");
    script.src = "https://elfsightcdn.com/platform.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, []);

  return (
    <div className="community-page">
      {/* 🌴 Hero Section */}
      <section className="community-hero">
        <span className="community-badge">★ GUEST STORIES & VIBES</span>
        <h1 className="community-title">Where Strangers Become Family</h1>
        <p className="community-subtitle">
          Real stories and verified reviews from guests who stayed at Kanaloa Surf Lodge.
        </p>
      </section>

      {/* 💬 Widget da Elfsight */}
      <section className="reviews-section-el">
        <div 
          className="elfsight-app-b56bf271-1685-4008-a92d-c1379f3c48d5" 
          data-elfsight-app-lazy
        ></div>
      </section>

      {/* 📸 Galeria Polaroid */}
      <section className="polaroid-section">
        <div className="section-header">
          <span className="community-badge">#KANALOAVIBES</span>
          <h2 className="section-title">Captured Moments</h2>
          <p className="section-desc">Snapshots of life in the garden, wave sessions, and shared memories.</p>
        </div>

        <div className="polaroid-grid">
          {polaroidPhotos.map((photo) => (
            <div 
              key={photo.id} 
              className="polaroid-card"
              style={{ transform: `rotate(${photo.rotation})` }}
            >
              <div className="tape"></div>
              <div className="polaroid-img-wrapper">
                <img src={photo.url} alt={photo.caption} />
              </div>
              <p className="polaroid-caption">{photo.caption}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 🗺️ Mapa de Origem dos Hóspedes */}
      <section className="origins-section">
        <div className="section-header">
          <span className="community-badge">GLOBAL COMMUNITY</span>
          <h2 className="section-title">Where Do Our Guests Come From?</h2>
          <p className="section-desc">Over 30+ nationalities have stayed with us under the same roof.</p>
        </div>

        <div className="origins-container">
          {/* LADO ESQUERDO: MAPA SVG INTERATIVO */}
          <div className="map-visual">
            <svg viewBox="0 0 1000 500" className="world-map-svg">
              {/* Continentes Ilustrativos de Fundo */}
              <g className="landmasses">
                {/* América do Norte */}
                <path d="M120,80 Q200,60 280,120 T220,240 T100,180 Z" fill="#cbe6e5" />
                {/* América do Sul */}
                <path d="M220,260 Q280,270 290,360 T220,460 T180,340 Z" fill="#cbe6e5" />
                {/* África */}
                <path d="M460,180 Q560,180 580,280 T490,420 T440,260 Z" fill="#cbe6e5" />
                {/* Ásia e Europa Geral */}
                <path d="M440,70 Q600,50 850,110 T880,260 T650,220 T480,150 Z" fill="#cbe6e5" />
                {/* Austrália */}
                <path d="M780,320 Q860,310 880,380 T790,420 Z" fill="#cbe6e5" />
              </g>

              {/* Destaque Europa Zoomed Region */}
              <g className="highlighted-countries">
                {/* Portugal */}
                <circle cx="470" cy="165" r="14" fill="#76bdbb" opacity="0.3" />
                <path d="M470,130 Q530,110 540,165 T480,175 Z" fill="#76bdbb" opacity="0.4" />
              </g>

              <g className="svg-pin" transform="translate(465, 168)">
                <circle r="6" fill="#e06d53" />
                <circle r="12" fill="#e06d53" opacity="0.3" className="pulse-circle" />
                <foreignObject x="-60" y="-35" width="120" height="30">
                  <div className="map-hub-tag">📍 Kanaloa Lodge</div>
                </foreignObject>
              </g>

              <g className="svg-guest-pin" transform="translate(520, 125)">
                <circle r="4" fill="#0f1d24" />
                <circle r="9" fill="#76bdbb" opacity="0.5" className="pulse-circle" />
              </g>

              <g className="svg-guest-pin" transform="translate(495, 140)">
                <circle r="4" fill="#0f1d24" />
                <circle r="9" fill="#76bdbb" opacity="0.5" className="pulse-circle" />
              </g>

              <g className="svg-guest-pin" transform="translate(485, 115)">
                <circle r="4" fill="#0f1d24" />
                <circle r="9" fill="#76bdbb" opacity="0.5" className="pulse-circle" />
              </g>

              <g className="svg-guest-pin" transform="translate(510, 115)">
                <circle r="4" fill="#0f1d24" />
                <circle r="9" fill="#76bdbb" opacity="0.5" className="pulse-circle" />
              </g>
            </svg>
          </div>

          <div className="origins-stats">
            <h3>Top Guest Origins</h3>
            <ul>
              {originStats.map((item, idx) => (
                <li key={idx}>
                  <span className="country-code">{item.code}</span>
                  <span className="flag">{item.flag}</span>
                  <span className="country-name">{item.country}</span>
                  <span className="percentage">{item.percentage}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="community-cta">
        <h3>Want to join the Kanaloa Family?</h3>
        <p>Follow us on Instagram and tag us in your stay memories <strong>@kanaloa.surflodge</strong></p>
      </section>
    </div>
  );
}

export default Community;