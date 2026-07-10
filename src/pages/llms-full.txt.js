// /llms-full.txt — Englisch. Lokalisierte Ausgaben unter /<lang>/llms-full.txt.
import { llmsFullTxt } from '../data/geo.js';
export function GET() {
  return new Response(llmsFullTxt('en'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
