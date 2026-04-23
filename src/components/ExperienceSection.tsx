import { Briefcase } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const jobs = [
  {
    role: "Full-stack Web Development Student",
    company: "ZUITT Tech Program",
    period: "June 2025 – Oct 2025",
    bullets: [
      "Building web applications using the MERN stack through hands-on bootcamp training."
    ],
  },
    {
    role: "UI/UX Design Essentials Student",
    company: " CIIT",
    period: "October 2024 – January 2025",
    bullets: [
      "User-centered design, visual design principles, and the use of design tools."
    ],
  },
    {
    role: "Process Engineer",
    company: "SIIX Philippines Inc",
    period: "Feb 2024 – Oct 2024",
    bullets: [
      "Maintained and optimized automated systems to ensure reliable operations",
    ],
  },
  {
    role: "Automation & Equipment Technician",
    company: "STMicroelectronics & Amkor Technology Philippines",
    period: "Jun 2014 – Sep 2023",
    bullets: [
      "Maintained and optimized automated systems to ensure reliable operations",
    ],
  },
  {
    role: "Technological University of the Philippines",
    company: "Bachelor of Arts in Management Major in Industrial Management & Mechanical Engineering Technology",
    period: "2011 – 2017",
    bullets: [
    ],
  },
];

export function ExperienceSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="experience" className="section-padding" ref={ref}>
      <div className="mx-auto max-w-4xl">
        <div className="text-center">
          <p className={`mb-3 text-sm font-semibold uppercase tracking-widest text-primary transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
            My Journey
          </p>
          <h2 className={`font-display text-3xl font-bold tracking-tight sm:text-4xl transition-all duration-700 delay-100 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
            10+ Years in Automation & Process Optimization
          </h2>
        </div>

        <div className="relative mt-14">
          {/* Timeline line */}
          <div className="absolute left-6 top-0 hidden h-full w-px bg-border md:block" />

          <div className="space-y-10">
            {jobs.map((job, i) => (
              <div
                key={job.role}
                className={`relative flex gap-6 transition-all duration-700 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"}`}
                style={{ transitionDelay: `${200 + i * 150}ms` }}
              >
                {/* Timeline dot */}
                <div className="relative z-10 hidden flex-shrink-0 md:block">
                  <div className="flex h-12 w-12 items-center justify-center rounded-full border-2 border-primary/30 bg-card">
                    <Briefcase size={18} className="text-primary" />
                  </div>
                </div>

                <div className="flex-1 rounded-xl border border-border bg-card p-6 transition-shadow hover:shadow-md">
                  <p className="text-xs font-medium uppercase tracking-wider text-primary">{job.period}</p>
                  <h3 className="mt-1 font-display text-lg font-semibold">{job.role}</h3>
                  <p className="text-sm text-muted-foreground">{job.company}</p>
                  <ul className="mt-4 space-y-2">
                    {job.bullets.map((b) => (
                      <li key={b} className="flex gap-2 text-sm leading-relaxed text-muted-foreground">
                        <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full gradient-bg" />
                        {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
