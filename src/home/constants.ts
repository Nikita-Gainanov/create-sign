import { ProjectType } from "./types";

export const WEBSITE_MAP: Record<ProjectType, string> = {
  mGlobal: "https://mglobal.pro",
  magnetto: "https://magnetto.pro",
};

export const ADDRESS_MAP: Record<ProjectType, string> = {
  mGlobal: "68 Circular Road #02-01,<br/> Singapore 049422",
  magnetto: "undefined",
};

export const LOGO_MAP: Record<ProjectType, string | null> = {
  mGlobal: "mglobal-logo.png",
  magnetto: null,
};
