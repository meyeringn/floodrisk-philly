# FloodRisk Philly

FloodRisk Philly is a free, browser-based civic-tech tool for Philadelphia renters. It turns an official FEMA flood-zone lookup into plain-language context and a personalized preparedness checklist.

## Live tool

https://meyeringn.github.io/floodrisk-philly/

## Current features

- Philadelphia address matching through the City's public geocoder
- FEMA National Flood Hazard Layer point lookup
- Plain-language explanations for common FEMA zones
- Interactive map
- Renter-focused planning questions
- Disability, elevator, powered-equipment, medication, communication, pet, and service-animal considerations
- English and Spanish interface
- Checklist progress tracking
- Copy, download, and print options
- Links to official Philadelphia preparedness and flood resources
- Responsive, keyboard-accessible design
- No account, analytics, or saved address history

## Important limitations

FloodRisk Philly is educational. It is not an insurance determination, engineering assessment, emergency warning, legal opinion, or guarantee that a property will or will not flood.

FEMA maps do not fully capture basement backups, overwhelmed street drains, water-main failures, or all intense-rain flooding. Building conditions and unit floor level also matter.

## Technical approach

The app is intentionally stored in one `index.html` file so it can be maintained and published easily through GitHub Pages. It uses:

- Philadelphia's public ArcGIS geocoder
- FEMA's National Flood Hazard Layer ArcGIS service
- Leaflet
- OpenStreetMap tiles

Everything runs in the browser.

## Accessibility

The interface includes semantic fieldsets and headings, keyboard controls, visible focus states, an `aria-live` status region, screen-reader progress information, reduced-motion support, bilingual labels, and mobile layouts.

## License

MIT
