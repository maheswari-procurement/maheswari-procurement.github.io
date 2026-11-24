// All site content lives here. Edit text without touching components.
// MYR figures converted to USD at ~4.2 MYR per USD.

export type ImpactKind = 'savings' | 'avoidance' | 'service'

export interface ImpactPill {
  label: string
  kind: ImpactKind
}

export interface Metric {
  value: string
  label: string
  detail?: string
}

export interface CaseStudy {
  title: string
  org: string
  challenge: string
  approach: string
  result: string
  pills: ImpactPill[]
}

export interface Highlight {
  text: string
  kind: ImpactKind
}

export interface FlagshipWork {
  title: string
  org: string
  period: string
  tags: string[]
  subtitle: string
  description: string
  outcomes: string[]
  contributions: string[]
}

export interface LeadershipItem {
  value: string
  label: string
  text: string
}

export interface ProcessStep {
  title: string
  text: string
}

export interface Role {
  title: string
  company: string
  location: string
  start: string
  end: string
  summary: string
  bullets: string[]
  leadership?: string[]
}

export interface SkillGroup {
  name: string
  skills: string[]
}

export interface Profile {
  name: string
  headline: string
  location: string
  shortSummary: string
  summary: string
  linkedin: { label: string; url: string }
  // Base64 of the reversed address, decoded only on click
  emailEncoded: string
  // Static PDF in public/, regenerate with npm run resume:pdf
  resumePdf: string
  metrics: Metric[]
  flagshipWorks: FlagshipWork[]
  caseStudies: CaseStudy[]
  highlights: Highlight[]
  leadership: LeadershipItem[]
  process: ProcessStep[]
  experience: Role[]
  skillGroups: SkillGroup[]
  education: { degree: string; school: string; period: string }[]
  development: { title: string; detail: string }[]
  awards: { title: string; detail: string }[]
  languages: { name: string; level: string }[]
  cta: { heading: string; text: string }
}

export const impactLegend: Record<ImpactKind, string> = {
  savings: 'Hard savings',
  avoidance: 'Cost avoidance',
  service: 'Service / risk',
}

export const profile: Profile = {
  name: 'Maheswari Letchumanan',
  headline: 'Strategic Procurement & Category Management',
  location: 'Sepang, Malaysia',
  shortSummary:
    '11+ years leading indirect procurement, high-value CAPEX/OPEX sourcing and cross-regional teams, delivering multi-million USD value through category strategy, TCO analysis, competitive sourcing and performance-based contracts.',
  summary:
    'Strategic Procurement and Category Management professional with 11+ years of experience managing indirect procurement categories, high-value CAPEX/OPEX sourcing, and cross-regional teams. Proven track record of delivering multi-million USD savings through category strategy, Total Cost of Ownership (TCO) analysis, competitive sourcing (RFP/RFQ), cost modelling, and performance-based contracts. Experienced in leading cross-functional teams, strengthening supplier performance governance, mitigating commercial risk, and partnering with senior stakeholders to drive sustainable value creation. Builds AI and digital tools that make the team faster, including an in-house contract review agent now used across the team.',
  linkedin: {
    label: 'linkedin.com/in/maheswari-procurement',
    url: 'https://www.linkedin.com/in/maheswari-procurement',
  },
  emailEncoded: 'bW9jLmxpYW1nQGtyb3cudGEuaXJhd3NlaGFt',
  resumePdf: 'Maheswari_Letchumanan_Resume.pdf',

  metrics: [
    { value: '11+', label: 'Years in procurement', detail: 'Aviation and solar manufacturing' },
    { value: 'USD 8.5M+', label: 'Procurement value delivered', detail: 'Sourcing, negotiation and process improvement' },
    { value: '~USD 400M', label: 'Annual category spend managed', detail: 'USD 150M in contracts owned end to end' },
    { value: '5', label: 'Countries in cross-regional sourcing', detail: 'PH, ID, TH, IN and VN' },
  ],

  flagshipWorks: [
    {
      title: 'Mario AI: contract review agent',
      org: 'AirAsia',
      period: '2025',
      tags: ['AI agent', 'Contract review'],
      subtitle: 'An in-house AI agent that reviews contracts, now used by the whole procurement team.',
      description:
        'Built after a Google workshop on agent creation, then refined over one to two months of proofreading and trial and error before rollout.',
      outcomes: ['Adopted team-wide', 'Built in-house'],
      contributions: [
        'Attended a Google workshop on AI agent creation and applied it to contract review.',
        'Designed, proofread and refined the agent through 1–2 months of testing.',
        'Rolled it out to the procurement team, which now uses it in daily work.',
      ],
    },
    {
      title: 'Procurement Web Center',
      org: 'AirAsia',
      period: '2025',
      tags: ['Web app', 'Workflow'],
      subtitle: 'A procurement web app she built herself, so the team can raise requests, compare bids and track projects in one place.',
      description:
        'Live in a sandbox for team testing, covering the sourcing workflow from request to file management.',
      outcomes: ['Built solo', 'Sandbox live', '5 core workflows'],
      contributions: [
        'Workflows: raise Sourcing Tickets (GST), raise Policy Exceptional Forms (PEF), bid comparisons, project management and updates, file uploads.',
        'Set the rule that sourcing projects need a Sourcing Ticket, while non-sourcing projects can be logged without one.',
      ],
    },
    {
      title: 'Team and stakeholder dashboard',
      org: 'AirAsia',
      period: '2025',
      tags: ['Google Workspace', 'Reporting'],
      subtitle: 'A live view of cross-regional team work and stakeholder requests.',
      description:
        'Built on Google Workspace to monitor updates from the cross-regional team and internal stakeholders, and to summarise work and tasks for the Head of Department.',
      outcomes: ['Cross-regional visibility', 'HOD reporting'],
      contributions: [
        'Tracks cross-regional team updates in one dashboard.',
        'Tracks internal stakeholder updates alongside team work.',
        'Gives a ready summary of work and tasks for the Head of Department.',
      ],
    },
    {
      title: 'Waste management services',
      org: 'AirAsia',
      period: '2025 – 2026',
      tags: ['Facilities', 'Vendor transition'],
      subtitle: '~USD 68K hard savings (25.81%) and a vendor switch with zero service disruption.',
      description:
        'Cut waste management spend 21.6% in 2025 against 2024, then a further 5.38% in 2026. When the incumbent wound down, appointed a replacement vendor on time.',
      outcomes: ['~USD 68K saved', 'Zero disruption', 'Longer payment terms'],
      contributions: [
        'Delivered ~USD 68K hard savings (25.81%) across 2025 and 2026.',
        'Onboarded a replacement solid waste vendor on schedule after the incumbent wound down.',
        'Negotiated extended payment terms to improve working capital.',
      ],
    },
    {
      title: 'HQ on-site catering RFP',
      org: 'AirAsia',
      period: '2026',
      tags: ['Facilities / F&B', 'RFP'],
      subtitle: 'New 24/7 caterer for RedQ and KLIA2 airside, with compliance and sustainability built in.',
      description:
        'Ran the full RFP across 11 market vendors and appointed a new round-the-clock caterer on schedule.',
      outcomes: ['11 vendors evaluated', 'JAKIM Halal', '20% less single-use plastic'],
      contributions: [
        'Evaluated 11 vendors and appointed a new 24/7 caterer on schedule.',
        'Embedded JAKIM Halal compliance and daily food-waste tracking into the agreement.',
        'Set a 20% single-use plastic reduction target.',
      ],
    },
    {
      title: 'KL Sentral sales office tenancy',
      org: 'AirAsia',
      period: '2025',
      tags: ['Real estate', 'Negotiation'],
      subtitle: '~USD 29.5K hard savings (16.6%) on a two-year renewal.',
      description: 'Renegotiated the sales office tenancy at KL Sentral for the next two years.',
      outcomes: ['~USD 29.5K saved', '16.6% reduction'],
      contributions: ['Delivered ~USD 29.5K hard savings (16.6% over 2 years) on the tenancy renewal.'],
    },
    {
      title: 'Cleaning services cost control',
      org: 'AirAsia',
      period: '2025 – 2026',
      tags: ['Facilities', 'Manpower'],
      subtitle: 'Absorbed a minimum-wage increase and cut HQ cleaning cost through manpower optimisation.',
      description:
        'Restructured manpower deployment so a statutory wage increase did not flow through to cost, then optimised HQ cleaning.',
      outcomes: ['~USD 20.9K avoided (37%)', '~USD 22.6K saved a year'],
      contributions: [
        'Avoided ~USD 20.9K (37%) of minimum-wage cost increases on cleaning services.',
        'Saved ~USD 22.6K a year on HQ cleaning by optimising manpower deployment.',
      ],
    },
    {
      title: 'Supplier governance and 3PL KPIs',
      org: 'AirAsia',
      period: '2025 – 2026',
      tags: ['Governance', 'Logistics'],
      subtitle: 'QBRs, supplier reviews and measurable KPIs for the third-party logistics contract.',
      description:
        'Ran facilities management QBRs, completed formal supplier reviews and co-managed the 3PL warehouse renewal.',
      outcomes: ['95% on-time delivery KPI', '99.5% inventory accuracy KPI', '100% POs in 2 days'],
      contributions: [
        'Facilities management QBR: 73% baseline score, 80%+ target, joint ESG roadmap.',
        'Completed 7 formal supplier performance reviews; 100% of POs approved within 2 days.',
        '3PL renewal KPIs: 95% on-time delivery, 100% document accuracy, 99.5% inventory accuracy.',
      ],
    },
  ],

  caseStudies: [
    {
      title: 'Solar conversion of CCTV fleet',
      org: 'AirAsia',
      challenge:
        '48 CCTV surveillance systems on high-lift trucks ran on high-maintenance battery power.',
      approach:
        'Built a full TCO and ROI case and moved the units from battery to solar power.',
      result:
        'Annual maintenance cost fell from USD 78K to USD 40.6K, with better reliability and support for environmental goals.',
      pills: [
        { label: '48% lower maintenance cost', kind: 'savings' },
        { label: '48 units converted', kind: 'service' },
        { label: 'Sustainability', kind: 'service' },
      ],
    },
    {
      title: 'Cleaning services portfolio redesign',
      org: 'AirAsia',
      challenge:
        'A USD 2.5 million cross-regional general cleaning services portfolio needed better value and service.',
      approach:
        'Led the full strategic sourcing and commercial redesign of the portfolio.',
      result:
        'Overall cost down 10 to 12%, manpower cost down a further 20%, with higher service standards.',
      pills: [
        { label: '10–12% overall cost', kind: 'savings' },
        { label: '20% manpower cost', kind: 'savings' },
        { label: 'Higher service standards', kind: 'service' },
      ],
    },
    {
      title: 'Cross-regional aviation security sourcing',
      org: 'AirAsia',
      challenge:
        'A critical aviation security initiative spanning the Philippines, Indonesia, Thailand, India and Vietnam, over USD 300K in value.',
      approach:
        'Data-driven sourcing, workforce optimisation and commercial negotiation, with tighter contract terms.',
      result:
        '18% cost reduction (USD 118,591) and management fees renegotiated from 8% to 5%, with stronger controls and compliance.',
      pills: [
        { label: '18% / USD 118,591', kind: 'savings' },
        { label: 'Fee 8% → 5%', kind: 'savings' },
        { label: 'Stronger compliance', kind: 'service' },
      ],
    },
    {
      title: 'Chemical & gas supplier switch',
      org: 'SunPower',
      challenge:
        'A USD 1M chemical and gas delivery requirement in a regulated, safety-critical category with single-source risk.',
      approach:
        'Ran end-to-end sourcing, evaluating 5 competing suppliers on TCO and risk, then negotiated and onboarded a new qualified vendor.',
      result:
        'USD 360K (36%) saved and a more diversified supplier base.',
      pills: [
        { label: 'USD 360K / 36%', kind: 'savings' },
        { label: '5 suppliers evaluated', kind: 'service' },
        { label: 'Single-source risk reduced', kind: 'service' },
      ],
    },
  ],

  highlights: [
    { text: '12% savings on construction and renovation projects valued at ~USD 9M', kind: 'savings' },
    { text: '30–40% cost avoidance on aviation GSE and specialised fleet through lifecycle TCO', kind: 'avoidance' },
    { text: 'USD 212K (6%) saved on a USD 3.6M MES project via open-book cost review', kind: 'savings' },
    { text: 'On-time delivery lifted from 80% to 100% across 30 suppliers with an SLA scorecard', kind: 'service' },
  ],

  leadership: [
    { value: '5', label: 'Cross-regional team', text: 'Built and led a five-member cross-functional procurement team at AirAsia.' },
    { value: '3', label: 'Specialists managed', text: 'Led indirect services procurement at Maxeon, USD 3.1M a year.' },
    { value: 'Team-wide', label: 'AI adoption', text: 'Built Mario AI, the contract review agent the whole team now uses.' },
    { value: 'HOD', label: 'Reporting dashboard', text: 'Tracks team and stakeholder updates and summarises work for the Head of Department.' },
  ],

  process: [
    { title: 'Spend analysis', text: 'Spend analysis, supplier profiling and opportunity mapping.' },
    { title: 'Sourcing strategy', text: 'TCO, cost models and risk mitigation aligned to business goals.' },
    { title: 'RFP / RFQ', text: 'Competitive tenders with transparent evaluation and quote comparison.' },
    { title: 'Negotiation', text: 'Negotiation positions, trade-offs and clean commercial documentation.' },
    { title: 'SLA governance', text: 'Formal reviews, SLA accountability, continuity plans and backup suppliers.' },
  ],

  experience: [
    {
      title: 'Assistant Manager',
      company: 'AirAsia Berhad',
      location: 'Malaysia',
      start: 'Apr 2025',
      end: 'Present',
      summary:
        'Strategic sourcing and commercial management across indirect categories, with ~USD 400M annual category spend.',
      bullets: [
        'Lead strategic sourcing and commercial management for indirect categories (construction & renovation, facilities, aviation GSE, fleet, OEM maintenance, security, professional services, infrastructure). Manage ~USD 400M annual category spend and own end-to-end procurement for contracts valued at USD 150M.',
        'Manage the Facility Services category: USD 5.09M spend in 2024 and USD 3.98M YTD Nov 2025, 19 active contracts, suppliers consolidated from 75 to 64, and 53% of contracts on Blanket Purchase Agreements.',
        'Delivered ~USD 68K hard savings (25.81%) on waste management services and onboarded a replacement waste vendor with zero service disruption.',
        'Renewed the KL Sentral sales office tenancy with ~USD 29.5K hard savings (16.6% over 2 years).',
        'Avoided ~USD 20.9K (37%) of minimum-wage cost increases on cleaning services and saved ~USD 22.6K a year on HQ cleaning through manpower optimisation.',
        'Led the HQ catering RFP across 11 vendors, appointing a new 24/7 caterer on schedule with JAKIM Halal compliance, daily food-waste tracking and a 20% single-use plastic reduction target.',
        'Design and lead competitive tenders (RFP/RFQ) with transparent evaluation criteria and commercial architecture; delivered 12% cost savings through strategic sourcing and negotiation.',
        'Saved ~USD 23.8K on customer claims baggage sourcing, ~USD 6.4K a year on aircraft air fresheners, ~USD 9.3K (28%) avoided on event management rate cards and ~USD 1.6K avoided on hand paper towels.',
        'Delivered 30–40% cost avoidance on critical aviation ground support equipment and specialised fleet through full lifecycle TCO analysis and maintenance optimisation.',
        'Negotiated a three-year OEM maintenance agreement (USD 123K) securing USD 15K (12%) in savings, with enhanced service levels and priority response times.',
        'Ran facilities management QBRs (73% baseline, 80%+ target, joint ESG roadmap), completed 7 formal supplier reviews and kept 100% of POs approved within 2 days.',
        'Co-managed the 3PL warehouse contract renewal with KPIs of 95% on-time delivery, 100% document accuracy and 99.5% inventory accuracy.',
        'Extended payment terms with facilities, waste and inflight consumables suppliers, secured free delivery to additional Vietnam stations, and completed a trial of an alternative fix for recurring aircraft toilet clogging.',
      ],
      leadership: [
        'Built and led a five-member cross-functional, cross-regional procurement team delivering multi-million USD value.',
        'Built Mario AI, a contract review agent now used by the whole team; the Procurement Web Center app for sourcing tickets, policy exceptions and bid comparisons; and a Google Workspace dashboard for team, stakeholder and HOD reporting.',
        'Led the strategic sourcing and commercial redesign of a USD 2.5M cross-regional cleaning portfolio: 10–12% overall cost and 20% manpower cost reduction.',
        'Led cross-regional sourcing across the Philippines, Indonesia, Thailand, India and Vietnam for projects over USD 300K: 18% savings (USD 118,591) and management fees cut from 8% to 5%.',
      ],
    },
    {
      title: 'Senior Strategic Sourcing Specialist',
      company: 'AirAsia Berhad',
      location: 'Malaysia',
      start: 'Jun 2022',
      end: 'Apr 2025',
      summary:
        'Commercial management of 38 active supplier contracts, balancing cost, risk, speed and long-term value.',
      bullets: [
        'Managed 38 active supplier contracts, using contract terms, scope optimisation, SLAs and pricing models to strengthen supplier performance and reduce risk.',
        'Cut annual maintenance cost by 48% (USD 78K to USD 40.6K) across 48 CCTV systems on high-lift trucks by moving from battery to solar-powered units.',
        'Applied TCO analysis to a USD 180K ground support equipment purchase, choosing a higher upfront bid that lowered lifecycle cost by USD 18K (10%) over 2 years.',
        'Achieved ~USD 174K (30%) cost avoidance on a USD 580K critical items purchase through tiered pricing and rates locked in a long-term contract.',
        'Sourced and renewed contracts across Malaysia and Indonesia, including aviation security outsourcing and statutory wage amendments (USD 670K–843K), manpower supply, inflight laundry, hangar and tool-crib renovations, IT server support, and crisis and disaster recovery services.',
        'Reduced inflight manpower services by 20% (USD 20.5K) through cost breakdown analysis, lowering the annual rate from USD 102.5K to USD 82K.',
        'Renewed an inflight third-party warehouse and logistics contract with USD 3.9K (3%) a year saved.',
        'Standardised sourcing strategy across facility categories, maximising blanket PO use for repeat purchases and cutting transaction costs by 4%.',
      ],
    },
    {
      title: 'Senior Buyer',
      company: 'Maxeon Solar Technologies',
      location: 'Malaysia',
      start: 'Apr 2020',
      end: 'Jul 2022',
      summary:
        'Regional category management for OPEX/CAPEX engineering requirements across APAC (USD 4M annual spend).',
      bullets: [
        'Oversaw OPEX/CAPEX projects across APAC: maintenance and repair, manufacturing equipment, construction and renovation, freight and logistics, ICT, laboratory and manpower services.',
        'Delivered an 8% (~USD 480K) cost reduction on a USD 6M contract portfolio, sustaining 5% average annual savings with key suppliers in later renewals.',
        'Reduced direct-material freight costs by 8% (~USD 50K on USD 600K annual spend) through supplier-led integrated warehousing and shipment consolidation.',
        'Completed 5–6 facility maintenance procurement projects monthly (~USD 800K annual value), contributing 8% (~USD 64K) in savings.',
        'Generated 8% savings (~USD 55K) on solar-making machinery valued at USD 687K through market sourcing, benchmarking and negotiation.',
        'Drove IT commodity procurement for the Philippines and Singapore, delivering on-time licence renewals with no disruption to operations.',
      ],
      leadership: [
        'Managed a team of 3 procurement specialists in indirect services, overseeing USD 3.1M in goods and services a year.',
      ],
    },
    {
      title: 'Buyer',
      company: 'SunPower Malaysia Manufacturing',
      location: 'Melaka, Malaysia',
      start: 'Feb 2017',
      end: 'Apr 2020',
      summary:
        'Strategic sourcing, supplier management and cost management for manufacturing operations.',
      bullets: [
        'Ran end-to-end sourcing for a USD 1M chemical and gas requirement, evaluating 5 suppliers on TCO and risk and onboarding a new vendor: USD 360K (36%) saved.',
        'Designed a supplier scorecard with SLA-linked penalties across 30 suppliers, lifting on-time delivery from 80% to 100% and sustaining it every quarter.',
        'Negotiated variable overheads on a USD 3.6M Manufacturing Execution System project through open-book cost review and benchmarking: USD 212K (6%) saved.',
        'Negotiated pricing, terms and scope across 7 engineering contracts (USD 1.2M total), delivering ~20% annual savings.',
        'Drove ~15% favourable purchase price variance against initial quotes through structured negotiation and volume consolidation.',
        'Delivered USD 30K (9%) in hardware and software savings across the PERC (USD 100K) and MODCO (USD 250K) IT projects through competitive bidding and licence renegotiation.',
      ],
    },
    {
      title: 'Purchasing Executive',
      company: 'AUO SunPower',
      location: 'Melaka, Malaysia',
      start: 'Jun 2015',
      end: 'Jan 2017',
      summary:
        'Sourcing and procure-to-pay across facility categories and direct materials.',
      bullets: [
        'Negotiated pricing, payment and delivery terms with key suppliers, driving ~15% annual procurement cost reduction.',
        'Sourced and onboarded qualified alternative suppliers, reducing single-source dependency and delivering 20–30% savings.',
        'Reached a 95% on-time delivery rate through supplier performance management, minimising production downtime.',
        'Managed end-to-end PO issuance, procure-to-pay and international procurement of direct materials (SAP, Oracle).',
      ],
    },
  ],

  skillGroups: [
    {
      name: 'Sourcing & Commercial',
      skills: [
        'Sourcing Strategy & Execution',
        'Category Strategy & Management',
        'Indirect Procurement',
        'Commercial Architecture (RFQ/RFP)',
        'Commercial Negotiation',
        'Global & Cross-Regional Sourcing',
        'CAPEX/OPEX Management',
      ],
    },
    {
      name: 'Cost & Analytics',
      skills: [
        'TCO & Cost Modelling',
        'Spend Analysis & Opportunity Mapping',
        'ROI Justification',
        'Financial Risk Assessment',
        'Payment Term Negotiation',
        'Cost Reduction Strategies',
      ],
    },
    {
      name: 'Supplier & Contract Governance',
      skills: [
        'Contract Lifecycle (MSA, LOI, BPA, Addenda)',
        'SLA & KPI Management',
        'Quarterly Business Reviews',
        'Supplier Performance Governance',
        'Procurement Risk Management',
        'ESG & Sustainable Procurement',
      ],
    },
    {
      name: 'AI & Digital',
      skills: [
        'AI Agent Building (Contract Review)',
        'Prompt Testing & Refinement',
        'Google Workspace Dashboards',
        'Procurement Workflow Apps',
      ],
    },
    {
      name: 'Stakeholder & Leadership',
      skills: [
        'Team Leadership',
        'Stakeholder & Business Partnership',
        'Negotiation Preparation & Documentation',
        'Process Improvement',
      ],
    },
    {
      name: 'Systems',
      skills: [
        'Oracle Procurement & iSupplier',
        'End-to-end PR/PO Workflows',
        'Contract Management System',
        'Jira Service Desk',
        'SAP',
      ],
    },
  ],

  education: [
    {
      degree: 'Bachelor of Business Administration with Honours (BBA Hons)',
      school: 'Universiti Utara Malaysia (UUM)',
      period: 'Sep 2011 – Oct 2015',
    },
  ],

  development: [
    { title: 'Google AI agent workshop', detail: 'Agent creation, applied to build Mario AI' },
    { title: 'Coursera', detail: '4 courses completed (personal and company-sponsored), 2026' },
    { title: 'Institute for Supply Management', detail: '3 procurement webinars completed, 2026' },
    { title: 'AirAsia Academy', detail: '27 learning goals completed, 2026' },
  ],

  awards: [
    { title: "Dean's List Award", detail: 'Universiti Utara Malaysia, Semesters 4, 5 & 6' },
    { title: 'Regional public speaking', detail: 'Represented the SunPower club at the regional level' },
  ],

  languages: [
    { name: 'English', level: 'Fluent' },
    { name: 'Bahasa Malaysia', level: 'Fluent' },
  ],

  cta: {
    heading: "Let's talk procurement.",
    text: 'Open to Assistant Manager and Manager roles in procurement and commercial management.',
  },
}
