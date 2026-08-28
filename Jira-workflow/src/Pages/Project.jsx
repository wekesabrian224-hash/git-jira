import "./Project.css";
function Projects() {
  const projects = [
    {
      title: "Student Course Registration",
      description:
        "A web application that allows students to browse and register for courses.",
      technology: "React, JavaScript, CSS",
    },

    {
      title: "Photography Website",
      description:
        "A responsive photography portfolio for displaying and showcasing photographs.",
      technology: "React, CSS, JavaScript",
    },

    {
      title: "Safari Stage",
      description:
        "A platform designed to help travelers find bus stations and stages.",
      technology: "React, Python, APIs",
    },
  ];

  return (
    <section id="projects" className="section">
      <h2>My Projects</h2>

      <div className="projects-container">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <small>{project.technology}</small>

            <button>View Project</button>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
