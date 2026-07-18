# FloodRisk Philly

FloodRisk Philly is a free, open-source civic-tech tool for Philadelphia renters. It combines FEMA flood-zone information, current National Weather Service alert context, and a disability-aware preparedness plan.

## Version 9

- Philadelphia address matching and confidence
- FEMA National Flood Hazard Layer point query
- Plain-language flood-zone explanations
- Current National Weather Service flood and severe-weather alert context
- Clear separation between current alerts and long-term mapped hazard
- Personalized preparation priority and “do first” actions
- Tailored landlord questions
- Emergency-contact fields stored locally
- Printable one-page preparedness report that can be saved as a PDF
- Disability-aware checklist
- Shareable results, interactive map, English and Spanish
- Installable Progressive Web App and offline saved-result fallback
- No account, analytics, or project server

## Report behavior

“Generate one-page report” opens a print-ready report. In the system print dialog, choose **Save as PDF** to create the PDF. The report includes the address, FEMA zone, current alerts loaded at generation time, priority actions, landlord questions, contacts, and checklist.

## Important limitation

FloodRisk Philly is an educational planning aid. It is not an emergency warning, engineering assessment, insurance determination, legal opinion, or guarantee that a property will or will not flood. Follow official emergency instructions.

## Privacy

Searches are sent directly to Philadelphia’s public geocoder, FEMA, and the National Weather Service. Saved results, planning answers, contacts, and checklist progress remain in the user’s browser and can be erased with the visible privacy control.

## Files

- `index.html`
- `styles.css`
- `app.js`
- `manifest.webmanifest`
- `sw.js`
- `favicon.svg`
- `icon-192.png`
- `icon-512.png`
- `README.md`

## License

MIT
