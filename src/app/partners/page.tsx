import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { partners } from "@/data/partners";

export const metadata: Metadata = {
  title: "Partners",
  description:
    "Our global network of research, clinical, and advocacy partners committed to ending Tuberculosis.",
};

export default function PartnersPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#0A1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-[#0D9488] font-semibold text-sm uppercase tracking-widest mb-3">
              Collaborating for Impact
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Partners
            </h1>
            <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
              Ending Tuberculosis requires global collaboration. We are proud to
              work alongside world-leading health organisations, research
              institutions, and development agencies committed to the same
              mission.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Partner details */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-[#0D9488] font-semibold text-sm uppercase tracking-widest mb-2">
              Our network
            </p>
            <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1628] mb-10">
              About our partners
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, i) => (
              <FadeIn key={`detail-${partner.id}`} delay={i * 0.07}>
                <div className="border border-gray-300 rounded-2xl p-6 hover:shadow-md transition-shadow duration-200 h-full">
                  <div className="mb-4 h-12 flex items-center">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={54}
                      className="object-contain h-10 w-auto"
                    />
                  </div>
                  <h3 className="font-bold text-[#0A1628] mb-2">
                    {partner.name}
                  </h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {partner.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
