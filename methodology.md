# FloodRisk Philly Methodology

**Version:** 2.0 draft  
**Last updated:** July 11, 2026

## Purpose

FloodRisk Philly is a plain-language educational tool for Philadelphia renters. It helps a user:

1. locate an address;
2. view the FEMA flood-zone classification returned for that location;
3. understand the limits of that classification; and
4. create a renter-focused preparedness plan based on building and accessibility factors the user provides.

The tool is not an insurance determination, engineering assessment, emergency warning system, legal opinion, or guarantee that a home will or will not flood.

## The result is not a single risk score

FloodRisk Philly separates three kinds of information.

### 1. Official mapped flood hazard

The primary result comes from the Federal Emergency Management Agency’s National Flood Hazard Layer, commonly called the FEMA NFHL.

The application:

1. converts the searched address into latitude and longitude;
2. sends that point to FEMA’s map service;
3. reads the flood-zone attributes returned for that point; and
4. translates the returned classification into plain language.

FloodRisk Philly does not alter the FEMA zone or blend it into a proprietary score.

### 2. Local flood context

Philadelphia can experience flooding outside FEMA’s higher-hazard zones. Possible causes include:

- intense rainfall;
- sewer backups;
- combined sewer overflows;
- blocked or undersized drains;
- low-lying streets;
- basement and below-grade construction;
- water entering through roofs, windows, foundations, or plumbing; and
- conditions that have changed since a map was produced.

Local context may help a renter ask better questions, but it must not be presented as an official property-level flood classification unless the underlying dataset supports that level of precision.

### 3. Apartment and accessibility factors

A building’s practical risk can differ from the mapped hazard at its geographic point.

FloodRisk Philly may ask users whether:

- the unit is below street level, at street level, or above ground;
- they rely on an elevator or cannot use stairs;
- they use powered medical, mobility, or communication equipment;
- they may need assistance evacuating;
- the unit has only one usable exit; or
- they need to plan for pets.

These answers customize preparedness guidance. They do not change the FEMA classification.

The answers remain in the browser unless a future version explicitly tells the user otherwise.

## Address lookup

FloodRisk Philly uses an external geocoding service to convert a written address into coordinates.

The application should:

- remove apartment or unit numbers before geocoding;
- favor full Philadelphia street addresses;
- display the interpreted address back to the user;
- reject results outside Philadelphia;
- allow the user to correct an incorrectly interpreted address; and
- distinguish “address not found” from a temporary service failure.

ZIP-code searches and neighborhood names are less precise than a street address. Results based on them must be labeled as approximate and must not imply parcel- or building-level precision.

## FEMA flood-zone interpretation

The exact attributes returned by FEMA should be retained in the application state and shown in a technical-details section.

Plain-language groupings may include:

### Higher mapped federal hazard

This generally includes Special Flood Hazard Areas such as Zones A, AE, AH, AO, AR, A99, V, and VE.

Suggested language:

> This location is in a FEMA higher-hazard flood zone. Flooding is more likely here under FEMA’s mapped standard. Your floor, exits, building condition, and mobility or power needs can affect your practical risk.

### Moderate mapped federal hazard

This generally includes the 0.2-percent annual-chance flood area, sometimes described as the 500-year floodplain.

Suggested language:

> The federal map shows moderate flood exposure. Intense rain, sewer backups, and building conditions may create additional risk.

### Lower mapped federal hazard

This generally includes Zone X areas outside the mapped higher- and moderate-hazard areas.

Suggested language:

> This location is outside FEMA’s mapped higher-hazard zones. That means lower mapped federal risk, not zero flood risk.

### Undetermined or unavailable

If FEMA returns no conclusive feature, malformed data, or an error, the application must not substitute a default zone.

Suggested language:

> FEMA did not return a conclusive result. Treat this as missing information, not proof that the property is safe.

The interface should direct the user to FEMA’s official Flood Map Service Center for verification.

## Neighborhood sewer and stormwater data

The original FloodRisk Philly prototype included neighborhood-specific values for:

- combined sewer coverage;
- sewer infrastructure age;
- impervious surface;
- stormwater capacity; and
- overflow risk.

These indicators should not appear as precise findings in the primary result until each value has:

- a named source;
- a direct source link;
- a publication or update date;
- a defined geographic unit;
- a reproducible calculation;
- a documented treatment of missing data;
- a clear explanation of whether the figure is measured, modeled, or estimated; and
- evidence that assigning it to a searched address is geographically valid.

An approximate neighborhood percentage must not be presented as though it were measured at the building.

Until those requirements are met, the application may provide general educational text about Philadelphia sewer and stormwater flooding, clearly labeled as citywide context.

## Current conditions

Long-term mapped hazard and current emergency conditions are different products.

A future current-conditions panel may display official alerts or monitoring information, but it must:

- use an authoritative source;
- display the source and timestamp;
- state when the data was last checked;
- remain visually separate from the long-term FEMA result; and
- never imply that the absence of a displayed alert guarantees safety.

## Privacy

FloodRisk Philly is designed as a static, browser-based application with no user account or application database.

A user’s search may still be transmitted to external services needed to perform the lookup. The interface must identify those services before the user submits an address.

The site should state plainly:

> Your address is sent to the services used to locate it and check the FEMA flood zone. FloodRisk Philly does not save your address or maintain a search history.

The project must disclose analytics, logging, or additional third-party services if any are added later.

## Accessibility

FloodRisk Philly should be usable without relying on the visual map.

At minimum, the application should provide:

- complete keyboard operation;
- visible focus indicators;
- a skip link;
- properly associated labels and instructions;
- status and error announcements;
- focus movement to newly displayed results;
- text equivalents for map information;
- sufficient color contrast;
- support for text resizing and reflow;
- reduced-motion support;
- touch targets of an accessible size;
- English and Spanish language metadata; and
- guidance that does not assume a user can walk, drive, climb stairs, hear an alarm, see a map, or evacuate without assistance.

The map is supplementary. Every decision-relevant finding must also appear as text.

## Bilingual content

English and Spanish versions should communicate the same meaning and level of certainty.

Translation requirements include:

- all static interface text;
- generated result language;
- loading and error messages;
- map descriptions and controls where technically possible;
- privacy and methodology language;
- checklist content; and
- external-resource descriptions.

The document language must change when the user switches languages.

## Failure handling

The application should distinguish among:

- empty input;
- address not found;
- ambiguous address;
- location outside Philadelphia;
- geocoding service unavailable;
- FEMA service unavailable;
- FEMA returning no feature; and
- malformed or unexpected data.

A technical failure must never be converted into a lower-risk result.

## Recommended user-facing disclaimer

> FloodRisk Philly provides educational flood information and renter preparedness guidance. It is not an insurance determination, engineering assessment, emergency warning, or guarantee that a property will or will not flood. Verify official flood-zone information through FEMA and follow current instructions from public safety agencies during an emergency.

## Primary sources

- FEMA Flood Map Service Center and National Flood Hazard Layer
- City of Philadelphia Flood Management Program maps and tools
- Philadelphia Water Department
- Philadelphia Office of Emergency Management and ReadyPhiladelphia
- Ready.gov flood preparedness guidance
- OpenStreetMap geocoding and map data, where used

## Change control

Changes to risk classifications, labels, data sources, or methodology should be reviewed before deployment.

Each release should document:

- the source or endpoint changed;
- why the change was made;
- the date the source was checked;
- test addresses used for validation;
- known limitations; and
- whether the change affects previously displayed results.
