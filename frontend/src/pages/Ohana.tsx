import { useEffect, useState } from "react";
import { Link, useLocation, useParams } from "react-router-dom";
import { stays } from "./Accommodation";
import "../components/Ohana.css";
import housePhoto from "../assets/house.jpg";
import house2Photo from "../assets/house2.jpg";
import outside2Photo from "../assets/outside2.jpg";
import outside3Photo from "../assets/outside3.jpg";
import bedroomOnePhoto from "../assets/quarto.jpg";
import bedroomOneBathroomPhoto from "../assets/quarto1.jpg";
import bedroomTwoPhoto from "../assets/quarto2.jpg";
import bedroomThreePhoto from "../assets/quarto4.jpg";
import bedroomFourPhoto from "../assets/quarto3.jpg";
import livingRoomPhoto from "../assets/house3.jpg";
import kitchenPhoto from "../assets/house1.jpg";
import gardenPhoto from "../assets/outside.jpg";
import gardenDetailPhoto from "../assets/outside1.jpg";
import gardenTablePhoto from "../assets/outside4.jpg";
import workspacePhoto from "../assets/remote.jpg";
import workspacePhoto1 from "../assets/remote1.jpg";
import workspacePhoto2 from "../assets/remote2.avif";
import bedroomThreePhoto1 from "../assets/quarto5.jpg";
import bedroomFourPhoto1 from "../assets/quarto6.jpg";
import vibePhoto from "../assets/vibe.jpg";

const bedroomDetails = [
  { name: "Bedroom 1", beds: "1 queen bed", photos: [bedroomOnePhoto], privateBathroom: true },
  { name: "Bedroom 2", beds: "1 double bed", photos: [bedroomTwoPhoto] },
  { name: "Bedroom 3", beds: "2 single beds", photos: [bedroomThreePhoto] },
  { name: "Bedroom 4", beds: "1 queen bed", photos: [bedroomFourPhoto] },
];

const ohanaGalleryPhotos = [
  housePhoto, kitchenPhoto, house2Photo, livingRoomPhoto,
  gardenPhoto, gardenDetailPhoto, outside2Photo, outside3Photo, gardenTablePhoto,
  bedroomOnePhoto, bedroomTwoPhoto, bedroomOneBathroomPhoto, bedroomThreePhoto, bedroomFourPhoto, bedroomThreePhoto1, bedroomFourPhoto1,
  workspacePhoto, workspacePhoto1, workspacePhoto2, vibePhoto,
];

type IndoorSpace = {
  name: string;
  description: string;
  photos: { src: string; alt: string }[];
};

const indoorSpaces: IndoorSpace[] = [
  {
    name: "Living room & shared spaces",
    description: "Relax together after the beach, with room to gather, read or simply slow down.",
    photos: [
      { src: livingRoomPhoto, alt: "The welcoming living room at ʻOhana House" },
      { src: housePhoto, alt: "Living room and fireplace at ʻOhana House" },
      { src: outside3Photo, alt: "Outdoor fire-pit seating at ʻOhana House" },
    ],
  },
  {
    name: "Kitchen & dining",
    description: "A fully equipped kitchen with a gas stove, oven and dining space for meals at home.",
    photos: [
      { src: kitchenPhoto, alt: "Kitchen at ʻOhana House" },
      { src: house2Photo, alt: "Dining area connected to the shared living space" },
      { src: gardenTablePhoto, alt: "Outdoor dining area at ʻOhana House" },
    ],
  },
];

const outdoorSpaces = [
  { photo: gardenPhoto, alt: "Garden at ʻOhana House", className: "is-garden-main" },
  { photo: gardenDetailPhoto, alt: "A quiet corner of the garden", className: "" },
  { photo: outside2Photo, alt: "Outdoor area at ʻOhana House", className: "" },
  { photo: outside3Photo, alt: "Garden seating at ʻOhana House", className: "" },
  { photo: gardenTablePhoto, alt: "Outdoor area at ʻOhana House", className: "" },
];

const workspacePhotos = [workspacePhoto, workspacePhoto1, workspacePhoto2];

function ZoomableImage({
  src,
  alt,
  className = "",
  loading = "lazy",
  onOpen,
}: {
  src: string;
  alt: string;
  className?: string;
  loading?: "eager" | "lazy";
  onOpen: (src: string, alt: string) => void;
}) {
  return (
    <button
      type="button"
      className={`ohana-zoom-trigger ${className}`.trim()}
      onClick={() => onOpen(src, alt)}
      aria-label={`View larger image: ${alt}`}
    >
      <img src={src} alt={alt} loading={loading} decoding="async" />
    </button>
  );
}

function IndoorSpaceCard({
  space,
  onOpenImage,
}: {
  space: IndoorSpace;
  onOpenImage: (src: string, alt: string) => void;
}) {
  const [activePhoto, setActivePhoto] = useState(0);
  const photo = space.photos[activePhoto];
  const changePhoto = (direction: number) => {
    setActivePhoto((current) => (current + direction + space.photos.length) % space.photos.length);
  };

  return (
    <article className="ohana-interior-card">
      <div className="ohana-interior-photo" aria-label={`Photos of ${space.name}`}>
        <ZoomableImage src={photo.src} alt={photo.alt} onOpen={onOpenImage} />
        {space.photos.length > 1 && (
          <>
            <button
              type="button"
              className="accommodation-detail-arrow accommodation-detail-prev"
              onClick={() => changePhoto(-1)}
              aria-label={`Previous ${space.name} photo`}
            >‹</button>
            <button
              type="button"
              className="accommodation-detail-arrow accommodation-detail-next"
              onClick={() => changePhoto(1)}
              aria-label={`Next ${space.name} photo`}
            >›</button>
            <span className="accommodation-detail-photo-count" aria-live="polite">
              {activePhoto + 1} / {space.photos.length}
            </span>
          </>
        )}
      </div>
      <div>
        <h3>{space.name}</h3>
        <p>{space.description}</p>
      </div>
    </article>
  );
}

function Ohana({ homeId: fixedHomeId }: { homeId?: string } = {}) {
  const { homeId: routeHomeId } = useParams<{ homeId: string }>();
  const location = useLocation();
  const pathHomeId = location.pathname.split("/").filter(Boolean).pop();
  const requestedHomeId = fixedHomeId ?? routeHomeId ?? pathHomeId;
  const normalizeHomeId = (value: string) =>
    value.normalize("NFD").replace(/[\u0300-\u036f]/g, "").replace(/[^a-z0-9]/gi, "").toLowerCase();
  const homeId = requestedHomeId ? normalizeHomeId(requestedHomeId) : undefined;
  const stay = stays.find((home) =>
    normalizeHomeId(home.theme) === homeId || normalizeHomeId(home.title) === homeId,
  );
  const [activePhoto, setActivePhoto] = useState(0);
  const [lightboxImage, setLightboxImage] = useState<{ src: string; alt: string } | null>(null);

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "auto" });
    setActivePhoto(0);
  }, [homeId]);

  useEffect(() => {
    if (!lightboxImage) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setLightboxImage(null);
    };
    window.addEventListener("keydown", closeOnEscape);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", closeOnEscape);
    };
  }, [lightboxImage]);

  if (!stay) {
    return (
      <main className="accommodation-detail-page">
        <div className="accommodation-detail-not-found">
          <span className="accommodation-eyebrow">KANALOA STAYS</span>
          <h1>We couldn’t find that home.</h1>
          <Link to="/accommodation">Back to all homes</Link>
        </div>
      </main>
    );
  }

  const galleryPhotos = stay.theme === "ohana" ? ohanaGalleryPhotos : stay.photos;

  const changePhoto = (direction: number) => {
    setActivePhoto((current) => (current + direction + galleryPhotos.length) % galleryPhotos.length);
  };

  const openLightbox = (src: string, alt: string) => setLightboxImage({ src, alt });

  return (
    <main className={`accommodation-detail-page accommodation-detail-${stay.theme}`}>
      <div className="accommodation-detail-shell">
        <div className="accommodation-detail-topline">
          <Link to="/accommodation" className="accommodation-back-link">← All Kanaloa homes</Link>
          <span>COSTA DA CAPARICA · PORTUGAL</span>
        </div>

        <section className="accommodation-detail-overview" aria-label={`${stay.title} overview`}>
          <section className="accommodation-detail-gallery" aria-label={`Photos of ${stay.title}`}>
            <div className="accommodation-detail-main-photo">
              <ZoomableImage
                src={galleryPhotos[activePhoto]}
                alt={`${stay.title}, photo ${activePhoto + 1} of ${galleryPhotos.length}`}
                loading="eager"
                className="ohana-main-photo-trigger"
                onOpen={openLightbox}
              />
              <button type="button" className="accommodation-detail-arrow accommodation-detail-prev" onClick={() => changePhoto(-1)} aria-label="Previous photo">‹</button>
              <button type="button" className="accommodation-detail-arrow accommodation-detail-next" onClick={() => changePhoto(1)} aria-label="Next photo">›</button>
              <span className="accommodation-detail-photo-count" aria-live="polite">{activePhoto + 1} / {galleryPhotos.length}</span>
            </div>
            <div className="accommodation-detail-thumbnails" aria-label="Choose a photo">
              {galleryPhotos.map((photo, index) => (
                <button
                  key={photo}
                  type="button"
                  className={index === activePhoto ? "is-active" : ""}
                  onClick={() => {
                    setActivePhoto(index);
                    openLightbox(photo, `${stay.title}, photo ${index + 1} of ${galleryPhotos.length}`);
                  }}
                  aria-label={`Show photo ${index + 1}`}
                  aria-pressed={index === activePhoto}
                >
                  <img src={photo} alt="" loading="lazy" />
                </button>
              ))}
            </div>
          </section>

          <div className="accommodation-detail-overview-copy">
            <header className="accommodation-detail-header">
              <div>
                <span className="accommodation-detail-kicker">{stay.vibe}</span>
                <h1>{stay.title}</h1>
                <p className="accommodation-detail-location">{stay.location}</p>
              </div>
              <div className="accommodation-detail-heading-meta">
                <p className="accommodation-detail-rating">
                  {!stay.isNewListing && <span aria-hidden="true">★</span>}
                  {stay.rating}
                </p>
                <Link className="accommodation-card-book" to={`/booking?stay=${stay.theme}`}>
                  BOOK NOW
                </Link>
              </div>
            </header>

            <div className="accommodation-detail-specs" aria-label={`At a glance: ${stay.details.join(", ")}`}>
              {stay.details.map((detail) => <span key={detail}>{detail}</span>)}
            </div>

            {stay.featuredAmenities && (
              <section className="accommodation-detail-featured" aria-label="Featured amenities">
                {stay.featuredAmenities.map((amenity) => (
                  <article key={amenity.title}>
                    <span aria-hidden="true">✦</span>
                    <div>
                      <h2>{amenity.title}</h2>
                      <p>{amenity.description}</p>
                    </div>
                  </article>
                ))}
              </section>
            )}

            <p className="accommodation-detail-overview-description">{stay.description}</p>
          </div>
        </section>

        <div className="ohana-house-tour">
          <section className="ohana-tour-section" aria-labelledby="ohana-rooms-title">
            <div className="ohana-tour-heading">
              <div>
                <span className="accommodation-detail-kicker">Room by room</span>
                <h2 id="ohana-rooms-title">Four bedrooms, five beds</h2>
                <p>There is room for up to eight guests. Every bedroom has a desk, and one bedroom has a private en-suite bathroom tucked behind a wardrobe door.</p>
              </div>
              <span className="ohana-tour-summary">4 bedrooms <i>·</i> 5 beds <i>·</i> Sleeps 8</span>
            </div>

            <div className="ohana-bedroom-grid">
              {bedroomDetails.map((bedroom) => (
                <article className="ohana-bedroom-card" key={bedroom.name}>
                  <div className={`ohana-bedroom-photos ${bedroom.photos.length > 1 ? "has-multiple" : ""}`}>
                    {bedroom.photos.map((photo) => (
                    <ZoomableImage
                      key={photo}
                      src={photo}
                      alt={photo === bedroomOneBathroomPhoto ? "Private en-suite bathroom for Bedroom 1" : `${bedroom.name} at ʻOhana House`}
                      onOpen={openLightbox}
                    />
                    ))}
                  </div>
                  <div>
                    <h3>{bedroom.name}</h3>
                    <p> {bedroom.beds}</p>
                    {bedroom.privateBathroom && (
                      <p className="ohana-bedroom-private-bath">
                        <span aria-hidden="true">✦</span> Private en-suite bathroom
                      </p>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="ohana-tour-section" aria-labelledby="ohana-interior-title">
            <div className="ohana-tour-heading">
              <div>
                <span className="accommodation-detail-kicker">Settle in together</span>
                <h2 id="ohana-interior-title">Living room & kitchen</h2>
                <p>Comfortable shared spaces for slow mornings, home-cooked meals and unwinding after a day out.</p>
              </div>
            </div>

            <div className="ohana-interior-grid">
              {indoorSpaces.map((space) => <IndoorSpaceCard key={space.name} space={space} onOpenImage={openLightbox} />)}
            </div>
          </section>

          <section className="ohana-tour-section" aria-labelledby="ohana-outdoors-title">
            <div className="ohana-tour-heading">
              <div>
                <span className="accommodation-detail-kicker">Outside, take your time</span>
                <h2 id="ohana-outdoors-title">A garden made for slow days</h2>
                <p>Enjoy the private 980 m² garden, with hammocks, outdoor dining, a barbecue, fire pit and outdoor shower.</p>
              </div>
            </div>

            <div className="ohana-garden-grid">
              {outdoorSpaces.map((space) => (
                <ZoomableImage
                  className={space.className}
                  key={space.photo}
                  src={space.photo}
                  alt={space.alt}
                  onOpen={openLightbox}
                />
              ))}
            </div>
          </section>

          <section className="ohana-remote-work" aria-labelledby="ohana-work-title">
            <div className="ohana-remote-copy">
              <span className="accommodation-detail-kicker">Work from the coast</span>
              <h2 id="ohana-work-title">Room to work remotely</h2>
              <p>Keep your routine going with a dedicated workspace in a bedroom with a door, desks in all four bedrooms, Wi-Fi over 800 Mbps and wired Ethernet.</p>
              <span className="ohana-work-speed"><b>800+</b> Mbps Wi-Fi</span>
            </div>
            <div className="ohana-remote-photos">
              {workspacePhotos.map((photo) => (
                <ZoomableImage key={photo} src={photo} alt="Remote-work setup at ʻOhana House" onOpen={openLightbox} />
              ))}
            </div>
          </section>
        </div>

        <div className="accommodation-detail-content">
          <div className="accommodation-detail-main-copy">
            <section className="accommodation-detail-section">
              <span className="accommodation-detail-kicker">A place to settle in</span>
              <h2>About this home</h2>
              {stay.fullDescription.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            </section>

            {stay.guestAccess && (
              <section className="accommodation-detail-section">
                <span className="accommodation-detail-kicker">Your own space</span>
                <h2>Guest access</h2>
                <p>{stay.guestAccess}</p>
              </section>
            )}

            <section className="accommodation-detail-section">
              <span className="accommodation-detail-kicker">The little things that make a stay</span>
              <h2>A few highlights</h2>
              <ul className="accommodation-detail-highlights">
                {stay.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
              </ul>
            </section>

            <section className="accommodation-detail-section">
              <span className="accommodation-detail-kicker">Make yourself at home</span>
              <h2>What this place offers</h2>
              <div className="accommodation-amenity-grid">
                {stay.amenitySections.map((section) => (
                  <article className="accommodation-amenity-group" key={section.title}>
                    <h3>{section.title}</h3>
                    <ul>
                      {section.items.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </article>
                ))}
              </div>
            </section>

            <section className="accommodation-detail-section accommodation-detail-rules">
              <span className="accommodation-detail-kicker">Before you book</span>
              <h2>House rules</h2>
              <ul>
                {stay.houseRules.map((rule) => <li key={rule}>{rule}</li>)}
              </ul>
              <p className="accommodation-detail-registration">Local registration: {stay.registration}</p>
              <p className="accommodation-rules-note">Kanaloa will confirm availability, total price and final terms before your reservation is confirmed.</p>
            </section>

            {stay.otherNotes && (
              <section className="accommodation-detail-section">
                <span className="accommodation-detail-kicker">A few useful details</span>
                <h2>Before your stay</h2>
                <ul className="accommodation-detail-notes">
                  {stay.otherNotes.map((note) => <li key={note}>{note}</li>)}
                </ul>
              </section>
            )}
        </div>

        <aside className="accommodation-detail-booking-card">
          <span className="accommodation-detail-kicker">Your coastal escape</span>
          <h2>{stay.title}</h2>
          <p>{stay.description}</p>
          <div className="accommodation-detail-booking-facts">
            {stay.details.map((detail) => <span key={detail}>{detail}</span>)}
          </div>
          <Link className="accommodation-detail-book" to={`/booking?stay=${stay.theme}`}>
            BOOK NOW
          </Link>
          <p className="accommodation-detail-booking-note">Send your dates directly to Kanaloa. We’ll reply to confirm availability and price.</p>
        </aside>
        </div>
      </div>
      {lightboxImage && (
        <div
          className="ohana-lightbox"
          role="presentation"
          onClick={() => setLightboxImage(null)}
        >
          <div
            className="ohana-lightbox-dialog"
            role="dialog"
            aria-modal="true"
            aria-label="Enlarged photo"
          >
            <button
              type="button"
              className="ohana-lightbox-close"
              onClick={() => setLightboxImage(null)}
              aria-label="Close enlarged photo"
              autoFocus
            />
            <img
              src={lightboxImage.src}
              alt={lightboxImage.alt}
              onClick={(event) => event.stopPropagation()}
            />
          </div>
        </div>
      )}
    </main>
  );
}

export default Ohana;
