// /llms.txt (llmstxt.org) — Englisch. Lokalisierte Ausgaben unter /<lang>/llms.txt.
import { llmsTxt } from '../data/geo.js';
export function GET() {
  return new Response(llmsTxt('en'), { headers: { 'Content-Type': 'text/plain; charset=utf-8' } });
}
