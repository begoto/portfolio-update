export default function Hero() {
  const scrollTo = (href: string) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="home"
      className="min-h-screen bg-[#0a0a0a] flex items-center pt-16"
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-10 w-full py-20">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Left Content */}
          <div className="flex-1 max-w-xl">
            <p className="text-[#E85D04] font-semibold text-sm uppercase tracking-widest mb-3 animate-fade-in">
              WHO AM I?
            </p>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-white leading-tight mb-6">
              I&apos;m Developer{" "}
              <span className="text-[#E85D04]">Frontend</span>
            </h1>
            <p className="text-gray-400 text-base leading-relaxed mb-8 max-w-md">
              Passionné de programmation et design, je crée des interfaces intuitives
              et esthétiques. Chaque projet vise une expérience utilisateur fluide et une
              performance optimale, du prototype à la mise en ligne. Bienvenue dans
              mon univers où chaque pixel et chaque ligne de code ont leur importance.
            </p>

            <div className="flex flex-wrap gap-4 mb-10">
              <button
                onClick={() => scrollTo("#contact")}
                className="flex items-center gap-2 bg-[#E85D04] hover:bg-[#c94d03] text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-whatsapp-line text-lg"></i>
                Contactez moi
              </button>
              <button
                onClick={() => scrollTo("#competences")}
                className="flex items-center gap-2 border border-[#E85D04] text-[#E85D04] hover:bg-[#E85D04] hover:text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-arrow-down-line text-lg"></i>
                Voir mes compétences
              </button>
            </div>

            {/* Social Icons */}
            <div className="flex gap-4">
              {[
                { icon:                    "ri-github-fill", href: "https://github.com/begoto24", label: "GitHub" },
                { icon: "ri-linkedin-box-fill", href: "https://linkedin.com/feed/", label: "LinkedIn" },
                { icon: "ri-gitlab-fill", href: "https://gitlab.com/begoto24", label: "GitLab" },
              ].map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="nofollow noopener noreferrer"
                  aria-label={social.label}
                  className="w-10 h-10 flex items-center justify-center rounded-full border border-[#2a2a2a] text-gray-400 hover:border-[#E85D04] hover:text-[#E85D04] transition-all duration-200 cursor-pointer"
                >
                  <i className={`${social.icon} text-xl`}></i>
                </a>
              ))}
            </div>
          </div>

          {/* Right - Profile Image */}
          <div className="flex-shrink-0 flex justify-center lg:justify-end">
            <div className="relative">
              {/* Decorative ring */}
              <div className="absolute inset-0 rounded-full border-4 border-[#E85D04]/30 scale-110 animate-pulse-slow"></div>
              <div className="w-72 h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-[#2a2a2a] relative z-10">
                <img
                  src="/assets/images/profil.jpg"
                  alt="Royal_Tech - Developer Frontend"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Badge */}
              <div className="absolute -bottom-2 -right-2 bg-[#E85D04] text-white text-xs font-bold px-3 py-1.5 rounded-full z-20 whitespace-nowrap">
                &lt;Dev /&gt;
              </div>
            </div>
          </div>
        </div>

        {/* Stats Row */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mt-16 pt-10 border-t border-[#1e1e1e]">
          {[
            { value: "1+", label: "Années d'expérience" },
            { value: "12+", label: "Projets réalisés" },
            { value: "10+", label: "Technologies maîtrisées" },
            { value: "100%", label: "Satisfaction client" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="text-3xl font-extrabold text-[#E85D04]">{stat.value}</p>
              <p className="text-gray-500 text-sm mt-1">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
