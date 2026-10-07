import { type FormEvent } from "react";
import "../components/contact.css";
import wavesVideo from "../assets/waves.mp4"; 
import polvoIcon from "../assets/polvo1.png";

const contactEmail = "hello@kanaloasurflodge.com";
const contactPhone = "+351 910 000 000";
const contactPhoneLink = "+351910000000";

const contactOptions = [
  {
    id: "stay",
    eyebrow: "STAY BY THE SEA",
    title: "Kanaloa Surf Lodge",
    description: "Questions about your stay, the house or availability? We’d love to help.",
    emailSubject: "Stay enquiry — Kanaloa Surf Lodge",
    action: "Ask about a stay",
    href: undefined,
  },
  {
    id: "surf",
    eyebrow: "CATCH A WAVE",
    title: "Kanaloa Surf School",
    description: "Ask us about surf lessons, equipment or finding the right session for you.",
    emailSubject: "Surf school enquiry — Kanaloa",
    action: "Ask about surf lessons",
    href: "https://kanaloabeachclub.com/surf-school",
  },
  {
    id: "restaurant",
    eyebrow: "GOOD FOOD, GOOD VIBES",
    title: "Kanaloa Restaurant",
    description: "Get in touch about the menu, a table or your next get-together.",
    emailSubject: "Restaurant enquiry — Kanaloa",
    action: "Contact the restaurant",
    href: "https://kanaloabeachclub.com/beach-club",
  },
];

type ContactTopic = "stay" | "surf" | "restaurant";

function HibiscusMark() {
  return (
    <svg className="contact-hibiscus" viewBox="0 0 180 180" aria-hidden="true">
      <g fill="currentColor">
        <ellipse cx="90" cy="43" rx="19" ry="38" />
        <ellipse cx="90" cy="43" rx="19" ry="38" transform="rotate(72 90 90)" />
        <ellipse cx="90" cy="43" rx="19" ry="38" transform="rotate(144 90 90)" />
        <ellipse cx="90" cy="43" rx="19" ry="38" transform="rotate(216 90 90)" />
        <ellipse cx="90" cy="43" rx="19" ry="38" transform="rotate(288 90 90)" />
      </g>
      <circle cx="90" cy="90" r="16" fill="#e8b84e" />
      <path d="M102 83 C119 72 129 75 137 68" fill="none" stroke="#e8b84e" strokeWidth="5" strokeLinecap="round" />
      <circle cx="141" cy="66" r="4" fill="#e8b84e" />
    </svg>
  );
}

function PlaceIcon({ kind }: { kind: string }) {
  if (kind === "surf") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M5 31c5-5 10-5 15 0s10 5 15 0 8-5 10-3M5 39c5-5 10-5 15 0s10 5 15 0 8-5 10-3" />
        <path d="M27 7c-7 7-10 16-10 25 8 0 17-4 24-11-4-7-8-11-14-14Z" />
        <path d="m20 27 13-13" />
      </svg>
    );
  }

  if (kind === "restaurant") {
    return (
      <svg viewBox="0 0 48 48" aria-hidden="true">
        <path d="M13 5v12M8 5v8c0 4 2 6 5 6s5-2 5-6V5M13 19v24M32 5c-5 5-7 11-7 17h8M31 22v21M32 5v17" />
      </svg>
    );
  }

  return (
    <svg viewBox="0 0 48 48" aria-hidden="true">
      <path d="m5 22 19-16 19 16M10 19v23h28V19M19 42V28h10v14" />
      <path d="M34 12V7h5v9" />
    </svg>
  );
}

function Contact() {
  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const formData = new FormData(event.currentTarget);
    const name = String(formData.get("name") ?? "");
    const email = String(formData.get("email") ?? "");
    const topic = String(formData.get("topic") ?? "stay") as ContactTopic;
    const message = String(formData.get("message") ?? "");
    const subjectByTopic: Record<ContactTopic, string> = {
      stay: "Stay enquiry — Kanaloa Surf Lodge",
      surf: "Surf school enquiry — Kanaloa",
      restaurant: "Restaurant enquiry — Kanaloa",
    };
    const subject = encodeURIComponent(subjectByTopic[topic] ?? subjectByTopic.stay);
    const body = encodeURIComponent(`Name: ${name}\nEmail: ${email}\n\n${message}`);

    window.location.href = `mailto:${contactEmail}?subject=${subject}&body=${body}`;
  };

  return (
    <main className="contact-page">
      <section className="contact-hero">
        <div className="contact-hero-video" aria-hidden="true">
          <video autoPlay loop muted playsInline>
            <source src={wavesVideo} type="video/mp4" />
          </video>
        </div>
        <div className="contact-hero-copy">
          <span className="contact-eyebrow">★ THE KANALOA FAMILY</span>
          <h1>Let’s talk <span>ocean.</span></h1>
          <p>
            Planning a stay, a surf lesson or a meal by the coast? Send us a note and
            we’ll point you in the right direction.
          </p>
          <a className="contact-primary-button" href="#contact-options">Find your Kanaloa</a>
        </div>
        <svg className="contact-wave" viewBox="0 0 1440 120" preserveAspectRatio="none" aria-hidden="true">
          <path d="M0 64c150 35 247-33 393-18s216 51 361 26 229-48 359-17 204 35 327 4v61H0Z" />
        </svg>
      </section>

      <section className="contact-options-section" id="contact-options">
        <div className="contact-tentacle-background" aria-hidden="true">
          <img className="contact-tentacle contact-tentacle-left" src={polvoIcon} alt="" />
          <img className="contact-tentacle contact-tentacle-right" src={polvoIcon} alt="" />
        </div>
        <div className="contact-section-heading">
          <span className="contact-eyebrow">ONE FAMILY, THREE WAYS TO CONNECT</span>
          <h2>What can we help you with?</h2>
          <p>Choose your Kanaloa and we’ll make sure your message reaches the right people.</p>
        </div>

        <div className="contact-cards">
          {contactOptions.map((option) => (
            <article className={`contact-card contact-card-${option.id}`} key={option.id}>
              <div className="contact-card-topline">
                <span className="contact-icon"><PlaceIcon kind={option.id} /></span>
                <span className="contact-card-eyebrow">{option.eyebrow}</span>
              </div>
              <h3>{option.title}</h3>
              <p>{option.description}</p>
              <a
                className="contact-card-link"
                href={option.href ?? `mailto:${contactEmail}?subject=${encodeURIComponent(option.emailSubject)}`}
                target={option.href ? "_blank" : undefined}
                rel={option.href ? "noreferrer" : undefined}
              >
                {option.action}<span aria-hidden="true"> ↗</span>
              </a>
              <a className="contact-card-phone" href={`tel:${contactPhoneLink}`}>
                Call {contactPhone}
              </a>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-details-section">
        <div className="contact-mail-tentacles" aria-hidden="true">
          <img className="contact-mail-tentacle contact-mail-tentacle-left" src={polvoIcon} alt="" />
          <img className="contact-mail-tentacle contact-mail-tentacle-right" src={polvoIcon} alt="" />
        </div>
        <div className="contact-details-card">
          <div className="contact-details-intro">
            <span className="contact-eyebrow">COME SAY ALOHA</span>
            <h2>We’re just around the corner.</h2>
            <p>Find us on the Costa da Caparica, a short trip from Lisbon and close to the waves.</p>
            <a
              className="contact-map-link"
              href="https://maps.google.com/?q=23+Avenida+do+Oceano,+Costa+da+Caparica,+2825-000,+Portugal"
              target="_blank"
              rel="noreferrer"
            >
              Get directions <span aria-hidden="true">↗</span>
            </a>
          </div>

          <div className="contact-detail-list">
            <div className="contact-detail-item">
              <span className="contact-detail-label">VISIT</span>
              <address>23 Avenida do Oceano<br />Costa da Caparica, 2825-000<br />Portugal</address>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-label">CALL</span>
              <a href={`tel:${contactPhoneLink}`}>{contactPhone}</a>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-label">EMAIL</span>
              <a href={`mailto:${contactEmail}`}>{contactEmail}</a>
            </div>
            <div className="contact-detail-item">
              <span className="contact-detail-label">FOLLOW THE VIBES</span>
              <a href="https://www.instagram.com/kanaloa.surflodge/" target="_blank" rel="noreferrer">
                @kanaloa.surflodge ↗
              </a>
            </div>
          </div>
        </div>

        <form className="contact-form" id="contact-form" onSubmit={handleSubmit}>
          <div className="contact-form-heading">
            <span className="contact-eyebrow">DROP US A LINE</span>
            <h2>Send a message</h2>
            <p>We’ll open a new email with your message ready to send.</p>
          </div>

          <label>
            Your name
            <input name="name" type="text" autoComplete="name" placeholder="Name" required />
          </label>
          <label>
            Your email
            <input name="email" type="email" autoComplete="email" placeholder="you@example.com" required />
          </label>
          <label>
            I’m asking about
            <select name="topic" defaultValue="stay">
              <option value="stay">A stay at the Surf Lodge</option>
              <option value="surf">Surf lessons</option>
              <option value="restaurant">The restaurant</option>
            </select>
          </label>
          <label>
            Your message
            <textarea name="message" rows={4} placeholder="Tell us what you have in mind…" required />
          </label>
          <button className="contact-primary-button contact-submit" type="submit">Prepare email <span aria-hidden="true">↗</span></button>
        </form>
      </section>

      <section className="contact-bottom-note">
        <HibiscusMark />
        <p>Good waves, good food, good people. See you soon.</p>
      </section>
    </main>
  );
}

export default Contact;
