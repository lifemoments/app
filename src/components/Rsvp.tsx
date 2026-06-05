import { CheckCircle2, Mail, Minus, Plus, Send } from "lucide-react";
import { FormEvent, useMemo, useState } from "react";
import type { Attendance, RsvpSubmission, WeddingConfig } from "../types";
import { formatDate } from "../lib/date";

type RsvpProps = {
  wedding: WeddingConfig;
};

const emptySubmission = (eventIds: string[]): RsvpSubmission => ({
  name: "",
  email: "",
  phone: "",
  attendance: "yes",
  guests: 1,
  selectedEvents: eventIds,
  message: "",
});

export function Rsvp({ wedding }: RsvpProps) {
  const eventIds = useMemo(() => wedding.events.map((event) => event.id), [wedding.events]);
  const [submission, setSubmission] = useState<RsvpSubmission>(() => {
    const saved = window.localStorage.getItem("wedding-rsvp");
    return saved ? JSON.parse(saved) : emptySubmission(eventIds);
  });
  const [status, setStatus] = useState<"idle" | "saved" | "sending" | "sent" | "error">("idle");

  const update = <K extends keyof RsvpSubmission>(key: K, value: RsvpSubmission[K]) => {
    setSubmission((current) => ({ ...current, [key]: value }));
  };

  const toggleEvent = (eventId: string) => {
    setSubmission((current) => {
      const selectedEvents = current.selectedEvents.includes(eventId)
        ? current.selectedEvents.filter((id) => id !== eventId)
        : [...current.selectedEvents, eventId];
      return { ...current, selectedEvents };
    });
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setStatus(wedding.rsvp.formEndpoint ? "sending" : "saved");
    window.localStorage.setItem("wedding-rsvp", JSON.stringify(submission));

    if (!wedding.rsvp.formEndpoint) {
      return;
    }

    try {
      const response = await fetch(wedding.rsvp.formEndpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(submission),
      });

      setStatus(response.ok ? "sent" : "error");
    } catch {
      setStatus("error");
    }
  };

  return (
    <section id="rsvp" className="section rsvp-section">
      <div className="section-heading">
        <p className="eyebrow">RSVP</p>
        <h2>Save your seat by {formatDate(wedding.rsvp.deadline)}.</h2>
      </div>
      <form className="rsvp-form" onSubmit={handleSubmit}>
        <div className="form-grid">
          <label>
            Full name
            <input
              required
              value={submission.name}
              onChange={(event) => update("name", event.target.value)}
              placeholder="Your name"
            />
          </label>
          <label>
            Email
            <input
              required
              type="email"
              value={submission.email}
              onChange={(event) => update("email", event.target.value)}
              placeholder="you@example.com"
            />
          </label>
          <label>
            Phone
            <input
              value={submission.phone}
              onChange={(event) => update("phone", event.target.value)}
              placeholder="+1 555 000 0000"
            />
          </label>
          <label>
            Guests
            <div className="stepper">
              <button type="button" aria-label="Decrease guests" onClick={() => update("guests", Math.max(1, submission.guests - 1))}>
                <Minus size={16} />
              </button>
              <output>{submission.guests}</output>
              <button type="button" aria-label="Increase guests" onClick={() => update("guests", submission.guests + 1)}>
                <Plus size={16} />
              </button>
            </div>
          </label>
        </div>
        <fieldset className="attendance">
          <legend>Can you attend?</legend>
          {(["yes", "maybe", "no"] as Attendance[]).map((option) => (
            <label key={option}>
              <input
                type="radio"
                name="attendance"
                checked={submission.attendance === option}
                onChange={() => update("attendance", option)}
              />
              <span>{option}</span>
            </label>
          ))}
        </fieldset>
        <fieldset className="event-picker">
          <legend>Events you plan to attend</legend>
          {wedding.events.map((event) => (
            <label key={event.id}>
              <input
                type="checkbox"
                checked={submission.selectedEvents.includes(event.id)}
                onChange={() => toggleEvent(event.id)}
              />
              <span>{event.title}</span>
            </label>
          ))}
        </fieldset>
        <label>
          Message
          <textarea
            value={submission.message}
            onChange={(event) => update("message", event.target.value)}
            placeholder="Meal notes, blessings, song requests..."
          />
        </label>
        <div className="form-actions">
          <button type="submit" className="primary-button">
            <Send size={18} />
            Submit RSVP
          </button>
          <a href={`mailto:${submission.email || ""}`} className="secondary-link" aria-label="Email RSVP copy">
            <Mail size={18} />
          </a>
          {status !== "idle" && (
            <p className={`form-status ${status}`}>
              <CheckCircle2 size={18} />
              {status === "saved" && "RSVP saved locally. Add a formEndpoint in the config to send responses."}
              {status === "sending" && "Sending RSVP..."}
              {status === "sent" && "RSVP sent."}
              {status === "error" && `Saved locally. Please contact ${wedding.rsvp.contactName} at ${wedding.rsvp.contactPhone}.`}
            </p>
          )}
        </div>
      </form>
    </section>
  );
}
