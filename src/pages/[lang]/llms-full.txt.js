import { llmsFullTxt } from '../../data/geo.js';
import { NON_DEFAULT_LOCALES } from '../../data/i18n.js';
export function getStaticPaths() {
  return NON_DEFAULT_LOCALES.map((lang) => ({ params: { lang } }));
}
export function GET({ params }) {
  return new Response(llmsFullTxt(params.lang), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
