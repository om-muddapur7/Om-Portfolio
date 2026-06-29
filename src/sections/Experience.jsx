export default function ExperienceSection() {
  const experiences = [
    {
      role: "Senior Frontend Engineer",
      company: "Acme Corp",
      type: "Full-time",
      period: "Jan 2023 — Present",
      location: "Remote",
      desc: "Leading the frontend architecture of a B2B SaaS platform serving 50k+ users. Migrated the codebase from CRA to Next.js 14, cutting page load times by 58%. Mentoring a team of 4 junior developers.",
      highlights: ["Next.js migration cut LCP by 58%", "Built real-time collab features with CRDTs", "Introduced component design system used across 3 products"],
      tech: ["Next.js", "TypeScript", "Zustand", "Tailwind", "Storybook"],
      color: "#3b82f6",
    },
    {
      role: "Full Stack Developer",
      company: "Techify Studio",
      type: "Full-time",
      period: "Mar 2021 — Dec 2022",
      location: "Bangalore, IN",
      desc: "Designed and shipped end-to-end features for client projects across fintech and edtech verticals. Owned the Node.js microservices layer and PostgreSQL schema design.",
      highlights: ["Delivered 12 client projects on time", "Reduced API response time by 40% via query optimization", "Introduced automated E2E testing with Playwright"],
      tech: ["React", "Node.js", "PostgreSQL", "Docker", "Playwright"],
      color: "#8b5cf6",
    },
    {
      role: "Frontend Developer",
      company: "Startup Hub",
      type: "Contract",
      period: "Jun 2020 — Feb 2021",
      location: "Remote",
      desc: "Built marketing sites and dashboards for early-stage startups. Focused on performance, accessibility, and rapid iteration with tight deadlines.",
      highlights: ["Achieved 95+ Lighthouse scores across all projects", "Shipped 6 landing pages in 3 months", "Created reusable animation library with Framer Motion"],
      tech: ["React", "Framer Motion", "GSAP", "Figma"],
      color: "#06b6d4",
    },
    {
      role: "Junior Developer Intern",
      company: "WebWorks Agency",
      type: "Internship",
      period: "Jan 2020 — May 2020",
      location: "Pune, IN",
      desc: "Contributed to client websites and internal tooling. Learned production workflows, code review practices, and Git collaboration in a professional team environment.",
      highlights: ["Contributed to 4 live client websites", "Learned agile sprint workflow", "Built internal time-tracking tool in Vue.js"],
      tech: ["HTML/CSS", "JavaScript", "Vue.js", "Git"],
      color: "#10b981",
    },
  ];

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Syne:wght@700;800&display=swap');

        @keyframes gradientShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }

        .experience {
          background: #050d1a;
          padding: 120px 24px;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .experience::before {
          content: '';
          position: absolute;
          top: 50%; right: -300px;
          transform: translateY(-50%);
          width: 700px; height: 700px;
          background: radial-gradient(circle, rgba(37,99,235,0.05) 0%, transparent 70%);
          pointer-events: none;
        }

        .experience-inner { max-width: 900px; margin: 0 auto; }

        .section-eyebrow { display:inline-flex; align-items:center; gap:10px; margin-bottom:16px; }
        .eyebrow-line { width:32px; height:2px; background:linear-gradient(90deg,#3b82f6,#818cf8); border-radius:2px; }
        .eyebrow-text { font-size:12px; font-weight:600; letter-spacing:3px; text-transform:uppercase; color:#3b82f6; }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -1px;
          margin-bottom: 12px;
        }
        .section-title span {
          background: linear-gradient(135deg, #60a5fa, #3b82f6, #818cf8);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease infinite;
        }
        .section-sub { font-size:16px; color:rgba(255,255,255,0.4); margin-bottom:72px; }

        /* Timeline */
        .timeline { position: relative; }
        .timeline::before {
          content: '';
          position: absolute;
          left: 19px; top: 0; bottom: 0;
          width: 1px;
          background: linear-gradient(to bottom, rgba(59,130,246,0.5), rgba(129,140,248,0.2), transparent);
        }

        .timeline-item {
          display: flex;
          gap: 36px;
          margin-bottom: 48px;
          position: relative;
        }
        .timeline-item:last-child { margin-bottom: 0; }

        /* Dot */
        .timeline-dot {
          width: 38px;
          height: 38px;
          border-radius: 50%;
          border: 2px solid var(--accent);
          background: #050d1a;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
          position: relative;
          z-index: 1;
          transition: all 0.3s;
        }
        .timeline-dot::after {
          content: '';
          width: 10px; height: 10px;
          border-radius: 50%;
          background: var(--accent);
          transition: transform 0.3s;
        }
        .timeline-item:hover .timeline-dot {
          box-shadow: 0 0 0 6px rgba(59,130,246,0.1);
        }
        .timeline-item:hover .timeline-dot::after {
          transform: scale(1.3);
        }

        /* Card */
        .timeline-card {
          flex: 1;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 18px;
          padding: 28px 32px;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .timeline-card::before {
          content: '';
          position: absolute;
          left: 0; top: 0; bottom: 0;
          width: 3px;
          background: var(--accent);
          opacity: 0;
          transition: opacity 0.3s;
        }
        .timeline-item:hover .timeline-card {
          border-color: rgba(255,255,255,0.12);
          transform: translateX(4px);
          box-shadow: 0 12px 40px rgba(0,0,0,0.3);
        }
        .timeline-item:hover .timeline-card::before { opacity: 1; }

        .card-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-start;
          flex-wrap: wrap;
          gap: 12px;
          margin-bottom: 6px;
        }
        .card-role {
          font-family: 'Syne', sans-serif;
          font-size: 20px;
          font-weight: 700;
          color: #fff;
        }
        .card-period-badge {
          font-size: 12px;
          font-weight: 500;
          color: var(--accent);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 100px;
          padding: 4px 12px;
          white-space: nowrap;
        }

        .card-meta {
          display: flex;
          align-items: center;
          gap: 14px;
          margin-bottom: 16px;
          flex-wrap: wrap;
        }
        .card-company {
          font-size: 14px;
          font-weight: 600;
          color: var(--accent);
        }
        .meta-dot { width: 3px; height: 3px; border-radius: 50%; background: rgba(255,255,255,0.2); }
        .card-type, .card-location {
          font-size: 13px;
          color: rgba(255,255,255,0.35);
        }

        .card-desc {
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          line-height: 1.78;
          margin-bottom: 20px;
        }

        .card-highlights {
          list-style: none;
          margin-bottom: 20px;
          display: flex;
          flex-direction: column;
          gap: 8px;
        }
        .card-highlights li {
          display: flex;
          align-items: flex-start;
          gap: 10px;
          font-size: 13px;
          color: rgba(255,255,255,0.55);
          line-height: 1.5;
        }
        .card-highlights li::before {
          content: '';
          width: 5px; height: 5px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.7;
          flex-shrink: 0;
          margin-top: 6px;
        }

        .card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
        }
        .tech-badge {
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.45);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 5px;
          padding: 4px 10px;
        }

        @media (max-width: 640px) {
          .experience { padding: 80px 20px; }
          .timeline-item { gap: 20px; }
          .timeline-card { padding: 22px 20px; }
          .card-header { flex-direction: column; }
        }
      `}</style>

      <section className="experience" id="experience">
        <div className="experience-inner">
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Experience</span>
          </div>
          <h2 className="section-title">Where I've <span>worked</span></h2>
          <p className="section-sub">My professional journey so far.</p>

          <div className="timeline">
            {experiences.map((exp) => (
              <div className="timeline-item" key={exp.company + exp.role} style={{ "--accent": exp.color }}>
                <div className="timeline-dot" />
                <div className="timeline-card">
                  <div className="card-header">
                    <h3 className="card-role">{exp.role}</h3>
                    <span className="card-period-badge">{exp.period}</span>
                  </div>
                  <div className="card-meta">
                    <span className="card-company">{exp.company}</span>
                    <span className="meta-dot" />
                    <span className="card-type">{exp.type}</span>
                    <span className="meta-dot" />
                    <span className="card-location">{exp.location}</span>
                  </div>
                  <p className="card-desc">{exp.desc}</p>
                  <ul className="card-highlights">
                    {exp.highlights.map((h) => <li key={h}>{h}</li>)}
                  </ul>
                  <div className="card-tech">
                    {exp.tech.map((t) => <span className="tech-badge" key={t}>{t}</span>)}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
