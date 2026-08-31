export default function Home() {
  return <h1>Welcome to My Personal Portfolio</h1>;
}
import "./Home.css"
function Home() {
     const teamMembers = [
    { name: "Daniella", role: "Front-end developer and designer", avatar: "🦇" },
    { name: "Lucky", role: "Scrum Master/Team Leader", avatar: "🌙" },
    { name: "Khisha", role: "UI/UX designer", avatar: "🕸️" },
    { name: "Sascha", role: "Full stack developer", avatar: "🥀" },
    { name: "Victor", role: "Backend developer", avatar: "🗝️" },
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
        <h2>About Our Coven</h2>
        <p>We are an ambitious team of software engineering students building projects to solve real world problems!</p>
      </main>

           <section>
        <h2>Meet the Coven</h2>
        {teamMembers.map((member) => (
                    <div key={member.name}>
            <p className="avatar">{member.avatar}</p>
            <h3>{member.name}</h3>
            <p>{member.role}</p>
          </div>
        ))}
      </section>
      </div>      
  )             
}               

export default Home
