import { useState, type FormEvent } from "react";
import { Link, useSearchParams } from "react-router-dom";
import { stays } from "./Accommodation";
import "../components/Booking.css";

const bookingEmail = "hello@kanaloasurflodge.com";

type BookingDetails = {
  checkIn: string;
  checkOut: string;
  guests: number;
  name: string;
  email: string;
  phone: string;
  note: string;
};

function getLocalToday() {
  const date = new Date();
  date.setMinutes(date.getMinutes() - date.getTimezoneOffset());
  return date.toISOString().slice(0, 10);
}

function formatDate(value: string) {
  return new Date(`${value}T12:00:00`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });
}

function countNights(checkIn: string, checkOut: string) {
  if (!checkIn || !checkOut) return 0;
  const start = new Date(`${checkIn}T12:00:00`).getTime();
  const end = new Date(`${checkOut}T12:00:00`).getTime();
  return Math.max(0, Math.round((end - start) / 86_400_000));
}

function Booking() {
  const [searchParams] = useSearchParams();
  const initialStay = stays.find((stay) => stay.theme === searchParams.get("stay")) ?? stays[0];
  const [stayTheme, setStayTheme] = useState(initialStay.theme);
  const [step, setStep] = useState<"details" | "review">("details");
  const [dateError, setDateError] = useState("");
  const [details, setDetails] = useState<BookingDetails>({
    checkIn: "",
    checkOut: "",
    guests: 1,
    name: "",
    email: "",
    phone: "",
    note: "",
  });

  const stay = stays.find((item) => item.theme === stayTheme) ?? stays[0];
  const guestDetail = stay.details.find((item) => item.toLowerCase().includes("guest")) ?? "1 guest";
  const maxGuests = Number.parseInt(guestDetail, 10) || 1;
  const nights = countNights(details.checkIn, details.checkOut);

  const updateDetails = (field: keyof BookingDetails, value: string | number) => {
    setDetails((current) => ({ ...current, [field]: value }));
  };

  const reviewRequest = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (details.checkOut <= details.checkIn) {
      setDateError("Check-out must be after check-in.");
      return;
    }
    setDateError("");
    setStep("review");
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const emailSubject = encodeURIComponent(`Direct booking request — ${stay.title}`);
  const emailBody = encodeURIComponent([
    `Booking request for ${stay.title}`,
    `Check-in: ${formatDate(details.checkIn)}`,
    `Check-out: ${formatDate(details.checkOut)}`,
    `Nights: ${nights}`,
    `Guests: ${details.guests}`,
    "",
    `Name: ${details.name}`,
    `Email: ${details.email}`,
    `Phone: ${details.phone || "Not provided"}`,
    "",
    `Notes: ${details.note || "None"}`,
  ].join("\n"));
  const emailHref = `mailto:${bookingEmail}?subject=${emailSubject}&body=${emailBody}`;

  return (
    <main className="booking-page">
      <div className="booking-shell">
        <Link to="/accommodation" className="booking-back-link">← Explore all homes</Link>
        <header className="booking-heading">
          <span className="accommodation-detail-kicker">BOOK DIRECT WITH KANALOA</span>
          <h1>{step === "details" ? "Plan your coastal escape." : "Review your request."}</h1>
          <p>
            Choose your home and dates. Kanaloa will confirm availability and the total price with you before the reservation is final.
          </p>
        </header>

        <div className="booking-progress" aria-label={`Step ${step === "details" ? 1 : 2} of 2`}>
          <span className={step === "details" ? "is-current" : "is-complete"}><i>1</i> Your stay</span>
          <span className={step === "review" ? "is-current" : ""}><i>2</i> Review request</span>
        </div>

        <div className="booking-layout">
          {step === "details" ? (
            <form className="booking-form" onSubmit={reviewRequest}>
              <section className="booking-form-section">
                <span className="booking-section-number">01</span>
                <div className="booking-fields">
                  <h2>Choose your stay</h2>
                  <label>
                    Home
                    <select
                      value={stayTheme}
                      onChange={(event) => {
                        const nextTheme = event.target.value as typeof stayTheme;
                        const nextStay = stays.find((item) => item.theme === nextTheme) ?? stays[0];
                        const nextCapacity = Number.parseInt(nextStay.details.find((item) => item.toLowerCase().includes("guest")) ?? "1", 10) || 1;
                        setStayTheme(nextTheme);
                        setDetails((current) => ({ ...current, guests: Math.min(current.guests, nextCapacity) }));
                      }}
                    >
                      {stays.map((item) => <option value={item.theme} key={item.theme}>{item.title}</option>)}
                    </select>
                  </label>

                  <div className="booking-field-row">
                    <label>
                      Check-in
                      <input
                        type="date"
                        min={getLocalToday()}
                        value={details.checkIn}
                        onChange={(event) => updateDetails("checkIn", event.target.value)}
                        required
                      />
                    </label>
                    <label>
                      Check-out
                      <input
                        type="date"
                        min={details.checkIn || getLocalToday()}
                        value={details.checkOut}
                        onChange={(event) => updateDetails("checkOut", event.target.value)}
                        required
                      />
                    </label>
                  </div>

                  <label>
                    Guests
                    <select
                      value={details.guests}
                      onChange={(event) => updateDetails("guests", Number(event.target.value))}
                    >
                      {Array.from({ length: maxGuests }, (_, index) => index + 1).map((count) => (
                        <option value={count} key={count}>{count} {count === 1 ? "guest" : "guests"}</option>
                      ))}
                    </select>
                  </label>
                  {dateError && <p className="booking-error" role="alert">{dateError}</p>}
                </div>
              </section>

              <section className="booking-form-section">
                <span className="booking-section-number">02</span>
                <div className="booking-fields">
                  <h2>Your contact details</h2>
                  <label>
                    Full name
                    <input
                      type="text"
                      autoComplete="name"
                      value={details.name}
                      onChange={(event) => updateDetails("name", event.target.value)}
                      placeholder="Your name"
                      required
                    />
                  </label>
                  <div className="booking-field-row">
                    <label>
                      Email
                      <input
                        type="email"
                        autoComplete="email"
                        value={details.email}
                        onChange={(event) => updateDetails("email", event.target.value)}
                        placeholder="you@example.com"
                        required
                      />
                    </label>
                    <label>
                      Phone <span className="booking-optional">optional</span>
                      <input
                        type="tel"
                        autoComplete="tel"
                        value={details.phone}
                        onChange={(event) => updateDetails("phone", event.target.value)}
                        placeholder="+351 …"
                      />
                    </label>
                  </div>
                  <label>
                    Anything else we should know? <span className="booking-optional">optional</span>
                    <textarea
                      rows={3}
                      value={details.note}
                      onChange={(event) => updateDetails("note", event.target.value)}
                      placeholder="Questions or details about your trip"
                    />
                  </label>
                </div>
              </section>

              <button className="booking-primary-button" type="submit">Review request <span aria-hidden="true">→</span></button>
            </form>
          ) : (
            <section className="booking-review" aria-live="polite">
              <span className="booking-section-number">02</span>
              <div>
                <h2>Check everything looks right</h2>
                <dl>
                  <div><dt>Home</dt><dd>{stay.title}</dd></div>
                  <div><dt>Check-in</dt><dd>{formatDate(details.checkIn)}</dd></div>
                  <div><dt>Check-out</dt><dd>{formatDate(details.checkOut)}</dd></div>
                  <div><dt>Length of stay</dt><dd>{nights} {nights === 1 ? "night" : "nights"}</dd></div>
                  <div><dt>Guests</dt><dd>{details.guests}</dd></div>
                  <div><dt>Contact</dt><dd>{details.name} · {details.email}</dd></div>
                  {details.phone && <div><dt>Phone</dt><dd>{details.phone}</dd></div>}
                  {details.note && <div><dt>Notes</dt><dd>{details.note}</dd></div>}
                </dl>
                <p className="booking-review-note">This is a booking request, not a confirmed reservation. Your email app will open with these details ready to send to Kanaloa. We’ll reply with availability and the total price.</p>
                <div className="booking-review-actions">
                  <button type="button" className="booking-secondary-button" onClick={() => setStep("details")}>← Edit details</button>
                  <a className="booking-primary-button" href={emailHref}>Send booking request <span aria-hidden="true">↗</span></a>
                </div>
              </div>
            </section>
          )}

          <aside className="booking-stay-card">
            <img src={stay.photos[0]} alt={`${stay.title}`} />
            <div>
              <span className="accommodation-detail-kicker">YOUR COASTAL ESCAPE</span>
              <h2>{stay.title}</h2>
              <p>{stay.description}</p>
              <div className="booking-stay-facts">
                {stay.details.map((item) => <span key={item}>{item}</span>)}
              </div>
              {nights > 0 && <p className="booking-night-count">{nights} {nights === 1 ? "night" : "nights"} requested</p>}
              <p className="booking-no-charge">No payment is taken on this page.</p>
            </div>
          </aside>
        </div>

        <p className="booking-footer-note">Need help first? <Link to="/contact">Contact the Kanaloa team</Link>.</p>
      </div>
    </main>
  );
}

export default Booking;
