export interface Partner {
  id: string;
  name: string;
  description: string;
  logo: string;
}

export const partners: Partner[] = [
  {
    id: "1",
    name: "World Health Organization (WHO)",
    description:
      "Global health leadership and access to the WHO Global Tuberculosis Programme's clinical network and epidemiological resources.",
    logo: "/logos/who.png",
  },
  {
    id: "2",
    name: "Institute of Tropical Medicine (ITM) Antwerp",
    description:
      "Research partner for clinical trial design, data analysis, and expertise in Tuberculosis diagnostics in low-resource settings.",
    logo: "/logos/itm.jpg",
  },
  {
    id: "3",
    name: "Japan International Cooperation Agency (JICA)",
    description:
      "Supporting distribution and capacity-building programmes across Southeast Asian and African high-burden Tuberculosis countries.",
    logo: "/logos/jica.png",
  },
  {
    id: "4",
    name: "Stop TB Partnership",
    description:
      "Global advocacy network facilitating introductions to national Tuberculosis programmes and procurement pipelines in 100+ countries.",
    logo: "/logos/stop-tb.png",
  },
  {
    id: "5",
    name: "Osaka University, Graduate School of Medicine",
    description:
      "Academic research partner providing biomedical engineering support, prototype testing facilities, and clinical advisors.",
    logo: "/logos/osaka-univ.png",
  },
];
