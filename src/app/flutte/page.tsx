import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { flutteStudies, investigators } from "@/data/flutte";

export const metadata: Metadata = {
  title: "FLUTTE Programme",
  description:
    "Facilitating Local Universal Tuberculosis Testing with the Lung Flute ECO — five ongoing studies led by young researchers across Africa, Asia, and Europe.",
};

const focusLabel: Record<string, string> = {
  children: "Children",
  adults: "Adults",
  both: "Children & Adults",
};

const focusColour: Record<string, string> = {
  children: "bg-teal-50 text-teal-700 border border-teal-200",
  adults: "bg-blue-50 text-blue-700 border border-blue-200",
  both: "bg-purple-50 text-purple-700 border border-purple-200",
};

export default function FluttePage() {
  return (
    <>
      {/* Hero */}
      <section className="bg-[#0A1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="flex flex-wrap items-center gap-4 mb-8">
              <div className="bg-white rounded-xl px-4 py-3 flex items-center justify-center shadow-md">
                <Image
                  src="/logos/flutte.png"
                  alt="FLUTTE logo"
                  width={110}
                  height={110}
                  className="object-contain"
                />
              </div>
              <div className="bg-white rounded-xl px-5 py-3 flex items-center justify-center shadow-md">
                <Image
                  src="/logos/ghit.png"
                  alt="GHIT Fund logo"
                  width={160}
                  height={56}
                  className="object-contain"
                />
              </div>
            </div>
            <p className="text-[#0D9488] font-semibold text-sm uppercase tracking-widest mb-3">
              GHIT Fund · Grant G2024-105R1
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              The FLUTTE Programme
            </h1>
            <p className="text-white/70 text-lg max-w-3xl leading-relaxed mb-4">
              <strong className="text-white">F</strong>acilitating{" "}
              <strong className="text-white">L</strong>ocal{" "}
              <strong className="text-white">U</strong>niversal{" "}
              <strong className="text-white">T</strong>uberculosis{" "}
              <strong className="text-white">T</strong>esting with the Lung Flute{" "}
              <strong className="text-white">E</strong>CO
            </p>
            <p className="text-white/65 text-base max-w-3xl leading-relaxed">
              FLUTTE is a multi-country research programme funded by the GHIT Fund,
              bringing together five cutting-edge studies led by talented early-career
              researchers across Africa, Asia, and Europe. The goal: generate the
              high-grade evidence needed for WHO product review by 2027 and to
              identify manufacturers who can produce the Lung Flute ECO sustainably
              in high-burden regions.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Programme goals */}
      <section className="bg-[#F8FAFC] py-16 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <FadeIn>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0D9488] flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">1</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1628] text-lg mb-1">Generate evidence</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Catalyse the production of high-grade scientific evidence by experienced
                    trialists for key Tuberculosis use-cases to enable WHO product review in 2027.
                  </p>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.1}>
              <div className="flex gap-4">
                <div className="w-10 h-10 rounded-full bg-[#0D9488] flex items-center justify-center shrink-0 mt-1">
                  <span className="text-white font-bold text-sm">2</span>
                </div>
                <div>
                  <h3 className="font-bold text-[#0A1628] text-lg mb-1">Build local capacity</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    Identify, train, and equip candidate African and Asian businesses to
                    sustainably produce the Lung Flute ECO in the regions where Tuberculosis
                    burden is highest.
                  </p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* The 5 studies */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-[#0D9488] font-semibold text-sm uppercase tracking-widest mb-2">
              Ongoing research
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-3">
              Five studies, one mission
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mb-12">
              Each study is led by a young, talented researcher working at the
              frontline of Tuberculosis diagnostics. Together they cover children
              and adults, community and clinical settings, across three continents.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {flutteStudies.map((study, i) => (
              <FadeIn key={study.id} delay={i * 0.08}>
                <div className="border border-gray-300 rounded-2xl p-6 hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
                  <div className="flex items-start justify-between gap-3 mb-4">
                    <span className="inline-block bg-[#0D9488] text-white text-xs font-bold px-3 py-1 rounded-full">
                      {study.name}
                    </span>
                    <span className={`inline-block text-xs font-semibold px-3 py-1 rounded-full shrink-0 ${focusColour[study.focus]}`}>
                      {focusLabel[study.focus]}
                    </span>
                  </div>
                  <h3 className="font-bold text-[#0A1628] text-base mb-1">
                    {study.fullName}
                  </h3>
                  <p className="text-xs text-[#0D9488] font-semibold mb-3">
                    📍 {study.location}
                  </p>
                  <p className="text-gray-500 text-sm leading-relaxed flex-1">
                    {study.description}
                  </p>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <p className="text-xs text-gray-400 font-medium uppercase tracking-wide mb-1">
                      Lead investigator{study.pis.length > 1 ? "s" : ""}
                    </p>
                    <p className="text-sm text-[#0A1628] font-semibold">
                      {study.pis.join(", ")}
                    </p>
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Investigators */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-[#0D9488] font-semibold text-sm uppercase tracking-widest mb-2">
              The researchers
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-3">
              Meet the investigators
            </h2>
            <p className="text-gray-500 text-base max-w-2xl mb-12">
              FLUTTE is powered by a new generation of researchers who combine
              clinical expertise with a passion for health equity. Here is why
              they do this work.
            </p>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {investigators.map((inv, i) => (
              <FadeIn key={inv.id} delay={i * 0.07}>
                <div className="bg-white border border-gray-200 rounded-2xl p-6 hover:shadow-md transition-shadow duration-200 h-full flex flex-col">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden bg-gray-100 shrink-0">
                      <img
                        src={inv.photo}
                        alt={inv.name}
                        className="object-cover w-full h-full"
                      />
                    </div>
                    <div>
                      <h3 className="font-bold text-[#0A1628] text-base leading-tight">
                        {inv.name}
                      </h3>
                      <p className="text-[#0D9488] text-xs font-semibold mt-0.5">
                        {inv.institution}
                      </p>
                      <p className="text-gray-400 text-xs">{inv.country}</p>
                    </div>
                  </div>
                  <p className="text-xs text-gray-400 uppercase tracking-wide font-semibold mb-2">
                    {inv.role}
                  </p>
                  <blockquote className="text-gray-500 text-sm leading-relaxed italic flex-1 border-l-2 border-[#0D9488]/30 pl-3">
                    {inv.quote}
                  </blockquote>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#0A1628] py-16 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Want to build on this work?
            </h2>
            <p className="text-white/70 mb-8 text-base">
              We welcome researchers and institutions interested in replicating or
              expanding FLUTTE studies. Get in touch to learn about protocols,
              data sharing, and collaboration opportunities.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#0D9488] hover:bg-[#14B8A8] text-white font-bold px-8 py-3.5 rounded-lg transition-colors duration-200 text-sm"
            >
              Contact us
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
