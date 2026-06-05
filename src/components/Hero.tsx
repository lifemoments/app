import { CalendarHeart, MapPin } from "lucide-react";
import type { CSSProperties } from "react";
import { useEffect, useState } from "react";
import type { WeddingConfig } from "../types";
import { formatDate, getCountdown } from "../lib/date";

type HeroProps = {
  wedding: WeddingConfig;
};

export function Hero({ wedding }: HeroProps) {
  const [countdown, setCountdown] = useState(() => getCountdown(wedding.weddingDate));

  useEffect(() => {
    const timer = window.setInterval(() => setCountdown(getCountdown(wedding.weddingDate)), 1_000);
    return () => window.clearInterval(timer);
  }, [wedding.weddingDate]);

  const primaryVenue = wedding.events.find((event) => event.date === wedding.weddingDate.slice(0, 10))?.venue;

  return (
    <section
      id="home"
      className="hero"
      style={
        {
          "--hero-image": `url(${wedding.heroImage})`,
          "--accent": wedding.accent,
        } as CSSProperties
      }
    >
      <div className="hero-overlay" />
      <div className="hero-content">
        <p className="eyebrow">{wedding.invitation.greeting}</p>
        <h1>{wedding.couple.displayNames}</h1>
        <p className="hero-tagline">{wedding.couple.tagline}</p>
        <div className="hero-meta" aria-label="Wedding summary">
          <span>
            <CalendarHeart size={18} />
            {formatDate(wedding.weddingDate, { weekday: "long" })}
          </span>
          {primaryVenue && (
            <span>
              <MapPin size={18} />
              {primaryVenue.city}
            </span>
          )}
        </div>
        <div className="countdown" aria-label="Countdown to wedding">
          {Object.entries(countdown).map(([label, value]) => (
            <div key={label}>
              <strong>{String(value).padStart(2, "0")}</strong>
              <span>{label}</span>
            </div>
          ))}
        </div>
      </div>
      <a className="scroll-cue" href="#story">
        View invitation
      </a>
    </section>
  );
}
