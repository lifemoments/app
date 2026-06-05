import type { WeddingConfig } from "../types";
import { nithinTejuWedding } from "./nithin-teju/wedding";

export const weddings = {
  [nithinTejuWedding.slug]: nithinTejuWedding,
} satisfies Record<string, WeddingConfig>;

export type WeddingSlug = keyof typeof weddings;

export const defaultWeddingSlug: WeddingSlug = "nithin-teju";

export const getWeddingBySlug = (slug: string | undefined): WeddingConfig | undefined => {
  if (!slug) {
    return weddings[defaultWeddingSlug];
  }

  return weddings[slug];
};

export const getAvailableWeddings = () => Object.values(weddings);
