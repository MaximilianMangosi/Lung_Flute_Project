import type { Metadata } from "next";
import Image from "next/image";
import { FadeIn } from "@/components/FadeIn";
import { partners } from "@/data/partners";

// TODO: replace with real metadata
export const metadata: Metadata = {
  title: "Partners",
  description:
    "Our global network of research, clinical, and advocacy partners committed to ending TB.",
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
            {/* TODO: replace with real page title */}
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Partners
            </h1>
            <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
              Ending TB requires global collaboration. We are proud to work
              alongside world-leading health organisations, research
              institutions, and development agencies committed to the same
              mission.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Partner logos grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-center text-gray-400 text-sm uppercase tracking-widest font-semibold mb-12">
              {/* TODO: replace with real partner intro */}
              Our partners
            </p>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6 mb-20">
            {partners.map((partner, i) => (
              <FadeIn key={partner.id} delay={i * 0.06}>
                <div className="flex items-center justify-center border border-gray-100 rounded-xl p-4 h-24 hover:shadow-md transition-shadow duration-200">
                  {/* TODO: replace with real partner logos */}
                  <Image
                    src={partner.logo}
                    alt={`${partner.name} logo`}
                    width={180}
                    height={80}
                    className="object-contain max-h-12"
                  />
                </div>
              </FadeIn>
            ))}
          </div>

          {/* Partner details */}
          <FadeIn>
            <h2 className="text-2xl font-bold text-[#0A1628] mb-8">
              About our partners
            </h2>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {partners.map((partner, i) => (
              <FadeIn key={`detail-${partner.id}`} delay={i * 0.07}>
                <div className="border border-gray-100 rounded-2xl p-6 hover:shadow-md transition-shadow duration-200 h-full">
                  <div className="mb-4">
                    <Image
                      src={partner.logo}
                      alt={`${partner.name} logo`}
                      width={120}
                      height={54}
                      className="object-contain h-10 w-auto"
                    />
                  </div>
                  {/* TODO: replace with real partner descriptions */}
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

      {/* CTA */}
      <section className="bg-[#F8FAFC] py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            {/* TODO: replace with real partnership CTA */}
            <h2 className="text-2xl font-bold text-[#0A1628] mb-3">
              Interested in partnering with us?
            </h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              We welcome proposals from research institutions, health
              ministries, NGOs, and distributors working in high-TB-burden
              regions.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#0D9488] hover:bg-[#14B8A8] text-white font-semibold px-7 py-3 rounded-lg transition-colors duration-200 text-sm"
            >
              Get in touch
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
