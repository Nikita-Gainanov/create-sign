import { ProjectType } from "./types";

export const WEBSITE_MAP: Record<ProjectType, string> = {
  mGlobal: "mglobal.pro",
  magnetto: "magnetto.pro",
};

export const ADDRESS_MAP: Record<ProjectType, string> = {
  mGlobal: "68 Circular Road #02-01,<br/> Singapore 049422",
  magnetto: "undefined",
};

export const LOGO_BASE_64_URL_MAP: Record<ProjectType, string | null> = {
  mGlobal: "https://www.mglobal.com/LOGO.jpg",
  magnetto: null,
};
