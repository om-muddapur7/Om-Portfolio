export default function ProjectsSection() {
  const projects = [
    {
      tag: "Full Stack",
      title: "DevFlow",
      desc: "A developer productivity platform with Kanban boards, GitHub integration, and AI-powered task prioritization. Built for async remote teams.",
      tech: ["Next.js", "TypeScript", "Prisma", "PostgreSQL", "OpenAI"],
      color: "#3b82f6",
      link: "#",
      repo: "#",
      featured: true,
      // SVG preview illustration — Kanban board UI
      preview: "kanban",
    },
    {
      tag: "SaaS",
      title: "InvoiceAI",
      desc: "Automated invoice generation and payment tracking SaaS. Stripe integration, PDF export, and multi-currency support.",
      tech: ["React", "Node.js", "Stripe", "MongoDB"],
      color: "#8b5cf6",
      link: "#",
      repo: "#",
      featured: true,
      // SVG preview illustration — invoice/dashboard UI
      preview: "invoice",
    },
    {
      tag: "Open Source",
      title: "react-snap-query",
      desc: "A lightweight data-fetching library for React with caching, pagination, and optimistic updates. 1.2k GitHub stars.",
      tech: ["TypeScript", "React", "Rollup"],
      color: "#06b6d4",
      link: "#",
      repo: "#",
      featured: false,
    },
    {
      tag: "Web App",
      title: "PulseMetrics",
      desc: "Real-time analytics dashboard for e-commerce stores. Websocket-powered live charts and custom alerting rules.",
      tech: ["React", "Socket.io", "Redis", "Chart.js"],
      color: "#10b981",
      link: "#",
      repo: "#",
      featured: false,
    },
    {
      tag: "Mobile Web",
      title: "TrailMate",
      desc: "Offline-first hiking companion PWA. GPX track recording, weather overlays, and community trail ratings.",
      tech: ["Next.js", "Mapbox", "IndexedDB", "Tailwind"],
      color: "#f59e0b",
      link: "#",
      repo: "#",
      featured: false,
    },
    {
      tag: "API",
      title: "AuthForge",
      desc: "Drop-in authentication microservice with OAuth2, magic links, TOTP, and webhook events. Docker-ready.",
      tech: ["Node.js", "GraphQL", "Redis", "Docker"],
      color: "#ef4444",
      link: "#",
      repo: "#",
      featured: false,
    },
  ];

  // SVG card illustrations
  const CardPreview = ({ type, color }) => {
    if (type === "kanban") {
      return (
        <svg viewBox="0 0 440 180" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: "10px", display: "block" }}>
          <rect width="440" height="180" rx="10" fill="#0a1628" />
          {/* Top bar */}
          <rect x="0" y="0" width="440" height="32" rx="10" fill="#0d1e35" />
          <rect x="0" y="22" width="440" height="10" fill="#0d1e35" />
          <circle cx="16" cy="16" r="5" fill="#ef4444" opacity="0.7"/>
          <circle cx="30" cy="16" r="5" fill="#f59e0b" opacity="0.7"/>
          <circle cx="44" cy="16" r="5" fill="#22c55e" opacity="0.7"/>
          <rect x="70" y="10" width="80" height="12" rx="4" fill="rgba(255,255,255,0.07)"/>
          <rect x="300" y="9" width="60" height="14" rx="6" fill={color} opacity="0.3"/>
          {/* 3 columns */}
          {/* Col 1 - Todo */}
          <rect x="12" y="44" width="128" height="128" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
          <text x="22" y="62" fill="rgba(255,255,255,0.3)" fontSize="9" fontFamily="monospace">TODO</text>
          <rect x="22" y="70" width="108" height="28" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
          <rect x="28" y="76" width="50" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
          <rect x="28" y="86" width="80" height="5" rx="2.5" fill="rgba(255,255,255,0.08)"/>
          <rect x="22" y="104" width="108" height="28" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
          <rect x="28" y="110" width="40" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
          <rect x="28" y="120" width="70" height="5" rx="2.5" fill="rgba(255,255,255,0.08)"/>
          {/* Col 2 - In Progress */}
          <rect x="156" y="44" width="128" height="128" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
          <text x="166" y="62" fill={color} fontSize="9" fontFamily="monospace" opacity="0.8">IN PROGRESS</text>
          <rect x="166" y="70" width="108" height="38" rx="5" fill={color} fillOpacity="0.08" stroke={color} strokeOpacity="0.2" strokeWidth="1"/>
          <rect x="172" y="76" width="65" height="6" rx="3" fill="rgba(255,255,255,0.25)"/>
          <rect x="172" y="86" width="88" height="5" rx="2.5" fill="rgba(255,255,255,0.1)"/>
          <circle cx="174" cy="100" r="3" fill={color} opacity="0.6"/>
          <rect x="180" y="97" width="45" height="5" rx="2.5" fill="rgba(255,255,255,0.1)"/>
          <rect x="166" y="114" width="108" height="28" rx="5" fill="rgba(255,255,255,0.05)" stroke="rgba(255,255,255,0.07)" strokeWidth="1"/>
          <rect x="172" y="120" width="55" height="6" rx="3" fill="rgba(255,255,255,0.2)"/>
          <rect x="172" y="130" width="75" height="5" rx="2.5" fill="rgba(255,255,255,0.08)"/>
          {/* Col 3 - Done */}
          <rect x="300" y="44" width="128" height="128" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
          <text x="310" y="62" fill="rgba(34,197,94,0.6)" fontSize="9" fontFamily="monospace">DONE</text>
          <rect x="310" y="70" width="108" height="28" rx="5" fill="rgba(34,197,94,0.05)" stroke="rgba(34,197,94,0.12)" strokeWidth="1"/>
          <rect x="316" y="76" width="45" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
          <rect x="316" y="86" width="75" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
          <rect x="390" y="74" width="16" height="16" rx="4" fill="rgba(34,197,94,0.15)"/>
          <path d="M394 82 l3 3 l5-5" stroke="#22c55e" strokeWidth="1.5" fill="none" strokeLinecap="round"/>
          <rect x="310" y="104" width="108" height="28" rx="5" fill="rgba(34,197,94,0.05)" stroke="rgba(34,197,94,0.12)" strokeWidth="1"/>
          <rect x="316" y="110" width="60" height="6" rx="3" fill="rgba(255,255,255,0.15)"/>
          <rect x="316" y="120" width="85" height="5" rx="2.5" fill="rgba(255,255,255,0.06)"/>
        </svg>
      );
    }
    if (type === "invoice") {
      return (
        <svg viewBox="0 0 440 180" xmlns="http://www.w3.org/2000/svg" style={{ width: "100%", borderRadius: "10px", display: "block" }}>
          <rect width="440" height="180" rx="10" fill="#0a1628" />
          {/* sidebar */}
          <rect x="0" y="0" width="90" height="180" rx="10" fill="#080f1e"/>
          <rect x="90" y="0" width="1" height="180" fill="rgba(255,255,255,0.04)"/>
          <rect x="10" y="16" width="70" height="22" rx="8" fill={color} fillOpacity="0.2"/>
          <text x="28" y="31" fill={color} fontSize="10" fontFamily="monospace" fontWeight="bold">INV</text>
          {[54, 82, 110, 138, 166].map((y, i) => (
            <g key={i}>
              <rect x="14" y={y} width="24" height="24" rx="6" fill={i === 0 ? `${color}22` : "rgba(255,255,255,0.03)"}/>
              <rect x="44" y={y + 5} width="36" height="6" rx="3" fill={i === 0 ? `${color}55` : "rgba(255,255,255,0.06)"}/>
            </g>
          ))}
          {/* main */}
          <rect x="106" y="14" width="160" height="152" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
          {/* invoice header */}
          <rect x="116" y="24" width="60" height="8" rx="3" fill="rgba(255,255,255,0.25)"/>
          <rect x="116" y="36" width="40" height="6" rx="3" fill="rgba(255,255,255,0.08)"/>
          <rect x="200" y="24" width="56" height="24" rx="6" fill={color} fillOpacity="0.15" stroke={color} strokeOpacity="0.25" strokeWidth="1"/>
          <text x="213" y="40" fill={color} fontSize="9" fontFamily="monospace">PAID</text>
          {/* line items */}
          <rect x="116" y="66" width="140" height="1" fill="rgba(255,255,255,0.05)"/>
          {[78, 96, 114].map((y, i) => (
            <g key={i}>
              <rect x="116" y={y} width={60 + i * 10} height="6" rx="3" fill="rgba(255,255,255,0.08)"/>
              <rect x="216" y={y} width="30" height="6" rx="3" fill="rgba(255,255,255,0.12)"/>
            </g>
          ))}
          <rect x="116" y="130" width="140" height="1" fill="rgba(255,255,255,0.05)"/>
          <rect x="116" y="140" width="50" height="7" rx="3" fill="rgba(255,255,255,0.15)"/>
          <rect x="200" y="138" width="46" height="10" rx="4" fill={color} fillOpacity="0.3"/>
          <rect x="204" y="141" width="38" height="5" rx="2" fill={color} fillOpacity="0.7"/>
          {/* stats mini cards */}
          <rect x="278" y="14" width="148" height="152" rx="8" fill="transparent"/>
          {[
            { y: 14, val: "$12.4k", label: "Revenue", c: color },
            { y: 72, val: "24", label: "Invoices", c: "#22c55e" },
            { y: 130, val: "3", label: "Overdue", c: "#ef4444" },
          ].map((s) => (
            <g key={s.label}>
              <rect x="278" y={s.y} width="148" height="50" rx="8" fill="rgba(255,255,255,0.03)" stroke="rgba(255,255,255,0.06)" strokeWidth="1"/>
              <text x="290" y={s.y + 22} fill={s.c} fontSize="16" fontFamily="monospace" fontWeight="bold">{s.val}</text>
              <text x="290" y={s.y + 36} fill="rgba(255,255,255,0.25)" fontSize="9" fontFamily="monospace">{s.label}</text>
              <rect x="392" y={s.y + 12} width="22" height="22" rx="6" fill={s.c} fillOpacity="0.12"/>
            </g>
          ))}
        </svg>
      );
    }
    return null;
  };

  const featured = projects.filter((p) => p.featured);
  const rest = projects.filter((p) => !p.featured);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Syne:wght@700;800&display=swap');

        @keyframes gradientShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }

        .projects {
          background: #060f1e;
          padding: 120px 24px;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .projects::before {
          content: '';
          position: absolute;
          bottom: -200px; left: -200px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(37,99,235,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .projects-inner { max-width: 1100px; margin: 0 auto; }

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
        .section-sub {
          font-size: 16px;
          color: rgba(255,255,255,0.4);
          margin-bottom: 64px;
          max-width: 480px;
        }

        /* Featured — big cards side by side */
        .featured-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }

        .project-card-featured {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          overflow: hidden;
          position: relative;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .project-card-featured::before {
          content: '';
          position: absolute;
          top: 0; left: 0; right: 0;
          height: 3px;
          background: var(--accent);
          opacity: 0;
          transition: opacity 0.3s;
          z-index: 1;
        }
        .project-card-featured:hover {
          border-color: rgba(255,255,255,0.12);
          transform: translateY(-6px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.4);
        }
        .project-card-featured:hover::before { opacity: 1; }

        .card-preview-wrap {
          width: 100%;
          background: #070e1c;
          border-bottom: 1px solid rgba(255,255,255,0.05);
          padding: 16px;
          box-sizing: border-box;
          overflow: hidden;
        }

        .card-body {
          padding: 28px 28px 28px;
          display: flex;
          flex-direction: column;
          flex: 1;
        }

        /* Regular cards — 3 col grid */
        .cards-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
        }
        .project-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 28px;
          position: relative;
          overflow: hidden;
          transition: all 0.3s ease;
          display: flex;
          flex-direction: column;
        }
        .project-card:hover {
          border-color: rgba(255,255,255,0.12);
          transform: translateY(-4px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.35);
        }

        .card-tag {
          display: inline-flex;
          align-items: center;
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: var(--accent);
          margin-bottom: 16px;
          gap: 6px;
        }
        .card-tag::before {
          content: '';
          width: 6px; height: 6px;
          border-radius: 50%;
          background: var(--accent);
          opacity: 0.7;
        }

        .card-title {
          font-family: 'Syne', sans-serif;
          font-size: 22px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 12px;
          line-height: 1.2;
        }
        .project-card-featured .card-title { font-size: 24px; }

        .card-desc {
          font-size: 14px;
          color: rgba(255,255,255,0.45);
          line-height: 1.75;
          flex: 1;
          margin-bottom: 24px;
        }

        .card-tech {
          display: flex;
          flex-wrap: wrap;
          gap: 7px;
          margin-bottom: 24px;
        }
        .tech-badge {
          font-size: 11px;
          font-weight: 500;
          color: rgba(255,255,255,0.5);
          background: rgba(255,255,255,0.05);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 5px;
          padding: 4px 10px;
        }

        .card-links {
          display: flex;
          gap: 12px;
          margin-top: auto;
        }
        .card-link {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 13px;
          font-weight: 500;
          text-decoration: none;
          color: rgba(255,255,255,0.5);
          transition: color 0.2s;
        }
        .card-link:hover { color: #fff; }
        .card-link-primary {
          color: var(--accent);
          border-bottom: 1px solid transparent;
        }
        .card-link-primary:hover { border-color: var(--accent); color: var(--accent); }
        .card-link svg { width: 14px; height: 14px; }

        @media (max-width: 900px) {
          .featured-grid { grid-template-columns: 1fr; }
          .cards-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .projects { padding: 80px 20px; }
          .cards-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      <section className="projects" id="projects">
        <div className="projects-inner">
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Projects</span>
          </div>
          <h2 className="section-title">Things I've <span>built</span></h2>
          <p className="section-sub">A selection of projects I'm proud of — from side experiments to production apps.</p>

          {/* Featured */}
          <div className="featured-grid">
            {featured.map((p) => (
              <div className="project-card-featured" key={p.title} style={{ "--accent": p.color }}>
                {p.preview && (
                  <div className="card-preview-wrap">
                    <CardPreview type={p.preview} color={p.color} />
                  </div>
                )}
                <div className="card-body">
                  <span className="card-tag">{p.tag}</span>
                  <h3 className="card-title">{p.title}</h3>
                  <p className="card-desc">{p.desc}</p>
                  <div className="card-tech">
                    {p.tech.map((t) => <span className="tech-badge" key={t}>{t}</span>)}
                  </div>
                  <div className="card-links">
                    <a href={p.link} className="card-link card-link-primary" target="_blank" rel="noreferrer">
                      Live demo
                      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                    </a>
                    <a href={p.repo} className="card-link" target="_blank" rel="noreferrer">
                      <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                      GitHub
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Rest */}
          <div className="cards-grid">
            {rest.map((p) => (
              <div className="project-card" key={p.title} style={{ "--accent": p.color }}>
                <span className="card-tag">{p.tag}</span>
                <h3 className="card-title">{p.title}</h3>
                <p className="card-desc">{p.desc}</p>
                <div className="card-tech">
                  {p.tech.map((t) => <span className="tech-badge" key={t}>{t}</span>)}
                </div>
                <div className="card-links">
                  <a href={p.link} className="card-link card-link-primary" target="_blank" rel="noreferrer">
                    Live demo
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6M15 3h6v6M10 14L21 3"/></svg>
                  </a>
                  <a href={p.repo} className="card-link" target="_blank" rel="noreferrer">
                    <svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}