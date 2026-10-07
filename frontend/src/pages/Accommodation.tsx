import { useState, type KeyboardEvent, type MouseEvent } from "react";
import { useNavigate } from "react-router-dom";
import "../components/Accommodation.css";
import womaVideo from "../assets/Woman.mp4";
import ohanaPhoto1 from "../assets/house3.jpg";
import ohanaPhoto2 from "../assets/house1.jpg";
import ohanaPhoto3 from "../assets/house2.jpg";
import ohanaPhoto4 from "../assets/quarto.jpg";
import ohanaPhoto5 from "../assets/outside.jpg";
import ohanaPhoto6 from "../assets/outside1.jpg";
import ohanaPhoto7 from "../assets/outside4.jpg";
import ohanaPhoto8 from "../assets/remote.jpg";
import ohanaPhoto9 from "../assets/surfboard.jpg";
import naluPhoto1 from "../assets/nalu.avif";
import naluPhoto2 from "../assets/nalu111.avif";
import naluPhoto3 from "../assets/nalu2.avif";
import naluPhoto4 from "../assets/nalu3.avif";
import naluPhoto5 from "../assets/nalu4.avif";
import naluPhoto6 from "../assets/nalu5.avif";
import naluPhoto7 from "../assets/nalu7.avif";
import naluPhoto8 from "../assets/nalu9.avif";
import naluPhoto9 from "../assets/nalu8.avif";
import maluhiaPhoto1 from "../assets/maluhia.avif";
import maluhiaPhoto2 from "../assets/maluhia1.avif";
import maluhiaPhoto3 from "../assets/maluhia2.avif";
import maluhiaPhoto4 from "../assets/maluhia3.avif";
import maluhiaPhoto5 from "../assets/maluhia4.avif";
import maluhiaPhoto6 from "../assets/maluhia5.avif";
import maluhiaPhoto7 from "../assets/maluhia11.avif";
import maluhiaPhoto8 from "../assets/maluhia13.jpeg";
import maluhiaPhoto9 from "../assets/maluhia10.avif";

export type Stay = {
  number: string;
  title: string;
  vibe: string;
  description: string;
  fullDescription: string[];
  rating: string;
  isNewListing?: boolean;
  details: string[];
  caption: string;
  highlights: string[];
  amenitySections: { title: string; items: string[] }[];
  houseRules: string[];
  location: string;
  registration: string;
  url: string;
  theme: "ohana" | "nalu" | "maluhia";
  photos: [string, ...string[]];
};

export const stays: Stay[] = [
  {
    number: "01",
    title: "ʻOhana House",
    vibe: "A family escape",
    description: "A roomy, welcoming home for families and friends who want a local feel and space to slow down after a day on the coast.",
    fullDescription: [
      "Just 20 minutes from Lisbon and six minutes from the beach, ʻOhana House feels close to everything while still offering a quiet escape. The home sits on a private, gated 980 m² plot with a leafy garden, hammocks, a barbecue and a fire pit under the lights.",
      "Hosted by locals who know the neighbourhood, it is a relaxed base for beach days, cliff walks, local cafés and surf lessons. There is room for up to eight guests, four bedrooms, generous shared spaces and dedicated work areas with fast Wi-Fi.",
      "Guests have private access to the whole house and garden, including the outdoor shower, workspaces, hammock area, barbecue and fire-pit space. A car is useful for exploring Lisbon, quieter beaches and the coast at your own pace.",
    ],
    rating: "4.71 · 48 reviews",
    details: ["8 guests", "4 bedrooms", "5 beds", "2.5 baths"],
    caption: "Make room for your people",
    highlights: [
      "6 minutes to the beach · 20 minutes to Lisbon",
      "980 m² gated garden · hammocks · fire pit · barbecue",
      "800+ Mbps Wi-Fi · workspace · smart check-in · parking for 3 cars",
    ],
    amenitySections: [
      { title: "Garden & outdoors", items: ["Private, gated 980 m² garden with a lemon tree and wind chime", "Hammocks, outdoor dining furniture and loungers", "Barbecue, garden fire pit and outdoor shower", "Free parking for up to 3 cars"] },
      { title: "Kitchen & dining", items: ["Fully equipped kitchen with gas stove and oven", "Dishwasher, microwave, fridge and freezer", "Coffee machine, kettle, blender, toaster and baking tray", "Cookware, tableware, wine glasses, barbecue tools and dining table"] },
      { title: "Bedrooms & laundry", items: ["4 bedrooms · 5 beds · sleeps up to 8", "Bed linen, extra blankets, hangers and wardrobes", "Blackout blinds, iron and drying rack", "Free washing machine in the home"] },
      { title: "Bathroom", items: ["Bathtub, bidet, hot water and hair dryer", "Shampoo, body wash, soap and cleaning products", "Private outdoor shower"] },
      { title: "Work & entertainment", items: ["Dedicated workspace in a bedroom with a door", "Wi-Fi over 800 Mbps and wired Ethernet", "TV, books and reading material"] },
      { title: "Comfort & family", items: ["Central air conditioning, portable fans, heater and radiators", "Wood-burning indoor fireplace with fireplace guards", "Window safety nets", "Travel cot available on request"] },
      { title: "Check-in & services", items: ["Self check-in with smart lock and private entrance", "Private use of the entire house and garden", "Long stays of 28 days or more are welcome", "Bag drop may be available by arrangement"] },
    ],
    houseRules: [
      "Check-in after 16:00 · check-out by 11:00",
      "Maximum 8 guests · quiet hours must be respected",
      "No pets. Smoking is not allowed inside; smoking is permitted in the garden only.",
      "All guests must complete the registration form before check-in.",
      "Basic supplies are provided for the first days. Lost keys or damage may incur a fee.",
    ],
    location: "Charneca de Caparica, Portugal",
    registration: "139634/AL",
    url: "https://www.airbnb.pt/rooms/1141301707351062040",
    theme: "ohana",
    photos: [
      ohanaPhoto1,
      ohanaPhoto2,
      ohanaPhoto3,
      ohanaPhoto4,
      ohanaPhoto5,
      ohanaPhoto6,
      ohanaPhoto7,
      ohanaPhoto8,
      ohanaPhoto9,
    ],
  },
  {
    number: "02",
    title: "Nalu House",
    vibe: "Sun, terrace & sea",
    description: "Stay in the heart of Caparica, with local cafés and restaurants nearby and the beach just a short walk away.",
    fullDescription: [
      "Nalu House is in the heart of Costa da Caparica, around a two-minute walk from the beach. Cafés, restaurants and shops are close by, with a grocery shop about 30 seconds away and the first restaurant just steps from the door.",
      "This is a lived-in local neighbourhood: take a morning surf, grab coffee around the corner and come back to a sunny terrace for lunch or a barbecue. The street-facing windows keep you connected to the neighbourhood, so some street and evening sounds are part of the central location.",
      "The house has three bedrooms, a full kitchen, a washing machine, fast mobile Wi-Fi and a private sunny terrace. Guests have the home to themselves; free public street parking is usually available nearby.",
    ],
    rating: "4.63 · 16 reviews",
    details: ["5 guests", "3 bedrooms", "3 beds", "1.5 baths"],
    caption: "Follow the sun to the sea",
    highlights: [
      "2-minute walk to the beach",
      "Sunny terrace · barbecue · cafés, shops & restaurants nearby",
      "Coffee machine · washing machine · fast mobile Wi-Fi",
    ],
    amenitySections: [
      { title: "Terrace, beach & neighbourhood", items: ["Private sunny terrace with outdoor dining", "Private charcoal barbecue", "About a 2-minute walk to the beach", "Grocery shop about 30 seconds away; restaurants, cafés and shops close by"] },
      { title: "Kitchen & dining", items: ["Full kitchen with electric stove and double oven", "Microwave, fridge, freezer and cookware", "Coffee machine, kettle, toaster, blender and wine glasses", "Tableware, barbecue tools, coffee and dining table"] },
      { title: "Bedrooms & laundry", items: ["3 bedrooms · 3 beds · sleeps up to 5 (two double beds and one single)", "Built-in wardrobe, hangers and clothes-drying rack", "Washing machine", "Travel cot available on request"] },
      { title: "Bathroom & comfort", items: ["Bathtub, bidet, hot water and hair dryer", "Cleaning products", "Portable fans and radiator heating"] },
      { title: "Entertainment & services", items: ["TV with Amazon Prime Video and Disney+", "Fast mobile Wi-Fi", "Fire extinguisher and first aid kit", "Cleaning may be available during the stay"] },
      { title: "Getting around", items: ["Free public street parking nearby (not private parking)", "Beach, local cafés, restaurants and shops within walking distance"] },
    ],
    houseRules: [
      "Check-in after 16:00 · check-out by 10:00",
      "Maximum 5 guests; only registered guests may stay.",
      "No smoking indoors; smoking is allowed on the terrace.",
      "Quiet hours are 22:00–08:00. No parties or events.",
      "Please take rubbish to the bins on the way to the beach and switch off lights when leaving.",
    ],
    location: "Costa da Caparica, Portugal",
    registration: "169248/AL",
    url: "https://www.airbnb.pt/rooms/1457979258404302265",
    theme: "nalu",
    photos: [
      naluPhoto1,
      naluPhoto2,
      naluPhoto3,
      naluPhoto4,
      naluPhoto5,
      naluPhoto6,
      naluPhoto7,
      naluPhoto8,
      naluPhoto9,
    ],
  },
  {
    number: "03",
    title: "Maluhia House",
    vibe: "A quieter coastal hideaway",
    description: "A relaxed, spacious home for families and friends, with a private yard for long meals and easy days together.",
    fullDescription: [
      "Maluhia House is a spacious, welcoming base about 20 minutes from Lisbon and 10 minutes from the beach. It is close to local restaurants and a large grocery shop, yet calm enough to feel like a proper coastal break.",
      "The private backyard is made for slow mornings and long evenings: have coffee outside, share a meal under the parasol or fire up the barbecue after the beach. The house has four bedrooms and room for up to eight guests.",
      "Guests have private use of the entire home and garden, including the living areas, kitchen, bedrooms and barbecue. A grocery shop is just across the road, and a car makes it easier to reach Lisbon, hidden beaches and cliff walks.",
    ],
    rating: "New listing · 1 review",
    isNewListing: true,
    details: ["8 guests", "4 bedrooms", "5 beds", "2 bathrooms"],
    caption: "Take the coast at your pace",
    highlights: [
      "10 minutes to the beach · 20 minutes to Lisbon",
      "Private backyard · outdoor dining · barbecue",
      "Free on-site parking · grocery store across the road",
    ],
    amenitySections: [
      { title: "Garden & outdoors", items: ["Private backyard and patio", "Outdoor furniture and dining area", "Barbecue for meals outside", "Free on-site and street parking"] },
      { title: "Kitchen & dining", items: ["Fully equipped kitchen with gas stove and oven", "Fridge, freezer, cookware and tableware", "Coffee machine, toaster and dining table", "Coffee provided"] },
      { title: "Bedrooms & laundry", items: ["4 bedrooms · 5 beds · sleeps up to 8", "Bed linen, towels, hangers, wardrobe and blackout blinds", "Washing machine", "Travel cot available on request"] },
      { title: "Work & comfort", items: ["Wi-Fi and dedicated workspace", "Indoor fireplace and portable fans", "Bath, bidet, hair dryer and hot water"] },
      { title: "Location & services", items: ["Grocery shop across the road and local restaurants nearby", "About 10 minutes to the beach · 20 minutes to Lisbon", "Luggage drop-off may be available"] },
      { title: "Parking & safety", items: ["Free parking on site and on the street", "Fire extinguisher", "No TV or air conditioning is listed"] },
    ],
    houseRules: [
      "Check-in after 16:00 · check-out by 11:00",
      "Maximum 8 guests.",
      "Please follow the house rules and local quiet hours shown in your Airbnb reservation.",
      "Registration details and arrival instructions are provided after booking.",
    ],
    location: "Charneca da Caparica, Portugal",
    registration: "139634/AL",
    url: "https://www.airbnb.pt/rooms/1739208631301252140",
    theme: "maluhia",
    photos: [
      maluhiaPhoto1,
      maluhiaPhoto2,
      maluhiaPhoto3,
      maluhiaPhoto4,
      maluhiaPhoto5,
      maluhiaPhoto6,
      maluhiaPhoto7,
      maluhiaPhoto8,
      maluhiaPhoto9,
    ],
  },
];

function StayCard({ stay }: { stay: Stay }) {
  const [activePhoto, setActivePhoto] = useState(0);
  const navigate = useNavigate();
  const detailsPath = `/${stay.theme[0].toUpperCase()}${stay.theme.slice(1)}`;

  const openDetails = () => navigate(detailsPath);
  const handleCardClick = (event: MouseEvent<HTMLElement>) => {
    if ((event.target as HTMLElement).closest("a, button")) return;
    openDetails();
  };
  const handleCardKeyDown = (event: KeyboardEvent<HTMLElement>) => {
    if (event.target !== event.currentTarget) return;
    if (event.key === "Enter" || event.key === " ") {
      event.preventDefault();
      openDetails();
    }
  };

  const changePhoto = (direction: number) => {
    setActivePhoto((current) => (current + direction + stay.photos.length) % stay.photos.length);
  };

  return (
    <article
      className={`accommodation-card accommodation-card-${stay.theme}`}
      role="link"
      tabIndex={0}
      aria-label={`See details for ${stay.title}`}
      onClick={handleCardClick}
      onKeyDown={handleCardKeyDown}
    >
      <div className="accommodation-gallery" aria-label={`Photo gallery for ${stay.title}`}>
        <img
          className="accommodation-photo"
          src={stay.photos[activePhoto]}
          alt={`${stay.title}, photo ${activePhoto + 1} of ${stay.photos.length}`}
          loading="lazy"
          decoding="async"
        />

        {stay.photos.length > 1 && (
          <>
            <button
              className="accommodation-slide-arrow accommodation-slide-prev"
              type="button"
              onClick={() => changePhoto(-1)}
              aria-label={`Previous photo of ${stay.title}`}
            >
              ‹
            </button>
            <button
              className="accommodation-slide-arrow accommodation-slide-next"
              type="button"
              onClick={() => changePhoto(1)}
              aria-label={`Next photo of ${stay.title}`}
            >
              ›
            </button>
            <span className="accommodation-photo-count" aria-live="polite">
              {activePhoto + 1} / {stay.photos.length}
            </span>
          </>
        )}
      </div>

      <div className="accommodation-card-copy">
        <span className="accommodation-card-kicker">{stay.vibe}</span>
        <h2>{stay.title}</h2>
        <p className="accommodation-card-rating">
          {!stay.isNewListing && <span aria-hidden="true">★</span>}
          {stay.rating}
        </p>
        <div className="accommodation-specs" aria-label={`At a glance: ${stay.details.join(", ")}`}>
          {stay.details.map((detail) => <span key={detail}>{detail}</span>)}
        </div>
        <p>{stay.description}</p>
        <span className="accommodation-highlights-label">A few highlights</span>
        <ul className="accommodation-highlights" aria-label={`Highlights of ${stay.title}`}>
          {stay.highlights.map((highlight) => (
            <li key={highlight}>{highlight}</li>
          ))}
        </ul>
        <span className="accommodation-card-link">
          See full details <span aria-hidden="true">↗</span>
        </span>
      </div>
    </article>
  );
}

function Accommodation() {
  return (
    <main className="accommodation-page">
      <section className="accommodation-hero">
        <div className="accommodation-hero-video" aria-hidden="true">
          <video autoPlay loop muted playsInline>
            <source src={womaVideo} type="video/mp4" />
          </video>
        </div>
        <span className="accommodation-eyebrow">★ STAY WITH KANALOA</span>
        <h1>Find your place <span>by the sea.</span></h1>
        <p>
          Three homes, three coastal moods. Find the one that feels like yours, then
          check photos, details and availability on Airbnb.
        </p>
        <a className="accommodation-hero-cta" href="#stays">
          Meet the three homes <span aria-hidden="true">↓</span>
        </a>
        <span className="accommodation-hero-location">COSTA DA CAPARICA · PORTUGAL</span>
      </section>

      <section className="accommodation-stays" id="stays" aria-labelledby="accommodation-stays-title">
        <div className="accommodation-intro">
          <span className="accommodation-eyebrow">THREE HOMES · THREE WAYS TO UNWIND</span>
          <h2 id="accommodation-stays-title">Find your kind of <span>coastal escape.</span></h2>
          <p>Big days together, sunny terrace afternoons, or a slower hideaway. Take a look around and choose the stay that feels right.</p>
          <div className="accommodation-trust-line">
            <span><i aria-hidden="true">✦</i> Real photos of each home</span>
            <span><i aria-hidden="true">✦</i> Photos, details & availability on Airbnb</span>
          </div>
        </div>

        <div className="accommodation-grid" aria-label="Kanaloa homes to rent">
          {stays.map((stay) => <StayCard key={stay.number} stay={stay} />)}
        </div>

        <div className="accommodation-lower">
          <aside className="accommodation-help">
            <div className="accommodation-help-mark" aria-hidden="true">K</div>
            <div>
              <span className="accommodation-card-kicker">A LITTLE HELP FROM OUR FAMILY</span>
              <h2>Not sure which one is for you?</h2>
              <p>Tell us what kind of trip you have in mind and we’ll help you find your Kanaloa.</p>
            </div>
            <a href="mailto:hello@kanaloasurflodge.com?subject=Help%20choosing%20a%20Kanaloa%20stay">
              Ask us <span aria-hidden="true">↗</span>
            </a>
          </aside>

          <p className="accommodation-note">Good waves, good food, and a place to come back to.</p>
        </div>
      </section>
    </main>
  );
}

export default Accommodation;
