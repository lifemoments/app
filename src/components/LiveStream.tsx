import { CalendarClock, ExternalLink, PlayCircle } from "lucide-react";
import type { WeddingConfig } from "../types";
import { formatDate } from "../lib/date";

type LiveStreamProps = {
  livestream: NonNullable<WeddingConfig["livestream"]>;
  timeZone: string;
};

export function LiveStream({ livestream, timeZone }: LiveStreamProps) {
  const embedUrl = `https://www.youtube.com/embed/${livestream.youtubeVideoId}`;
  const watchUrl = `https://www.youtube.com/watch?v=${livestream.youtubeVideoId}`;

  return (
    <section id="live" className="section live-section">
      <div className="section-heading">
        <p className="eyebrow">Livestream</p>
        <h2>{livestream.title}</h2>
      </div>
      <div className="live-layout">
        <div className="video-frame">
          <iframe
            src={embedUrl}
            title={livestream.title}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          />
        </div>
        <div className="live-details">
          <p>
            <CalendarClock size={19} />
            Starts {formatDate(livestream.startsAt, { weekday: "long", hour: "numeric", minute: "2-digit", timeZoneName: "short" }, timeZone)}
          </p>
          <a href={watchUrl} target="_blank" rel="noreferrer" className="primary-button">
            <PlayCircle size={18} />
            Watch on YouTube
            <ExternalLink size={16} />
          </a>
        </div>
      </div>
    </section>
  );
}
