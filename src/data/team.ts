// TODO: replace placeholder photos with real images
import ippei from "../../images_people/images.jpeg";
import sandy from "../../images_people/sandy.png";

export interface TeamMember {
  id: string;
  name: string;
  department: string;
  title: string;
  bio: string;
  photo: string;
}

export const teamMembers: TeamMember[] = [
  {
    id: "1",
    name: "Ippei Soma",
    department: "Leadership",
    title: "President and CEO, Acoustic Innovations, Co., Ltd.",
    bio: "Ippei Soma holds a Bachelor of Aerospace Engineering from Nihon University (1995) and built deep expertise in acoustic and vibration measurement through a decade running a professional studio audio equipment business. In July 2006 he co-founded Acoustic Innovations, Co., Ltd. with Sanford Hawkins to develop and commercialise acoustical medical innovations. In 2007 he organised the Japanese Sputum Induction Research Group alongside Dr. Akira Fujita, Dr. Satoshi Mitarai, and Dr. Takeshi Higuchi, coordinating the clinical studies that established the Lung Flute's evidence base. A key milestone in his leadership came in April 2016, when the sputum induction method using the Lung Flute was approved for coverage under Japan's National Healthcare Insurance.",
    photo: ippei.src,
  },
  {
    id: "2",
    name: "Sanford Elliot Hawkins",
    department: "Founding Team",
    title: "Technical Advisor and Co-founder, Acoustic Innovations, Co., Ltd.",
    bio: "Sanford Hawkins is the inventor of the Lung Flute and a pioneering independent acoustic engineer based in New York City and Portland. He studied film, broadcast engineering, and philosophy at San Francisco State University (1966-1968) and computer science and pre-medicine at the University of Oregon (1974). He designed acoustic systems for Walt Disney Studios, Goldwyn Studios, and Capitol Studios, and served as lead technical expert for audio/video evidence in the landmark Food Lion vs ABC case (1992-1998). In 1997 he invented the Lung Flute, and in 2002 founded Medical Acoustics, LLC in New York to market the device globally. He holds patents 6,702,769 (clinically effective lung cleaning device) and 6,984,214 (medical sampling device), and is a member of the Audio Engineering Society and the Acoustics Society of America.",
    photo: sandy.src,
  },
];
