import type { Metadata } from "next";
import { FadeIn } from "@/components/FadeIn";
import { TeamCard } from "@/components/TeamCard";
import { teamMembers } from "@/data/team";

export const metadata: Metadata = {
  title: "Team",
  description:
    "Meet the scientists, engineers, and advocates behind Lung Flute ECO.",
};

export default function TeamPage() {
  return (
    <>
      {/* Page header */}
      <section className="bg-[#0A1628] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <p className="text-[#0D9488] font-semibold text-sm uppercase tracking-widest mb-3">
              The People
            </p>
            <h1 className="text-4xl sm:text-5xl font-extrabold mb-4">
              Our Team
            </h1>
            <p className="text-white/65 text-lg max-w-2xl leading-relaxed">
              Behind every breakthrough is a dedicated team. Meet the
              scientists, engineers, clinicians, and strategists driving Lung
              Flute ECO forward.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Team grid */}
      <section className="bg-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <FadeIn>
            <div className="mb-10">
              <p className="text-[#0D9488] font-semibold text-sm uppercase tracking-widest mb-2">
                Meet the team
              </p>
              <h2 className="text-2xl sm:text-3xl font-bold text-[#0A1628] mb-2">
                The people behind Lung Flute ECO
              </h2>
              <p className="text-gray-500 text-base max-w-2xl">
                A dedicated group of engineers, clinicians, and researchers
                working together to bring affordable diagnostics to the world.
              </p>
            </div>
          </FadeIn>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
            {teamMembers.map((member, i) => (
              <FadeIn key={member.id} delay={i * 0.1}>
                <TeamCard member={member} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Join banner */}
      <section className="bg-[#F8FAFC] py-16 border-t border-gray-100">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <FadeIn>
            <h2 className="text-2xl font-bold text-[#0A1628] mb-3">
              Join our mission
            </h2>
            <p className="text-gray-500 mb-6 leading-relaxed">
              We&apos;re always looking for passionate people who want to make
              a difference in global health. If that sounds like you, get in
              touch.
            </p>
            <a
              href="/contact"
              className="inline-block bg-[#0D9488] hover:bg-[#14B8A8] text-white font-semibold px-7 py-3 rounded-lg transition-colors duration-200 text-sm"
            >
              Reach out
            </a>
          </FadeIn>
        </div>
      </section>
    </>
  );
}
