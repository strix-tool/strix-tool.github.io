// /facts.json — Englisch. Lokalisierte Ausgaben unter /<lang>/facts.json.
import { factsJson } from '../data/geo.js';
export function GET() {
  return new Response(factsJson('en'), { headers: { 'Content-Type': 'application/json; charset=utf-8' } });
}
