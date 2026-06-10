export default function App() {
  const skills = {
    Frontend: ["React 18", "Angular 9-19", "TypeScript", "JavaScript"],
    Backend: ["Node.js", "Express.js", "GraphQL", "REST APIs"],
    Database: ["MongoDB", "MySQL", "Redis"],
    Cloud: ["AWS", "Docker", "GitHub Actions", "Nginx"],
    AI: ["LangChain.js", "Agentic AI", "LLM APIs", "RAG Pipelines"],
  };

  const projects = [
    {
      title: "Vendor Management Dashboard",
      company: "S&P Global",
      description:
        "Enterprise-scale Micro Frontend Platform built using React 18, Node.js, Express.js and MongoDB.",
      tech: "React • Node.js • MongoDB • Micro Frontends",
    },
    {
      title: "Flight Test Data Platform",
      company: "Sopra Steria",
      description:
        "Real-time aerospace monitoring platform with live sensor analytics and WebSocket streaming.",
      tech: "React • Node.js • WebSocket • MongoDB",
    },
    {
      title: "Agentic AI Integration",
      company: "S&P Global",
      description:
        "Integrated LangChain.js and LLM APIs into Node.js services for intelligent workflow automation.",
      tech: "LangChain • RAG • LLM APIs • Node.js",
    },
  ];

  return (
    <div
      style={{
        background: "#020617",
        color: "#fff",
        minHeight: "100vh",
        fontFamily: "Segoe UI, sans-serif",
      }}
    >
      {/* NAVBAR */}
      <nav
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: "20px 80px",
          borderBottom: "1px solid #1e293b",
        }}
      >
        <h2 style={{ color: "#38bdf8" }}>Prempal Singh</h2>

        <div style={{ display: "flex", gap: "30px" }}>
          <a href="#about" style={linkStyle}>
            About
          </a>
          <a href="#skills" style={linkStyle}>
            Skills
          </a>
          <a href="#projects" style={linkStyle}>
            Projects
          </a>
          <a href="#contact" style={linkStyle}>
            Contact
          </a>
        </div>
      </nav>

      {/* HERO */}
      <section
        style={{
          textAlign: "center",
          padding: "100px 20px",
          maxWidth: "1200px",
          margin: "auto",
        }}
      >
        <h1
          style={{
            fontSize: "4rem",
            marginBottom: "20px",
            background: "linear-gradient(90deg,#38bdf8,#8b5cf6)",
            WebkitBackgroundClip: "text",
            color: "transparent",
          }}
        >
          Senior Full Stack Engineer
        </h1>

        <h2 style={{ fontSize: "2rem" }}>
          MERN • MEAN • AI Applications • Solution Architect
        </h2>

        <p
          style={{
            maxWidth: "800px",
            margin: "30px auto",
            color: "#cbd5e1",
            fontSize: "1.2rem",
            lineHeight: "1.8",
          }}
        >
          10+ years of experience architecting enterprise-grade applications,
          microservices, micro frontends, AI-powered solutions, and scalable
          cloud-native platforms.
        </p>

        <div style={{ marginTop: "30px" }}>
          <button style={primaryBtn}>View Projects</button>
          <button style={secondaryBtn}>Download Resume</button>
        </div>
      </section>

      {/* STATS */}
      <section
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(220px,1fr))",
          gap: "20px",
          padding: "40px 80px",
        }}
      >
        {[
          ["10+", "Years Experience"],
          ["12+", "Engineers Mentored"],
          ["50+", "Enterprise Features"],
          ["3", "Major Organizations"],
        ].map(([value, label]) => (
          <div key={label} style={card}>
            <h2 style={{ color: "#38bdf8" }}>{value}</h2>
            <p>{label}</p>
          </div>
        ))}
      </section>

      {/* ABOUT */}
      <section id="about" style={section}>
        <h2>About Me</h2>

        <p style={paragraph}>
          Currently working as a Senior Software Engineer at S&P Global,
          building enterprise-scale micro frontend applications, Node.js
          services, CI/CD pipelines and AI-powered solutions using LangChain.js.
        </p>
      </section>

      {/* SKILLS */}
      <section id="skills" style={section}>
        <h2>Technical Skills</h2>

        {Object.entries(skills).map(([category, list]) => (
          <div key={category} style={{ marginBottom: "30px" }}>
            <h3 style={{ color: "#38bdf8" }}>{category}</h3>

            <div
              style={{
                display: "flex",
                flexWrap: "wrap",
                gap: "10px",
              }}
            >
              {list.map((item) => (
                <span
                  key={item}
                  style={{
                    background: "#1e293b",
                    padding: "10px 15px",
                    borderRadius: "20px",
                  }}
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        ))}
      </section>

      {/* PROJECTS */}
      <section id="projects" style={section}>
        <h2>Featured Projects</h2>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit,minmax(320px,1fr))",
            gap: "20px",
          }}
        >
          {projects.map((project) => (
            <div key={project.title} style={card}>
              <h3>{project.title}</h3>

              <p style={{ color: "#38bdf8" }}>{project.company}</p>

              <p style={{ color: "#cbd5e1" }}>{project.description}</p>

              <p
                style={{
                  marginTop: "15px",
                  color: "#94a3b8",
                }}
              >
                {project.tech}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* EXPERIENCE */}
      <section style={section}>
        <h2>Experience</h2>

        <div style={card}>
          <h3>S&P Global</h3>
          <p>Senior Software Engineer | Dec 2020 - Present</p>
        </div>

        <div style={card}>
          <h3>Sopra Steria</h3>
          <p>Tech Lead | Aug 2019 - Sep 2020</p>
        </div>

        <div style={card}>
          <h3>HCL Technologies</h3>
          <p>Tech Lead | Dec 2016 - Aug 2019</p>
        </div>
      </section>

      {/* CONTACT */}
      <section
        id="contact"
        style={{
          textAlign: "center",
          padding: "80px 20px",
          background: "#0f172a",
          marginTop: "50px",
        }}
      >
        <h2>Let's Connect</h2>

        <p>📧 prempal88niet@gmail.com</p>
        <p>📍 Ghaziabad, India</p>
        <p>💼 LinkedIn: linkedin.com/in/prempal88niet</p>
      </section>
    </div>
  );
}

const section = {
  maxWidth: "1200px",
  margin: "auto",
  padding: "60px 80px",
};

const paragraph = {
  color: "#cbd5e1",
  lineHeight: "1.8",
};

const card = {
  background: "#0f172a",
  border: "1px solid #1e293b",
  padding: "25px",
  borderRadius: "12px",
};

const primaryBtn = {
  background: "#38bdf8",
  color: "#fff",
  border: "none",
  padding: "12px 25px",
  borderRadius: "8px",
  cursor: "pointer",
  marginRight: "10px",
};

const secondaryBtn = {
  background: "transparent",
  color: "#fff",
  border: "1px solid #38bdf8",
  padding: "12px 25px",
  borderRadius: "8px",
  cursor: "pointer",
};

const linkStyle = {
  color: "#cbd5e1",
  textDecoration: "none",
};