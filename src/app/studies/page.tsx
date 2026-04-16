import type { Metadata } from "next";
import { StudiesClient } from "./StudiesClient";

export const metadata: Metadata = {
  title: "Studies and Applications",
  description:
    "Peer-reviewed research and clinical applications of the Lung Flute and Lung Flute ECO in Tuberculosis diagnosis, COPD, and lung cancer.",
};

export default function StudiesPage() {
  return <StudiesClient />;
}
