import { Mail, Linkedin, Calendar, ArrowUpRight } from "lucide-react";
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
          Let's Automate Your Workflow
        </h2>
        <p className={`mt-4 text-lg text-muted-foreground transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
          Ready to save hours every week? Book a free discovery call or reach out directly.
        </p>




        {/* Calendly embed */}
{/*        <div 
            className={`mt-10 overflow-hidden rounded-xl border border-border bg-card transition-all duration-700 delay-300 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}>
          <iframe
            src="https://calendly.com/melizatechva"
            title="Book a Discovery Call"
            className="h-[700px] w-full border-0"
            loading="lazy"
          />
        </div>
*/}



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
        </div>
      </div>
    </section>
  );
}
