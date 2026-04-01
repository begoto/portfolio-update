const navLinks = [
  { label: "Home", href: "#home" },
  { label: "Compétences", href: "#competences" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
];

const socials = [
  { icon: "ri-github-fill", href: "https://github.com/begoto24", label: "GitHub" },
  { icon: "ri-linkedin-box-fill", href: "https://linkedin.com/feed/", label: "LinkedIn" },
  { icon: "ri-gitlab-fill", href: "https://gitlab.com/begoto24", label: "GitLab" },
];

export default function Footer() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="bg-[#111111] border-t border-[#E85D04]/20">
      <div className="max-w-7xl mx-auto px-6 lg:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-12">
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <img
              
              />
              <span className="text-white font-bold text-lg">Royal_Tech</span>
            </div>
            <p className="text-gray-500 text-sm leading-relaxed max-w-xs">
              Développeur Frontend passionné, je crée des interfaces web modernes et performantes. Chaque projet est une nouvelle aventure créative.
            </p>
            <div className="flex gap-3 mt-5">
              {socials.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={s.label}
                  className="w-9 h-9 flex items-center justify-center rounded-full bg-[#1e1e1e] text-gray-400 hover:bg-[#E85D04] hover:text-white transition-all duration-200 cursor-pointer"
                >
                  <i className={`${s.icon} text-base`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">
              <a id="footer-navigation">Navigation</a>
            </h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollTo(link.href)}
                    className="text-gray-500 text-sm hover:text-[#E85D04] hover:translate-x-1 transition-all duration-200 cursor-pointer whitespace-nowrap flex items-center gap-1"
                  >
                    <i className="ri-arrow-right-s-line text-xs"></i>
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Stack */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-5">
              <a id="footer-stack">Mon Stack</a>
            </h4>
            <div className="flex flex-wrap gap-2">
              {[
                "React", "Next.js", "TypeScript",
                "TailwindCSS", "Shadcn/UI", "Figma",
                "Git", "Clerk", "Ant Design",
              ].map((tech) => (
                <span
                  key={tech}
                  className="bg-[#1e1e1e] text-gray-400 text-xs px-3 py-1 rounded-full whitespace-nowrap hover:text-[#E85D04] transition-colors duration-150 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="mt-6 p-4 bg-[#0a0a0a] border border-[#2a2a2a] rounded-xl">
              <p className="text-gray-400 text-xs mb-1">Statut actuel</p>
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse inline-block"></span>
                <span className="text-white text-sm font-medium">Disponible pour des projets</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-[#1e1e1e] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-gray-600 text-sm text-center sm:text-left">
            © {new Date().getFullYear()} <strong className="text-gray-500">Royal_Tech</strong>. Tous droits réservés.
          </p>
          <p className="text-gray-700 text-xs text-center">
            Conçu &amp; développé avec <span className="text-[#E85D04]">♥</span> par Royal_Tech
          </p>
        </div>
      </div>
    </footer>
  );
}
