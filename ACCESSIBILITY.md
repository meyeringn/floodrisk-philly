# Accessibility Statement: FloodRisk Philly

I'm a Disabled civic technologist, and I build FloodRisk Philly with Disabled people as the primary user, not an afterthought. This page says what has been tested, what I know still needs work, and how to tell me about a barrier.

**Live tool:** https://meyeringn.github.io/floodrisk-philly/

## Target

FloodRisk Philly aims to meet the **Web Content Accessibility Guidelines (WCAG) 2.2, Level AA**.

## How it's tested

- **Automated, every week:** each live tool is scanned with axe-core against WCAG 2.1 A and AA rules. [See the latest results](https://github.com/meyeringn/meyeringn.github.io/actions/workflows/accessibility-check.yml).
- **Reduced motion:** the tool respects your device's "reduce motion" setting.
- **Languages and reading supports:** English and Spanish.
- **Manual review:** not yet completed. Planned: keyboard-only use, NVDA and VoiceOver screen readers, and 200% zoom on a phone-width screen.

Automated tools catch only some barriers. Until the manual review is done, please treat this tool as tested by machine, not yet by people.

## Fixed in November 2026

The first automated scan found issues that are now fixed: the address field's autofill setting, and the language button's spoken name, which now include the words you see on screen.

## Known issues

| Issue | Who it affects | Workaround | Status |
| --- | --- | --- | --- |
| The interactive map uses Leaflet, which may not be fully keyboard or screen reader friendly. | Keyboard and screen reader users | Your flood zone, explanation, and action steps all appear as text beside the map. | Watching |

## Report a barrier

If something in FloodRisk Philly doesn't work for you, I want to know.

- [Open an issue](https://github.com/meyeringn/floodrisk-philly/issues/new?title=Accessibility%20barrier) (requires a free GitHub account), or
- Email meyeringn@gmail.com with "Accessibility" in the subject line.

Please describe what you were trying to do, what happened, and what device, browser, or assistive technology you use. I aim to reply within 5 business days.

**Last updated:** November 2026
