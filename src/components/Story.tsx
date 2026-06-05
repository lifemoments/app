import type { WeddingConfig } from "../types";

type StoryProps = {
  wedding: WeddingConfig;
};

export function Story({ wedding }: StoryProps) {
  return (
    <section id="story" className="story section">
      <div>
        <p className="eyebrow">The invitation</p>
        <h2>{wedding.invitation.message}</h2>
      </div>
      <p>{wedding.couple.story}</p>
    </section>
  );
}
