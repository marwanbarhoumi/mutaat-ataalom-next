/**
 * Préfixe public pour GitHub Pages (`/REPO`).
 * Vide en local (`npm run dev`) si NEXT_PUBLIC_BASE_PATH n'est pas défini.
 */
export const BASE_PATH = (
  process.env.NEXT_PUBLIC_BASE_PATH || ""
).replace(/\/$/, "");

/** Préfixe un chemin public (`/assets/...`) avec le basePath. */
export function asset(path: string): string {
  const normalized = path.startsWith("/") ? path : `/${path}`;
  return `${BASE_PATH}${normalized}`;
}
