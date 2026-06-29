const socialLinks = [
  {
    label: "GitHub",
    href: "https://github.com/om-muddapur7",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/>
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/om-muddapur-aa56a525b/",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
      </svg>
    ),
  },
  {
    label: "X / Twitter",
    href: "https://x.com/Om7248",
    svg: (
      <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.746l7.73-8.835L1.254 2.25H8.08l4.261 5.632 5.903-5.632zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
      </svg>
    ),
  },
];

const footerLinks = [
  { href: "#about", label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#experience", label: "Experience" },
  { href: "#contact", label: "Contact" },
];

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600&family=Syne:wght@700;800&display=swap');

        @keyframes gradientShift {
          0%,100% { background-position: 0% 50%; }
          50%      { background-position: 100% 50%; }
        }

        .footer {
          background: #040b15;
          border-top: 1px solid rgba(255,255,255,0.06);
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }

        .footer::before {
          content: '';
          position: absolute;
          bottom: -120px;
          left: 50%;
          transform: translateX(-50%);
          width: 800px;
          height: 300px;
          background: radial-gradient(ellipse, rgba(37,99,235,0.06) 0%, transparent 70%);
          pointer-events: none;
        }

        .footer-top {
          max-width: 1100px;
          margin: 0 auto;
          padding: 72px 24px 48px;
          display: grid;
          grid-template-columns: 1.4fr 1fr 1fr;
          gap: 64px;
          align-items: start;
        }

        .footer-brand-logo {
          font-family: 'Syne', sans-serif;
          font-size: 28px;
          font-weight: 800;
          color: #fff;
          text-decoration: none;
          display: inline-block;
          margin-bottom: 14px;
          letter-spacing: -0.5px;
        }
        .footer-brand-logo span {
          background: linear-gradient(135deg, #60a5fa, #3b82f6, #818cf8);
          background-size: 200% 200%;
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
          animation: gradientShift 4s ease infinite;
        }

        .footer-brand-tagline {
          font-size: 14px;
          color: rgba(255,255,255,0.35);
          line-height: 1.75;
          max-width: 280px;
          margin-bottom: 28px;
        }

        .footer-social-row {
          display: flex;
          gap: 10px;
        }
        .footer-social-btn {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 38px;
          height: 38px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.08);
          background: rgba(255,255,255,0.03);
          color: rgba(255,255,255,0.45);
          text-decoration: none;
          transition: all 0.2s ease;
        }
        .footer-social-btn:hover {
          color: #60a5fa;
          border-color: rgba(59,130,246,0.4);
          background: rgba(59,130,246,0.08);
          transform: translateY(-2px);
        }

        .footer-col-label {
          font-size: 11px;
          font-weight: 600;
          letter-spacing: 3px;
          text-transform: uppercase;
          color: #3b82f6;
          margin-bottom: 20px;
        }

        .footer-nav {
          display: flex;
          flex-direction: column;
          gap: 12px;
        }
        .footer-nav a {
          font-size: 14px;
          color: rgba(255,255,255,0.4);
          text-decoration: none;
          transition: color 0.2s;
          display: inline-flex;
          align-items: center;
          gap: 6px;
        }
        .footer-nav a::before {
          content: '';
          width: 4px;
          height: 4px;
          border-radius: 50%;
          background: rgba(255,255,255,0.15);
          transition: background 0.2s;
          flex-shrink: 0;
        }
        .footer-nav a:hover { color: rgba(255,255,255,0.85); }
        .footer-nav a:hover::before { background: #3b82f6; }

        .footer-contact-item {
          display: flex;
          flex-direction: column;
          gap: 4px;
          margin-bottom: 16px;
        }
        .footer-contact-label {
          font-size: 11px;
          color: rgba(255,255,255,0.25);
          text-transform: uppercase;
          letter-spacing: 1.5px;
        }
        .footer-contact-value {
          font-size: 14px;
          color: rgba(255,255,255,0.55);
          text-decoration: none;
          transition: color 0.2s;
        }
        .footer-contact-value:hover { color: #60a5fa; }

        .footer-bottom {
          border-top: 1px solid rgba(255,255,255,0.05);
          padding: 20px 24px;
        }
        .footer-bottom-inner {
          max-width: 1100px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          gap: 16px;
          flex-wrap: wrap;
        }
        .footer-copy {
          font-size: 13px;
          color: rgba(255,255,255,0.2);
        }
        .footer-copy span {
          color: rgba(255,255,255,0.35);
        }

        .footer-badge {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          font-size: 12px;
          color: rgba(255,255,255,0.2);
          padding: 5px 12px;
          border: 1px solid rgba(255,255,255,0.05);
          border-radius: 20px;
          background: rgba(255,255,255,0.02);
        }
        .footer-badge-dot {
          width: 6px;
          height: 6px;
          border-radius: 50%;
          background: #22c55e;
          box-shadow: 0 0 8px rgba(34,197,94,0.6);
          animation: pulse 2s ease-in-out infinite;
        }
        @keyframes pulse {
          0%, 100% { opacity: 1; }
          50% { opacity: 0.4; }
        }

        @media (max-width: 768px) {
          .footer-top {
            grid-template-columns: 1fr;
            gap: 40px;
            padding: 48px 20px 40px;
          }
          .footer-bottom-inner { justify-content: center; text-align: center; }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-top">
          {/* Brand */}
          <div>
            <a href="#" className="footer-brand-logo">
              OM<span>.</span>
            </a>
            <p className="footer-brand-tagline">
              Full-stack developer crafting fast, scalable web experiences. Open to freelance and full-time opportunities.
            </p>
            <div className="footer-social-row">
              {socialLinks.map((s) => (
                <a key={s.label} href={s.href} aria-label={s.label} className="footer-social-btn" target="_blank" rel="noreferrer">
                  {s.svg}
                </a>
              ))}
            </div>
          </div>

          {/* Nav */}
          <div>
            <p className="footer-col-label">Navigate</p>
            <nav className="footer-nav">
              {footerLinks.map((l) => (
                <a key={l.href} href={l.href}>{l.label}</a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <p className="footer-col-label">Get in touch</p>
            <div className="footer-contact-item">
              <span className="footer-contact-label">Email</span>
              <a href="mailto:om@example.com" className="footer-contact-value">om@example.com</a>
            </div>
            <div className="footer-contact-item">
              <span className="footer-contact-label">Location</span>
              <span className="footer-contact-value">India</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="footer-bottom-inner">
            <p className="footer-copy">
              © {currentYear} <span>Om Muddapur</span>. All rights reserved.
            </p>
            <div className="footer-badge">
              <span className="footer-badge-dot" />
              Available for work
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;