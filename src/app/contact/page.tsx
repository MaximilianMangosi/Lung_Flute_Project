import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { ContactForm } from "@/components/ContactForm";

// TODO: replace with real metadata
export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with the Lung Flute ECO team. We welcome enquiries from clinicians, researchers, NGOs, and distributors. ",
};

// TODO: replace with real contact details
const contactInfo = [
  {
    label: "Email",
    value: "info@lungfluteeco.com",
    href: "mailto:info@lungfluteeco.com",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    label: "Phone",
    value: "+81 3-1234-5678",
    href: "tel:+81312345678",
    icon: (
      <svg
        className="w-5 h-5"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
        />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    value: "Lung Flute ECO on LinkedIn",
    href: "https://www.linkedin.com/company/lungfluteeco",
    icon: (
      <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

export default function ContactPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#0A1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-[#0D9488] font-semibold text-sm uppercase tracking-widest mb-3">
              Get in Touch
            </p>
            {/* TODO: replace with real page title */}
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Contact Us
            </h1>
            <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
              Whether you are a clinician, researcher, NGO, global health
              organisation, or distributor, we would love to hear from you.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Content */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Left: info + map */}
            <div>
              <FadeIn direction="right">
                <div>
                  <h2 className="text-2xl font-bold text-[#0A1628] mb-6">
                    Reach us directly
                  </h2>
                  <ul className="space-y-5 mb-10">
                    {contactInfo.map((item) => (
                      <li key={item.label} className="flex items-start gap-4">
                        <div className="shrink-0 w-10 h-10 rounded-xl bg-[#0D9488]/10 text-[#0D9488] flex items-center justify-center mt-0.5">
                          {item.icon}
                        </div>
                        <div>
                          <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-0.5">
                            {item.label}
                          </p>
                          <a
                            href={item.href}
                            target={
                              item.label === "LinkedIn" ? "_blank" : undefined
                            }
                            rel={
                              item.label === "LinkedIn"
                                ? "noopener noreferrer"
                                : undefined
                            }
                            className="text-[#0A1628] hover:text-[#0D9488] transition-colors duration-150 text-sm font-medium"
                          >
                            {item.value}
                          </a>
                        </div>
                      </li>
                    ))}
                  </ul>

                  {/* Address */}
                  <div className="mb-6">
                    <p className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-1">
                      Japan Office
                    </p>
                    {/* TODO: replace with real address */}
                    <p className="text-sm text-[#0A1628] leading-relaxed">
                      Lung Flute ECO K.K.
                      <br />
                      〒160-0022
                      <br />
                      Tokyo, Shinjuku-ku
                      <br />
                      Shinjuku 2-chome, 1-1
                      <br />
                      Japan
                    </p>
                  </div>

                  {/* Google Maps embed */}
                  {/* TODO: replace with real office coordinates / embed URL */}
                  <div className="rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
                    <iframe
                      title="Lung Flute ECO office location, Tokyo, Japan"
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3240.8283835744!2d139.70100797678294!3d35.68949557259255!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60188cd0d6597d8d%3A0xb218a38a3fd8d7d9!2sShinjuku%2C%20Tokyo!5e0!3m2!1sen!2sjp!4v1700000000000"
                      width="100%"
                      height="280"
                      style={{ border: 0 }}
                      allowFullScreen
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                    />
                  </div>
                </div>
              </FadeIn>
            </div>

            {/* Right: contact form */}
            <FadeIn direction="left" delay={0.1}>
              <div className="border border-gray-100 rounded-2xl p-7 shadow-sm">
                <h2 className="text-2xl font-bold text-[#0A1628] mb-6">
                  Send a message
                </h2>
                <ContactForm />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>
    </>
  );
}
