import "./Home.css"
function Home() {
  const projects = [
    { name: "Habit Garden", description: "A garden themed habit tracker built with react" },
    { name: "Toy Tales", description: "A toy collection app built with React" },
  ]

  return (
    <div>
      <header>
        <h1>Welcome to thy wonderful homepage!</h1>
      </header>

      <nav>
        <a href="#">Home</a>
        <a href="#">Projects</a>
        <a href="#">About</a>
        <a href="#">Contact</a>
      </nav>

      <main>
        <h2>About Me</h2>
        <p>I'm a software engineer who loves building things with React.</p>
      </main>

      <section>
        <h2>My Projects/Works of Art</h2>
        {projects.map((project) => (
          <div key={project.name}>
            <h3>{project.name}</h3>
            <p>{project.description}</p>
          </div>
        ))}
      </section>
    </div>
  )
}

export default Home