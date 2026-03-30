import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { milestones } from "@/data/history";

// TODO: replace with real metadata
export const metadata: Metadata = {
  title: "History",
  description:
    "The story of the Lung Flute, from its invention in 1997 to the development of the Lung Flute ECO for global TB care.",
};

export default function HistoryPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#0A1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-[#0D9488] font-semibold text-sm uppercase tracking-widest mb-3">
              Our Journey
            </p>
            {/* TODO: replace with real page title */}
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              History
            </h1>
            <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
              From a single observation in a resource-limited TB clinic to a
              from a single acoustic insight in 1997 to a device now in use across the world.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Timeline */}
      <section className="bg-white py-20">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative">
            {/* Vertical line */}
            <div className="absolute left-8 sm:left-1/2 top-0 bottom-0 w-px bg-gray-200 -translate-x-1/2" />

            <div className="flex flex-col gap-12">
              {milestones.map((milestone, i) => {
                const isEven = i % 2 === 0;
                return (
                  <FadeIn key={milestone.id} delay={i * 0.07}>
                    <div className="relative flex items-start gap-6 sm:gap-0">
                      {/* Dot */}
                      <div className="absolute left-8 sm:left-1/2 -translate-x-1/2 w-4 h-4 rounded-full bg-[#0D9488] border-4 border-white shadow-md mt-1.5 z-10" />

                      {/* Content: alternates sides on sm+ */}
                      <div
                        className={`ml-16 sm:ml-0 w-full sm:w-[calc(50%-2rem)] ${
                          isEven
                            ? "sm:mr-auto sm:pr-10 sm:text-right"
                            : "sm:ml-auto sm:pl-10"
                        }`}
                      >
                        {/* TODO: replace with real milestone data */}
                        <span className="inline-block bg-[#0D9488]/10 text-[#0D9488] text-sm font-bold px-3 py-1 rounded-full mb-2">
                          {milestone.year}
                        </span>
                        <h2 className="text-lg font-bold text-[#0A1628] mb-2">
                          {milestone.title}
                        </h2>
                        <p className="text-gray-500 text-sm leading-relaxed">
                          {milestone.description}
                        </p>
                      </div>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
