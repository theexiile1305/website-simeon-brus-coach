export const SITE_URL = "https://simeon-brus-coach.de";
export const SITE_NAME = "Simeon Brus Coach";

/**
 * Business facts sourced from the official flyer (content.pdf). telephone
 * and vatId aren't supplied by that source yet - they're set to "TBD"
 * rather than a fabricated value; buildProfessionalServiceJsonLd() omits
 * telephone from structured data while it's "TBD".
 */
export const BUSINESS_FACTS = {
  legalName: "Simeon Brus",
  streetAddress: "Bachweg 6",
  postalCode: "82327",
  addressLocality: "Traubing",
  addressRegion: "Bayern",
  addressCountry: "DE",
  telephone: "TBD",
  email: "simeon-brus-info@web.de",
  vatId: "TBD",
  // Approximate coordinates for Traubing/82327, not re-geocoded for the
  // exact Bachweg 6 address.
  latitude: 47.9569,
  longitude: 11.2214,
};
