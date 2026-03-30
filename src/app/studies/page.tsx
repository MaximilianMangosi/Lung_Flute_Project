import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { studies } from "@/data/studies";

export const metadata: Metadata = {
  title: "Studies and Applications",
  description:
    "Peer-reviewed research and clinical applications of the Lung Flute and Lung Flute ECO in tuberculosis diagnosis, COPD, and lung cancer.",
};

function formatYear(dateStr: string): string {
  return new Date(dateStr).getFullYear().toString();
}

export default function StudiesPage() {
  // Sort studies in descending order by date
  const studiesDesc = [...studies].sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <>
      {/* Page header */}
      <section className="bg-[#0A1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-[#0D9488] font-semibold text-sm uppercase tracking-widest mb-3">
              Evidence Base
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Studies &amp; Applications
            </h1>
            <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
              Peer-reviewed research, clinical trial results, and conference
              presentations on the Lung Flute and Lung Flute ECO across
              tuberculosis, COPD, cystic fibrosis, and lung cancer.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Studies list */}
      <section className="bg-white py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6">
            {studiesDesc.map((study, i) => (
              <FadeIn key={study.id} delay={i * 0.06}>
                <article className="border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md transition-shadow duration-200">
                  <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1 mb-3">
                    <span className="text-[#0D9488] text-sm font-bold">
                      {formatYear(study.date)}
                    </span>
                    <span className="text-gray-300 text-sm">|</span>
                    <span className="text-gray-400 text-sm italic">
                      {study.journal}
                    </span>
                  </div>
                  <h2 className="text-xl font-bold text-[#0A1628] mb-2 leading-snug">
                    {study.title}
                  </h2>
                  <p className="text-sm text-gray-400 mb-4">{study.authors}</p>
                  <p className="text-gray-500 text-base leading-relaxed mb-6">
                    {study.excerpt}
                  </p>
                  <a
                    href={study.pdfPath}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-[#0A1628] hover:bg-[#112240] text-white text-sm font-semibold px-5 py-2.5 rounded-lg transition-colors duration-200"
                  >
                    <svg
                      className="w-4 h-4 shrink-0"
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M12 10v6m0 0l-3-3m3 3l3-3M3 17V7a2 2 0 012-2h6l2 2h6a2 2 0 012 2v8a2 2 0 01-2 2H5a2 2 0 01-2-2z"
                      />
                    </svg>
                    Open PDF
                  </a>
                </article>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
