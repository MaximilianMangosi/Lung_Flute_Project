import Link from "next/link";

const footerLinks = [
  { href: "/", label: "Home" },
  { href: "/team", label: "Team" },
  { href: "/studies", label: "Studies & Applications" },
  { href: "/history", label: "History" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#0A1628] text-white/60 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-3">
              <div className="w-8 h-8 rounded-full bg-[#0D9488] flex items-center justify-center">
                <span className="text-white text-xs font-bold">LF</span>
              </div>
              <span className="text-white font-semibold text-lg">
                Lung Flute <span className="text-[#0D9488]">ECO</span>
              </span>
            </div>
            {/* TODO: replace with real tagline */}
            <p className="text-sm leading-relaxed">
              Innovating respiratory care to end Tuberculosis, one breath at a
              time.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Navigation
            </h3>
            <ul className="space-y-2">
              {footerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-[#0D9488] transition-colors duration-150"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="text-white font-semibold text-sm uppercase tracking-wider mb-3">
              Contact
            </h3>
            {/* TODO: replace with real contact info */}
            <ul className="space-y-2 text-sm">
              <li>
                <a
                  href="mailto:info@lungfluteeco.com"
                  className="hover:text-[#0D9488] transition-colors duration-150"
                >
                  info@lungfluteeco.com
                </a>
              </li>
              <li>
                <a
                  href="tel:+81312345678"
                  className="hover:text-[#0D9488] transition-colors duration-150"
                >
                  +81 3-1234-5678
                </a>
              </li>
              <li>Tokyo, Japan 〒160-0022</li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-2 text-sm">
          {/* TODO: replace year dynamically if needed */}
          <p>© 2026 Lung Flute ECO K.K. All rights reserved.</p>
          <p>Shinjuku, Tokyo, Japan</p>
        </div>
      </div>
    </footer>
  );
}
