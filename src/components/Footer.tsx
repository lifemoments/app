import { Heart } from "lucide-react";
import type { WeddingConfig } from "../types";

type FooterProps = {
  wedding: WeddingConfig;
};

export function Footer({ wedding }: FooterProps) {
  return (
    <footer className="footer">
      <Heart size={18} fill="currentColor" />
      <span>{wedding.couple.displayNames}</span>
      <a href="#rsvp">RSVP</a>
    </footer>
  );
}
