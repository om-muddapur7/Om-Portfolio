import {
	// Frontend
	SiHtml5,
	SiJavascript,
	SiTypescript,
	SiReact,
	SiNextdotjs,
	SiTailwindcss,
	SiBootstrap,

	// Backend
	SiNodedotjs,
	SiExpress,
	SiPrisma,
	SiFirebase,
	SiSupabase,

	// Database
	SiMongodb,
	SiPostgresql,
	SiMysql,

	// Tools
	SiGit,
	SiGithub,
	SiVercel,
	SiRender,
	SiPostman,
	SiNpm,

	// Libraries
	SiRedux,
	SiReactrouter,
	SiAxios,

	// Services
	SiGoogle,
	SiJsonwebtokens,
} from "react-icons/si";

const techLogos = {
	HTML5: <SiHtml5 className="text-orange-500" />,
	JavaScript: <SiJavascript className="text-yellow-400" />,
	TypeScript: <SiTypescript className="text-blue-600" />,
	React: <SiReact className="text-cyan-400" />,
	"React Native": <SiReact className="text-cyan-400" />,
	"Next.js": <SiNextdotjs />,
	Firebase: <SiFirebase className="text-orange-400" />,
	Supabase: <SiSupabase className="text-emerald-500" />,
	Prisma: <SiPrisma className="text-slate-200" />,
	"Prisma ORM": <SiPrisma className="text-slate-200" />,
	"Tailwind CSS": <SiTailwindcss className="text-cyan-400" />,
	Bootstrap: <SiBootstrap className="text-violet-500" />,
	"Node.js": <SiNodedotjs className="text-green-500" />,
	"Express.js": <SiExpress />,
	MongoDB: <SiMongodb className="text-green-600" />,
	MySQL: <SiMysql className="text-blue-500" />,
	PostgreSQL: <SiPostgresql className="text-blue-700" />,
	Prisma: <SiPrisma />,
	Git: <SiGit className="text-orange-500" />,
	GitHub: <SiGithub />,
	Vercel: <SiVercel />,
	Render: <SiRender />,
	Postman: <SiPostman className="text-orange-500" />,
	npm: <SiNpm className="text-red-500" />,
	"Redux Toolkit": <SiRedux className="text-purple-500" />,
	"React Router": <SiReactrouter className="text-red-500" />,
	Axios: <SiAxios />,
	"JWT Authentication": <SiJsonwebtokens className="text-pink-500" />,
	"Google OAuth": <SiGoogle className="text-red-500" />,
};

const DefaultLogo = ({ name }) => {
	const initials = name
		.split(" ")
		.map((w) => w[0])
		.join("")
		.slice(0, 2)
		.toUpperCase();
	return (
		<span
			style={{
				display: "inline-flex",
				alignItems: "center",
				justifyContent: "center",
				width: 14,
				height: 14,
				fontSize: 7,
				fontWeight: 700,
				borderRadius: 3,
				background: "rgba(255,255,255,0.12)",
				color: "rgba(255,255,255,0.7)",
				lineHeight: 1,
				flexShrink: 0,
			}}
		>
			{initials}
		</span>
	);
};

export default function AboutSection() {
	const skills = [
		{
			category: "Frontend",
			items: [
				"HTML5",
				"CSS3",
				"JavaScript",
				"TypeScript",
				"React",
				"Next.js",
				"Tailwind CSS",
				"Bootstrap",
				"React Native"
			],
		},
		{
			category: "Backend",
			items: [
				"Node.js",
				"Bun.js",
				"Express.js",
				"REST APIs",
				"JWT Authentication",
				"Google OAuth",
			],
		},
		{
			category: "Database",
			items: ["MongoDB", "PostgreSQL", "MySQL", "Firebase", "Supabase", "Prisma"],
		},
		{
			category: "Tools & Platforms",
			items: ["Git", "GitHub", "Vercel", "Render", "Postman", "VS Code", "npm"],
		},
	];

	const stats = [
		{ value: "10+", label: "Projects Built" },
		{ value: "200+", label: "GitHub Commits" },
		{ value: "15+", label: "Technologies Learned" },
		{ value: "100%", label: "Passion for Learning" },
	];

	return (
		<>
			<style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Syne:wght@700;800&display=swap');

        @keyframes gradientShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }

        .about {
          background: #050d1a;
          padding: 120px 24px;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .about::before {
          content: '';
          position: absolute;
          top: -200px; right: -200px;
          width: 600px; height: 600px;
          background: radial-gradient(circle, rgba(37,99,235,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .about-inner { max-width: 1100px; margin: 0 auto; }

        .section-eyebrow { display: inline-flex; align-items: center; gap: 10px; margin-bottom: 16px; }
        .eyebrow-line { width: 32px; height: 2px; background: linear-gradient(90deg, #3b82f6, #818cf8); border-radius: 2px; }
        .eyebrow-text { font-size: 12px; font-weight: 600; letter-spacing: 3px; text-transform: uppercase; color: #3b82f6; }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -1px;
          margin-bottom: 20px;
        }
        .section-title span {
          background: linear-gradient(135deg, #60a5fa, #3b82f6, #818cf8);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease infinite;
        }

        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 80px;
          align-items: start;
          margin-bottom: 80px;
        }

        .about-text p { font-size: 16px; color: rgba(255,255,255,0.5); line-height: 1.85; margin-bottom: 20px; }
        .about-text p:last-child { margin-bottom: 0; }
        .about-text strong { color: rgba(255,255,255,0.85); font-weight: 500; }

        .stats-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .stat-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 16px;
          padding: 24px;
          transition: all 0.25s;
        }
        .stat-card:hover {
          border-color: rgba(59,130,246,0.3);
          background: rgba(59,130,246,0.05);
          transform: translateY(-3px);
        }
        .stat-value {
          font-family: 'Syne', sans-serif;
          font-size: 36px;
          font-weight: 800;
          background: linear-gradient(135deg, #60a5fa, #818cf8);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          line-height: 1;
          margin-bottom: 6px;
        }
        .stat-label { font-size: 13px; color: rgba(255,255,255,0.4); font-weight: 500; }

        .about-divider {
          width: 100%;
          height: 1px;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.07), transparent);
          margin: 80px 0;
        }

        /* Skills */
        .skills-title { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 32px; }
        .skills-grid { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
        .skill-group-label { font-size: 11px; font-weight: 600; letter-spacing: 2.5px; text-transform: uppercase; color: #3b82f6; margin-bottom: 14px; }
        .skill-tags { display: flex; flex-wrap: wrap; gap: 8px; }

        .skill-tag {
          display: inline-flex;
          align-items: center;
          gap: 7px;
          font-size: 12px;
          font-weight: 500;
          color: rgba(255,255,255,0.65);
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 8px;
          padding: 6px 12px;
          transition: all 0.2s;
          cursor: default;
        }
        .skill-tag:hover {
          color: #fff;
          border-color: rgba(59,130,246,0.35);
          background: rgba(59,130,246,0.08);
          transform: translateY(-1px);
        }
        .skill-tag svg, .skill-tag span {
          flex-shrink: 0;
        }

        @media (max-width: 768px) {
          .about { padding: 80px 20px; }
          .about-grid { grid-template-columns: 1fr; gap: 48px; }
          .skills-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 480px) {
          .skills-grid { grid-template-columns: 1fr; }
          .stats-grid { grid-template-columns: 1fr 1fr; }
        }
      `}</style>

			<section className="about" id="about">
				<div className="about-inner">
					<div className="about-grid">
						<div>
							<div className="section-eyebrow">
								<div className="eyebrow-line" />
								<span className="eyebrow-text">About Me</span>
							</div>
							<h2 className="section-title">
								Passionate about <span>building great things</span>
							</h2>
							<div className="about-text">
								<p>
									Hi, I'm <strong>Om Muddapur</strong> — a passionate{" "}
									<strong>Full Stack Developer</strong> based in India. I enjoy
									building modern, responsive, and scalable web applications
									that deliver seamless user experiences.
								</p>

								<p>
									My primary tech stack includes{" "}
									<strong>
										React, Next.js, TypeScript, Node.js, Express.js, and MongoDB
									</strong>
									. I focus on writing clean, maintainable code while
									emphasizing performance, accessibility, and intuitive UI
									design.
								</p>

								<p>
									I'm constantly learning new technologies, exploring modern
									development practices, and building projects that strengthen
									my skills. I'm currently seeking opportunities where I can
									contribute, grow as a software engineer, and solve real-world
									problems through technology.
								</p>
							</div>
						</div>

						<div className="stats-grid">
							{stats.map((s) => (
								<div className="stat-card" key={s.label}>
									<div className="stat-value">{s.value}</div>
									<div className="stat-label">{s.label}</div>
								</div>
							))}
						</div>
					</div>

					<div className="about-divider" />

					<p className="skills-title">Skills & Technologies</p>
					<div className="skills-grid">
						{skills.map((group) => (
							<div key={group.category}>
								<p className="skill-group-label">{group.category}</p>
								<div className="skill-tags">
									{group.items.map((item) => (
										<span className="skill-tag" key={item}>
											{techLogos[item] ?? <DefaultLogo name={item} />}
											{item}
										</span>
									))}
								</div>
							</div>
						))}
					</div>
				</div>
			</section>
		</>
	);
}
