import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ThemeToggle } from "./ThemeToggle";
import { Link } from "react-router-dom";

const links = [
  { label: "About", to: "/#about" },
  { label: "Projects", to: "/#projects" },
  { label: "Experience", to: "/#experience" },
  { label: "Contact", to: "/#contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 z-50 w-full border-b border-border/50 bg-background/80 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
       <Link to="/" className="font-display text-xl font-bold tracking-tight">
          MELIZA <span className="gradient-text">ROSE</span>
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {links.map((l) => (
            <a
              key={l.to}
              href={l.to}
              className="rounded-lg px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <ThemeToggle />
          <Button
            variant="hero"
            size="sm"
            className="ml-3"
            asChild
          >
            <a
              href="https://drive.google.com/file/d/1kfY9_zj8EGXqluuktFgI0-pIBfJPnst9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download my CV
            </a>
          </Button>
        </div>

        {/* Mobile toggle */}
        <div className="flex items-center gap-2 md:hidden">
          <ThemeToggle />
          <button onClick={() => setOpen(!open)} className="text-foreground" aria-label="Menu">
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="border-t border-border bg-background px-6 pb-6 pt-2 md:hidden">
          {links.map((l) => (
            <a
              key={l.to}
              href={l.to}
              onClick={() => setOpen(false)}
              className="block py-3 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {l.label}
            </a>
          ))}
          <Button
            variant="hero"
            size="sm"
            className="ml-3"
            asChild
          >
            <a
              href="https://drive.google.com/file/d/1kfY9_zj8EGXqluuktFgI0-pIBfJPnst9/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
            >
              Download my CV
            </a>
          </Button>
        </div>
      )}
    </nav>
  );
}
