export default function Profile() {
  const teamMembers = [
    {
      name: "Brian Lucky",
      role: "Scrum Lead",
      contribution:
        "Coordinates the team, facilitates the Scrum workflow, and ensures the project stays on track.",
    },
    {
      name: "Khisha",
      role: "Profile Page Developer",
      contribution:
        "Develops the team profile section and presents information about the members of the portfolio project.",
    },
    {
      name: "Victor Aseno",
      role: "About Page Developer",
      contribution:
        "Develops the About section of the portfolio and presents information about the project.",
    },
    {
      name: "Sascha Mckayla",
      role: "Contact & Projects Page Developer",
      contribution:
        "Develops the Contact and Projects sections of the portfolio application.",
    },
    {
      name: "Daniella Achoki",
      role: "Homepage Developer",
      contribution:
        "Develops the main landing page and creates the first impression of the portfolio application.",
    },
  ];

  return (
    <div>
      <h1>Meet the Team</h1>

      <p>
        <strong>Our Portfolio Project</strong>
      </p>

      <p>
        Meet the team behind our portfolio application. Each member is
        responsible for a different section of the project while working
        together using Scrum and GitHub.
      </p>

      <hr />

      {teamMembers.map((member) => (
        <section key={member.name}>
          <h2>{member.name}</h2>

          <p>
            <strong>{member.role}</strong>
          </p>

          <p>{member.contribution}</p>

          <hr />
        </section>
      ))}
    </div>
  );
}
