# FloodRisk Philly

FloodRisk Philly is a free browser-based civic-tech tool for Philadelphia renters. It combines an official FEMA flood-zone lookup with plain-language context and a personalized, disability-aware preparedness checklist.

## Live site

https://meyeringn.github.io/floodrisk-philly/

## Current features

- Philadelphia address matching through the City's public geocoder
- ZIP code and address match confidence
- FEMA National Flood Hazard Layer point query
- Plain-language explanations for common FEMA flood zones
- Interactive map
- Renter-specific building and floor-level context
- Personalized planning for mobility, elevators, powered equipment, medication, communication, vision, hearing, living alone, pets, and service animals
- English and Spanish interface
- Checklist completion tracking saved locally on the user's device
- Print and reset controls
- Official Philadelphia flood, emergency, water, and reported-damage resources
- Responsive and keyboard-accessible design
- No account, analytics, or server-side address history

## Important limitation

FloodRisk Philly is educational. It is not an insurance determination, engineering assessment, emergency warning, legal opinion, or guarantee that a property will or will not flood.

FEMA maps do not fully capture basement backups, overwhelmed street drains, water-main failures, building maintenance, or every intense-rain event. Philadelphia's reported flood damages map is linked as an additional source of local context.

## Files

- `index.html`
- `styles.css`
- `app.js`
- `README.md`

## Data and libraries

- Philadelphia public ArcGIS address geocoder
- FEMA National Flood Hazard Layer ArcGIS service
- Leaflet
- OpenStreetMap tiles

## Privacy

Address searches are sent directly from the browser to Philadelphia's geocoder and FEMA. FloodRisk Philly does not operate a server or save address history. Checklist progress is stored only in the user's browser using local storage.

## License

MIT
