# FloodRisk Philly

FloodRisk Philly is a free, browser-based civic-tech tool that helps Philadelphia renters understand a FEMA flood-zone result and build a practical, disability-aware preparedness plan.

## Live site

https://meyeringn.github.io/floodrisk-philly/

## Current features

- Philadelphia address lookup through the City's public geocoder
- FEMA National Flood Hazard Layer point query
- Plain-language explanations for common FEMA flood zones
- Interactive Leaflet map
- Renter-specific context about floor level, exits, drainage, elevators, and power
- Personalized planning for mobility, powered equipment, medication, communication access, vision, hearing, living alone, pets, and service animals
- English and Spanish interface
- Printable checklist with completion tracking
- Official Philadelphia emergency and flood-resource links
- Responsive mobile design
- Social and search metadata
- No account or saved address history

## Important limitation

FloodRisk Philly is educational. It is not an insurance determination, engineering assessment, emergency warning, legal opinion, or guarantee that a property will or will not flood.

FEMA maps do not fully capture sewer backups, overwhelmed street drains, water-main failures, building maintenance, or every intense-rain event.

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

## Accessibility

The interface includes semantic headings and fieldsets, keyboard-accessible controls, visible focus states, an `aria-live` status area, reduced-motion support, bilingual labels, responsive layouts, and disability-aware planning questions.

## License

MIT
