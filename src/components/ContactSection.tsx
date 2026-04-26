import { Mail, Linkedin, Github, Calendar, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useScrollReveal } from "@/hooks/useScrollReveal";

export function ContactSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="contact" className="section-padding bg-surface-sunken" ref={ref}>
      <div className="mx-auto max-w-4xl text-center">
        <p className={`mb-3 text-sm font-semibold uppercase tracking-widest text-primary transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
          Contact
        </p>
        <h2 className={`font-display text-3xl font-bold tracking-tight sm:text-4xl transition-all duration-700 delay-100 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
          Let’s Connect
        </h2>
        <p className={`mt-4 text-lg text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
         Open to opportunities. Feel free to reach out via email or LinkedIn.
        </p>



        {/* Direct contact */}
        <div className={`mt-10 flex flex-wrap items-center justify-center gap-4 transition-all duration-700 delay-[400ms] ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="mailto:melizabelgica@gmail.com">
              <Mail size={18} /> Email Me
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="https://www.linkedin.com/in/meliza-rose-alvarez-5a5a97234/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={18} /> LinkedIn
            </a>
          </Button>
          <Button variant="hero-outline" size="lg" asChild>
            <a href="https://github.com/melisaroze/" 
              target="_blank"
              rel="noopener noreferrer">
              <Github size={18} /> Github
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
