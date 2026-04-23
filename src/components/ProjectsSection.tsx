import { useState } from "react";
import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "@/hooks/useScrollReveal";
import { Link } from "react-router-dom";

const categories = ["All","Web Apps", "Automation"];

const projects = [
  { 
    id: "oeeCalculator",
    title: "OEE Calculator", 
    cat: "Web Apps", 
    desc: "Overall Equipment Effectiveness calculator for manufacturing efficiency tracking.",
    image: "/projects/oeecal.jpg",
    link: "https://oee-calculator.vercel.app/" },
  { title: "Blog Post App", 
    cat: "Web Apps", 
    desc: "Full-stack blog application with content management and publishing workflows.",
    image: "/projects/blogpost.jpg",
    link: "https://blog-post-client-alvarez.vercel.app/" },
    /* Zapier */
  { id: "automatedLeadEnrichment",
    title: "Automated Lead Enrichment", 
    cat: "Automation", 
    desc: "Automatically enrich new leads with company data and social profiles from multiple sources.",
    image: "/projects/zapier11.jpg"},
  { id: "automatedSocialMediaPost",
    title: "Automated Content Repurposing & Social Media Distribution System", 
    cat: "Automation", 
    desc: "Schedule and publish content across platforms automatically from a single source.",
    image: "/projects/zapier33.png"},
  { id: "asanaCRMLeadEngagement",
    title: "Asana CRM Lead Engagement Workflow", 
    cat: "Automation", 
    desc: "Automated lead follow-up and engagement tracking through Asana tasks.",
    image: "/projects/zapier22.jpg"},

    /* Make.com */
  { id: "asanaXeroTransaction",
    title: "Asana-Triggered Xero Transaction Export Automation", 
    cat: "Automation", 
    desc: "Automatically fetches filtered bank transactions from Xero, logs them in Google Sheets, converts to CSV, and sends back to Asana — fully automated with Make.com.",
    image: "/projects/make22.jpg"},
  { id: "attachmentProcessAndLogger",
    title: "AI-Powered Attachment Processor & Logger", 
    cat: "Automation", 
    desc: "A smart automation that instantly analyze incoming email attachments, extract key data into Google Sheets, and provide a professional confirmation to the sender—removing all manual data entry.",
    image: "/projects/make11.jpg"},

    /*n8n*/
  { id:"aiFbAgent",
    title: "AI FB Agent", 
    cat: "Automation", 
    desc: "A smart AI-driven assistant that instantly analyzes incoming Facebook messages and document data to provide professional, human-like responses while you focus on your business.",
  image: "/projects/n8n11.png",},
  { id: "aiJobScraper",
    title: "AI Jobs Scraper + Resume Optimizer", 
    cat: "Automation", 
    desc: "A smart AI-driven assistant that instantly analyzes incoming Facebook messages and document data to provide professional, human-like responses while you focus on your business.",
    image: "/projects/n8n22.png",
    link: "https://oee-calculator.vercel.app/" }
];

export function ProjectsSection() {
  const [active, setActive] = useState("All");
  const { ref, isVisible } = useScrollReveal();

  const filtered = active === "All" ? projects : projects.filter((p) => p.cat === active);

  return (
    <section id="projects" className="section-padding bg-surface-sunken" ref={ref}>
      <div className="mx-auto max-w-7xl">
        {/*Header*/}
        <div className="text-center">
          <p className={`mb-3 text-sm font-semibold uppercase tracking-widest text-primary transition-all duration-700 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
            Projects
          </p>
          <h2 className={`font-display text-3xl font-bold tracking-tight sm:text-4xl transition-all duration-700 delay-100 ${isVisible ? "opacity-100" : "opacity-0 translate-y-4"}`}>
            Automation & Web Solutions I've Built
          </h2>
        </div>

        {/* Tabs */}
        <div className={`mt-10 flex flex-wrap justify-center gap-2 transition-all duration-700 delay-200 ${isVisible ? "opacity-100" : "opacity-0"}`}>
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`rounded-full px-5 py-2 text-sm font-medium transition-all duration-200 active:scale-95 ${
                active === cat
                  ? "gradient-bg text-primary-foreground shadow-md"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {filtered.map((p, i) => (
            // <div
            //   key={p.title}
            //   className="group rounded-xl border border-border bg-card p-6 transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
            //   style={{ animationDelay: `${i * 60}ms` }}
            // >
            //   <span className="inline-block rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
            //     {p.cat}
            //   </span>
            //   <h3 className="mt-3 font-display text-base font-semibold flex items-center gap-2">
            //     {p.title}
            //     <ExternalLink size={14} className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100" />
            //   </h3>
            //   <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{p.desc}</p>
            // </div>

            <div
              key={p.title}
              className="group rounded-xl border border-border bg-card overflow-hidden transition-all duration-300 hover:shadow-lg hover:border-primary/30 hover:-translate-y-1"
              style={{ animationDelay: `${i * 60}ms` }}
            >
              {/* IMAGE */}
            <Link
              to={p.cat === "Web Apps" ? "#" : `/projects/${p.id}`}
              onClick={(e) => {
                if (p.cat === "Web Apps") e.preventDefault();
              }}
              target="_blank"
            >
              <img
                src={p.image}
                alt={p.title}
                className="h-44 w-full object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </Link>

              {/* CONTENT */}
              <div className="p-6">
                <span className="inline-block rounded-md bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary">
                  {p.cat}
                </span>

                <h3 className="mt-3 font-display text-base font-semibold flex items-center gap-2">
                  {p.cat === "Web Apps" ? (
                    <a
                      href={p.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:underline"
                    >
                      {p.title}
                    </a>
                  ) : (
                    <Link
                      to={`/projects/${p.id}`}
                      className="hover:underline"
                      target="_blank"
                    >
                      {p.title}
                    </Link>
                  )}

                  <ExternalLink
                    size={14}
                    className="text-muted-foreground opacity-0 transition-opacity group-hover:opacity-100"
                  />
                </h3>

                <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                  {p.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
