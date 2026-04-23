import { ArrowRight, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import profileImg from "@/assets/meliza-profile.jpg";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden pt-16">
      {/* Glow orb */}
      <div className="pointer-events-none absolute -top-40 right-0 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px] animate-glow-pulse" />

      <div className="section-padding mx-auto flex max-w-7xl flex-col-reverse items-center gap-12 lg:flex-row lg:gap-20">
        {/* Text */}
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-border bg-secondary px-4 py-1.5 text-xs font-medium text-muted-foreground opacity-0 animate-fade-up" style={{ animationDelay: "0ms" }}>
            <Sparkles size={14} className="text-primary" />
            Web Developer
          </div>

          <h1 className="font-display text-4xl font-bold leading-[1.08] tracking-tight text-balance opacity-0 animate-fade-up sm:text-5xl lg:text-6xl" style={{ animationDelay: "100ms" }}>
           Turning Ideas{" "}
            <span className="gradient-text">Into</span>{" "}
            Efficient Web Solutions
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground opacity-0 animate-fade-up mx-auto lg:mx-0" style={{ animationDelay: "200ms", textWrap: "pretty" }}>
            Web Developer with hands-on experience building responsive, API-driven web applications using React and Vue. Comfortable working across both front-end and back-end integrations, with experience developing dashboards, CRUD functionality, and cloud-deployed applications. Focused on clean UI, maintainable code, and real-world problem solving.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4 justify-center lg:justify-start opacity-0 animate-fade-up" style={{ animationDelay: "300ms" }}>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#projects">
                Discover Solutions <ArrowRight size={16} />
              </a>
            </Button>
{/*            <Button variant="hero-outline" size="lg" asChild>
              <a href="#contact">See How I Can Save You Hours</a>
            </Button>*/}
          </div>
        </div>

        {/* Photo */}
        <div className="relative flex-shrink-0 opacity-0 animate-fade-up" style={{ animationDelay: "200ms" }}>
          <div className="relative h-72 w-72 overflow-hidden rounded-2xl border-2 border-primary/20 shadow-2xl sm:h-80 sm:w-80 glow">
            <img
              src={profileImg}
              alt="Meliza Rose B. Alvarez"
              className="h-full w-full object-cover"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-3 -right-3 h-full w-full rounded-2xl border border-primary/20 -z-10" />
        </div>
      </div>
    </section>
  );
}
