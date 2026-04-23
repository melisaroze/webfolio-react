import { ArrowUp, Mail, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border bg-background px-6 py-10">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 sm:flex-row">
        <div>
          <a href="#" className="font-display text-lg font-bold tracking-tight">
            MELIZA <span className="gradient-text">ROSE</span>
          </a>
          <p className="mt-1 text-xs text-muted-foreground">
            © {new Date().getFullYear()} Meliza Rose B. Alvarez. All rights reserved.
          </p>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="mailto:melizabelgica@gmail.com"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
          <a
            href="https://www.linkedin.com/in/meliza-rose-alvarez-5a5a97234/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40"
            aria-label="LinkedIn"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="#"
            className="flex h-9 w-9 items-center justify-center rounded-lg border border-border text-muted-foreground transition-colors hover:text-foreground hover:border-primary/40"
            aria-label="Back to top"
          >
            <ArrowUp size={16} />
          </a>
        </div>
      </div>
    </footer>
  );
}
