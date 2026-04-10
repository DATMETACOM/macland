# Hai Phong FDI Funnel

## What This Is

This project is a separate GSD workstream to build a cross-border marketing and deal-origination engine for industrial real-estate opportunities in Hai Phong. It is for foreign manufacturers and investors from Korea, Japan, China/Taiwan, the EU, and the US who need ready-built factories or industrial land, plus local execution support to lease, acquire, or launch production in Hai Phong.

## Core Value

Reduce uncertainty for foreign industrial investors by turning fragmented Hai Phong supply into verified, decision-ready opportunities with strong local execution support.

## Requirements

### Validated

(None yet — ship to validate)

### Active

- [ ] Define a narrow, winnable wedge for the first customer segment and first transaction type.
- [ ] Build a trusted supply-verification standard for Hai Phong factory and land listings.
- [ ] Design a market-specific acquisition and qualification funnel for foreign investors.
- [ ] Establish a repeatable deal workflow from lead to shortlist, site visit, negotiation, and close.

### Out of Scope

- Building a generic industrial-news portal — weak moat and low commercial leverage.
- Rebuilding the current website first — the immediate problem is business design and funnel design, not front-end polish.
- Targeting all investor geographies equally from day one — this dilutes positioning and learning.

## Context

The current repo contains a live industrial real-estate website with Hai Phong inventory already prioritized in product ordering. Local inspection shows 408 products in the data set, 62 Hai Phong-related listings, and basic email-based contact capture but no segmentation or deal-ops layer. Externally, official city and economic-zone sources show Hai Phong has strong GRDP growth, major FDI attraction, expanding industrial capacity, port-led logistics strength, and active policy support around special mechanisms and free-trade-zone direction.

This project is intentionally isolated from the web app so strategy, market design, and operating model can be developed without mixing with website implementation work.

## Constraints

- **Scope**: Must stay in a separate folder from the web app — to avoid coupling strategy work with website code.
- **Execution**: Should follow GSD with a lean first wedge — to validate demand before scaling content or tooling.
- **Business Model**: Must avoid generic broker commoditization — because the category is trust-heavy and easy to copy.
- **Go-To-Market**: Must prioritize markets with the shortest path to real deals — because long-cycle international expansion will burn time and focus.
- **Data Quality**: Supply must be verified and current — because weak listing quality destroys investor trust.

## Key Decisions

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Run this as a separate folder-based project | Keeps GSD strategy work independent from the website codebase | ✓ Good |
| Treat this as services-led first | The moat is trust, execution, and verified supply, not content volume | ✓ Good |
| Start with Hai Phong only | Narrow geography increases focus and operational depth | ✓ Good |
| Prioritize Korea/Japan/Greater China first | Stronger fit with existing Hai Phong investor reality and shorter likely sales paths | — Pending |
| Delay website rebuild decisions | Strategy and process validation matter before productizing tooling | ✓ Good |

---
*Last updated: 2026-04-11 after initial project setup*
