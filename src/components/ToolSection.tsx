import React from "react";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillsData = [
  {
    title: "Front-end",
    tools: [
      { name: "HTML5", img: "/projects/html.png" },
      { name: "CSS3", img: "/projects/css.png" },
      { name: "JavaScript", img: "/projects/js.png" },
      { name: "Bootstrap", img: "/projects/bs.png" },
      { name: "Figma", img: "/projects/fig.png" },
      { name: "Reactjs", img: "/projects/reactjs.png" },
      { name: "Vuejs", img: "/projects/vue.png" },
    ],
  },
  {
    title: "Back-end",
    tools: [
      { name: "Nodejs", img: "/projects/nodejs.png" },
      { name: "Expressjs", img: "/projects/expressjs.png" },
      { name: "MongoDB", img: "/projects/mongodb.png" },
      { name: "REST API", img: "/projects/rest.png" },
    ],
  },
  {
    title: "Full-stack",
    tools: [
      { name: "MERN", img: "/projects/reactjs.png" },
      { name: "MEVN", img: "/projects/vue.png" },
    ],
  },
  {
    title: "Cloud Platforms & Automation",
    tools: [
      { name: "AWS", img: "/projects/aws.png" },
      { name: "Render", img: "/projects/render.png" },
      { name: "Vercel", img: "/projects/vercel.png" },
      { name: "Zapier", img: "/projects/zapier.png" },
      { name: "n8n", img: "/projects/n8n.png" }
    ],
  },
  {
    title: "Dev Tools",
    tools: [
      { name: "Git", img: "/projects/git.png" },
      { name: "Postman", img: "/projects/postman.png" },
    ],
  },
  {
    title: "Expanding Skills",
    tools: [
      { name: "Python", img: "/projects/python.png" }
    ],
  },
];

export function ToolSection() {
  const { ref, isVisible } = useScrollReveal();

  return (
    <section id="skills" className="py-5" ref={ref}>
      <div className="container">
        <div className="text-center mb-5">
          <p
            className={`mb-3 text-sm font-semibold uppercase tracking-widest text-primary transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-y-0"
                : "opacity-0 translate-y-4"
            }`}
            style={{
              color: "#f97316",
            }}
          >
            Tech Toolkit
          </p>
            <h2 className={`font-display text-3xl font-bold tracking-tight text-balance sm:text-4xl transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}>
        Technologies I Use
        </h2>
        </div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
  {skillsData.map((section, index) => (
    <div key={index}>
      <div
        className="h-full rounded-3xl bg-white p-6 shadow-sm border border-gray-200"
      >
        <h3 className="text-2xl font-bold text-slate-900 mb-6">
          {section.title}
        </h3>

        <div className="flex flex-wrap gap-3">
          {section.tools.map((tool, i) => (
            <div
              key={i}
              className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-4 py-2"
            >
              <img
                src={tool.img}
                alt={tool.name}
                className="h-5 w-5 object-contain"
              />
              <span className="text-sm font-medium text-slate-700">
                {tool.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  ))}
</div>
      </div>
    </section>
  );
}