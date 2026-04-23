import { useScrollReveal } from "@/hooks/useScrollReveal";

const skills = ["Zapier", "Make (Integromat)", "n8n", "JavaScript", "APIs", "Web Development", "CRM Automation", "Process Optimization"];

export function AboutSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="about" className="section-padding" ref={ref}>
      <div className="mx-auto max-w-4xl text-center">
        <p className={`mb-3 text-sm font-semibold uppercase tracking-widest text-primary transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          About Me
        </p>
        <h2 className={`font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          Engineering Background Meets Automation Expertise
        </h2>
        <p className={`mt-6 text-lg leading-relaxed text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`} style={{ textWrap: "pretty" }}>
          I help businesses save time and eliminate repetitive work by building smart automation systems using Zapier, Make, and n8n. Combining my background in engineering and web development, I create efficient workflows, integrate apps, and develop custom solutions using APIs and JavaScript. Whether it's lead management, CRM automation, or business process optimization, I focus on delivering reliable systems that reduce manual work and improve efficiency.
        </p>

        <div className={`mt-10 flex flex-wrap justify-center gap-3 transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
          {skills.map((skill) => (
            <span
              key={skill}
              className="rounded-full border border-border bg-secondary px-4 py-1.5 text-sm font-medium text-secondary-foreground transition-colors hover:border-primary/40 hover:bg-primary/10"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}
