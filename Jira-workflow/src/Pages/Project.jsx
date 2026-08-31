import { useState } from "react";
import "./Project.css";

const PROJECTS = [
  {
    id: "payslip",
    title: "Kenya Payslip Calculator",
    author: "Lucky",
    blurb:
      "Computes net pay from gross salary using real KRA PAYE bands, NSSF, SHIF and the Housing Levy.",
    detail:
      "A single-purpose tool built for the Kenyan job market: enter a gross salary and it walks through PAYE tax bands, NSSF tiers, SHIF, and the Housing Levy to show a full payslip breakdown, not just a final number.",
    tags: ["React", "Finance", "Kenya"],
    accent: "sage",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: "vacancy",
    title: "Nyumba — House Vacancy Platform",
    author: "Khisha",
    blurb:
      "Rental listings with role-based accounts for tenants, landlords and agents, filterable by all 47 counties.",
    detail:
      "A house-hunting platform for the Kenyan market. Landlords and agents post vacancies, tenants search and save listings, and everything filters down to county level. Role-based auth keeps each account type's dashboard distinct.",
    tags: ["React", "Auth", "Kenya"],
    accent: "clay",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: "habit-garden",
    title: "Habit Garden",
    author: "Daniella",
    blurb:
      "A habit tracker where every completed habit grows a small virtual plant in your garden.",
    detail:
      "Built with a small team. Each habit is a plot; consistency grows the plant in it, missed days let it wilt. Coins earned from streaks unlock garden items in an in-app shop. Animated with Framer Motion so growth actually feels alive.",
    tags: ["React", "Team project", "Framer Motion"],
    accent: "moss",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: "family-tree",
    title: "Family Tree Webapp",
    author: "Victor",
    blurb:
      "An interactive family tree with a photo gallery and achievements for each person.",
    detail:
      "Family members are laid out by generation rather than a generic grid. Hover a person's photo to see their achievement; click it to open a full gallery of their photos, each with its own caption.",
    tags: ["React", "Vite"],
    accent: "sand",
    demoUrl: "#",
    codeUrl: "#",
  },
  {
    id: "kadari",
    title: "Kadari",
    author: "Sascha",
    blurb:
      "Splits every deposit into bills, savings and spending using an adjustable ratio, with built-in tips.",
    detail:
      "A personal-finance tool that takes a deposit and splits it across bills, savings and everyday spending on a sliding ratio you control. A small tips engine reacts to the numbers you enter, rather than showing generic advice.",
    tags: ["React", "Personal finance"],
    accent: "clay",
    demoUrl: "#",
    codeUrl: "#",
  },
];

const ACCENTS = {
  sage: { bg: "#e4ede4", fg: "#2f4a34" },
  clay: { bg: "#f0e2d9", fg: "#7a4a2e" },
  moss: { bg: "#e6e8d8", fg: "#4c5334" },
  sand: { bg: "#efe7d8", fg: "#6b5a37" },
};

export default function ProjectsPage() {
  const [activeTag, setActiveTag] = useState("All");
  const [selected, setSelected] = useState(null);

  const tags = ["All", ...new Set(PROJECTS.flatMap((p) => p.tags))];
  const visible =
    activeTag === "All"
      ? PROJECTS
      : PROJECTS.filter((p) => p.tags.includes(activeTag));

  return (
    <section className="projects-page">
      <div className="projects-page__head">
        <p className="projects-page__eyebrow">Projects</p>
        <h1 className="projects-page__title">Things we've built</h1>
        <p className="projects-page__lede">
          A running record of what came out of practice, coursework and a few
          late nights — each one solving something real rather than a generic
          tutorial exercise.
        </p>
      </div>

      <div className="projects-page__filters">
        {tags.map((tag) => (
          <button
            key={tag}
            className="filter-chip"
            data-active={activeTag === tag}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      <div className="projects-grid">
        {visible.map((project) => {
          const colors = ACCENTS[project.accent];
          return (
            <button
              key={project.id}
              className="project-card"
              onClick={() => setSelected(project)}
            >
              <div
                className="project-card__swatch"
                style={{ background: colors.bg, color: colors.fg }}
              >
                {project.title.charAt(0)}
              </div>
              <h2 className="project-card__title">{project.title}</h2>
              <p className="project-card__author">Built by {project.author}</p>
              <p className="project-card__blurb">{project.blurb}</p>
              <div className="project-card__tags">
                {project.tags.map((tag) => (
                  <span className="tag" key={tag}>
                    {tag}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>

      {selected && (
        <div
          className="project-modal__backdrop"
          onClick={() => setSelected(null)}
        >
          <div className="project-modal" onClick={(e) => e.stopPropagation()}>
            <button
              className="project-modal__close"
              onClick={() => setSelected(null)}
              aria-label="Close"
            >
              ✕
            </button>
            <h2 className="project-modal__title">{selected.title}</h2>
            <p className="project-modal__author">Built by {selected.author}</p>
            <p className="project-modal__detail">{selected.detail}</p>
            <div className="project-modal__links">
              <a href={selected.demoUrl}>View demo</a>
              <a href={selected.codeUrl}>View code</a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
