export default function About() {
  return (
    <section id="about" className="bg-[#0a0a0a] py-24">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          {/* Left - Image */}
          <div className="flex-shrink-0 relative">
            <div className="relative w-72 h-80 md:w-80 md:h-96">
              {/* Decorative elements */}
              <div className="absolute -top-4 -left-4 w-full h-full border-2 border-[#E85D04]/30 rounded-xl"></div>
              <div className="absolute -bottom-4 -right-4 w-full h-full border-2 border-[#E85D04]/10 rounded-xl"></div>
              <img
                src="/assets/images/about.jpg"
                alt="À propos de moi - Royal_Tech"
                className="w-full h-full object-cover object-top rounded-xl relative z-10"
              />
              {/* Experience badge */}
              <div className="absolute -bottom-5 -right-5 z-20 bg-[#E85D04] text-white rounded-xl p-4 text-center">
                <p className="text-2xl font-extrabold leading-none">2+</p>
                <p className="text-xs mt-0.5 whitespace-nowrap">Ans d&apos;exp.</p>
              </div>
            </div>
          </div>

          {/* Right - Content */}
          <div className="flex-1">
            <span className="text-[#E85D04] text-sm font-semibold uppercase tracking-widest">
              À Propos de Moi
            </span>
            <h2 className="text-4xl font-extrabold text-white mt-3 mb-5">
              Développeur Frontend{" "}
              <span className="text-[#E85D04]">Passionné</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed mb-4">
              Je suis un développeur frontend passionné, spécialisé dans la création d&apos;interfaces web modernes et performantes. Avec une solide maîtrise de React, Next.js et TypeScript, je transforme des idées en expériences digitales engageantes.
            </p>
            <p className="text-gray-400 text-sm leading-relaxed mb-8">
              Mon approche combine la technique et l&apos;esthétique. Je maîtrise les outils de design comme Figma pour prototyper avant de coder, et j&apos;utilise les librairies modernes (TailwindCSS, Shadcn/UI, Ant Design) pour livrer des interfaces pixel-perfect.
            </p>

            {/* Key Points */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-8">
              {[
                { icon: "ri-map-pin-line", label: "Localisation", value: "Yaoundé" },
                { icon: "ri-mail-line", label: "Email", value: "begotostofil@gmail.com" },
                { icon: "ri-briefcase-line", label: "Statut", value: "Disponible en freelance" },
                { icon: "ri-graduation-cap-line", label: "Niveau", value: "Développeur Junior/Mid" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-3">
                  <div className="w-8 h-8 flex items-center justify-center rounded-lg bg-[#E85D04]/10 text-[#E85D04] flex-shrink-0 mt-0.5">
                    <i className={`${item.icon} text-sm`}></i>
                  </div>
                  <div>
                    <p className="text-gray-500 text-xs">{item.label}</p>
                    <p className="text-white text-sm font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Tech I Love */}
            <div className="mb-8">
              <p className="text-gray-400 text-sm mb-3">Technologies que j&apos;adore :</p>
              <div className="flex flex-wrap gap-2">
                {["React", "Next.js", "TypeScript", "TailwindCSS", "Figma", "Git"].map((tech) => (
                  <span
                    key={tech}
                    className="bg-[#E85D04]/10 border border-[#E85D04]/20 text-[#E85D04] text-xs font-medium px-3 py-1 rounded-full whitespace-nowrap"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* CTA */}
            <div className="flex flex-wrap gap-4">
              <a
                href="/cv-royal-tech.pdf"
                download
                className="flex items-center gap-2 bg-[#E85D04] hover:bg-[#c94d03] text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-download-line"></i>
                Télécharger CV
              </a>
              <button
                onClick={() => {
                  const el = document.querySelector("#contact");
                  if (el) el.scrollIntoView({ behavior: "smooth" });
                }}
                className="flex items-center gap-2 border border-[#E85D04] text-[#E85D04] hover:bg-[#E85D04] hover:text-white font-semibold px-6 py-3 rounded-md transition-all duration-200 cursor-pointer whitespace-nowrap"
              >
                <i className="ri-message-3-line"></i>
                Me contacter
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
