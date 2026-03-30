export interface Study {
  id: string;
  title: string;
  date: string;
  authors: string;
  journal: string;
  excerpt: string;
  pdfPath: string;
}

export const studies: Study[] = [
  {
    id: "1",
    title: "Novel method for sputum induction using the Lung Flute in patients with suspected pulmonary tuberculosis",
    date: "2009-08-01",
    authors: "Fujita A, Murata K, Takamori M.",
    journal: "Respirology, 2009",
    excerpt:
      "This preliminary trial enrolled 34 patients unable to expectorate spontaneously. Using the Lung Flute, sputum was collected from 30 of 34 patients (88%) within 10 to 20 minutes. The device enabled rapid TB diagnosis in 7 of 15 confirmed cases, including 4 patients whose smears were negative but PCR was positive, suggesting it may improve diagnostic sensitivity.",
    pdfPath: "/pdfs/Respirology_Fujita_Aug2009.pdf",
  },
  {
    id: "2",
    title: "Adjunct treatment of pneumonia in children aged 6-18 years using a handheld sputum induction device",
    date: "2012-09-01",
    authors: "Uson MA, De Leon A, Balete B, Domagas LM, Punzalan JR.",
    journal: "ERS Congress 2012 Poster. Our Lady of Lourdes Hospital, Manila, Philippines.",
    excerpt:
      "Presented at the European Respiratory Society Annual Congress 2012, this randomised study in paediatric community-acquired pneumonia (PCAP B and C) found that children in the Lung Flute group demonstrated significantly improved cough frequency on Day 2 and improved cough quality on Days 2 and 3. Quality of life improvements were observed on Days 1 and 2, with earlier effective sputum induction versus controls.",
    pdfPath: "/pdfs/ERS2012Poster-LF-Pediatric-Pneumonia.pdf",
  },
  {
    id: "3",
    title: "Lung Flute vs Active Cycle of Breathing Technique (ACBT) in COPD",
    date: "2012-09-01",
    authors: "Medical Acoustics LLC.",
    journal: "ERS Congress 2012 Poster.",
    excerpt:
      "An ERS 2012 conference poster comparing the Lung Flute with the Active Cycle of Breathing Technique (ACBT) in patients with Chronic Obstructive Pulmonary Disease. The poster presents comparative data on mucus clearance and patient usability outcomes between the two airway clearance modalities.",
    pdfPath: "/pdfs/ERS2012Poster_LFvsACBT_COPD-sm.pdf",
  },
  {
    id: "4",
    title: "Evaluation of Lung Flute in sputum samples for molecular analysis of lung cancer",
    date: "2013-01-01",
    authors: "Anjuman N, Li N, Guarnera M, Stass SA, Jiang F.",
    journal: "Clinical and Translational Medicine, 2013; 2:15",
    excerpt:
      "43 stage I lung cancer patients and 47 cancer-free individuals unable to spontaneously expectorate were enrolled. The Lung Flute enabled sputum collection from 90.7% of cancer patients and 89.4% of controls. MicroRNA analysis of the collected specimens (miRs-31 and 210) showed significantly higher expression in cancer patients, with combined miRNA analysis outperforming cytology in sensitivity for lung cancer diagnosis.",
    pdfPath: "/pdfs/Lung-Cancer-sputum-qPCR_UnivMaryland_2013.pdf",
  },
  {
    id: "5",
    title: "Use of the Lung Flute for sputum induction in children with cystic fibrosis: a pilot study",
    date: "2013-01-01",
    authors: "Doumit M.",
    journal: "Sydney Children's Hospital, University of New South Wales, 2013.",
    excerpt:
      "This pilot study at Sydney Children's Hospital assessed the Lung Flute in children with cystic fibrosis (CF) attending an outpatient clinic who were unable to produce sputum by coughing alone. A sputum sample was obtained on 26 of 50 occasions (52%). The device transmits acoustic waves of 16-22 Hz and positive expiratory pressure, and was found to be practical for use by children in an outpatient setting.",
    pdfPath: "/pdfs/SydneyChildrens-Lung-Flute-Poster_2013.pdf",
  },
  {
    id: "6",
    title: "Lung flute improves symptoms and health status in COPD with chronic bronchitis: a 26-week randomised controlled trial",
    date: "2014-09-01",
    authors: "Sethi S, Yin J, Anderson PK.",
    journal: "Clinical and Translational Medicine, 2014; 3:29",
    excerpt:
      "A 26-week randomised controlled trial in 69 COPD patients with chronic bronchitis found that twice-daily Lung Flute use produced significant improvement in the symptom domain of the Chronic COPD Questionnaire and in health status as measured by the St. George Respiratory Questionnaire. The BODE score remained stable in the Lung Flute arm versus deterioration in controls.",
    pdfPath: "/pdfs/CTM_LungFlute_COPD26week_Sept2014-1.pdf",
  },
  {
    id: "7",
    title: "Analysis of Lung Flute-collected sputum for lung cancer diagnosis",
    date: "2015-10-01",
    authors: "Su J, Anjuman N, Guarnera MA, Zhang H, Stass SA, Jiang F.",
    journal: "Biomarker Insights, 2015; 10: 55-61. DOI: 10.4137/BMI.S26883",
    excerpt:
      "This University of Maryland study compared parallel sputum samples collected with and without the Lung Flute from 56 early-stage lung cancer patients and 73 controls. Former smokers who could not spontaneously expectorate were able to produce sputum using the device. Analysis of three miRNAs (miRs-21, 31, 210) yielded 83.93% sensitivity and 87.67% specificity for lung cancer identification.",
    pdfPath: "/pdfs/BiomakerInsights_LFcollected-Sputum-for-Lung-Cancer-Diagnosis_Oct2015.pdf",
  },
  {
    id: "8",
    title: "Efficiency of the Lung Flute for sputum induction in patients with presumed pulmonary tuberculosis",
    date: "2017-08-14",
    authors: "Sakashita K, Fujita A, Takamori M, Nagai T, Matsumoto T, Saito T, et al.",
    journal: "Clinical Respiratory Journal, 2017. DOI: 10.1111/crj.12697",
    excerpt:
      "A multi-centre study across seven Japanese hospitals evaluated the Lung Flute as a sputum induction tool in patients with presumed pulmonary tuberculosis. The device enabled sputum collection in patients who could not spontaneously expectorate, demonstrating its clinical utility for improving the sensitivity of TB microbiological diagnosis.",
    pdfPath: "/pdfs/Sakashita_CRJ_20170814.pdf",
  },
  {
    id: "9",
    title: "Use of the Lung Flute ECO to assist in sputum collection for tuberculosis testing: a randomised crossover trial",
    date: "2024-01-01",
    authors: "Mbuli C, Vuchas C, Konso J, et al.",
    journal: "ERJ Open Research, 2024; 10: 00902-2023",
    excerpt:
      "A randomised crossover trial conducted across eight health facilities in Cameroon assessed whether the Lung Flute ECO assists sputum collection in people evaluated for TB. The device significantly improved adequacy of sputum volume for diagnostic testing and was well tolerated among participants aged 15 years and over, supporting its potential value at point-of-need in resource-limited settings.",
    pdfPath: "/pdfs/LFECO_Phase1_Mbuli_2024-1.pdf",
  },
];
