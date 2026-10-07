import { useEffect } from "react";
import "../components/Community.css";

// Dados para a Galeria Polaroid
const polaroidPhotos = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1502680390469-be75c86b636f?auto=format&fit=crop&w=600&q=80",
    caption: "Sunset surf squad",
    rotation: "-3deg",
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1511632765486-a01980e01a18?auto=format&fit=crop&w=600&q=80",
    caption: "Family dinner in the garden",
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
    caption: "Costa morning check",
    rotation: "3deg",
  },
];

// Estatísticas dos Hóspedes
type GuestOrigin = {
  code: string;
  country: string;
  flag: string;
  percentage: string;
  lon?: number;
  lat?: number;
  labelDx?: number;
  labelDy?: number;
};

const originStats: GuestOrigin[] = [
  { code: "DE", country: "Alemanha", flag: "🇩🇪", percentage: "35%", lon: 13.405, lat: 52.52, labelDx: 9, labelDy: 4 },
  { code: "FR", country: "França", flag: "🇫🇷", percentage: "20%", lon: 2.3522, lat: 48.8566, labelDx: -9, labelDy: 15 },
  { code: "GB", country: "Reino Unido", flag: "🇬🇧", percentage: "15%", lon: -0.1276, lat: 51.5072, labelDx: -9, labelDy: -7 },
  { code: "NL", country: "Países Baixos", flag: "🇳🇱", percentage: "12%", lon: 4.9041, lat: 52.3676, labelDx: 9, labelDy: -9 },
  { code: "PT", country: "Portugal", flag: "🇵🇹", percentage: "10%", lon: -9.1393, lat: 38.7223, labelDx: -9, labelDy: 14 },
  { code: "OTHER", country: "", flag: "", percentage: "8%" },
];

function projectToMap(lon: number, lat: number) {
  return {
    x: ((lon + 180) / 360) * 880,
    y: ((90 - lat) / 180) * 507,
  };
}

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
            <svg viewBox="0 0 940 477" className="world-map-svg" role="img" aria-label="Mapa-mundo com pins nos países de origem dos hóspedes">
              <image
                className="world-map-base"
                href="https://upload.wikimedia.org/wikipedia/commons/9/9f/BlankMap-World-Equirectangular.svg"
                x="0"
                y="0"
                width="940"
                height="477"
                preserveAspectRatio="none"
              />

              {/* Localização do Kanaloa Surf Lodge, na região de Lisboa */}
              <g className="svg-pin" transform={`translate(${projectToMap(-9.2, 38.6).x} ${projectToMap(-9.2, 38.6).y})`}>
                <circle r="7" fill="#0f1d24" />
                <line x1="-7" y1="0" x2="-25" y2="0" stroke="#0f1d24" strokeWidth="1.5" />
                <foreignObject x="-151" y="-15" width="125" height="30">
                  <div className="map-hub-tag">Kanaloa Lodge</div>
                </foreignObject>
              </g>

              {originStats.map((item) => {
                if (
                  item.lon === undefined ||
                  item.lat === undefined ||
                  item.labelDx === undefined ||
                  item.labelDy === undefined
                ) return null;
                const point = projectToMap(item.lon, item.lat);
                const radius = 4 + Number(item.percentage.replace("%", "")) / 12;

                return (
                  <g key={item.code} className="svg-guest-pin" transform={`translate(${point.x} ${point.y})`}>
                    <title>{`${item.country}: ${item.percentage}`}</title>
                    <circle r={radius} fill="#e06d53" stroke="#ffffff" strokeWidth="2" />
                    <text
                      className="map-country-code"
                      x={item.labelDx}
                      y={item.labelDy}
                      textAnchor={item.labelDx < 0 ? "end" : "start"}
                    >
                      {item.code}
                    </text>
                  </g>
                );
              })}
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
