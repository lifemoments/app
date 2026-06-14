import type { CSSProperties } from "react";
import type { WeddingThemeName, WeddingThemeOverrides } from "./types";

type ThemeTokens = Required<WeddingThemeOverrides>;

const themePresets: Record<WeddingThemeName, ThemeTokens> = {
  rose: {
    accent: "#b24b5a",
    ink: "#241f21",
    muted: "#6f6769",
    paper: "#fffaf5",
    page: "#fbf7f3",
    band: "#f6eee8",
    dark: "#322a2d",
    darkAccent: "#ffc9d1",
    heroOverlay:
      "linear-gradient(90deg, rgba(22, 14, 16, 0.25), rgba(22, 14, 16, 0.15) 52%, rgba(22, 14, 16, 0.04)), linear-gradient(180deg, rgba(22, 14, 16, 0.02), rgba(22, 14, 16, 0.14))",
  },
  emerald: {
    accent: "#24745f",
    ink: "#172421",
    muted: "#60706b",
    paper: "#fbfff9",
    page: "#f3f8f0",
    band: "#e8f1e7",
    dark: "#1d332f",
    darkAccent: "#bdebd8",
    heroOverlay:
      "linear-gradient(90deg, rgba(12, 32, 28, 0.82), rgba(12, 32, 28, 0.46) 52%, rgba(12, 32, 28, 0.22)), linear-gradient(180deg, rgba(12, 32, 28, 0.22), rgba(12, 32, 28, 0.68))",
  },
  royal: {
    accent: "#8157a7",
    ink: "#241d2e",
    muted: "#70667a",
    paper: "#fffbff",
    page: "#f8f3fb",
    band: "#eee6f4",
    dark: "#2c2337",
    darkAccent: "#ead4ff",
    heroOverlay:
      "linear-gradient(90deg, rgba(30, 20, 43, 0.84), rgba(30, 20, 43, 0.48) 52%, rgba(30, 20, 43, 0.24)), linear-gradient(180deg, rgba(30, 20, 43, 0.25), rgba(30, 20, 43, 0.68))",
  },
  coastal: {
    accent: "#24758a",
    ink: "#19262a",
    muted: "#617176",
    paper: "#fbfefd",
    page: "#f1f7f6",
    band: "#e3efee",
    dark: "#20343a",
    darkAccent: "#c6edf2",
    heroOverlay:
      "linear-gradient(90deg, rgba(11, 34, 42, 0.82), rgba(11, 34, 42, 0.44) 52%, rgba(11, 34, 42, 0.2)), linear-gradient(180deg, rgba(11, 34, 42, 0.2), rgba(11, 34, 42, 0.68))",
  },
  midnight: {
    accent: "#d2a857",
    ink: "#17181d",
    muted: "#706d67",
    paper: "#fffaf0",
    page: "#f8f4eb",
    band: "#ede6d8",
    dark: "#171a24",
    darkAccent: "#f4dba6",
    heroOverlay:
      "linear-gradient(90deg, rgba(8, 10, 20, 0.86), rgba(8, 10, 20, 0.52) 52%, rgba(8, 10, 20, 0.28)), linear-gradient(180deg, rgba(8, 10, 20, 0.28), rgba(8, 10, 20, 0.72))",
  },
};

export const getThemeTokens = (name: WeddingThemeName, overrides?: WeddingThemeOverrides): ThemeTokens => ({
  ...themePresets[name],
  ...overrides,
});

export const getThemeStyle = (name: WeddingThemeName, overrides?: WeddingThemeOverrides): CSSProperties => {
  const tokens = getThemeTokens(name, overrides);

  return {
    "--accent": tokens.accent,
    "--ink": tokens.ink,
    "--muted": tokens.muted,
    "--paper": tokens.paper,
    "--page": tokens.page,
    "--band": tokens.band,
    "--dark": tokens.dark,
    "--dark-accent": tokens.darkAccent,
    "--hero-overlay": tokens.heroOverlay,
  } as CSSProperties;
};

export const availableThemeNames = Object.keys(themePresets) as WeddingThemeName[];
