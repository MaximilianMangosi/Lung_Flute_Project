export interface Milestone {
  id: string;
  year: string;
  title: string;
  description: string;
}

export const milestones: Milestone[] = [
  {
    id: "1",
    year: "1997",
    title: "Invention of the Lung Flute",
    description:
      "The Lung Flute was invented by Sanford Hawkins in 1997, an acoustic engineer looking for ways to treat people with chronic obstructive pulmonary disease (COPD), a condition that leads to mucus buildup in the lungs. He wanted to use his experience as an acoustic engineer to develop a device that could play sounds at a low enough frequency to vibrate and loosen the mucus in the lungs making it easier to expel. During development he blew into a mouthpiece filter and discovered that this created a vibration in his chest, an insight that led to the creation of the Lung Flute.",
  },
  {
    id: "2",
    year: "2003",
    title: "Patent granted and marketing begins",
    description:
      "Hawkins obtained a patent for this invention in 2003 and began marketing it soon after.",
  },
  {
    id: "3",
    year: "2003 onwards",
    title: "Clinical studies on sputum induction",
    description:
      "Following its introduction, studies were conducted to evaluate whether the Lung Flute could stimulate the production of sputum. Sputum is a mucus from deep within the lungs that is crucial for diagnosing respiratory diseases. As not all people can form sputum easily, having a way to induce its formation is important for testing and treatment. Studies that have been performed show that the Lung Flute can induce sputum in patients that could not previously produce it and allows larger and higher quality samples to be taken from patients that can form sputum. Additionally the Lung Flute comes with fewer and less severe side effects than hypertonic saline, the standard sputum induction method.",
  },
  {
    id: "4",
    year: "Ongoing",
    title: "Expanding access with the Lung Flute ECO",
    description:
      "Because of these advantages the Lung Flute is in circulation in many countries, however its adoption remains limited in lower-income regions where tuberculosis (TB) is more common. This is largely due to the cost and resources required for production. Work is in progress to design and test more easily produceable versions of the flute that use a base of cardboard.",
  },
];
