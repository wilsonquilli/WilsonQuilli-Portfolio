import { useState, useEffect, useRef } from "react";
import { FaReact, FaJs, FaPython, FaGit, FaHtml5, FaCss3Alt } from "react-icons/fa";
import { SiCplusplus, SiPostgresql, SiTailwindcss } from "react-icons/si";

function useTheme() {
  const [dark, setDark] = useState(true);
  return { dark, toggle: () => setDark((d) => !d) };
}

function CursorDot({ dark }) {
  const dot = useRef(null);
  useEffect(() => {
    const move = (e) => {
      if (dot.current) {
        dot.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`;
      }
    };
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);
  return (
    <div
      ref={dot}
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: 12,
        height: 12,
        borderRadius: "50%",
        pointerEvents: "none",
        zIndex: 9999,
        transition: "background 0.2s",
        background: dark ? "#ef4444" : "#1e3a8a",
        mixBlendMode: "difference",
      }}
    />
  );
}

function AmbientBackground({ dark }) {
  return (
    <div
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        pointerEvents: "none",
        zIndex: 0,
        overflow: "hidden",
      }}
    >
      <div
        className="ambient-orb ambient-orb-one"
        style={{
          position: "absolute",
          width: "42vw",
          height: "42vw",
          minWidth: "320px",
          minHeight: "320px",
          maxWidth: "640px",
          maxHeight: "640px",
          top: "-8%",
          left: "-10%",
          borderRadius: "50%",
          background: dark
            ? "radial-gradient(circle, rgba(239,68,68,0.16) 0%, rgba(239,68,68,0.02) 55%, transparent 72%)"
            : "radial-gradient(circle, rgba(30,58,138,0.14) 0%, rgba(30,58,138,0.03) 55%, transparent 72%)",
          filter: "blur(12px)",
        }}
      />
      <div
        className="ambient-orb ambient-orb-two"
        style={{
          position: "absolute",
          width: "46vw",
          height: "46vw",
          minWidth: "360px",
          minHeight: "360px",
          maxWidth: "760px",
          maxHeight: "760px",
          top: "28%",
          right: "-14%",
          borderRadius: "50%",
          background: dark
            ? "radial-gradient(circle, rgba(239,68,68,0.14) 0%, rgba(239,68,68,0.02) 52%, transparent 72%)"
            : "radial-gradient(circle, rgba(30,58,138,0.12) 0%, rgba(30,58,138,0.025) 52%, transparent 72%)",
          filter: "blur(18px)",
        }}
      />
      <div
        className="ambient-grid"
        style={{
          position: "absolute",
          inset: 0,
          opacity: dark ? 0.18 : 0.12,
          backgroundImage: dark
            ? `linear-gradient(rgba(239,68,68,0.12) 1px, transparent 1px),
               linear-gradient(90deg, rgba(239,68,68,0.12) 1px, transparent 1px)`
            : `linear-gradient(rgba(30,58,138,0.1) 1px, transparent 1px),
               linear-gradient(90deg, rgba(30,58,138,0.1) 1px, transparent 1px)`,
          backgroundSize: "96px 96px",
          maskImage: "linear-gradient(to bottom, rgba(0,0,0,0.5), transparent 85%)",
        }}
      />
    </div>
  );
}

function Navbar({ dark }) {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = ["About", "Projects", "Experience", "Contact"];
  const bg = dark
    ? scrolled ? "rgba(10,10,10,0.85)" : "transparent"
    : scrolled ? "rgba(255,255,255,0.85)" : "transparent";

  return (
    <nav
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "1.25rem 2.5rem",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        background: bg,
        borderBottom: scrolled ? `1px solid ${dark ? "rgba(239,68,68,0.15)" : "rgba(30,58,138,0.12)"}` : "none",
        transition: "all 0.4s ease",
      }}
    >
      <span
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "1.6rem",
          letterSpacing: "0.08em",
          color: dark ? "#ef4444" : "#1e3a8a",
        }}
      >
        WQ
      </span>
      <ul style={{ display: "flex", gap: "2.5rem", listStyle: "none", margin: 0, padding: 0 }}>
        {links.map((l) => (
          <li key={l}>
            <a
              href={`#${l.toLowerCase()}`}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontWeight: 600,
                fontSize: "0.85rem",
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                color: dark ? "#f5f5f5" : "#1e3a8a",
                textDecoration: "none",
                position: "relative",
                paddingBottom: "3px",
                transition: "color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.color = dark ? "#ef4444" : "#ef4444";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.color = dark ? "#f5f5f5" : "#1e3a8a";
              }}
            >
              {l}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

function Hero({ dark }) {
  const [visible, setVisible] = useState(false);
  useEffect(() => { setTimeout(() => setVisible(true), 100); }, []);

  return (
    <section
      id="home"
      className="hero-section"
      style={{
        minHeight: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: "0 2.5rem",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundImage: dark
            ? `linear-gradient(rgba(239,68,68,0.05) 1px, transparent 1px),
               linear-gradient(90deg, rgba(239,68,68,0.05) 1px, transparent 1px)`
            : `linear-gradient(rgba(30,58,138,0.05) 1px, transparent 1px),
               linear-gradient(90deg, rgba(30,58,138,0.05) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
          zIndex: 0,
        }}
      />

      <div
        style={{
          position: "absolute",
          width: "500px",
          height: "500px",
          borderRadius: "50%",
          background: dark
            ? "radial-gradient(circle, rgba(239,68,68,0.18) 0%, transparent 70%)"
            : "radial-gradient(circle, rgba(30,58,138,0.13) 0%, transparent 70%)",
          top: "20%",
          right: "-10%",
          zIndex: 0,
          filter: "blur(40px)",
        }}
      />

      <div
        className="hero-content"
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: "900px",
          opacity: visible ? 1 : 0,
          transform: visible ? "translateY(0)" : "translateY(32px)",
          transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        <p
          className="hero-eyebrow"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            letterSpacing: "0.22em",
            textTransform: "uppercase",
            color: dark ? "#ef4444" : "#1e3a8a",
            marginBottom: "1rem",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s 0.2s",
          }}
        >
          Welcome, I'm
        </p>

        <h1
          className="hero-title"
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(4rem, 10vw, 9rem)",
            lineHeight: 0.92,
            letterSpacing: "0.02em",
            margin: 0,
            color: dark ? "#f5f5f5" : "#0f172a",
            opacity: visible ? 1 : 0,
            transform: visible ? "translateX(0)" : "translateX(-40px)",
            transition: "all 0.9s 0.3s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          Wilson
          <br />
          <span style={{ color: dark ? "#ef4444" : "#1e3a8a", WebkitTextStroke: dark ? "0" : "0" }}>
            Quilli
          </span>
        </h1>

        <div
          className="hero-subtitle-row"
          style={{
            display: "flex",
            gap: "1rem",
            marginTop: "1.5rem",
            alignItems: "center",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s 0.55s",
          }}
        >
          
          <p
            className="hero-subtitle"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "1.1rem",
              color: dark ? "#a3a3a3" : "#475569",
              margin: 0,
            }}
          >
            Software Developer &amp; Master's Student
          </p>
        </div>

        <div
          className="hero-actions"
          style={{
            marginTop: "2.5rem",
            display: "flex",
            gap: "1rem",
            flexWrap: "wrap",
            opacity: visible ? 1 : 0,
            transition: "opacity 0.8s 0.75s",
          }}
        >
          <a
            href="#projects"
            className="hero-button"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#fff",
              background: dark ? "#ef4444" : "#1e3a8a",
              border: "none",
              padding: "0.85rem 2rem",
              borderRadius: "2px",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: dark ? "0 4px 24px rgba(239,68,68,0.35)" : "0 4px 24px rgba(30,58,138,0.3)",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = dark
                ? "0 8px 32px rgba(239,68,68,0.5)"
                : "0 8px 32px rgba(30,58,138,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = dark
                ? "0 4px 24px rgba(239,68,68,0.35)"
                : "0 4px 24px rgba(30,58,138,0.3)";
            }}
          >
            View Work
          </a>
          <a
            href="mailto:wilo240105@gmail.com"
            className="hero-button"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: dark ? "#ef4444" : "#1e3a8a",
              background: "transparent",
              border: `2px solid ${dark ? "#ef4444" : "#1e3a8a"}`,
              padding: "0.85rem 2rem",
              borderRadius: "2px",
              textDecoration: "none",
              transition: "all 0.2s",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = dark ? "#ef4444" : "#1e3a8a";
              e.currentTarget.style.color = "#fff";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = dark ? "#ef4444" : "#1e3a8a";
            }}
          >
            Say Hello
          </a>
          <a
            href="/Wilson Quilli Resume.pdf"
            target = "_blank"
            rel = "noopener noreferrer"
            className="hero-button"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontWeight: 700,
              fontSize: "0.85rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              color: "#fff",
              background: dark ? "#ef4444" : "#1e3a8a",
              border: "none",
              padding: "0.85rem 2rem",
              borderRadius: "2px",
              textDecoration: "none",
              transition: "transform 0.2s, box-shadow 0.2s",
              boxShadow: dark ? "0 4px 24px rgba(239,68,68,0.35)" : "0 4px 24px rgba(30,58,138,0.3)",
              display: "inline-block",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-3px)";
              e.currentTarget.style.boxShadow = dark
                ? "0 8px 32px rgba(239,68,68,0.5)"
                : "0 8px 32px rgba(30,58,138,0.45)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = dark
                ? "0 4px 24px rgba(239,68,68,0.35)"
                : "0 4px 24px rgba(30,58,138,0.3)";
            }}
          >
            View Resume (April 5th, 2026)
          </a>
        </div>
      </div>

      <div
        style={{
          position: "absolute",
          bottom: "2.5rem",
          left: "50%",
          transform: "translateX(-50%)",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "0.5rem",
          opacity: 0.4,
        }}
      >
      </div>
    </section>
  );
}

function AboutSection({ dark }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const technologies = [
    "GitHub",
    "Figma",
    "VS Code",
    "PyCharm",
  ];

  useEffect(() => {
    const obs = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) setVis(true);
    }, { threshold: 0.2 });

    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="about"
      ref={ref}
      className="section-shell"
      style={{
        padding: "7rem 2.5rem",
        maxWidth: "1100px",
        margin: "0 auto",
      }}
    >
      <SectionLabel dark={dark} label="About Me" />
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 320px), 1fr))",
          gap: "3rem",
          alignItems: "center",
        }}
      >
        <div
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateX(0)" : "translateX(-36px)",
            transition: "all 0.85s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <div
            className="about-visual-card"
            style={{
              position: "relative",
              minHeight: "clamp(360px, 55vw, 520px)",
              borderRadius: "6px",
              overflow: "hidden",
              border: `1px solid ${dark ? "rgba(239,68,68,0.22)" : "rgba(30,58,138,0.16)"}`,
              background: dark
                ? "linear-gradient(180deg, rgba(239,68,68,0.12), rgba(255,255,255,0.02))"
                : "linear-gradient(180deg, rgba(30,58,138,0.1), rgba(255,255,255,0.92))",
              boxShadow: dark
                ? "0 18px 60px rgba(0,0,0,0.35)"
                : "0 18px 60px rgba(30,58,138,0.12)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div
              style={{
                position: "absolute",
                inset: 0,
                backgroundImage: dark
                  ? `linear-gradient(rgba(239,68,68,0.06) 1px, transparent 1px),
                     linear-gradient(90deg, rgba(239,68,68,0.06) 1px, transparent 1px)`
                  : `linear-gradient(rgba(30,58,138,0.06) 1px, transparent 1px),
                     linear-gradient(90deg, rgba(30,58,138,0.06) 1px, transparent 1px)`,
                backgroundSize: "38px 38px",
              }}
            />
            <div
              style={{
                position: "absolute",
                width: "260px",
                height: "260px",
                borderRadius: "50%",
                background: dark
                  ? "radial-gradient(circle, rgba(239,68,68,0.28) 0%, transparent 70%)"
                  : "radial-gradient(circle, rgba(30,58,138,0.2) 0%, transparent 70%)",
                filter: "blur(10px)",
              }}
            />
            <div
              style={{
                position: "relative",
                zIndex: 1,
                width: "78%",
                aspectRatio: "4 / 5",
                borderRadius: "4px",
                border: `1px solid ${dark ? "rgba(239,68,68,0.35)" : "rgba(30,58,138,0.28)"}`,
                background: dark
                  ? "linear-gradient(180deg, rgba(10,10,10,0.9), rgba(239,68,68,0.16))"
                  : "linear-gradient(180deg, rgba(255,255,255,0.98), rgba(30,58,138,0.15))",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                gap: "1rem",
              }}
            >
              <img class="max-w-full h-auto" src="Wil.jpeg" alt="Picture of me with Nittany Lion from PSU" />
            </div>
          </div>
        </div>
        <div
          style={{
            opacity: vis ? 1 : 0,
            transform: vis ? "translateX(0)" : "translateX(36px)",
            transition: "all 0.85s 0.12s cubic-bezier(0.22,1,0.36,1)",
          }}
        >
          <h2
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "clamp(2.8rem, 6vw, 5.5rem)",
              letterSpacing: "0.03em",
              lineHeight: 0.95,
              color: dark ? "#f5f5f5" : "#0f172a",
              margin: "0 0 1.5rem",
            }}
          >
            I Like To Create
            <br />
            <span style={{ color: dark ? "#ef4444" : "#1e3a8a" }}>
              And Design Websites
            </span>
          </h2>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "1rem",
              marginBottom: "1.75rem",
            }}
          >
            {[
              "I'm a Computer Science major from Penn State in Philadelphia, Pennsylvania with a strong interest in full-stack development; while also pursuing my Master's in Software Engineering",
              "I'm fascinated by building projects with teams that can make a real impact and create something people genuinely use.",
              "Here, you can check out my projects, experience, and the work I'm continuing to grow through in software engineering.",
              "Outside of coding, I like playing video games, volunteering at Feast of Justice, and watching soccer.",
            ].map((paragraph) => (
              <p
                key={paragraph}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "1rem",
                  lineHeight: 1.8,
                  color: dark ? "#a3a3a3" : "#475569",
                  margin: 0,
                  maxWidth: "650px",
                }}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(180px, 1fr))",
              gap: "1rem",
              marginBottom: "1.75rem",
            }}
          >
            {[
              { label: "Education", value: "Penn State" },
              { label: "GPA", value: "3.79 / 4.00" },
              { label: "Graduate Track", value: "M.S. Expected Dec 2027" },
              { label: "Leadership", value: "AI Club Treasurer" },
            ].map((item) => (
              <div
                key={item.label}
                className="metric-card"
                style={{
                  padding: "1rem 1.1rem",
                  border: `1px solid ${dark ? "rgba(239,68,68,0.16)" : "rgba(30,58,138,0.12)"}`,
                  background: dark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.72)",
                  backdropFilter: "blur(8px)",
                }}
              >
                <div
                  style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "0.72rem",
                    fontWeight: 700,
                    letterSpacing: "0.14em",
                    textTransform: "uppercase",
                    color: dark ? "#ef4444" : "#1e3a8a",
                    marginBottom: "0.4rem",
                  }}
                >
                  {item.label}
                </div>
                <div
                  style={{
                    fontFamily: "'Bebas Neue', cursive",
                    fontSize: "1.3rem",
                    letterSpacing: "0.04em",
                    color: dark ? "#f5f5f5" : "#0f172a",
                  }}
                >
                  {item.value}
                </div>
              </div>
            ))}
          </div>

          <p
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.84rem",
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: dark ? "#ef4444" : "#1e3a8a",
              margin: "0 0 1rem",
              fontWeight: 700,
            }}
          >
            Tools I've Used
          </p>

          <div style={{ display: "flex", gap: "0.65rem", flexWrap: "wrap" }}>
            {technologies.map((tech) => (
              <span
                key={tech}
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "0.74rem",
                  fontWeight: 700,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  padding: "0.45rem 0.75rem",
                  borderRadius: "2px",
                  background: dark ? "rgba(239,68,68,0.12)" : "rgba(30,58,138,0.08)",
                  color: dark ? "#ef4444" : "#1e3a8a",
                  border: `1px solid ${dark ? "rgba(239,68,68,0.16)" : "rgba(30,58,138,0.1)"}`,
                }}
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SkillsStrip({ dark }) {
  const skills = [
    { name: "React", icon: <FaReact /> },
    { name: "JavaScript", icon: <FaJs /> },
    { name: "C++", icon: <SiCplusplus /> },
    { name: "Python", icon: <FaPython /> },
    { name: "PostgreSQL", icon: <SiPostgresql /> },
    { name: "TailwindCSS", icon: <SiTailwindcss /> },
    { name: "Git", icon: <FaGit /> },
    { name: "REST APIs", icon: null },
    { name: "HTML", icon: <FaHtml5 /> },
    { name: "CSS", icon: <FaCss3Alt /> },
  ];
  return (
    <div
      className="skills-strip-shell"
      style={{
        overflow: "hidden",
        padding: "1.2rem 0",
        borderTop: `1px solid ${dark ? "rgba(239,68,68,0.2)" : "rgba(30,58,138,0.15)"}`,
        borderBottom: `1px solid ${dark ? "rgba(239,68,68,0.2)" : "rgba(30,58,138,0.15)"}`,
        background: dark ? "rgba(239,68,68,0.04)" : "rgba(30,58,138,0.03)",
      }}
    >
      <div
        className="skills-track"
        style={{
          display: "flex",
          gap: "3rem",
          animation: "marquee 18s linear infinite",
          whiteSpace: "nowrap",
        }}
      >
        {[...skills, ...skills].map((s, i) => (
          <span
            key={i}
            className="skill-pill"
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "1.1rem",
              letterSpacing: "0.18em",
              color: i % 3 === 0
                ? (dark ? "#ef4444" : "#1e3a8a")
                : (dark ? "rgba(245,245,245,0.35)" : "rgba(15,23,42,0.3)"),
            }}
          >
            {s.icon && <span style={{ fontSize: "1.2rem" }}>{s.icon}</span>}
              {s.name}
          </span>
        ))}
      </div>
    </div>
  );
}

function ProjectCard({ dark, title, desc, tags, image, liveLink, repoLink, index }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(
      ([e]) => { if (e.isIntersecting) setVis(true); },
      { threshold: 0.15 }
    );
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="project-card"
      style={{
        background: dark
          ? hover ? "rgba(239,68,68,0.07)" : "rgba(255,255,255,0.03)"
          : hover ? "rgba(30,58,138,0.06)" : "rgba(255,255,255,0.7)",
        border: `1px solid ${dark
          ? hover ? "rgba(239,68,68,0.5)" : "rgba(239,68,68,0.12)"
          : hover ? "rgba(30,58,138,0.4)" : "rgba(30,58,138,0.12)"}`,
        borderRadius: "4px",
        padding: "2rem",
        position: "relative",
        overflow: "hidden",
        cursor: liveLink || repoLink ? "pointer" : "default",
        opacity: vis ? 1 : 0,
        transform: vis ? "translateY(0)" : "translateY(40px)",
        transition: `opacity 0.7s ${index * 0.15}s, transform 0.7s ${index * 0.15}s cubic-bezier(0.22,1,0.36,1), background 0.3s, border-color 0.3s`,
        backdropFilter: "blur(8px)",
        boxShadow: hover
          ? dark
            ? "0 24px 60px rgba(0,0,0,0.38)"
            : "0 24px 60px rgba(30,58,138,0.12)"
          : "none",
      }}
    >
      <div
        style={{
          position: "absolute",
          inset: "-20% auto auto -10%",
          width: "160px",
          height: "160px",
          borderRadius: "50%",
          background: dark
            ? "radial-gradient(circle, rgba(239,68,68,0.16) 0%, transparent 72%)"
            : "radial-gradient(circle, rgba(30,58,138,0.14) 0%, transparent 72%)",
          opacity: hover ? 1 : 0.5,
          transition: "opacity 0.3s ease",
          pointerEvents: "none",
        }}
      />
      <div
        style={{
          position: "absolute",
          top: 0,
          right: 0,
          width: "3px",
          height: hover ? "100%" : "48px",
          background: dark ? "#ef4444" : "#1e3a8a",
          transition: "height 0.4s cubic-bezier(0.22,1,0.36,1)",
        }}
      />

      <div
        style={{
          position: "relative",
          width: "100%",
          height: "280px",
          marginBottom: "1.5rem",
          borderRadius: "4px",
          overflow: "hidden",
          border: `1px solid ${dark ? "rgba(239,68,68,0.14)" : "rgba(30,58,138,0.12)"}`,
          background: dark
            ? "linear-gradient(135deg, rgba(239,68,68,0.14), rgba(255,255,255,0.04))"
            : "linear-gradient(135deg, rgba(30,58,138,0.12), rgba(255,255,255,0.92))",
        }}
      >
        {image ? (
          <img
            src={image}
            alt={`${title} preview`}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "contain",
              objectPosition: "center",
              display: "block",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "1.1rem",
              letterSpacing: "0.12em",
              color: dark ? "rgba(245,245,245,0.6)" : "rgba(15,23,42,0.55)",
              textTransform: "uppercase",
            }}
          >
            Add Project Image
          </div>
        )}
      </div>

      <div
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "0.75rem",
          letterSpacing: "0.2em",
          color: dark ? "#ef4444" : "#1e3a8a",
          marginBottom: "0.75rem",
        }}
      >
        Project 0{index + 1}
      </div>

      <h3
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "1.8rem",
          letterSpacing: "0.04em",
          color: dark ? "#f5f5f5" : "#0f172a",
          margin: "0 0 0.75rem",
        }}
      >
        {title}
      </h3>

      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.9rem",
          color: dark ? "#a3a3a3" : "#475569",
          lineHeight: 1.7,
          margin: "0 0 1.5rem",
        }}
      >
        {desc}
      </p>

      <div style={{ display: "flex", gap: "0.5rem", flexWrap: "wrap" }}>
        {tags.map((t) => (
          <span
            key={t}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.72rem",
              fontWeight: 700,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              padding: "0.25rem 0.65rem",
              borderRadius: "2px",
              background: dark ? "rgba(239,68,68,0.12)" : "rgba(30,58,138,0.08)",
              color: dark ? "#ef4444" : "#1e3a8a",
            }}
          >
            {t}
          </span>
        ))}
      </div>
      <div
        style={{
          marginTop: "1.5rem",
          display: "flex",
          justifyContent: "flex-start",
          alignItems: "center",
          gap: "1rem",
          flexWrap: "wrap",
        }}
      >
        {liveLink ? (
          <a
            href={liveLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "1rem",
              letterSpacing: "0.08em",
              color: dark ? "#ef4444" : "#1e3a8a",
              transform: hover ? "translateX(0)" : "translateX(-6px)",
              transition: "transform 0.25s ease",
              textDecoration: "none",
            }}
          >
            Explore →
          </a>
        ) : null}

        {repoLink ? (
          <a
            href={repoLink}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "1rem",
              letterSpacing: "0.08em",
              color: dark ? "#f5f5f5" : "#0f172a",
              transform: hover ? "translateX(0)" : "translateX(-6px)",
              transition: "transform 0.25s ease",
              textDecoration: "none",
            }}
          >
            GitHub →
          </a>
        ) : null}

        {!liveLink && !repoLink ? (
          <span
            style={{
              fontFamily: "'Bebas Neue', cursive",
              fontSize: "1rem",
              letterSpacing: "0.08em",
              color: dark ? "#ef4444" : "#1e3a8a",
              opacity: 0.55,
            }}
          >
            Add links
          </span>
        ) : null}
      </div>
    </div>
  );
}

function Projects({ dark }) {
  const projects = [
    {
      title: "Keynes AI - Stock Predictor",
      desc: "Full-stack Application. Developed machine learning model achieving 65% prediction accuracy on stock price movement. Built responsive frontend interface using JavaScript, HTML, CSS for real-time interaction Collaborated in agile team environment using Git/GitHub version Control.",
      tags: ["Python", "JavaScript", "HTML", "CSS"],
      image: "",
      liveLink: "",
      repoLink: "https://github.com/wilsonquilli/KeynesAI.git",
    },
    {
      title: "Fysics is Phun - Web App Game",
      desc: "Built a scalable real-time classroom game supporting 15-25 users with synchronized multi-role gameplay via WebSockets; developed a FastAPI backend with session orchestration, automated scoring, and low-latency performance; led creation of 15+ responsive React interfaces and key features including deck import/export and analytics reporting in a 7-person team.",
      tags: ["Python", "React", "WebSockets", "TailwindCSS"],
      image: "FIP.png",
      liveLink: "https://cs487wfysicsisphun.vercel.app/host",
      repoLink: "https://github.com/AlrJohn/CS487W_Fysics_is_Phun.git",
    },
    {
      title: "Testly - AI Study App",
      desc: "An AI app for students to use to study for exams. Students can paste their notes or upload a pdf and the AI will create practice quizzes and flashcards for students to use.",
      tags: ["Python", "React", "TailwindCSS", "Next.js", "PostgreSQL"],
      image: "",
      liveLink: "",
      repoLink: "https://github.com/wilsonquilli/Testly.git",
    },
    {
      title: "Data Dashboard",
      desc: "Interactive analytics dashboard visualizing real-time metrics with custom chart components.",
      tags: ["TypeScript", "D3.js", "REST API"],
      image: "",
      liveLink: "",
      repoLink: "",
    },
  ];

  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="projects" className="section-shell" style={{ padding: "7rem 2.5rem", maxWidth: "1100px", margin: "0 auto", position: "relative" }}>
      <div
        aria-hidden="true"
        style={{
          position: "absolute",
          width: "240px",
          height: "240px",
          top: "10%",
          right: "-4%",
          borderRadius: "50%",
          background: dark
            ? "radial-gradient(circle, rgba(239,68,68,0.14) 0%, transparent 72%)"
            : "radial-gradient(circle, rgba(30,58,138,0.12) 0%, transparent 72%)",
          filter: "blur(8px)",
          pointerEvents: "none",
        }}
      />
      <SectionLabel dark={dark} label="Selected Work" />
      <h2
        ref={ref}
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          letterSpacing: "0.03em",
          color: dark ? "#f5f5f5" : "#0f172a",
          margin: "0 0 3rem",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateX(0)" : "translateX(-30px)",
          transition: "all 0.8s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        Projects
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(min(100%, 460px), 1fr))",
          gap: "1.5rem",
        }}
      >
        {projects.map((p, i) => (
          <ProjectCard key={p.title} dark={dark} {...p} index={i} />
        ))}
      </div>
    </section>
  );
}

function SectionLabel({ dark, label }) {
  return (
    <div
      style={{
        display: "flex",
        alignItems: "center",
        gap: "0.75rem",
        marginBottom: "1rem",
      }}
    >
      <div style={{ width: "28px", height: "2px", background: dark ? "#ef4444" : "#1e3a8a" }} />
      <span
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.75rem",
          letterSpacing: "0.22em",
          textTransform: "uppercase",
          color: dark ? "#ef4444" : "#1e3a8a",
          fontWeight: 700,
        }}
      >
        {label}
      </span>
    </div>
  );
}

function Experience({ dark }) {
  const exp = [
    {
      role: "Software Developer Intern",
      company: "Tech Company",
      period: "2024 — Present",
      bullets: [
        "Built and maintained React components across the product suite",
        "Improved API response times by 30% through query optimization",
        "Collaborated in agile sprints with a cross-functional team of 8",
      ],
    },
    {
      role: "Freelance Web Developer",
      company: "Self-Employed",
      period: "2023 — 2024",
      bullets: [
        "Delivered 5+ client websites from design to deployment",
        "Integrated payment and CMS systems for small businesses",
        "Maintained 100% client satisfaction rating",
      ],
    },
  ];

  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.1 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section id="experience" className="section-shell" style={{ padding: "7rem 2.5rem", maxWidth: "1100px", margin: "0 auto" }}>
      <SectionLabel dark={dark} label="Career" />
      <h2
        ref={ref}
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "clamp(2.5rem, 5vw, 4.5rem)",
          letterSpacing: "0.03em",
          color: dark ? "#f5f5f5" : "#0f172a",
          margin: "0 0 3rem",
          opacity: vis ? 1 : 0,
          transform: vis ? "translateX(0)" : "translateX(-30px)",
          transition: "all 0.8s cubic-bezier(0.22,1,0.36,1)",
        }}
      >
        Experience
      </h2>
      <div style={{ display: "flex", flexDirection: "column", gap: "0" }}>
        {exp.map((e, i) => (
          <ExpItem key={e.role} dark={dark} {...e} index={i} total={exp.length} />
        ))}
      </div>
    </section>
  );
}

function ExpItem({ dark, role, company, period, bullets, index, total }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  const [hover, setHover] = useState(false);

  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.15 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      className="experience-item"
      style={{
        display: "grid",
        gridTemplateColumns: "160px 1fr",
        gap: "2rem",
        padding: "2rem 0",
        borderBottom: index < total - 1
          ? `1px solid ${dark ? "rgba(239,68,68,0.12)" : "rgba(30,58,138,0.1)"}`
          : "none",
        opacity: vis ? 1 : 0,
        transform: vis ? (hover ? "translateY(-4px)" : "translateY(0)") : "translateY(24px)",
        transition: `opacity 0.7s ${index * 0.2}s, transform 0.7s ${index * 0.2}s cubic-bezier(0.22,1,0.36,1), background 0.25s ease, border-color 0.25s ease`,
        background: hover
          ? dark ? "rgba(255,255,255,0.025)" : "rgba(255,255,255,0.68)"
          : "transparent",
        borderRadius: "10px",
        paddingInline: "1rem",
      }}
    >
      <div>
        <span
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.78rem",
            color: dark ? "#ef4444" : "#1e3a8a",
            fontWeight: 700,
            letterSpacing: "0.05em",
            display: "inline-flex",
            padding: "0.45rem 0.7rem",
            borderRadius: "999px",
            border: `1px solid ${dark ? "rgba(239,68,68,0.18)" : "rgba(30,58,138,0.14)"}`,
            background: dark ? "rgba(239,68,68,0.06)" : "rgba(30,58,138,0.05)",
          }}
        >
          {period}
        </span>
      </div>
      <div>
        <h3
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "1.5rem",
            letterSpacing: "0.04em",
            color: dark ? "#f5f5f5" : "#0f172a",
            margin: "0 0 0.25rem",
          }}
        >
          {role}
        </h3>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "0.85rem",
            color: dark ? "#ef4444" : "#1e3a8a",
            margin: "0 0 1rem",
            fontWeight: 600,
          }}
        >
          {company}
        </p>
        <ul style={{ margin: 0, padding: 0, listStyle: "none", display: "flex", flexDirection: "column", gap: "0.45rem" }}>
          {bullets.map((b) => (
            <li
              key={b}
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "0.88rem",
                color: dark ? "#a3a3a3" : "#475569",
                display: "flex",
                alignItems: "flex-start",
                gap: "0.6rem",
              }}
            >
              <span style={{ color: dark ? "#ef4444" : "#1e3a8a", marginTop: "0.2rem" }}>▸</span>
              {b}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

function Contact({ dark }) {
  const ref = useRef(null);
  const [vis, setVis] = useState(false);
  useEffect(() => {
    const obs = new IntersectionObserver(([e]) => { if (e.isIntersecting) setVis(true); }, { threshold: 0.2 });
    if (ref.current) obs.observe(ref.current);
    return () => obs.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="section-shell"
      style={{
        padding: "7rem 2.5rem 5rem",
        maxWidth: "1100px",
        margin: "0 auto",
        textAlign: "center",
      }}
    >
      <div
        className="contact-panel"
        style={{
          position: "relative",
          overflow: "hidden",
          borderRadius: "18px",
          border: `1px solid ${dark ? "rgba(239,68,68,0.18)" : "rgba(30,58,138,0.12)"}`,
          background: dark ? "rgba(255,255,255,0.03)" : "rgba(255,255,255,0.8)",
          backdropFilter: "blur(12px)",
          padding: "clamp(2rem, 5vw, 4rem)",
          boxShadow: dark
            ? "0 24px 80px rgba(0,0,0,0.28)"
            : "0 24px 80px rgba(30,58,138,0.12)",
        }}
      >
        <div
          className="contact-ring"
          style={{
            position: "absolute",
            width: "280px",
            height: "280px",
            borderRadius: "50%",
            border: `1px dashed ${dark ? "rgba(239,68,68,0.28)" : "rgba(30,58,138,0.18)"}`,
            top: "-80px",
            right: "-60px",
            opacity: 0.8,
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: "auto auto -80px -60px",
            width: "220px",
            height: "220px",
            borderRadius: "50%",
            background: dark
              ? "radial-gradient(circle, rgba(239,68,68,0.18) 0%, transparent 70%)"
              : "radial-gradient(circle, rgba(30,58,138,0.14) 0%, transparent 70%)",
            filter: "blur(10px)",
          }}
        />
        <SectionLabel dark={dark} label="Get In Touch" />
        <h2
          style={{
            fontFamily: "'Bebas Neue', cursive",
            fontSize: "clamp(3rem, 8vw, 7rem)",
            letterSpacing: "0.03em",
            color: dark ? "#f5f5f5" : "#0f172a",
            margin: "0 0 1rem",
            opacity: vis ? 1 : 0,
            transform: vis ? "translateY(0)" : "translateY(32px)",
            transition: "all 0.9s cubic-bezier(0.22,1,0.36,1)",
            position: "relative",
            zIndex: 1,
          }}
        >
          Let's Build
          <br />
          <span style={{ color: dark ? "#ef4444" : "#1e3a8a" }}>Something</span>
        </h2>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            color: dark ? "#a3a3a3" : "#475569",
            fontSize: "1rem",
            maxWidth: "560px",
            margin: "0 auto 2.5rem",
            opacity: vis ? 1 : 0,
            transition: "opacity 0.9s 0.25s",
            position: "relative",
            zIndex: 1,
          }}
        >
          I'm currently open to new opportunities. Whether it's a project, role, or just a conversation — my inbox is always open.
        </p>
        <a
          href="mailto:wilo240105@gmail.com"
          style={{
            display: "inline-block",
            fontFamily: "'DM Sans', sans-serif",
            fontWeight: 700,
            fontSize: "0.85rem",
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "#fff",
            background: dark ? "#ef4444" : "#1e3a8a",
            padding: "1rem 2.5rem",
            borderRadius: "999px",
            textDecoration: "none",
            boxShadow: dark ? "0 4px 32px rgba(239,68,68,0.4)" : "0 4px 32px rgba(30,58,138,0.35)",
            transition: "transform 0.2s, box-shadow 0.2s",
            opacity: vis ? 1 : 0,
            transitionDelay: "0.45s",
            position: "relative",
            zIndex: 1,
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = "translateY(-4px) scale(1.02)";
            e.currentTarget.style.boxShadow = dark
              ? "0 12px 40px rgba(239,68,68,0.55)"
              : "0 12px 40px rgba(30,58,138,0.5)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = "translateY(0) scale(1)";
            e.currentTarget.style.boxShadow = dark
              ? "0 4px 32px rgba(239,68,68,0.4)"
              : "0 4px 32px rgba(30,58,138,0.35)";
          }}
        >
          Say Hello →
        </a>
      </div>
    </section>
  );
}

function Footer({ dark }) {
  const links = ["About", "Projects", "Experience", "Contact"];
  return (
    <footer
      style={{
        borderTop: `1px solid ${dark ? "rgba(239,68,68,0.15)" : "rgba(30,58,138,0.1)"}`,
        padding: "3rem 2.5rem",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        flexWrap: "wrap",
        gap: "1.5rem",
      }}
    >
      <span
        style={{
          fontFamily: "'Bebas Neue', cursive",
          fontSize: "1.4rem",
          letterSpacing: "0.08em",
          color: dark ? "#ef4444" : "#1e3a8a",
        }}
      >
        Wilson Quilli
      </span>
      <div style={{ display: "flex", gap: "2rem" }}>
        {links.map((l) => (
          <a
            key={l}
            href={`#${l.toLowerCase()}`}
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "0.8rem",
              color: dark ? "#737373" : "#64748b",
              textDecoration: "none",
              letterSpacing: "0.08em",
              transition: "color 0.2s",
            }}
            onMouseEnter={(e) => { e.currentTarget.style.color = dark ? "#ef4444" : "#1e3a8a"; }}
            onMouseLeave={(e) => { e.currentTarget.style.color = dark ? "#737373" : "#64748b"; }}
          >
            {l}
          </a>
        ))}
      </div>
      <div style={{ display: "flex", gap: "1rem" }}>
        {[
          { href: "https://github.com/wilsonquilli", label: "GitHub", path: "M12 .5C5.65.5.5 5.65.5 12a11.5 11.5 0 0 0 7.86 10.92c.58.1.79-.25.79-.56v-2.15c-3.2.7-3.88-1.36-3.88-1.36-.52-1.33-1.28-1.68-1.28-1.68-1.05-.72.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.95.1-.75.4-1.25.72-1.53-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.28 1.19-3.08-.12-.29-.52-1.47.11-3.07 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.82 0c2.21-1.49 3.19-1.18 3.19-1.18.64 1.6.24 2.78.12 3.07.74.8 1.19 1.82 1.19 3.08 0 4.43-2.69 5.4-5.26 5.69.42.36.78 1.08.78 2.18v3.24c0 .31.21.67.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5Z" },
          { href: "https://www.linkedin.com/in/wilson-quilli-8469b4291/", label: "LinkedIn", path: "M4.98 3.5A2.48 2.48 0 1 0 5 8.46 2.48 2.48 0 0 0 4.98 3.5ZM3 9h4v12H3Zm7 0h3.83v1.64h.06c.53-1 1.84-2.06 3.8-2.06C21 8.58 21 11.03 21 14.2V21h-4v-5.96c0-1.42-.03-3.25-1.98-3.25-1.98 0-2.28 1.55-2.28 3.15V21h-4Z" },
          { href: "mailto:wilo240105@gmail.com", label: "Email", path: "M3 5.25A2.25 2.25 0 0 1 5.25 3h13.5A2.25 2.25 0 0 1 21 5.25v13.5A2.25 2.25 0 0 1 18.75 21H5.25A2.25 2.25 0 0 1 3 18.75Zm2.31-.75L12 9.52l6.69-5.02ZM19.5 6 12 11.62 4.5 6v12.75c0 .41.34.75.75.75h13.5c.41 0 .75-.34.75-.75Z" },
        ].map(({ href, label, path }) => (
          <a
            key={label}
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={label}
            style={{
              width: "36px",
              height: "36px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              border: `1px solid ${dark ? "rgba(239,68,68,0.2)" : "rgba(30,58,138,0.2)"}`,
              color: dark ? "#737373" : "#64748b",
              transition: "all 0.2s",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.background = dark ? "rgba(239,68,68,0.1)" : "rgba(30,58,138,0.08)";
              e.currentTarget.style.color = dark ? "#ef4444" : "#1e3a8a";
              e.currentTarget.style.borderColor = dark ? "#ef4444" : "#1e3a8a";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.background = "transparent";
              e.currentTarget.style.color = dark ? "#737373" : "#64748b";
              e.currentTarget.style.borderColor = dark ? "rgba(239,68,68,0.2)" : "rgba(30,58,138,0.2)";
            }}
          >
            <svg viewBox="0 0 24 24" style={{ width: 16, height: 16, fill: "currentColor" }}>
              <path d={path} />
            </svg>
          </a>
        ))}
      </div>
      <p
        style={{
          width: "100%",
          textAlign: "center",
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "0.75rem",
          color: dark ? "#525252" : "#94a3b8",
          margin: 0,
        }}
      >
        © {new Date().getFullYear()} Wilson Quilli — All rights reserved.
      </p>
    </footer>
  );
}

function ThemeToggle({ dark, toggle }) {
  const [hover, setHover] = useState(false);
  return (
    <button
      onClick={toggle}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      aria-label="Toggle theme"
      style={{
        position: "fixed",
        bottom: "2rem",
        right: "2rem",
        zIndex: 200,
        width: "52px",
        height: "52px",
        borderRadius: "50%",
        border: `2px solid ${dark ? "#ef4444" : "#1e3a8a"}`,
        background: dark
          ? hover ? "#ef4444" : "rgba(10,10,10,0.85)"
          : hover ? "#1e3a8a" : "rgba(255,255,255,0.9)",
        color: dark ? (hover ? "#fff" : "#ef4444") : (hover ? "#fff" : "#1e3a8a"),
        cursor: "pointer",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backdropFilter: "blur(10px)",
        boxShadow: dark
          ? "0 4px 24px rgba(239,68,68,0.3)"
          : "0 4px 24px rgba(30,58,138,0.25)",
        transition: "all 0.25s ease",
        transform: hover ? "scale(1.1) rotate(15deg)" : "scale(1) rotate(0deg)",
      }}
    >
      {dark ? (
        <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: "currentColor" }}>
          <path d="M12 17a5 5 0 1 0 0-10 5 5 0 0 0 0 10Zm0 2a1 1 0 0 1 1 1v1a1 1 0 1 1-2 0v-1a1 1 0 0 1 1-1Zm0-14a1 1 0 0 1-1-1V3a1 1 0 1 1 2 0v1a1 1 0 0 1-1 1ZM4.22 5.64a1 1 0 0 1 1.42-1.42l.7.71A1 1 0 0 1 4.93 6.34l-.71-.7Zm13.44 12.72a1 1 0 0 1 1.41 1.41l-.7.71a1 1 0 0 1-1.42-1.42l.71-.7ZM3 12a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2H4a1 1 0 0 1-1-1Zm16 0a1 1 0 0 1 1-1h1a1 1 0 1 1 0 2h-1a1 1 0 0 1-1-1ZM4.22 18.36l.71-.7a1 1 0 1 1 1.41 1.41l-.7.71A1 1 0 0 1 4.22 18.36Zm13.44-12.72.7-.71A1 1 0 1 1 19.78 6.34l-.71.7a1 1 0 0 1-1.41-1.4Z" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" style={{ width: 20, height: 20, fill: "currentColor" }}>
          <path d="M21 12.79A9 9 0 1 1 11.21 3a7 7 0 0 0 9.79 9.79Z" />
        </svg>
      )}
    </button>
  );
}

export default function Portfolio() {
  const { dark, toggle } = useTheme();

  const bg = dark ? "#0a0a0a" : "#f8faff";

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Bebas+Neue&family=DM+Sans:wght@400;500;600;700&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        html, body, #root {
          width: 100%;
          min-height: 100%;
        }

        body {
          background: ${bg};
          overflow-x: hidden;
        }

        html { scroll-behavior: smooth; }

        @keyframes marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollLine {
          0%   { opacity: 1; transform: scaleY(1); transform-origin: top; }
          50%  { opacity: 0.4; transform: scaleY(0.4); transform-origin: top; }
          100% { opacity: 1; transform: scaleY(1); transform-origin: top; }
        }

        @keyframes ambientFloat {
          0%   { transform: translate3d(0, 0, 0) scale(1); }
          50%  { transform: translate3d(2%, -3%, 0) scale(1.05); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }

        @keyframes ambientFloatReverse {
          0%   { transform: translate3d(0, 0, 0) scale(1); }
          50%  { transform: translate3d(-3%, 2%, 0) scale(0.98); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }

        @keyframes pulseBorder {
          0%   { box-shadow: 0 0 0 0 ${dark ? "rgba(239,68,68,0.18)" : "rgba(30,58,138,0.14)"}; }
          70%  { box-shadow: 0 0 0 18px rgba(0,0,0,0); }
          100% { box-shadow: 0 0 0 0 rgba(0,0,0,0); }
        }

        @keyframes spinSlow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        .ambient-orb-one {
          animation: ambientFloat 16s ease-in-out infinite;
        }

        .ambient-orb-two {
          animation: ambientFloatReverse 20s ease-in-out infinite;
        }

        .hero-badge:first-child {
          animation: pulseBorder 3.4s ease-in-out infinite;
        }

        .about-visual-card {
          animation: ambientFloatReverse 14s ease-in-out infinite;
        }

        .skills-strip-shell {
          position: relative;
          mask-image: linear-gradient(to right, transparent, black 8%, black 92%, transparent);
        }

        .skills-track {
          will-change: transform;
        }

        .skill-pill {
          display: inline-flex;
          align-items: center;
          gap: 0.5rem;
        }

        .project-card:hover {
          transform: translateY(-10px) !important;
        }

        .metric-card {
          transition: transform 0.25s ease, border-color 0.25s ease, box-shadow 0.25s ease;
        }

        .metric-card:hover {
          transform: translateY(-4px);
          box-shadow: ${dark ? "0 18px 40px rgba(0,0,0,0.24)" : "0 18px 40px rgba(30,58,138,0.08)"};
        }

        .contact-ring {
          animation: spinSlow 18s linear infinite;
        }

        @media (min-width: 1025px) {
          .hero-section {
            padding-inline: 4rem;
          }

          .hero-content {
            width: min(100%, 960px);
            margin-inline: auto;
            text-align: center;
          }

          .hero-eyebrow {
            margin-bottom: 1.25rem !important;
          }

          .hero-title {
            max-width: 820px;
            font-size: clamp(6.25rem, 9vw, 8.5rem) !important;
            line-height: 0.84 !important;
            letter-spacing: 0.03em !important;
            margin-inline: auto !important;
            text-align: center;
          }

          .hero-subtitle-row {
            justify-content: center;
            margin-top: 1.75rem !important;
          }

          .hero-subtitle {
            font-size: 1.05rem !important;
            max-width: 560px;
            text-align: center;
          }

          .hero-actions {
            justify-content: center;
            align-items: center;
            gap: 1.1rem !important;
            max-width: 920px;
            margin-inline: auto;
            margin-top: 2.25rem !important;
          }

          .hero-button {
            flex: 0 0 auto;
            white-space: nowrap;
            padding: 0.95rem 1.7rem !important;
          }
        }

        @media (max-width: 1024px) {
          .ambient-grid {
            backgroundSize: 52px 52px !important;
          }

          .hero-section {
            padding-top: 6rem !important;
            padding-bottom: 4rem !important;
          }

          .hero-badges {
            gap: 0.55rem !important;
            margin-top: 1.1rem !important;
          }

          .hero-badge {
            font-size: 0.62rem !important;
            letter-spacing: 0.12em !important;
            padding: 0.52rem 0.78rem !important;
          }

          .hero-actions {
            justify-content: center;
          }

          .hero-button {
            width: 100%;
            max-width: 320px;
            text-align: center;
          }

          .skills-strip-shell {
            mask-image: none;
          }

          .experience-item {
            grid-template-columns: 1fr !important;
            gap: 1rem !important;
            padding-inline: 0 !important;
            border-radius: 0 !important;
            background: transparent !important;
          }

          .contact-panel {
            padding: 2rem 1.25rem !important;
            border-radius: 14px !important;
          }

          .contact-ring {
            width: 180px !important;
            height: 180px !important;
            right: -40px !important;
            top: -40px !important;
          }
        }

        ::selection {
          background: ${dark ? "rgba(239,68,68,0.3)" : "rgba(30,58,138,0.25)"};
        }

        ::-webkit-scrollbar {
          width: 4px;
        }
        ::-webkit-scrollbar-track {
          background: ${dark ? "#0a0a0a" : "#f8faff"};
        }
        ::-webkit-scrollbar-thumb {
          background: ${dark ? "#ef4444" : "#1e3a8a"};
          border-radius: 2px;
        }
      `}</style>

      <AmbientBackground dark={dark} />
      <CursorDot dark={dark} />

      <div
        style={{
          background: bg,
          minHeight: "100vh",
          transition: "background 0.5s ease",
          color: dark ? "#f5f5f5" : "#0f172a",
          position: "relative",
          zIndex: 1,
        }}
      >
        <Navbar dark={dark} />
        <Hero dark={dark} />
        <AboutSection dark={dark} />
        <SkillsStrip dark={dark} />
        <Projects dark={dark} />
        <Experience dark={dark} />
        <Contact dark={dark} />
        <Footer dark={dark} />
        <ThemeToggle dark={dark} toggle={toggle} />
      </div>
    </>
  );
}
