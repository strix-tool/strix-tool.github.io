import { factsJson } from '../../data/geo.js';
import { NON_DEFAULT_LOCALES } from '../../data/i18n.js';
export function getStaticPaths() {
  return NON_DEFAULT_LOCALES.map((lang) => ({ params: { lang } }));
}
export function GET({ params }) {
  return new Response(factsJson(params.lang), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
