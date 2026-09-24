import "./Intro.css";
import surfPic1 from "../assets/costas.jpg";
import sunsetPic2 from "../assets/outside.jpg";
import hibiscusImg from "../assets/hibiscus1.png";
import wavesVideo from "../assets/waves.mp4"; // 👈 Importa o teu vídeo de ondas de alta qualidade (MP4 ou WebM)

function Intro() {
  return (
    <section className="story-section" id="about">
      
      {/* 🌊 VÍDEO DE ONDAS EM MARCA D'ÁGUA / SOMBRA */}
      <div className="waves-video-watermark" aria-hidden="true">
        <video autoPlay loop muted playsInline>
          <source src={wavesVideo} type="video/mp4" />
        </video>
      </div>

      {/* 🌺 HIBISCO SUPERIOR DIREITO */}
      <div className="hibiscus-watermark-top-right">
        <img src={hibiscusImg} alt="" aria-hidden="true" />
      </div>

      <div className="story-container">
        {/* Lado Esquerdo: Composição Visual */}
        <div className="story-visuals">
          <div className="organic-frame-main">
            <img src={surfPic1} alt="Surfing in Caparica" className="frame-img" />
          </div>

          <div className="organic-frame-secondary">
            <img src={sunsetPic2} alt="Lodge Outdoor" className="frame-img" />
          </div>
        </div>

        {/* Lado Direito: Conteúdo Narrativo */}
        <div className="story-content">
          <span className="story-subtitle">✶ OUR STORY</span>

          <h2 className="story-title">
            Named for the <br />
            <em>god of the sea.</em>
          </h2>

          <div className="story-paragraphs">
            <p>
              In Hawaiian tradition, Kanaloa rules the tides, the depths, and all that flows
              between worlds. We chose his name as a promise — that this place would hold
              the same primal pull as the open ocean.
            </p>
            <p>
              Costa da Caparica sits on a dramatic headland where Atlantic swells travel uninterrupted
              from thousands of miles away. We built this lodge for those who read the
              forecast before they read their messages — surfers, meditators, artists,
              wanderers — and everyone who simply feels drawn to the water.
            </p>
          </div>
        </div>
      </div>

      {/* 🌺 HIBISCO INFERIOR ESQUERDO */}
      <div className="hibiscus-watermark">
        <img src={hibiscusImg} alt="" aria-hidden="true" />
      </div>
    </section>
  );
}

export default Intro;