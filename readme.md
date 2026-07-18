# FloodRisk Philly

**Plain-language flood risk and preparedness information for Philadelphia renters.**

[Live site](https://meyeringn.github.io/floodrisk-philly/) ·
[Source](https://github.com/meyeringn/floodrisk-philly)

## What this version does

FloodRisk Philly lets a user:

- Enter a Philadelphia street address
- Match the address with Philadelphia's public geocoder
- Query FEMA's National Flood Hazard Layer at the matched point
- Read a plain-language explanation of the returned flood zone
- See the address on an interactive map
- Build a renter-focused preparedness checklist
- Add disability, elevator, powered-equipment, medication, communication, pet, and service-animal considerations
- Switch the interface between English and Spanish
- Print or save the personalized plan

No account is required. The application does not maintain an address history.

## What this version does not claim

A FEMA map is not a complete picture of flood risk. This tool does not currently calculate:

- Building-specific flood depth
- Basement or sewer-backup probability
- Drainage capacity
- Impervious-surface percentages
- Historical flood complaints
- Insurance eligibility or pricing
- Engineering or legal conclusions

Those features should only be added when a reliable public dataset and a transparent method are connected to the application.

## Files

- `index.html`: page structure and accessible form controls
- `styles.css`: responsive visual design
- `app.js`: address lookup, FEMA query, bilingual text, mapping, and checklist logic

## Run locally

Because browsers may block API requests from a file opened directly, use a small local server:

```bash
python3 -m http.server 8000
```

Then open `http://localhost:8000`.

## Data services

- Philadelphia public ArcGIS address geocoder
- FEMA National Flood Hazard Layer ArcGIS service
- OpenStreetMap tiles through Leaflet

The application runs entirely in the browser. External services can change or become temporarily unavailable, so error messages and official-source links are included.

## Accessibility

The interface includes:

- Semantic headings and fieldsets
- A skip link
- Keyboard-accessible controls
- Visible focus indicators
- Status announcements with `aria-live`
- A labeled progress bar
- Reduced-motion support
- Responsive layouts
- English and Spanish labels

Accessibility testing with actual users and assistive technologies is still encouraged.

## License

MIT
