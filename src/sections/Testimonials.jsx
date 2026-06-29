import { useState } from "react";

const testimonials = [
  {
    name: "Sarah Chen",
    role: "CTO",
    company: "DevFlow Inc.",
    avatar: "SC",
    color: "#3b82f6",
    text: "Om delivered the platform rewrite in record time without sacrificing quality. His code is clean, his communication is proactive, and he genuinely cares about the product outcome — not just his tickets.",
    rating: 5,
  },
  {
    name: "Marcus Webb",
    role: "Product Manager",
    company: "Techify Studio",
    avatar: "MW",
    color: "#8b5cf6",
    text: "Working with Om was a breath of fresh air. He asked the right questions before writing a single line of code, caught edge cases we'd missed in spec, and the final product exceeded every expectation.",
    rating: 5,
  },
  {
    name: "Priya Nair",
    role: "Founder",
    company: "InvoiceAI",
    avatar: "PN",
    color: "#06b6d4",
    text: "We went from idea to production in 8 weeks. Om managed the entire technical side — architecture, third-party integrations, deployment — and kept us updated daily. Absolute professional.",
    rating: 5,
  },
  {
    name: "James Kowalski",
    role: "Engineering Lead",
    company: "PulseMetrics",
    avatar: "JK",
    color: "#10b981",
    text: "Om refactored our legacy dashboard and introduced a design system that our whole team now builds on. The performance improvements alone paid for the engagement three times over.",
    rating: 5,
  },
  {
    name: "Leila Ahmadi",
    role: "Head of Design",
    company: "TrailMate",
    avatar: "LA",
    color: "#f59e0b",
    text: "Rare to find a developer who actually reads the Figma file. Om translated every detail faithfully and flagged things that would've caused issues at implementation — incredibly collaborative.",
    rating: 5,
  },
  {
    name: "Tom Bradley",
    role: "CEO",
    company: "Startup Hub",
    avatar: "TB",
    color: "#ef4444",
    text: "Hired Om on a contract and ended up working with him for over a year. Reliable, technically sharp, and he ships. That's rarer than you'd think.",
    rating: 5,
  },
];

function StarRating({ count }) {
  return (
    <div style={{ display: "flex", gap: 3 }}>
      {Array.from({ length: count }).map((_, i) => (
        <svg key={i} width="14" height="14" viewBox="0 0 24 24" fill="#f59e0b">
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/>
        </svg>
      ))}
    </div>
  );
}

export default function TestimonialsSection() {
  const [active, setActive] = useState(0);

  const prev = () => setActive((a) => (a - 1 + testimonials.length) % testimonials.length);
  const next = () => setActive((a) => (a + 1) % testimonials.length);

  // Show 3 at a time on desktop (active, active+1, active+2)
  const visible = [0, 1, 2].map((offset) => testimonials[(active + offset) % testimonials.length]);

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Syne:wght@700;800&display=swap');

        @keyframes gradientShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }
        @keyframes fadeSlide {
          from { opacity: 0; transform: translateY(12px); }
          to   { opacity: 1; transform: translateY(0); }
        }

        .testimonials {
          background: #060f1e;
          padding: 120px 24px;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .testimonials::before {
          content: '';
          position: absolute;
          top: -100px; left: 50%; transform: translateX(-50%);
          width: 800px; height: 400px;
          background: radial-gradient(ellipse, rgba(37,99,235,0.07) 0%, transparent 70%);
          pointer-events: none;
        }

        .testimonials-inner { max-width: 1100px; margin: 0 auto; }

        .section-eyebrow { display:inline-flex; align-items:center; gap:10px; margin-bottom:16px; }
        .eyebrow-line { width:32px; height:2px; background:linear-gradient(90deg,#3b82f6,#818cf8); border-radius:2px; }
        .eyebrow-text { font-size:12px; font-weight:600; letter-spacing:3px; text-transform:uppercase; color:#3b82f6; }

        .section-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 56px;
          flex-wrap: wrap;
          gap: 24px;
        }

        .section-title {
          font-family: 'Syne', sans-serif;
          font-size: clamp(32px, 5vw, 52px);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          letter-spacing: -1px;
        }
        .section-title span {
          background: linear-gradient(135deg, #60a5fa, #3b82f6, #818cf8);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease infinite;
        }

        /* Nav arrows */
        .nav-arrows { display: flex; gap: 12px; }
        .arrow-btn {
          width: 44px; height: 44px;
          border-radius: 50%;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          color: rgba(255,255,255,0.6);
          display: flex; align-items: center; justify-content: center;
          cursor: pointer;
          transition: all 0.2s;
        }
        .arrow-btn:hover {
          border-color: #3b82f6;
          background: rgba(59,130,246,0.1);
          color: #60a5fa;
        }
        .arrow-btn svg { width: 18px; height: 18px; }

        /* Cards */
        .testimonials-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 20px;
          margin-bottom: 40px;
          animation: fadeSlide 0.4s ease;
        }

        .t-card {
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 20px;
          padding: 32px;
          display: flex;
          flex-direction: column;
          gap: 20px;
          transition: all 0.3s;
          position: relative;
          overflow: hidden;
        }
        .t-card:first-child {
          border-color: rgba(59,130,246,0.25);
          background: rgba(59,130,246,0.04);
        }
        .t-card:hover {
          border-color: rgba(255,255,255,0.12);
          transform: translateY(-4px);
          box-shadow: 0 16px 48px rgba(0,0,0,0.35);
        }

        /* Quote mark */
        .t-card::before {
          content: '"';
          position: absolute;
          top: -8px; right: 24px;
          font-family: 'Syne', sans-serif;
          font-size: 100px;
          font-weight: 800;
          color: rgba(59,130,246,0.08);
          line-height: 1;
          pointer-events: none;
        }

        .t-text {
          font-size: 15px;
          color: rgba(255,255,255,0.6);
          line-height: 1.8;
          flex: 1;
          font-style: italic;
        }

        .t-footer {
          display: flex;
          align-items: center;
          gap: 14px;
          padding-top: 20px;
          border-top: 1px solid rgba(255,255,255,0.06);
        }

        .t-avatar {
          width: 44px; height: 44px;
          border-radius: 50%;
          background: var(--color);
          display: flex; align-items: center; justify-content: center;
          font-family: 'Syne', sans-serif;
          font-size: 13px;
          font-weight: 700;
          color: #fff;
          flex-shrink: 0;
          opacity: 0.9;
        }

        .t-name {
          font-family: 'Syne', sans-serif;
          font-size: 15px;
          font-weight: 700;
          color: #fff;
          margin-bottom: 2px;
        }
        .t-role {
          font-size: 12px;
          color: rgba(255,255,255,0.35);
        }
        .t-company { color: var(--color); }

        /* Dots */
        .dots {
          display: flex;
          justify-content: center;
          gap: 8px;
        }
        .dot {
          width: 7px; height: 7px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          cursor: pointer;
          transition: all 0.2s;
          border: none;
          padding: 0;
        }
        .dot.active {
          background: #3b82f6;
          width: 22px;
          border-radius: 4px;
        }

        @media (max-width: 900px) {
          .testimonials-grid { grid-template-columns: 1fr 1fr; }
        }
        @media (max-width: 600px) {
          .testimonials { padding: 80px 20px; }
          .testimonials-grid { grid-template-columns: 1fr; }
          .section-header { flex-direction: column; align-items: flex-start; }
        }
      `}</style>

      <section className="testimonials" id="testimonials">
        <div className="testimonials-inner">
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Testimonials</span>
          </div>

          <div className="section-header">
            <h2 className="section-title">What people <span>say</span></h2>
            <div className="nav-arrows">
              <button className="arrow-btn" onClick={prev} aria-label="Previous">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
              </button>
              <button className="arrow-btn" onClick={next} aria-label="Next">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
              </button>
            </div>
          </div>

          <div className="testimonials-grid" key={active}>
            {visible.map((t, i) => (
              <div className="t-card" key={t.name + i} style={{ "--color": t.color }}>
                <StarRating count={t.rating} />
                <p className="t-text">{t.text}</p>
                <div className="t-footer">
                  <div className="t-avatar">{t.avatar}</div>
                  <div>
                    <p className="t-name">{t.name}</p>
                    <p className="t-role">{t.role} · <span className="t-company">{t.company}</span></p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="dots">
            {testimonials.map((_, i) => (
              <button key={i} className={`dot${i === active ? " active" : ""}`} onClick={() => setActive(i)} aria-label={`Testimonial ${i + 1}`} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
