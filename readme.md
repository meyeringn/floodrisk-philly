# FloodRisk Philly

A free, browser-based flood information and renter preparedness tool for Philadelphia.

**Live site:** https://meyeringn.github.io/floodrisk-philly/

## What works in this version

- Searches Philadelphia street addresses through the City of Philadelphia public geocoder
- Queries FEMA’s National Flood Hazard Layer at the matched point
- Explains common FEMA flood zones in plain English and Spanish
- Displays the searched point on an interactive map
- Separates official mapped hazard from local heavy-rain, sewer-backup, and building-specific limitations
- Generates a renter checklist using floor level, elevator access, powered equipment, and pet or service-animal information
- Saves only the language preference in the browser
- Uses responsive layouts, keyboard-accessible controls, visible focus states, reduced-motion support, and live status messages

## Important limitation

FloodRisk Philly provides educational information and renter preparedness guidance. It is not an insurance determination, engineering assessment, emergency warning, legal opinion, or guarantee that a property will or will not flood.

## Files

- `index.html`: page structure and content
- `styles.css`: responsive design and accessibility styling
- `app.js`: address lookup, FEMA query, map, translations, and checklist logic

## Data services

- City of Philadelphia Address Locator
- FEMA National Flood Hazard Layer
- OpenStreetMap map tiles through Leaflet

The application runs entirely in the browser. A searched address is sent to the public City and FEMA services required to return a result. FloodRisk Philly does not run its own server or store address searches.

## Deploying on GitHub Pages

1. Place `index.html`, `styles.css`, and `app.js` in the repository root.
2. In the repository settings, open **Pages**.
3. Deploy from the `main` branch and root folder.
4. Wait for GitHub Pages to publish the latest commit.

## Testing before publishing

Try at least:

- A complete Philadelphia address
- An incomplete or invalid address
- An address outside Philadelphia
- English and Spanish
- Mobile width and desktop width
- Keyboard-only navigation
- A checklist with each apartment factor selected

## License

MIT
