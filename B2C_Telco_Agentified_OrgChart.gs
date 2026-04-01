/**
 * B2C Telco Agentified Org Chart
 * Example: How AI Agents Operate Across a Consumer Telco
 *
 * HOW TO USE:
 * 1. Open a new Google Sheet
 * 2. Go to Extensions > Apps Script
 * 3. Delete any existing code, paste this entire script
 * 4. Click Run > buildAgentifiedOrgChart
 * 5. Authorize when prompted
 * 6. Return to the sheet
 *
 * Use +/- buttons on the left (rows) and top (columns) to expand/collapse.
 */

function buildAgentifiedOrgChart() {
  var ss = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = ss.getActiveSheet();
  sheet.clear();
  sheet.setName("Agentified Org Chart");

  var headers = [
    "Org Level",
    "Business Function",
    "Channel",
    "Org Role",
    "Agent Name",
    "Purpose",
    "Tasks Performed",
    "Trigger Events",
    "Systems Touched",
    "Key Data Required",
    "Manager Telemetry / KPIs",
    "Human-in-the-Loop",
    "Priority Tier"
  ];

  var rows = [];

  function add(type, level, fn, ch, role, agent, purpose, tasks, triggers, systems, keydata, kpis, hitl, priority) {
    rows.push({ type: type, data: [level, fn, ch, role, agent, purpose, tasks, triggers, systems, keydata, kpis, hitl, priority] });
  }

  // ═══════════════════════════════════════
  // SERVICE
  // ═══════════════════════════════════════
  add("SECTION","","SERVICE","","","","","","","","","","","");
  add("L1","Executive","Service","","Chief Customer Officer / EVP Customer Operations","","","","","","","","","");
  add("L2","VP","Service","","VP Customer Care / Service","","","","","","","","","");

  // Director, Care
  add("L3","Director","Service","","Director, Care","","","","","","","","","");
  add("AGENT","Agent","","","","Billing Resolution Agent",
    "Resolve common billing questions without human intervention.",
    "Explain bill changes, identify proration, validate charges, recommend credit/refund path, prepare disposition notes.",
    "\"Why is my bill higher?\", late-fee complaint, first bill confusion, charge dispute.",
    "CRM, billing platform, payments, case management, knowledge base.",
    "Billing history, charges, credits, plan history, promotions, payment status, prior disputes.",
    "Containment rate, billing resolution rate, credit accuracy, repeat-contact rate, CSAT for billing flows, human override rate.",
    "Approval-based for credits above threshold or high-risk disputes.",
    "Near-term Service");
  add("AGENT","Agent","","","","Payment Support Agent",
    "Handle payment arrangements and failed-payment support.",
    "Present due balance, offer payment plan options, collect promise-to-pay intent, route hardship cases.",
    "Missed payment, suspension warning, autopay failure.",
    "Billing, payments, collections logic, CRM.",
    "Balance due, payment history, autopay status, collections stage, policy rules.",
    "Payment-plan conversion, delinquency save rate, containment, policy exception rate.",
    "Approval-based where policy exceptions are needed.","");
  add("AGENT","Agent","","","","Order Status Agent",
    "Deflect simple order tracking inquiries.",
    "Check order stage, shipment status, activation readiness, appointment date if relevant.",
    "\"Where is my phone?\", \"When will internet be installed?\"",
    "OMS, shipping, activation, CRM.",
    "Order ID, shipping status, activation status, exception codes.",
    "Self-service completion, order-status containment, exception reroute rate.",
    "Fully autonomous for standard lookups.",
    "Near-term Service");
  add("AGENT","Agent","","","","Care Triage Agent",
    "Classify inbound issue and route to Care, Advanced Technical Support, or Retention.",
    "Intent detection, authentication assist, priority scoring, channel transfer summary.",
    "New inbound call/chat/social contact.",
    "IVR/chat, CRM, identity, case routing.",
    "Customer identity, account status, prior contacts, sentiment, issue classification.",
    "Routing accuracy, transfer rate, average speed to right queue, authentication success.",
    "Assistive.","");

  // CC Supervisor, Care
  add("L4","Supervisor","Service","","Contact Center Supervisor, Care","","","","","","","","","");
  add("AGENT","Agent","","","","Supervisor Insights Agent",
    "Give supervisors real-time queue and quality visibility.",
    "Flag spike drivers, identify high-escalation reps, summarize top intents, recommend staffing actions.",
    "Queue threshold breach, AHT spike, abandonment spike.",
    "Workforce management, telephony, QA analytics, CRM.",
    "Queue stats, transcript summaries, agent performance, sentiment, escalation reasons.",
    "Service level, occupancy, queue health, coaching-trigger rate.",
    "Assistive.","");
  add("AGENT","Agent","","","","Interaction QA Agent",
    "Auto-score care interactions for compliance and quality.",
    "Summarize calls/chats, identify policy violations, score empathy and resolution quality, recommend coaching.",
    "Post-interaction.",
    "Transcript store, QA platform, CRM.",
    "Transcripts, policy library, QA rubric, case outcomes.",
    "QA score, policy violation rate, coaching opportunities, false-positive rate.",
    "Approval-based for formal QA actions.","");

  // Frontline Care Rep
  add("L5","Frontline","Service","","Frontline Care Rep","","","","","","","","","");
  add("AGENT","Agent","","","","Care Copilot",
    "Accelerate assisted-service handling.",
    "Retrieve account context, suggest next best action, generate response draft, summarize after-call work.",
    "Authenticated live interaction.",
    "CRM, billing, knowledge, case notes.",
    "Account profile, billing, product holdings, interaction history, policy/knowledge.",
    "AHT reduction, after-call work reduction, first-contact resolution, rep adoption.",
    "Assistive.",
    "Near-term Service");

  // Chat / Messaging / Social
  add("L5","Frontline","Service","","Chat / Messaging / Social Support Rep","","","","","","","","","");
  add("AGENT","Agent","","","","Channel Response Agent",
    "Draft fast, channel-appropriate responses.",
    "Compose replies, adapt tone, insert account-specific status, recommend escalation.",
    "Inbound chat/social case.",
    "Digital service platform, CRM, knowledge, moderation tools.",
    "Channel history, account status, issue type, approved response patterns.",
    "Response time, containment, channel CSAT, escalation rate, compliance rate.",
    "Assistive for public social responses, more autonomous in chat.","");

  // Director, Advanced Technical Support
  add("L3","Director","Service","","Director, Advanced Technical Support","","","","","","","","","");
  add("AGENT","Agent","","","","Outage & Service Health Agent",
    "Resolve or explain network/service-impact events.",
    "Identify known outage, correlate service location/device data, provide ETA, suppress unnecessary truck-roll expectations.",
    "Service down inquiry, outage complaint, mass incident spike.",
    "Outage management, network/service assurance, CRM, incident feed.",
    "Outage map, service address, network alarms, maintenance windows, customer product inventory.",
    "Outage-contact containment, false outage classification, ETA accuracy, repeat-contact rate.",
    "Fully autonomous for known events, assistive for ambiguous events.",
    "Near-term Service");
  add("AGENT","Agent","","","","Device Troubleshooting Agent",
    "Guide customers through common device or connectivity issues.",
    "Run troubleshooting tree, identify modem/router/device issue, suggest reset/reprovision path, create escalation summary.",
    "Device issue, Wi-Fi complaint, activation failure.",
    "Device management, network diagnostics, CRM, knowledge.",
    "Device model, firmware, recent diagnostics, signal quality, prior tickets.",
    "Resolution rate, escalation to human tech support, truck-roll avoidance, time to resolve.",
    "Hybrid.","");

  // CC Supervisor, Advanced Technical Support
  add("L4","Supervisor","Service","","Contact Center Supervisor, Adv. Technical Support","","","","","","","","","");
  add("AGENT","Agent","","","","Tech Escalation Summary Agent",
    "Reduce handoff loss when cases move to advanced support.",
    "Summarize diagnostics performed, capture unresolved symptoms, tag likely root cause.",
    "Transfer from care to advanced tech support.",
    "CRM, diagnostics, case system.",
    "Prior troubleshooting steps, device/network telemetry, transcript summary.",
    "Repeat-step rate, escalation quality, handle-time on transferred cases.",
    "Assistive.","");
  add("AGENT","Agent","","","","Tech Queue Prioritization Agent",
    "Prioritize complex tech contacts by impact and recoverability.",
    "Rank cases by outage severity, VIP status, churn risk, repeat-failure risk.",
    "Queue backlog, event surge.",
    "Case platform, network events, customer-value model.",
    "Severity, number of failed contacts, customer value, SLA/promise status.",
    "Backlog aging, high-risk case response time, churn-at-risk recovery.",
    "Assistive.","");

  // Advanced Technical Support Rep
  add("L5","Frontline","Service","","Advanced Technical Support Rep","","","","","","","","","");
  add("AGENT","Agent","","","","Advanced Tech Copilot",
    "Support the rep on multistep troubleshooting.",
    "Suggest root-cause hypotheses, next diagnostic, customer-safe explanation, case-note summary.",
    "Live ATS interaction.",
    "Diagnostics, CRM, knowledge, incident platform.",
    "Diagnostics, known incidents, device history, network performance.",
    "Resolution quality, AHT, transfer-back rate, rep adoption.",
    "Assistive.","");

  // Director, Retention
  add("L3","Director","Service","","Director, Retention","","","","","","","","","");
  add("AGENT","Agent","","","","Save Offer Recommendation Agent",
    "Recommend the best retention action to reduce churn.",
    "Score churn risk, identify root cause, rank save offers, predict acceptance probability.",
    "Cancellation inquiry, port-out indicator, repeated complaint, competitor mention.",
    "CRM, retention offer engine, pricing/promotions, usage analytics.",
    "Churn propensity, tenure, product mix, complaint history, payment history, prior offers, usage patterns.",
    "Save rate, offer acceptance, margin impact, post-save churn, override rate.",
    "Approval-based.",
    "Near-term Service");
  add("AGENT","Agent","","","","Sentiment & Defection Risk Agent",
    "Surface customers likely to defect before they explicitly ask to cancel.",
    "Monitor negative interaction patterns, repeat failures, billing frustration, unresolved tech issues.",
    "Repeated contacts, low CSAT, social complaints.",
    "CRM, survey/NPS, transcript analytics, social listening.",
    "Sentiment, complaint tags, repeat-contact count, NPS, unresolved case flags.",
    "Early-risk identification rate, proactive outreach conversion, retained revenue.",
    "Assistive.","");

  // CC Supervisor, Retention
  add("L4","Supervisor","Service","","Contact Center Supervisor, Retention","","","","","","","","","");
  add("AGENT","Agent","","","","Retention Performance Agent",
    "Help supervisors manage save quality, not just save volume.",
    "Compare agents on save rate, discount leakage, post-save churn, complaint rebound.",
    "Daily or intraday performance review.",
    "Workforce analytics, CRM, offer engine, finance/margin dashboards.",
    "Save outcomes, discounts granted, downstream churn, QA scores.",
    "Save rate, leakage, 30/60/90-day churn after save, compliance adherence.",
    "Assistive.","");

  // Retention / Loyalty Rep
  add("L5","Frontline","Service","","Retention / Loyalty Rep","","","","","","","","","");
  add("AGENT","Agent","","","","Retention Copilot",
    "Help reps make the right save move quickly.",
    "Provide churn reason summary, recommend save script, show eligible offers, summarize objection handling.",
    "Cancel/save interaction.",
    "CRM, offer engine, knowledge, policy.",
    "Churn score, prior interactions, offers, product economics.",
    "Save conversion, time-to-offer, discount discipline.",
    "Assistive.","");

  // ═══════════════════════════════════════
  // SALES
  // ═══════════════════════════════════════
  add("SECTION","","SALES","","","","","","","","","","","");
  add("L1","Executive","Sales","","Chief Revenue Officer / EVP Consumer Sales","","","","","","","","","");

  // ── RETAIL ──
  add("L2","VP","Sales","Retail","VP Retail Sales","","","","","","","","","");
  add("L3","Director","Sales","Retail","Regional Retail Director","","","","","","","","","");
  add("L4","Manager","Sales","Retail","Retail Store Manager","","","","","","","","","");
  add("AGENT","Agent","","","","Store Traffic & Conversion Agent",
    "Help managers improve in-store conversion and staffing.",
    "Correlate footfall, appointments, conversion, and offer mix; flag underperforming windows.",
    "Intraday conversion drop, staffing mismatch, campaign launch.",
    "POS, appointment system, workforce, CRM.",
    "Store traffic, transactions, device inventory, staffing roster, conversion data.",
    "Conversion, attach rate, wait time, inventory-driven lost sales.",
    "Assistive.","");
  add("L4","Supervisor","Sales","Retail","Retail Sales Supervisor / ASM","","","","","","","","","");
  add("L5","Frontline","Sales","Retail","Retail Sales Associate","","","","","","","","","");
  add("AGENT","Agent","","","","Retail Associate Copilot",
    "Guide the associate during device and plan sale.",
    "Check upgrade eligibility, recommend plans/bundles, explain trade-in, prepare quote/order, summarize disclosures.",
    "In-store sales interaction.",
    "CRM, product catalog, pricing/promotions, eligibility, OMS, POS.",
    "Account profile, line eligibility, device inventory, promo rules, financing rules.",
    "Conversion, upsell rate, order accuracy, basket value, disclosure compliance.",
    "Assistive.",
    "Near-term Sales");
  add("AGENT","Agent","","","","Accessory & Bundle Recommendation Agent",
    "Increase attach rate and ARPU with relevant recommendations.",
    "Suggest add-ons, accessories, protection, multi-line or home-internet bundles.",
    "Quote creation, device selection.",
    "Catalog, promotions, POS.",
    "Chosen device, household products, current plan, promo eligibility.",
    "Attach rate, bundle penetration, revenue per sale.",
    "Assistive.","");

  // ── DIGITAL ──
  add("L2","VP","Sales","Digital","VP Digital Sales","","","","","","","","","");
  add("L3","Director","Sales","Digital","Director of Digital Sales / Digital Commerce","","","","","","","","","");
  add("AGENT","Agent","","","","Digital Conversion Optimization Agent",
    "Improve online funnel conversion.",
    "Identify drop-off patterns, recommend next-best content/offer, trigger nudges or chat interventions.",
    "Cart abandonment, checkout hesitation, repeated page visits.",
    "Web analytics, CDP/CRM, commerce platform, chat.",
    "Clickstream, cart contents, campaign source, device/browser, eligibility, inventory.",
    "Cart recovery, checkout conversion, assisted conversion, bounce by step.",
    "Assistive.","");
  add("L4","Manager","Sales","Digital","Digital Merchandising / Conversion Manager","","","","","","","","","");
  add("AGENT","Agent","","","","Plan Recommendation Agent",
    "Match users to the right plan or bundle online.",
    "Infer needs, compare plans, explain price/value, surface personalized bundles.",
    "Plan browse, comparison page activity, intent quiz/chat.",
    "Catalog, pricing, recommendation engine, commerce.",
    "Plan catalog, promotions, eligibility, usage profile, household products.",
    "Recommendation acceptance, conversion uplift, downgrade/return rate.",
    "Hybrid, more autonomous on simple self-service flows.",
    "Near-term Sales");
  add("AGENT","Agent","","","","Promo Eligibility Agent",
    "Reduce confusion and fallout around offers.",
    "Validate promo rules, explain trade-in or switcher requirements, identify missing documents.",
    "Promo selection, checkout validation failure.",
    "Pricing, promo engine, identity, order validation.",
    "Promo terms, line status, port-in details, trade-in rules, credit requirements.",
    "Promo fallout rate, order completion, complaint rate on offer mismatch.",
    "Fully autonomous for explanation, approval-based for exceptions.",
    "Near-term Sales");
  add("L4","Manager","Sales","Digital","Ecommerce Product Manager","","","","","","","","","");
  add("AGENT","Agent","","","","Checkout Support Agent",
    "Reduce digital order abandonment.",
    "Answer checkout questions, recover failed steps, clarify financing, explain shipping/activation.",
    "Stalled checkout, payment decline, repeated error states.",
    "Commerce, payments, shipping, OMS, identity.",
    "Cart, financing status, shipping options, error codes.",
    "Checkout completion, payment recovery, abandonment rate.",
    "Hybrid.","");
  add("L4","Manager","Sales","Digital","Digital Sales Operations Manager","","","","","","","","","");
  add("AGENT","Agent","","","","Digital Order Fallout Agent",
    "Catch and remediate failed orders.",
    "Diagnose fallout reason, request missing info, resubmit corrected order path.",
    "Order fallout, validation failure, activation mismatch.",
    "OMS, fraud/ID, activation, CRM.",
    "Order exception codes, KYC status, device eligibility, activation dependencies.",
    "Fallout rate, recovery rate, time to recover, manual-touch rate.",
    "Approval-based for high-risk/fraud-sensitive cases.",
    "Near-term Sales");

  // ── TELESALES ──
  add("L2","VP","Sales","Telesales","VP Telesales / Inside Sales","","","","","","","","","");
  add("L3","Director","Sales","Telesales","Telesales Director","","","","","","","","","");
  add("L4","Supervisor","Sales","Telesales","Telesales Supervisor","","","","","","","","","");
  add("AGENT","Agent","","","","Call Coaching & Objection Agent",
    "Improve telesales rep effectiveness.",
    "Provide live prompts, product comparison support, objection handling suggestions, post-call coaching summary.",
    "Live telesales call.",
    "Telephony, transcript engine, CRM, catalog, offers.",
    "Live transcript, customer profile, product/offer rules, prior objections.",
    "Conversion lift, handle time, compliance adherence, rep adoption.",
    "Assistive.","");
  add("AGENT","Agent","","","","Telesales Performance Agent",
    "Help supervisors manage conversion and quality.",
    "Rank reps by conversion, offer acceptance, discount leakage, disclosure misses.",
    "Daily and intraday review.",
    "QA analytics, telephony, CRM, sales dashboards.",
    "Call outcomes, quotes, conversions, QA scores.",
    "Conversion, revenue per call, save rate, compliance rate.",
    "Assistive.","");
  add("L5","Frontline","Sales","Telesales","Inbound Sales Rep","","","","","","","","","");
  add("AGENT","Agent","","","","Telesales Copilot",
    "Speed up assisted acquisition and upgrade sales.",
    "Recommend plans/devices, quote monthly price, handle disclosures, create order.",
    "Inbound acquisition or upgrade call.",
    "CRM, catalog, CPQ/pricing, OMS, payments.",
    "Customer/account profile, eligibility, promos, device stock, financing status.",
    "Quote-to-order conversion, upsell rate, order accuracy, AHT.",
    "Assistive.",
    "Near-term Sales");
  add("L5","Frontline","Sales","Telesales","Upgrade / Retention Sales Specialist","","","","","","","","","");
  add("AGENT","Agent","","","","Upgrade Eligibility Agent",
    "Identify the best upgrade path quickly.",
    "Check contract/device eligibility, trade-in value, financing, recommended device and accessories.",
    "Upgrade inquiry, nearing eligibility window.",
    "Eligibility, device lifecycle, inventory, pricing.",
    "Tenure, installment status, trade-in value, inventory, plan compatibility.",
    "Upgrade conversion, attach rate, cycle time to close.",
    "Assistive.","");
  add("AGENT","Agent","","","","Cross-sell / Upsell Agent",
    "Monetize service interactions and telesales contacts.",
    "Recommend add-a-line, home internet, streaming bundle, device protection.",
    "Eligible account detected, quote flow, service interaction with white-space opportunity.",
    "CRM, recommendation engine, catalog, promotions.",
    "Household profile, current products, eligibility, propensity model, campaign rules.",
    "Attach rate, incremental ARPU, offer acceptance, churn-reduction impact.",
    "Assistive.","");

  // ── CROSS-CHANNEL ──
  add("SECTION","","CROSS-CHANNEL SALES","","","","","","","","","","","");
  add("L4","Manager","Sales","Cross-channel","Sales Ops / Commercial Ops Manager","","","","","","","","","");
  add("AGENT","Agent","","","","Quote & Order Governance Agent",
    "Reduce sales friction and order errors across channels.",
    "Validate order completeness, check promo compliance, highlight fallout risks, generate exception summary.",
    "Pre-submit quote/order.",
    "Catalog, pricing, OMS, compliance.",
    "Product rules, pricing, promo terms, order dependencies.",
    "Order accuracy, fallout rate, exception rate, speed to submit.",
    "Approval-based.","");
  add("L4","Manager","Sales","Cross-channel","Promotions / Offer Strategy Manager","","","","","","","","","");
  add("AGENT","Agent","","","","Offer Performance Agent",
    "Evaluate offer effectiveness by channel.",
    "Compare promo uptake, margin impact, churn/save effect, abuse patterns.",
    "Campaign launch, weekly review.",
    "Pricing, sales analytics, finance, retention dashboards.",
    "Promo usage, conversion, discount depth, channel mix, churn outcomes.",
    "Offer ROI, abuse/fraud rate, incremental revenue, margin.",
    "Assistive.","");
  add("L4","Manager","Sales","Cross-channel","Channel Performance Manager","","","","","","","","","");
  add("AGENT","Agent","","","","Channel Optimization Agent",
    "Compare Retail, Digital, and Telesales performance and reallocate focus.",
    "Identify channel underperformance, diagnose funnel breaks, recommend staffing/campaign changes.",
    "Weekly business review, major campaign variance.",
    "Enterprise analytics, commerce, POS, telephony, CRM.",
    "Conversion by channel, CAC, ARPU, attach rate, fallout, CSAT.",
    "Channel conversion, CAC efficiency, assisted vs self-service mix, revenue by channel.",
    "Assistive.","");

  // ═══════════════════════════════════════
  // WRITE DATA
  // ═══════════════════════════════════════
  sheet.getRange(1, 1, 1, headers.length).setValues([headers]);
  var rawData = rows.map(function(r) { return r.data; });
  if (rawData.length > 0) {
    sheet.getRange(2, 1, rawData.length, headers.length).setValues(rawData);
  }
  var totalRows = rawData.length + 1;

  // ═══════════════════════════════════════
  // FORMATTING
  // ═══════════════════════════════════════
  var headerRange = sheet.getRange(1, 1, 1, headers.length);
  headerRange.setFontWeight("bold").setBackground("#0d47a1").setFontColor("#ffffff").setFontSize(11);
  headerRange.setHorizontalAlignment("center").setVerticalAlignment("middle").setWrap(true);
  sheet.setRowHeight(1, 45);
  sheet.setFrozenRows(1);
  sheet.setFrozenColumns(5);

  var widths = [100,130,120,310,270,300,350,280,280,320,320,260,140];
  for (var w = 0; w < widths.length; w++) sheet.setColumnWidth(w + 1, widths[w]);

  sheet.getRange(2, 1, rawData.length, headers.length).setWrap(true).setVerticalAlignment("top").setFontSize(10);

  // Row-level formatting
  for (var i = 0; i < rows.length; i++) {
    var sheetRow = i + 2;
    var rng = sheet.getRange(sheetRow, 1, 1, headers.length);
    switch (rows[i].type) {
      case "SECTION":
        rng.setBackground("#0d47a1").setFontColor("#ffffff").setFontWeight("bold").setFontSize(13);
        sheet.setRowHeight(sheetRow, 38); break;
      case "L1":
        rng.setBackground("#1565c0").setFontColor("#ffffff").setFontWeight("bold").setFontSize(11);
        sheet.setRowHeight(sheetRow, 32); break;
      case "L2":
        rng.setBackground("#1e88e5").setFontColor("#ffffff").setFontWeight("bold").setFontSize(11);
        sheet.setRowHeight(sheetRow, 30); break;
      case "L3":
        rng.setBackground("#64b5f6").setFontColor("#000000").setFontWeight("bold").setFontSize(10);
        sheet.setRowHeight(sheetRow, 28); break;
      case "L4":
        rng.setBackground("#bbdefb").setFontWeight("bold").setFontSize(10);
        sheet.setRowHeight(sheetRow, 26); break;
      case "L5":
        rng.setBackground("#e3f2fd").setFontWeight("bold").setFontSize(10);
        sheet.setRowHeight(sheetRow, 26); break;
      case "AGENT":
        sheet.getRange(sheetRow, 5).setFontWeight("bold");
        var pri = rows[i].data[12];
        if (pri === "Near-term Service") sheet.getRange(sheetRow, 13).setBackground("#c8e6c9").setFontWeight("bold").setFontColor("#1b5e20");
        if (pri === "Near-term Sales") sheet.getRange(sheetRow, 13).setBackground("#fff9c4").setFontWeight("bold").setFontColor("#f57f17");
        break;
    }
  }

  // ═══════════════════════════════════════
  // ROW GROUPING
  // ═══════════════════════════════════════

  // Group agents under their parent roles
  var agentStart = null;
  for (var i = 0; i < rows.length; i++) {
    var sheetRow = i + 2;
    if (rows[i].type === "AGENT") {
      if (agentStart === null) agentStart = sheetRow;
    } else {
      if (agentStart !== null) {
        try { sheet.getRange(agentStart, 1, sheetRow - agentStart, 1).shiftRowGroupDepth(1); } catch(e) {}
        agentStart = null;
      }
    }
  }
  if (agentStart !== null) {
    try { sheet.getRange(agentStart, 1, rows.length + 1 - agentStart + 1, 1).shiftRowGroupDepth(1); } catch(e) {}
  }

  // Group sections
  var sectionRows = [];
  for (var i = 0; i < rows.length; i++) {
    if (rows[i].type === "SECTION") sectionRows.push(i + 2);
  }
  for (var s = 0; s < sectionRows.length; s++) {
    var gStart = sectionRows[s] + 1;
    var gEnd = (s + 1 < sectionRows.length) ? sectionRows[s + 1] - 1 : rows.length + 1;
    if (gEnd >= gStart) {
      try { sheet.getRange(gStart, 1, gEnd - gStart + 1, 1).shiftRowGroupDepth(1); } catch(e) {}
    }
  }

  // ═══════════════════════════════════════
  // COLUMN GROUPING
  // ═══════════════════════════════════════
  // Group detail columns G-L (Tasks through HITL) so user can collapse
  try { sheet.getRange(1, 7, 1, 6).shiftColumnGroupDepth(1); } catch(e) {}

  // ═══════════════════════════════════════
  // CONDITIONAL FORMATTING — HITL
  // ═══════════════════════════════════════
  var hitlRange = sheet.getRange(2, 12, rawData.length, 1);
  var rules = sheet.getConditionalFormatRules();
  rules.push(
    SpreadsheetApp.newConditionalFormatRule().whenTextContains("Fully autonomous").setBackground("#c8e6c9").setRanges([hitlRange]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenTextContains("Approval-based").setBackground("#fff3e0").setRanges([hitlRange]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenTextContains("Assistive").setBackground("#e8eaf6").setRanges([hitlRange]).build(),
    SpreadsheetApp.newConditionalFormatRule().whenTextContains("Hybrid").setBackground("#fce4ec").setRanges([hitlRange]).build()
  );
  sheet.setConditionalFormatRules(rules);

  // Borders & filter
  sheet.getRange(1, 1, totalRows, headers.length).setBorder(true, true, true, true, true, true, "#bdbdbd", SpreadsheetApp.BorderStyle.SOLID);
  sheet.getRange(1, 1, 1, headers.length).createFilter();

  // ═══════════════════════════════════════
  // TAB 2: KEY DATA DOMAINS
  // ═══════════════════════════════════════
  var s2 = ss.insertSheet("Key Data Domains");
  var dH = ["Data Domain", "Core Elements"];
  var dD = [
    ["Customer / Account", "Profile, line hierarchy, tenure, authentication, contact preferences"],
    ["Product / Offer", "Catalog, plans, bundles, pricing rules, promos, upgrade eligibility"],
    ["Billing / Payment", "Invoices, charges, credits, adjustments, delinquency, autopay"],
    ["Order / Activation", "Quote, order status, shipping, activation, fallout codes"],
    ["Device / Service", "IMEI, inventory, device model, diagnostics, firmware, service quality"],
    ["Support History", "Case notes, transcript history, interaction history, sentiment"],
    ["Knowledge / Policy", "KB articles, scripts, disclosures, policy thresholds"],
    ["Retention / Value", "Churn propensity, NPS/CSAT, prior save offers, product profitability"],
    ["Manager Telemetry", "Containment, conversion, AHT, FCR, order accuracy, override rate, digital labor hours"]
  ];
  s2.getRange(1, 1, 1, 2).setValues([dH]).setFontWeight("bold").setBackground("#0d47a1").setFontColor("#ffffff").setFontSize(11);
  s2.getRange(2, 1, dD.length, 2).setValues(dD);
  s2.setColumnWidth(1, 200); s2.setColumnWidth(2, 600);
  s2.getRange(2, 1, dD.length, 1).setFontWeight("bold").setBackground("#e3f2fd");
  s2.getRange(1, 1, dD.length + 1, 2).setBorder(true, true, true, true, true, true, "#bdbdbd", SpreadsheetApp.BorderStyle.SOLID);
  s2.getRange(2, 1, dD.length, 2).setWrap(true).setVerticalAlignment("top");

  // ═══════════════════════════════════════
  // TAB 3: PRIORITY SUMMARY
  // ═══════════════════════════════════════
  var s3 = ss.insertSheet("Priority Summary");
  var pH = ["Priority Group", "Agent", "Rationale"];
  var pD = [
    ["Near-term Service", "Billing Resolution Agent", "Salesforce prebuilt communications use case; highest-volume billing inquiries"],
    ["Near-term Service", "Order Status Agent", "Simple lookup; high containment potential"],
    ["Near-term Service", "Care Copilot", "Broad rep-assist value; reduces AHT and after-call work"],
    ["Near-term Service", "Outage & Service Health Agent", "High-volume deflection during incidents"],
    ["Near-term Service", "Save Offer Recommendation Agent", "Direct revenue retention impact"],
    ["Near-term Sales", "Retail Associate Copilot", "Salesforce quoting & ordering use case; speeds in-store sales"],
    ["Near-term Sales", "Telesales Copilot", "Assisted acquisition; quote-to-order acceleration"],
    ["Near-term Sales", "Plan Recommendation Agent", "Online self-service conversion lift"],
    ["Near-term Sales", "Promo Eligibility Agent", "Reduces offer confusion and order fallout"],
    ["Near-term Sales", "Digital Order Fallout Agent", "Recovers failed digital orders; reduces manual rework"]
  ];
  s3.getRange(1, 1, 1, 3).setValues([pH]).setFontWeight("bold").setBackground("#0d47a1").setFontColor("#ffffff").setFontSize(11);
  s3.getRange(2, 1, pD.length, 3).setValues(pD);
  s3.setColumnWidth(1, 180); s3.setColumnWidth(2, 300); s3.setColumnWidth(3, 500);
  for (var p = 0; p < pD.length; p++) {
    s3.getRange(p + 2, 1).setBackground(pD[p][0] === "Near-term Service" ? "#c8e6c9" : "#fff9c4");
  }
  s3.getRange(1, 1, pD.length + 1, 3).setBorder(true, true, true, true, true, true, "#bdbdbd", SpreadsheetApp.BorderStyle.SOLID);
  s3.getRange(2, 1, pD.length, 3).setWrap(true).setVerticalAlignment("top");

  // ═══════════════════════════════════════
  // TAB 4: DESIGN NOTES
  // ═══════════════════════════════════════
  var s4 = ss.insertSheet("Design Notes");
  var nH = ["Topic", "Detail"];
  var nD = [
    ["Example Purpose", "This chart shows how AI agents can operate across a B2C telco, mapped to each org role from executive to frontline."],
    ["Design Philosophy", "Task automation and human-agent collaboration, not blanket role replacement. The right metric is hours displaced / capacity created, not roles eliminated."],
    ["Counterpoint 1", "Assumes a modern telco stack. If billing, OMS, identity, and knowledge are fragmented, start with copilots first, not autonomous agents."],
    ["Counterpoint 2", "Public social support should stay more human-governed than chat — brand and compliance risk are higher."],
    ["Counterpoint 3", "Retention agents can lift save rates but can create margin leakage if discount governance is weak."],
    ["Research: McKinsey", "Most companies are still early in scaled AI-agent deployment despite large productivity potential."],
    ["Research: Stanford", "46.1% of tasks drew positive worker attitudes toward automation; 45.2% of occupations had equal-partnership as the dominant desired autonomy level."],
    ["Research: Deloitte", "Enterprise AI-agent adoption is rising, but organizations still face readiness and complexity challenges."],
    ["Salesforce Alignment", "Communications Cloud centers Agentforce on billing resolution and quoting & ordering, with industry data, prebuilt actions, and multichannel support."]
  ];
  s4.getRange(1, 1, 1, 2).setValues([nH]).setFontWeight("bold").setBackground("#0d47a1").setFontColor("#ffffff").setFontSize(11);
  s4.getRange(2, 1, nD.length, 2).setValues(nD);
  s4.setColumnWidth(1, 200); s4.setColumnWidth(2, 700);
  s4.getRange(2, 1, nD.length, 1).setFontWeight("bold").setBackground("#e3f2fd");
  s4.getRange(1, 1, nD.length + 1, 2).setBorder(true, true, true, true, true, true, "#bdbdbd", SpreadsheetApp.BorderStyle.SOLID);
  s4.getRange(2, 1, nD.length, 2).setWrap(true).setVerticalAlignment("top");

  // Return to main sheet
  ss.setActiveSheet(ss.getSheets()[0]);

  SpreadsheetApp.getUi().alert(
    "B2C Telco Agentified Org Chart — Example Built!\n\n" +
    "This shows how AI agents can operate across a consumer telco:\n\n" +
    "- Full org hierarchy: Executive > VP > Director > Supervisor > Frontline\n" +
    "- 30 agents mapped to the roles they support\n" +
    "- Row grouping (+/-): expand/collapse agents under each role\n" +
    "- Column grouping (+/-): show/hide detail columns\n" +
    "- Color-coded org levels, HITL types, and priority tiers\n" +
    "- Filters on every column\n\n" +
    "Tabs: Agentified Org Chart | Key Data Domains | Priority Summary | Design Notes"
  );
}
