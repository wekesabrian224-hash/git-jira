import "./About.css";

const About = () => {
  return (
    <div className="about-container">
      <h1>About Us</h1>
      <p className="intro">We are a team of 5 software developers.</p>

      <div class="member">
        <h2>khisha</h2>
        <p class="role">Full-Stack Developer</p>
        <p>Works with React, Node.js, and TypeScript.</p>
      </div>

      <div class="member">
        <h2>Daniela</h2>
        <p class="role">Frontend Engineer</p>
        <p>Focuses on clean UI and accessibility.</p>
      </div>

      <div class="member">
        <h2>lucky</h2>
        <p class="role">Backend Engineer</p>
        <p>Builds APIs and works with databases and cloud services.</p>
      </div>

      <div class="member">
        <h2>victor</h2>
        <p class="role">DevOps Engineer</p>
        <p>Handles deployment, CI/CD, and infrastructure.</p>
      </div>

      <div class="member">
        <h2>mckayla</h2>
        <p class="role">Mobile Developer</p>
        <p>Creates mobile apps with React Native and Flutter.</p>
      </div>
    </div>
  );
};
