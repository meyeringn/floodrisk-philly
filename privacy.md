# FloodRisk Philly

FloodRisk Philly is a plain-language flood-zone lookup and renter preparedness tool for Philadelphia.

It helps a user:

1. locate a Philadelphia street address;
2. check the FEMA flood-zone classification returned for that point;
3. understand what the federal result can and cannot show; and
4. create a renter-focused plan based on floor level, exits, disability, power, evacuation-assistance, and pet needs.

## Rebuild status

This repository structure is the FloodRisk Philly 2.0 rebuild.

The rebuild separates the original all-in-one file into focused, maintainable files:

```text
index.html
css/
  styles.css
js/
  i18n.js
  app.js
METHODOLOGY.md
PRIVACY.md
README.md
.github/
  workflows/
    validate.yml
```

## Major changes

### Trustworthy results

- The FEMA classification is presented as the official mapped result.
- Personalized renter guidance is kept separate.
- API errors and missing FEMA features never become lower-risk results.
- Lower mapped risk is explicitly described as not zero flood risk.
- Unsupported neighborhood sewer and overflow estimates are excluded from the primary result until their methodology is documented.

### Renter-centered guidance

The user can tailor guidance based on:

- basement, street-level, or upper-floor location;
- elevator reliance or inability to use stairs;
- powered medical, mobility, or communication equipment;
- evacuation-assistance needs;
- pets; and
- a single usable exit.

These answers stay in the browser and do not change the FEMA classification.

### Accessibility

The rebuild includes:

- semantic headings and landmarks;
- a skip link;
- keyboard-friendly controls;
- visible focus indicators;
- live status and error announcements;
- focus movement to new results;
- reduced-motion support;
- forced-colors support;
- mobile reflow;
- large touch targets;
- text equivalents for map information; and
- English and Spanish interfaces.

The map is supplementary. Decision-relevant information is also shown as text.

### Privacy

The app has no account system or application database.

The browser sends:

- the cleaned street address to OpenStreetMap Nominatim;
- coordinates to FEMA's National Flood Hazard Layer; and
- map-tile requests to OpenStreetMap infrastructure.

The application does not intentionally save searched addresses or renter-profile answers.

Read `PRIVACY.md` for details.

## Methodology

The primary result comes from FEMA's National Flood Hazard Layer.

FloodRisk Philly:

1. removes common apartment and unit identifiers from the search;
2. geocodes the address;
3. confirms that the result is within Philadelphia;
4. queries FEMA at the returned point;
5. translates the returned FEMA classification into plain language; and
6. displays renter guidance separately.

Read `METHODOLOGY.md` for the complete methodology and limitations.

## Run locally

Because the site makes network requests, use a local web server rather than opening `index.html` directly.

With Python:

```bash
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Deploy to GitHub Pages

1. Add the files using the structure shown above.
2. Open the repository's **Settings**.
3. Open **Pages**.
4. Select deployment from the `main` branch and repository root.
5. Save and wait for GitHub Pages to publish.

The existing public URL can remain:

```text
https://meyeringn.github.io/floodrisk-philly/
```

## Required pre-release testing

Test at minimum:

- a known address in a FEMA Special Flood Hazard Area;
- a known address in a moderate mapped area;
- an address outside mapped higher-hazard areas;
- an address near a zone boundary;
- an invalid address;
- an address outside Philadelphia;
- repeated searches for the same address;
- a temporary FEMA failure;
- English and Spanish;
- keyboard-only operation;
- VoiceOver on iPhone or macOS;
- NVDA with Firefox or Chrome, when available;
- 200% and 400% browser zoom;
- a 320-pixel-wide viewport;
- printing the renter flood plan; and
- reduced-motion mode.

## Known limitations

- A point lookup can be sensitive to geocoding accuracy and flood-zone boundaries.
- FEMA mapping does not capture every urban-flooding or sewer-backup hazard.
- Building condition, drainage, basement construction, and prior flood history require additional investigation.
- The public Nominatim service has usage limits and is not intended for high-volume production traffic.
- The site is educational and is not an insurance determination, engineering assessment, emergency warning, legal opinion, or guarantee.

## Primary sources

- FEMA Flood Map Service Center and National Flood Hazard Layer
- City of Philadelphia Flood Management Program
- Philadelphia Office of Emergency Management and ReadyPhiladelphia
- Ready.gov
- OpenStreetMap Nominatim and map data

## License and contributions

Before accepting outside contributions, add a project license and contribution policy appropriate for the intended use.

Changes affecting risk language, classifications, or data sources should include:

- the source changed;
- why it changed;
- the date the source was checked;
- test addresses used;
- known limitations; and
- whether previous results may be affected.
