export interface FluteStudy {
  id: string;
  name: string;
  fullName: string;
  focus: "children" | "adults" | "both";
  location: string;
  description: string;
  pis: string[];
}

export interface Investigator {
  id: string;
  name: string;
  role: string;
  institution: string;
  country: string;
  photo: string;
  quote: string;
}

export const flutteStudies: FluteStudy[] = [
  {
    id: "1",
    name: "CAFETEL",
    fullName: "Children's Acceptance, Fidelity, Efficacy & Tolerability of Lung Flute ECO",
    focus: "children",
    location: "Mozambique & Uganda",
    description:
      "A proof-of-concept study assessing how well children accept and tolerate the Lung Flute ECO, and whether it effectively induces sputum in paediatric patients who cannot expectorate spontaneously. The study addresses a critical gap: children under 15 are among the most underdiagnosed for Tuberculosis globally.",
    pis: ["Denise Banze", "Celso Khosa", "Eric Wobudeya", "Heather Zar"],
  },
  {
    id: "2",
    name: "FLUTTE Trial",
    fullName: "Comparators, Tolerability & Cost-Effectiveness",
    focus: "adults",
    location: "Multiple sites",
    description:
      "This arm of the FLUTTE programme directly compares the Lung Flute ECO against existing sputum induction methods — saline induction (SI), spontaneous expectoration (SE), and tongue swab — assessing tolerability, patient preference, laboratory workload, and full cost-effectiveness from a health system perspective.",
    pis: ["Rian Snijders"],
  },
  {
    id: "3",
    name: "Community ACF",
    fullName: "Community Active Case Finding with Digital Chest X-Ray",
    focus: "adults",
    location: "South Africa",
    description:
      "A study integrating the Lung Flute ECO into community-based Tuberculosis active case finding campaigns using AI-assisted digital chest X-ray screening. Among those flagged as eligible for molecular testing, participants are randomised to spontaneous expectoration or Lung Flute ECO to compare diagnostic yield.",
    pis: ["Priashni Subrayen"],
  },
  {
    id: "4",
    name: "TUTT",
    fullName: "Targeted Universal Tuberculosis Testing in South Africa",
    focus: "adults",
    location: "South Africa",
    description:
      "Targeting people living with HIV (PLHIV) — a group at high risk of pre-symptomatic Tuberculosis who frequently cannot produce sputum unaided. The study evaluates whether the Lung Flute ECO can close the diagnostic gap in this vulnerable population at large ART initiation and treatment sites.",
    pis: ["Grant Theron"],
  },
  {
    id: "5",
    name: "HCW Study",
    fullName: "Lung Flute ECO for Active Case Finding in Sputum-Scarce High-Risk Groups",
    focus: "adults",
    location: "Mozambique",
    description:
      "Focusing on healthcare workers — a group with elevated Tuberculosis exposure risk but often reluctant to seek testing. This study uses a peer-driven strategy to promote screening and evaluates the Lung Flute ECO as a sputum collection tool in this sputum-scarce, high-priority group in Gaza province, Mozambique.",
    pis: ["Elzier Mangunyane", "Sheila Mafalda Cassamo Issufo"],
  },
];

export const investigators: Investigator[] = [
  {
    id: "1",
    name: "Satoshi Mitarai",
    role: "Principal Investigator, FLUTTE Programme",
    institution: "Research Institute of Tuberculosis (RIT/PDP)",
    country: "Japan",
    photo: "/investigators/satoshi-mitarai.jpeg",
    quote:
      "\"Tuberculosis remains the world's deadliest infectious disease, yet millions go undiagnosed because they simply cannot produce a sputum sample. The Lung Flute ECO is a simple, elegant solution to a problem that has frustrated clinicians for decades.\"",
  },
  {
    id: "2",
    name: "Ellen M.H. Mitchell",
    role: "Co-Investigator",
    institution: "Institute of Tropical Medicine (ITM)",
    country: "Belgium",
    photo: "/investigators/ellen-mitchell.jpg",
    quote:
      "\"[Placeholder quote — to be added]\"",
  },
  {
    id: "3",
    name: "Grant Theron",
    role: "TUTT Study Lead",
    institution: "Stellenbosch University",
    country: "South Africa",
    photo: "/investigators/grant-theron.png",
    quote:
      "\"[Placeholder quote — to be added]\"",
  },
  {
    id: "4",
    name: "Rian Snijders",
    role: "Comparators & Cost-Effectiveness Lead",
    institution: "Institute of Tropical Medicine (ITM)",
    country: "Belgium",
    photo: "/investigators/rian-snijders.jpg",
    quote:
      "\"[Placeholder quote — to be added]\"",
  },
  {
    id: "5",
    name: "Eric Wobudeya",
    role: "CAFETEL Study Lead",
    institution: "WALIMU",
    country: "Uganda",
    photo: "/investigators/eric-wobudeya.jpeg",
    quote:
      "\"[Placeholder quote — to be added]\"",
  },
  {
    id: "6",
    name: "Priashni Subrayen",
    role: "Community ACF Study Lead",
    institution: "Aurum Institute",
    country: "South Africa",
    photo: "/investigators/priashni-subrayen.jpeg",
    quote:
      "\"[Placeholder quote — to be added]\"",
  },
  {
    id: "7",
    name: "Sheila Mafalda Cassamo Issufo",
    role: "HCW Study Lead",
    institution: "Fundação Aurum",
    country: "Mozambique",
    photo: "/investigators/sheila-cassamo.jpg",
    quote:
      "\"[Placeholder quote — to be added]\"",
  },
  {
    id: "8",
    name: "Salome Charalambous",
    role: "Co-Investigator",
    institution: "Aurum Institute",
    country: "South Africa",
    photo: "/investigators/salome-charalambous.jpg",
    quote:
      "\"[Placeholder quote — to be added]\"",
  },
  {
    id: "9",
    name: "Makaita Gombe",
    role: "Technology Transfer Lead",
    institution: "Aurum Institute",
    country: "South Africa",
    photo: "/investigators/makaita-gombe.jpg",
    quote:
      "\"[Placeholder quote — to be added]\"",
  },
];
