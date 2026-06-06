# 💧 FloodRisk Philly

**Know your risk before the storm.**

[![Live Tool](https://img.shields.io/badge/🌊%20Live%20Tool-meyeringn.github.io%2Ffloodrisk--philly-2ab5a0?style=for-the-badge)](https://meyeringn.github.io/floodrisk-philly)
[![Part of Vibe Coding for Climate Action](https://img.shields.io/badge/Vibe%20Coding%20for%20Climate%20Action-Portfolio-0e4a5c?style=for-the-badge)](https://github.com/meyeringn)
[![License: MIT](https://img.shields.io/badge/License-MIT-6ddfc8?style=for-the-badge)](LICENSE)

-----

> *“Should I be worried about my apartment flooding?”*
> 
> That’s the question FloodRisk Philly was built to answer — in plain English, not insurance jargon.

-----

## What It Does

FloodRisk Philly is a single-file, no-install civic tech tool. Enter any Philadelphia address and get:

- **Your FEMA flood zone** — explained in plain language (not “Zone AE,” but *what Zone AE actually means for your life*)
- **Impervious surface assessment** — how much of your neighborhood is paved, and why that matters when it rains
- **Stormwater infrastructure rating** — how well your area’s drainage system handles heavy storms
- **Renter-specific action steps** — including disclosure rights, emergency planning, insurance guidance, and Disabled renter resources
- **Direct links** to FEMA flood maps, Philadelphia Water Department, Philly Tenant Union, and the Mayor’s Commission on People with Disabilities

-----

## Why Renters, Not Homeowners

Most flood risk tools are built with homeowners in mind: insurance premiums, property values, buyout programs.

But in Philadelphia, **over 45% of residents rent**. Renters bear real flood costs — damaged belongings, displacement, missed work, inaccessible building exits — without owning the property or controlling its flood mitigation.

This tool is built for them. Specifically:

- **Residents in basement and garden-level units**, where flood risk is highest and exits are most constrained
- **Disabled renters**, who face compounded risk during flooding and displacement events
- **Low-income renters** in high-impervious neighborhoods near the Schuylkill River, Delaware River, and Frankford Creek corridors — areas with both high flood exposure and limited stormwater infrastructure

-----

## The Climate Justice Context

Philadelphia’s flood risk is not evenly distributed. It follows the lines of disinvestment.

Neighborhoods like Kensington, Manayunk, Port Richmond, Frankford, and Grays Ferry sit in FEMA Zone AE — the highest-risk designation — and also have some of the city’s oldest stormwater infrastructure and highest rates of impervious surface cover. These are predominantly working-class, lower-income neighborhoods where renters outnumber owners.

Meanwhile, neighborhoods with newer infrastructure and more green space face lower risk — and those neighborhoods are, on average, wealthier and whiter.

FloodRisk Philly names that pattern directly, rather than presenting flood data as a neutral technical fact.

-----

## How It Works

```
User enters address
        ↓
Geocoded via OpenStreetMap / Nominatim API
        ↓
Neighborhood matched to FEMA flood zone classification
(Zone AE · Zone AO · Zone A · Zone X-500 · Zone X)
        ↓
Impervious surface level + stormwater capacity assessed
        ↓
Plain-language risk summary generated
        ↓
Renter action steps + resource links returned
```

**Current data sources:**

|Source                                                                                           |What it provides                                        |
|-------------------------------------------------------------------------------------------------|--------------------------------------------------------|
|[FEMA National Flood Hazard Layer](https://msc.fema.gov/portal/home)                             |Official flood zone classifications (AE, AO, A, X500, X)|
|[OpenDataPhilly](https://opendataphilly.org)                                                     |Stormwater infrastructure and impervious surface data   |
|[Philadelphia Water Department](https://www.phila.gov/departments/philadelphia-water-department/)|Combined sewer system and drainage capacity context     |
|[OpenStreetMap / Nominatim](https://nominatim.openstreetmap.org)                                 |Address geocoding                                       |

-----

## FEMA Flood Zones — Plain English Guide

|Zone          |Risk Level|What It Means                                                                         |
|--------------|----------|--------------------------------------------------------------------------------------|
|**AE**        |🚨 High    |1% annual flood chance. Over 30 years: ~1-in-4 odds of flooding at least once.        |
|**AO**        |🚨 High    |Sheet flow flooding risk — water spreading across slopes rather than through channels.|
|**A**         |🚨 High    |High risk without detailed elevation data. Basement units should have exit plans.     |
|**X (500-yr)**|⚠️ Moderate|0.2%–1% annual flood chance. Philadelphia’s aging sewer system raises real risk here. |
|**X**         |✅ Lower   |Minimal federal hazard — but not zero risk, especially during intense storms.         |

-----

## Accessibility

FloodRisk Philly is built with accessibility as a core requirement, not an afterthought:

- ✅ Skip-to-content link
- ✅ Full ARIA labeling (roles, labels, live regions)
- ✅ Keyboard navigable — full functionality without a mouse
- ✅ Focus-visible outlines on all interactive elements
- ✅ Screen reader compatible result announcements (`aria-live="polite"`)
- ✅ Color contrast meets WCAG AA standards
- ✅ Mobile-first responsive layout

Flood emergencies disproportionately harm Disabled people. An accessibility-first tool isn’t optional here.

-----

## Part of: Vibe Coding for Climate Action

FloodRisk Philly is one of five open-source civic tech tools built for Philadelphia as part of the **Vibe Coding for Climate Action** portfolio:

|Tool                                                            |Description                                                        |
|----------------------------------------------------------------|-------------------------------------------------------------------|
|[**SustAInable**](https://github.com/meyeringn/sustainable-heat)|XGBoost model predicting neighborhood heat illness risk by ZIP code|
|[**UpLift**](https://github.com/meyeringn/uplift-transit)       |Predictive maintenance model for SEPTA elevator/escalator failures |
|[**CanopyWatch**](https://meyeringn.github.io/canopy-watch)     |Urban tree canopy equity tool for Philadelphia                     |
|[**DCVI**](https://github.com/meyeringn/dcvi)                   |Disability Climate Vulnerability Index                             |
|**FloodRisk Philly**                                            |← You are here                                                     |

All tools are Philadelphia-grounded, open-source, and built at the intersection of climate justice, disability justice, and transit equity.

-----

## Roadmap

**v1.0 — Current**

- [x] Address geocoding via OpenStreetMap
- [x] FEMA flood zone classification (5 zone types)
- [x] Neighborhood-to-zone mapping for Philadelphia
- [x] Impervious surface assessment
- [x] Stormwater capacity rating
- [x] Plain-language renter guidance
- [x] Renter-specific resource links
- [x] Full WCAG accessibility

**v1.1 — Next**

- [ ] Live FEMA NFHL API integration (replace neighborhood heuristic with parcel-level data)
- [ ] Map visualization of flood zone boundaries
- [ ] Historical flooding incident overlay (PhillyWater data)

**v2.0 — Future**

- [ ] Combined flood + heat + canopy triple-risk score (integrating SustAInable data)
- [ ] Disability-specific emergency exit assessment by building type
- [ ] Comparison mode: side-by-side risk for two addresses (useful for housing decisions)
- [ ] Spanish language support

-----

## Run It Locally

No build tools. No dependencies. No install.

```bash
git clone https://github.com/meyeringn/floodrisk-philly.git
cd floodrisk-philly
open index.html
```

Or just open `index.html` in any modern browser.

-----

## Contributing

Contributions welcome — especially:

- Improved neighborhood-to-FEMA-zone mappings
- Live FEMA NFHL API integration
- Translations (Spanish is the priority)
- Accessibility audits and improvements

Open an issue or submit a PR.

-----

## License

MIT License. Use it, fork it, adapt it for your city.

If you build something based on this tool, a mention or link back is appreciated but not required.

-----

## About the Builder

Built by **Nico Meyering** — Chairman of the Philadelphia Mayor’s Commission on People with Disabilities, VP of Partnerships at Net Impact Philadelphia and civic technologist at the intersection of impact, disability equity, and climate.

- GitHub: [@meyeringn](https://github.com/meyeringn)
- LinkedIn: [Nico Meyering](https://linkedin.com/in/nicomeyering)
- Part of the [Equitech Futures Civic Tech Institute 2026](https://equitechfutures.com) cohort

-----

*Philadelphia, PA · Built with care for the people who need it most.*
