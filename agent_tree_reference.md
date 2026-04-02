# B2C Telco Agentic Enterprise — Agent / Data / Telemetry Tree

## SERVICE

### Director, Care
**Orchestrator:** Care Director Orchestrator
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Operations Analytics Agent | Contact volumes, CSAT/NPS, AHT by queue, cost-per-contact, vendor SLA | RT: queue depth, agent states; NRT: intraday volume; BT: monthly trends | Dashboard accuracy, insight-to-action time, anomaly detection rate |
| Volume Driver Analysis Agent | Contact reason taxonomy, repeat-contact patterns, billing/outage correlation | NRT: today's contact reasons, outage mapping; BT: monthly trends | Avoidable contact rate, root-cause accuracy, volume reduction from fixes |
| Voice of Customer Agent | NPS verbatims, social mentions, focus group transcripts, sentiment scores | NRT: social sentiment, today's surveys; BT: quarterly themes | Theme identification accuracy, emerging issue lead time, VoC-to-action rate |
| Workforce Planning Agent | Historical volumes, seasonality, attrition, shrinkage, deflection rates | NRT: intraday actuals vs forecast; BT: 12-24mo patterns, budget | Forecast accuracy, staffing variance, cost-per-FTE optimization |

### CC Supervisor, Care
**Orchestrator:** Care Supervisor Orchestrator
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Interaction QA Agent | Transcripts, policy library, QA rubric, case outcomes, regulatory reqs | NRT: completed transcripts; BT: QA rubric, policy library | QA score, policy violation rate, false-positive rate, coaching opportunities |

### Frontline Care Rep
**Orchestrator:** Care Orchestrator (14 sub-agents)
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Billing Resolution Agent | Full billing history, charges, credits, adjustments, plan history, prior disputes | RT: current balance, autopay, installments; NRT: recent payments; BT: 12-24mo invoices | Resolution rate, credit accuracy, policy compliance, repeat-escalation rate |
| Payment Exception Agent | Balance, payment history, autopay, collections stage, hardship indicators | RT: balance, collection status, last payment; NRT: recent arrangements; BT: policy rules | Exception resolution rate, delinquency save rate, compliance |
| Order Status Agent | Order ID, shipping status, activation status, exception codes | RT: order status (OMS), shipping (carrier API), activation, port-in status | Self-service completion, containment rate, exception reroute rate |
| Plan Advisory Agent | Current plan, 30/60/90-day usage, available plans, promo eligibility | RT: current plan, available plans, active promos; NRT: usage patterns | Plan change completion, ARPU impact, containment rate |
| Account Management Agent | Account profile, identity verification, address validation, authorized users | RT: identity & auth state, account profile, address API; NRT: recent changes | Change completion rate, identity verification success, error rate |
| Feature & Add-On Agent | Current features, available add-ons, device compatibility, partner subscriptions | RT: active features, available features, compatibility; NRT: partner status | Feature change completion, attach rate, containment |
| Device Support Agent | Device model, OS version, device guides, trade-in values, compatibility | RT: device model/IMEI, trade-in API; NRT: device FAQ; BT: setup guides | Resolution rate, deflection to self-service, Tier 2 escalation rate |
| Network & Coverage Agent | Service address, cell site status, outage tickets, signal quality, coverage maps | RT: outage status, cell alarms, diagnostics; NRT: network quality; BT: coverage maps | FCR for network issues, outage containment, truck-roll avoidance |
| Promotion & Loyalty Agent | Current discounts, available promos, eligibility rules, loyalty tier, competitor offers | RT: discounts, promos, eligibility, loyalty balance; NRT: churn risk, competitor offers | Promo application rate, save rate, ARPU impact |
| Account Security Agent | Identity markers, auth history, SIM status, fraud risk score, security events | RT: MFA state, SIM status, fraud alerts; NRT: recent auth attempts; BT: fraud DB | Auth success rate, fraud prevention rate, FCC compliance, recovery time |
| Autopay & Payment Method Agent | Autopay status, payment method on file, next payment date, failed payment codes | RT: autopay status, payment method, failed codes; NRT: recent changes | Enrollment rate, update success, failed payment recovery |
| Number Transfer Agent | Port-in status, portability validation, FOC date, carrier requirements | RT: port status, validation, FOC; NRT: recent attempts; BT: carrier requirements | Port completion rate, cycle time, failed port rate |
| Self-Service Guide Agent | Device type, app version, self-service features, deep link catalog | RT: device type & app version; BT: navigation guides, deep links | Deflection rate, deep link click-through, callback reduction |
| Warm Transfer Agent | Full transcript, customer identity, issue classification, sentiment, routing rules | RT: transcript, identity, agent actions, sentiment; BT: routing rules | Transfer context completeness, repeat-info rate, warm transfer success |

### Chat / Messaging / Social Rep
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Channel Response Agent | Channel history, account status, response patterns, brand voice guidelines | RT: inbound message, identity, case context; NRT: conversation history; BT: brand guidelines | Response time, containment, CSAT, compliance rate |

---

### Director, Advanced Technical Support
**Orchestrator:** (Director-level analytics agents)
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Network Performance Analytics Agent | Network alarms, outage history, contact-to-outage correlation, truck-roll rates | RT: active alarms, outage status; NRT: outage-contact correlation; BT: quality trends | Correlation accuracy, proactive identification, truck-roll reduction |
| Technical Operations Insights Agent | Escalation rates, repeat-step rates, Tier 2 resolution, KB usage | NRT: today's escalation rates; BT: monthly flows, KB gaps, training ROI | Escalation reduction, Tier 1 improvement, knowledge gap closure |

### CC Supervisor, Adv. Technical Support
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Tech Escalation Summary Agent | Prior troubleshooting steps, device/network telemetry, transcript summary | RT: current transcript, diagnostics, auth state; NRT: prior steps; BT: known issues | Repeat-step rate, escalation quality, handle-time reduction |
| Tech Queue Prioritization Agent | Severity, failed contacts, customer value, SLA status, churn risk | RT: queue metadata, outage severity, SLA clock; NRT: churn risk; BT: value tiers | Backlog aging, high-risk response time, SLA compliance |

### Advanced Technical Support Rep
**Orchestrator:** Tech Support Orchestrator
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Outage & Service Health Agent | Outage map, service address, alarms, maintenance windows, product inventory | RT: outage tickets, cell alarms, maintenance, service address; NRT: ETAs; BT: topology | Outage containment, false classification, ETA accuracy, truck-roll avoidance |
| Device Troubleshooting Agent | Device model, firmware, diagnostics, signal quality, prior tickets | RT: device IMEI/firmware, signal metrics, SIM state, remote diag; NRT: error logs; BT: guides | Resolution rate, Tier 2 escalation, truck-roll avoidance, time to resolve |

---

### Director, Retention
**Orchestrator:** (Director-level analytics agents)
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Churn Analytics & Forecasting Agent | Churn by segment/reason, save acceptance, post-save churn, LTV, competitive pricing | NRT: churn propensity scores; BT: monthly churn rates, program ROI, market data | Forecast accuracy, program ROI visibility, early-warning lead time |
| Retention Program Performance Agent | Save outcomes by offer, discount depth, post-save churn, margin per save | NRT: today's save outcomes; BT: 30/60/90 post-save churn, portfolio ROI | Save rate by offer, margin retention, leakage rate |

### CC Supervisor, Retention
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Save Offer Recommendation Agent | Churn propensity, tenure, product mix, complaints, prior offers, discount rules | RT: call context, offer menu, contract terms; NRT: churn score, interaction history; BT: save outcomes | Save rate, offer acceptance, margin impact, discount leakage, override rate |
| Retention Supervisor Performance Agent | Save outcomes by rep, discounts granted, downstream churn, QA, compliance | NRT: today's save outcomes, discount values; BT: 30/60/90 churn by rep | Save rate, leakage, compliance adherence, coaching rate |
| Sentiment & Defection Risk Agent | Sentiment scores, complaint tags, repeat-contact count, NPS, unresolved flags | NRT: sentiment from interactions, social alerts, repeat-contact count; BT: NPS, complaint themes | Early-risk identification, proactive conversion, retained revenue |

### Retention / Loyalty Rep
**Orchestrator:** Retention Orchestrator
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| (Sub-agents: Save Offer, Sentiment — orchestrated by Retention Orchestrator above) | | | |

---

## SALES

### Retail Store Manager
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Store Traffic & Conversion Agent | Store traffic, transactions, device inventory, staffing roster, conversion data | RT: live footfall, queue/wait; NRT: intraday conversion; BT: weekly trends, inventory | Conversion, attach rate, wait time, lost sales |

### Retail Sales Associate
**Orchestrator:** Retail Orchestrator
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Accessory & Bundle Agent | Chosen device, household products, current plan, promo eligibility | RT: selected device & plan, household; NRT: inventory; BT: bundle rules | Attach rate, bundle penetration, revenue per sale |

### Director of Digital Sales
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Digital Conversion Optimization Agent | Clickstream, cart contents, campaign source, eligibility, inventory | RT: live session, cart, visitor identity; NRT: session patterns; BT: funnel benchmarks | Cart recovery, checkout conversion, assisted conversion |

### Digital Merchandising / Conversion Manager
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Plan Recommendation Agent | Plan catalog, promos, eligibility, usage profile, household products | RT: available plans, browsing behavior; NRT: usage, household; BT: comparison rules | Recommendation acceptance, conversion uplift, downgrade rate |
| Promo Eligibility Agent | Promo terms, line status, trade-in rules, credit requirements | RT: promo rules, account status, credit, trade-in API; NRT: port-in status; BT: promo terms | Fallout rate, order completion, complaint rate |

### Ecommerce Product Manager
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Checkout Support Agent | Cart, financing status, shipping options, error codes | RT: cart, payment status, shipping, error codes; NRT: session errors; BT: FAQ, payment rules | Checkout completion, payment recovery, abandonment rate |

### Digital Sales Ops Manager
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Digital Order Fallout Agent | Exception codes, KYC status, device eligibility, activation dependencies | RT: exception codes, KYC, activation status; NRT: fallout queue, fraud; BT: validation rules | Fallout rate, recovery rate, time to recover |

### Telesales Supervisor
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Call Coaching & Objection Agent | Live transcript, customer profile, product/offer rules, prior objections | RT: live transcript, account, catalog; NRT: recent interactions; BT: playbooks, battle cards | Conversion lift, handle time, compliance, adoption |
| Telesales Performance Agent | Call outcomes, conversions, QA scores | NRT: intraday rep conversion; BT: weekly trends, QA, revenue/call | Conversion, revenue/call, compliance rate |

### Inbound Sales Rep
**Orchestrator:** Telesales Orchestrator
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Upgrade Eligibility Agent | Tenure, installment status, trade-in value, inventory, plan compatibility | RT: device payment balance, eligibility, trade-in API, inventory; NRT: usage | Upgrade conversion, attach rate, cycle time |
| Cross-sell / Upsell Agent | Household products, eligibility, propensity model, campaign rules | RT: household inventory, active promos; NRT: propensity scores; BT: campaign rules | Attach rate, incremental ARPU, acceptance rate |

### Cross-channel Sales
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Quote & Order Governance Agent | Product rules, pricing, promo terms, order dependencies | RT: quote line items, pricing rules, compliance; NRT: exception patterns; BT: product rules | Order accuracy, fallout rate, exception rate |
| Offer Performance Agent | Promo usage, conversion, discount depth, channel mix, churn outcomes | NRT: intraday offer uptake; BT: weekly performance, margin, abuse detection | Offer ROI, abuse rate, incremental revenue |
| Channel Optimization Agent | Conversion by channel, CAC, ARPU, attach rate, fallout, CSAT | NRT: intraday channel conversion; BT: weekly comparison, CAC, mix | Channel conversion, CAC efficiency, revenue by channel |

---

## MARKETING

### VP Brand & Communications
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Brand Performance Agent | Awareness, favorability, NPS, social sentiment, share of voice | NRT: social sentiment, mention volume; BT: quarterly surveys, SOV, brand lift | Brand lift, sentiment trend, competitive positioning |
| Campaign Performance Agent | Impressions, reach, CTR, CPM, CPA, creative variants | RT: live campaign delivery; NRT: intraday CTR/CPA; BT: weekly ROI, benchmarks | Campaign ROI, CPA efficiency, creative win rate |
| Media Mix Optimization Agent | Spend by channel, attribution, conversions, CPAs, incrementality | BT: MMM outputs, spend data, incrementality tests, budget targets | Marketing efficiency ratio, channel ROAS, forecast accuracy |

### VP Digital Marketing / Growth
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Acquisition Campaign Agent | Keyword/audience performance, CPA, quality scores, bid landscape | RT: bid landscape, spend pacing, conversion stream; NRT: intraday CPA; BT: keyword history | Digital CPA, conversion volume, ROAS |
| Content & SEO Agent | Rankings, organic traffic, competitor rankings, content gaps | BT: weekly rankings, monthly traffic, competitor SEO, content gaps | Organic growth, ranking improvements, engagement |
| Conversion Optimization Agent | Funnel metrics, A/B test results, segment performance, page load | RT: live funnel rates, test performance; NRT: conversion paths; BT: benchmarks, learnings | Conversion rate, test velocity, revenue/visitor |
| Marketing Attribution Agent | Touchpoint data, conversion paths, channel interactions, time-to-convert | NRT: recent conversion paths; BT: monthly MTA outputs, incrementality, analysis | Attribution accuracy, path insights, channel contribution |

### VP CRM & Lifecycle Marketing
| Agent | Data (Silver Layer) | Freshness | Telemetry / Control |
|-------|-------------------|-----------|-------------------|
| Journey Orchestration Agent | Lifecycle stage, engagement history, preferences, event triggers, frequency caps | RT: event triggers, channel prefs, frequency caps; NRT: engagement signals, segments; BT: journey flows | Open/click rates, journey completion, opt-out rate |
| Audience Segmentation Agent | Demographics, behaviors, transactions, propensity scores, segment rules | NRT: behavioral events, propensity scores; BT: demographics, segment rules, lookalikes | Segment performance lift, data freshness |
| Loyalty Engagement Agent | Member tier, point balance, redemption history, partner offers, engagement | RT: point balance & tier; NRT: redemption activity, partner offers; BT: engagement trends | Engagement rate, redemption rate, program ROI |
| Next-Best-Action Agent | Propensity scores, offer eligibility, interaction history, business rules | RT: customer context, eligibility, frequency caps, channel; NRT: propensity scores; BT: rules, acceptance rates | Offer acceptance, incremental revenue, satisfaction |

---

## CROSS-FUNCTIONAL GOVERNANCE TELEMETRY

| Metric | What It Measures | Target | Drift Signal |
|--------|-----------------|--------|-------------|
| Data Freshness | Each feed meets SLA (RT <5s, NRT <15min, BT <24h) | 99%+ compliance | Any feed misses SLA >3 consecutive intervals |
| Model Drift | Statistical divergence from training distribution | KL divergence within bounds | Automated monitoring of input feature distributions |
| Bias Monitoring | Outcome fairness across customer segments | No significant disparities | Quarterly audits, continuous outcome monitoring |
| PII Compliance | Data minimization, masking, access controls | Zero PII exposure in logs | Automated PII scanning of all outputs |
| Token Usage & Cost | LLM consumption and cost per interaction | Declining cost/resolution | Cost rising without quality improvement |
| Latency & Availability | Response time and uptime | P95 <3s, 99.9% uptime | Degradation trending, timeout increase |
| Error Rate | Interactions with errors, tool failures, crashes | <1% error rate | New failure modes, rate trending up |
| Feedback Loop Health | Human corrections incorporated into improvement | 90%+ reviewed in 7 days | Growing backlog, same errors recurring |

---

**Legend:**
- RT = Real-time (sub-second to seconds)
- NRT = Near-real-time (minutes to 1 hour)
- BT = Batch (daily/weekly)
- Orchestrator = Master agent that delegates to sub-agents
