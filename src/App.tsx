import { Events } from "./components/Events";
import { Footer } from "./components/Footer";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Hero } from "./components/Hero";
import { LiveStream } from "./components/LiveStream";
import { Rsvp } from "./components/Rsvp";
import { Story } from "./components/Story";
import { Venues } from "./components/Venues";
import { wedding } from "./config/wedding";

export function App() {
  return (
    <>
      <Header wedding={wedding} />
      <main>
        <Hero wedding={wedding} />
        <Story wedding={wedding} />
        <Events events={wedding.events} />
        <Rsvp wedding={wedding} />
        <Gallery items={wedding.gallery} />
        {wedding.livestream && <LiveStream livestream={wedding.livestream} />}
        <Venues events={wedding.events} />
      </main>
      <Footer wedding={wedding} />
    </>
  );
}
