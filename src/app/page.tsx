import type { Metadata } from "next";
import Link from "next/link";
import { FadeIn } from "@/components/FadeIn";

// TODO: replace with real metadata
export const metadata: Metadata = {
  title: "Lung Flute ECO: Breathing New Life into Tuberculosis Treatment",
};

// TODO: replace with real statistics
const stats = [
  {
    value: "10M+",
    label: "New Tuberculosis infections per year globally",
  },
  {
    value: "#2",
    label: "Leading infectious disease killer worldwide",
  },
  {
    value: "1.23M",
    label: "Tuberculosis-related deaths in 2024",
  },
  {
    value: "2.7M+",
    label: "Of patients go undiagnosed",
  },
];

// TODO: replace with real benefits
const benefits = [
  {
    title: "Drug-free and non-invasive",
    description:
      "Uses calibrated low-frequency sound waves. No medication, no electricity, no consumables.",
  },
  {
    title: "Improves sputum yield",
    description:
      "Enhances sputum mobilisation to boost diagnostic sample quality for faster, more accurate Tuberculosis detection.",
  },
  {
    title: "Easy for any patient",
    description:
      "Designed for use in low-resource settings. Patients of all ages can learn to use it in minutes.",
  },
  {
    title: "Durable and portable",
    description:
      "Compact, rugged design withstands tropical climates and remote field conditions without power.",
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative bg-[#0A1628] text-white overflow-hidden">
        <div className="absolute inset-0 opacity-10 pointer-events-none">
          <div className="absolute -top-32 -right-32 w-[600px] h-[600px] rounded-full bg-[#0D9488] blur-3xl" />
          <div className="absolute -bottom-32 -left-32 w-[400px] h-[400px] rounded-full bg-[#0D9488] blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-24">
          <FadeIn>
            {/* TODO: replace with real tagline */}
            <p className="text-[#0D9488] font-semibold text-sm uppercase tracking-widest mb-4">
              Medical Device Innovation · Tokyo, Japan
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            {/* TODO: replace with real headline */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight mb-6 max-w-3xl">
              A breath of hope in the fight against{" "}
              <span className="text-[#0D9488]">Tuberculosis</span>
            </h1>
          </FadeIn>
          <FadeIn delay={0.2}>
            {/* TODO: replace with real subtitle */}
            <p className="text-white/70 text-lg sm:text-xl max-w-2xl mb-10 leading-relaxed">
              The Lung Flute ECO is a compact, drug-free acoustic airway
              clearance device designed to improve Tuberculosis diagnosis and
              treatment adherence, especially in the communities that need it
              most.
            </p>
          </FadeIn>
          <FadeIn delay={0.3}>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="bg-[#0D9488] hover:bg-[#14B8A8] text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-sm"
              >
                Get in touch
              </Link>
              <Link
                href="/history"
                className="border border-white/30 hover:border-white/60 text-white font-semibold px-7 py-3.5 rounded-lg transition-colors duration-200 text-sm"
              >
                Our story
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Statistics */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-[#0D9488] font-semibold text-sm uppercase tracking-widest mb-2">
                The Scale of the Crisis
              </p>
              {/* TODO: replace with real section heading */}
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628]">
                Tuberculosis remains a global emergency
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-stretch">
            {stats.map((stat, i) => (
              <FadeIn key={stat.label} delay={i * 0.08} className="h-full">
                <div className="border border-gray-100 rounded-2xl p-6 text-center shadow-sm hover:shadow-md transition-shadow duration-200 h-full flex flex-col justify-center">
                  <div className="text-4xl font-extrabold text-[#0D9488] mb-2">
                    {stat.value}
                  </div>
                  <p className="text-sm text-gray-500 leading-snug">
                    {stat.label}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Product */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right" className="lg:order-1 order-2">
              <div>
                <p className="text-[#0D9488] font-semibold text-sm uppercase tracking-widest mb-3">
                  The Device
                </p>
                {/* TODO: replace with real product description */}
                <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628] mb-5">
                  What is the Lung Flute ECO?
                </h2>
                <p className="text-gray-600 text-base leading-relaxed mb-4">
                  The Lung Flute ECO is a small, handheld medical device that
                  uses acoustic energy, specifically low-frequency sound waves
                  between 16 and 22 Hz, to reach the deepest regions of the
                  lungs. When a patient exhales through the device, a calibrated
                  internal reed vibrates, generating these waves to loosen and
                  thin sputum in the airways.
                </p>
                <p className="text-gray-600 text-base leading-relaxed mb-8">
                  Unlike conventional airway clearance techniques, the Lung
                  Flute ECO requires no electricity, no disposables, and minimal
                  training, making it ideally suited for resource-limited
                  clinical environments across Asia, Africa, and beyond.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 text-[#0D9488] font-semibold hover:gap-3 transition-all duration-200"
                >
                  Request product information
                  <svg
                    className="w-4 h-4"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </Link>
              </div>
            </FadeIn>
            {/* Image column - appears first on mobile */}
            <FadeIn direction="left" delay={0.1} className="lg:order-2 order-1">
              <div className="flex justify-center items-center">
                <div className="relative bg-transparent flex items-center justify-center lg:mx-0 mx-auto">
                  {/* Soft gray oval behind image */}
                  <div
                    className="absolute inset-0 flex items-center justify-center pointer-events-none"
                    aria-hidden="true"
                  >
                    <div className="w-[90%] h-[76%] bg-gray-100 rounded-full shadow-lg scale-105" />
                  </div>
                  <div className="relative w-full h-full rounded-2xl overflow-hidden shadow-xl group">
                    <img
                      src="http://lf-eco.acoustic-innov.com/wp/wp-content/uploads/2024/07/LFECO_main-1.jpg"
                      alt="Lung Flute ECO product"
                      className="object-cover w-full h-full transition-transform duration-300 group-hover:scale-110"
                    />
                  </div>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-14">
              <p className="text-[#0D9488] font-semibold text-sm uppercase tracking-widest mb-2">
                Key Benefits
              </p>
              {/* TODO: replace with real section heading */}
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628]">
                Designed for real-world conditions
              </h2>
            </div>
          </FadeIn>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((b, i) => (
              <FadeIn key={b.title} delay={i * 0.08}>
                <div className="border border-gray-300 rounded-2xl p-6 hover:shadow-md transition-shadow duration-200 h-full">
                  <h3 className="font-bold text-[#0A1628] mb-2">{b.title}</h3>
                  <p className="text-sm text-gray-500 leading-relaxed">
                    {b.description}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Impact */}
      <section className="bg-[#0A1628] py-24 text-white text-center">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            {/* TODO: replace with real impact statement */}
            <p className="text-[#0D9488] font-semibold text-sm uppercase tracking-widest mb-4">
              Our Mission
            </p>
            <h2 className="text-3xl sm:text-4xl font-bold mb-6 leading-snug">
              Every improved sputum sample could mean a faster diagnosis and a
              life saved.
            </h2>
            <p className="text-white/65 text-lg leading-relaxed">
              Tuberculosis is curable. Yet millions go undiagnosed every year
              because current sputum collection methods fail patients who cannot
              produce adequate samples. The Lung Flute ECO addresses this gap
              directly, giving clinicians the evidence they need to act, and
              patients the treatment they deserve.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Video */}
      <section className="bg-[#F8FAFC] py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="text-center mb-10">
              <p className="text-[#0D9488] font-semibold text-sm uppercase tracking-widest mb-2">
                See It In Action
              </p>
              {/* TODO: replace with real section heading */}
              <h2 className="text-3xl sm:text-4xl font-bold text-[#0A1628]">
                Video Demonstration
              </h2>
            </div>
            {/* TODO: replace src with real YouTube embed URL */}
            <div
              className="relative w-full rounded-2xl overflow-hidden shadow-xl"
              style={{ paddingBottom: "56.25%" }}
            >
              <iframe
                className="absolute inset-0 w-full h-full"
                src="https://www.youtube.com/embed/5FfCpCaITmo"
                title="Lung Flute ECO product video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </FadeIn>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="bg-[#0D9488] py-16 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl sm:text-3xl font-bold mb-4">
              Interested in learning more? Explore our latest research.
            </h2>
            <p className="text-white/80 mb-8 text-base">
              Discover how the Lung Flute is being used in research and clinical
              settings worldwide.
            </p>
            <Link
              href="/studies"
              className="bg-white text-[#0D9488] font-bold px-8 py-3.5 rounded-lg hover:bg-gray-50 transition-colors duration-200 text-sm inline-block"
            >
              Studies &amp; Applications
            </Link>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
