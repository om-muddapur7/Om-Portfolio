import { useState } from "react";
import emailjs from "@emailjs/browser";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", email: "", subject: "", message: "" });
  const [status, setStatus] = useState({ type: "idle", message: "" });
  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setStatus({ type: "idle", message: "" });

    try {
      const serviceId = import.meta.env.VITE_EMAILJS_SERVICE_ID;
      const templateId = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
      const publicKey = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

      if (!serviceId || !templateId || !publicKey) {
        throw new Error("EmailJS config is missing. Check your .env file.");
      }

      await emailjs.send(
        serviceId,
        templateId,
        {
          name: form.name,
          email: form.email,
          subject: form.subject,
          message: form.message,
        },
        publicKey,
      );

      setStatus({ type: "success", message: "Message sent! I'll get back to you within 24 hours." });
      setForm({ name: "", email: "", subject: "", message: "" });
    } catch (error) {
      console.error("EmailJS error:", error);
      setStatus({
        type: "error",
        message: error?.text || error?.message || "Failed to send. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const contacts = [
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/>
        </svg>
      ),
      label: "Email",
      value: "om@example.com",
      href: "mailto:om@example.com",
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
        </svg>
      ),
      label: "Location",
      value: "India",
      href: null,
    },
    {
      icon: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
          <path d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
        </svg>
      ),
      label: "Availability",
      value: "Open to opportunities",
      href: null,
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
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes checkPop {
          0%   { transform: scale(0); opacity: 0; }
          70%  { transform: scale(1.2); }
          100% { transform: scale(1); opacity: 1; }
        }

        .contact {
          background: #050d1a;
          padding: 120px 24px;
          font-family: 'Inter', sans-serif;
          position: relative;
          overflow: hidden;
        }
        .contact::before {
          content: '';
          position: absolute;
          bottom: -200px; left: 50%; transform: translateX(-50%);
          width: 800px; height: 500px;
          background: radial-gradient(ellipse, rgba(37,99,235,0.08) 0%, transparent 70%);
          pointer-events: none;
        }

        .contact-inner { max-width: 1100px; margin: 0 auto; }

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
        .section-sub { font-size:16px; color:rgba(255,255,255,0.4); margin-bottom:64px; max-width:480px; }

        .contact-grid {
          display: grid;
          grid-template-columns: 1fr 1.5fr;
          gap: 60px;
          align-items: start;
        }

        .contact-info-title { font-family: 'Syne', sans-serif; font-size: 22px; font-weight: 700; color: #fff; margin-bottom: 8px; }
        .contact-info-sub { font-size: 14px; color: rgba(255,255,255,0.4); line-height: 1.75; margin-bottom: 36px; }

        .contact-items { display: flex; flex-direction: column; gap: 16px; margin-bottom: 40px; }
        .contact-item {
          display: flex;
          align-items: center;
          gap: 16px;
          padding: 18px 20px;
          background: rgba(255,255,255,0.03);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 14px;
          transition: all 0.25s;
          text-decoration: none;
        }
        .contact-item:hover {
          border-color: rgba(59,130,246,0.3);
          background: rgba(59,130,246,0.05);
          transform: translateX(4px);
        }
        .contact-item-icon {
          width: 42px; height: 42px;
          border-radius: 10px;
          background: rgba(59,130,246,0.1);
          border: 1px solid rgba(59,130,246,0.2);
          display: flex; align-items: center; justify-content: center;
          color: #60a5fa;
          flex-shrink: 0;
        }
        .contact-item-icon svg { width: 18px; height: 18px; }
        .contact-item-label { font-size: 11px; color: rgba(255,255,255,0.3); font-weight: 500; margin-bottom: 2px; text-transform: uppercase; letter-spacing: 1px; }
        .contact-item-value { font-size: 14px; color: rgba(255,255,255,0.75); font-weight: 500; }

        .social-links { display: flex; gap: 10px; }
        .social-btn {
          width: 42px; height: 42px;
          border-radius: 10px;
          border: 1px solid rgba(255,255,255,0.1);
          background: rgba(255,255,255,0.04);
          display: flex; align-items: center; justify-content: center;
          color: rgba(255,255,255,0.5);
          text-decoration: none;
          transition: all 0.2s;
        }
        .social-btn:hover { border-color: #3b82f6; background: rgba(59,130,246,0.1); color: #60a5fa; transform: translateY(-2px); }
        .social-btn svg { width: 17px; height: 17px; fill: currentColor; }

        .contact-form {
          background: rgba(255,255,255,0.02);
          border: 1px solid rgba(255,255,255,0.07);
          border-radius: 24px;
          padding: 40px;
        }

        .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 16px; }
        .form-group { display: flex; flex-direction: column; gap: 8px; margin-bottom: 16px; }

        .form-label { font-size: 13px; font-weight: 500; color: rgba(255,255,255,0.5); }

        .form-input, .form-textarea {
          background: rgba(255,255,255,0.04);
          border: 1px solid rgba(255,255,255,0.08);
          border-radius: 10px;
          padding: 12px 16px;
          font-size: 14px;
          color: #fff;
          font-family: 'Inter', sans-serif;
          outline: none;
          transition: border-color 0.2s, box-shadow 0.2s;
          width: 100%;
          box-sizing: border-box;
        }
        .form-input::placeholder, .form-textarea::placeholder { color: rgba(255,255,255,0.2); }
        .form-input:focus, .form-textarea:focus {
          border-color: rgba(59,130,246,0.5);
          box-shadow: 0 0 0 3px rgba(59,130,246,0.08);
        }
        .form-textarea { min-height: 130px; resize: vertical; }

        .submit-btn {
          width: 100%;
          background: #2563eb;
          color: #fff;
          border: none;
          border-radius: 12px;
          padding: 14px 28px;
          font-size: 15px;
          font-weight: 600;
          font-family: 'Inter', sans-serif;
          cursor: pointer;
          transition: all 0.2s;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 8px;
          box-shadow: 0 0 24px rgba(37,99,235,0.3);
          margin-top: 8px;
        }
        .submit-btn:hover:not(:disabled) { background: #1d4ed8; transform: translateY(-2px); box-shadow: 0 0 32px rgba(37,99,235,0.45); }
        .submit-btn:disabled { opacity: 0.7; cursor: not-allowed; }

        .spinner {
          width: 16px; height: 16px;
          border: 2px solid rgba(255,255,255,0.3);
          border-top-color: #fff;
          border-radius: 50%;
          animation: spin 0.7s linear infinite;
        }

        /* Inline status banner */
        .status-banner {
          display: flex;
          align-items: center;
          gap: 10px;
          padding: 12px 16px;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 500;
          margin-bottom: 20px;
        }
        .status-banner.success {
          background: rgba(16,185,129,0.08);
          border: 1px solid rgba(16,185,129,0.25);
          color: #34d399;
        }
        .status-banner.error {
          background: rgba(239,68,68,0.08);
          border: 1px solid rgba(239,68,68,0.25);
          color: #f87171;
        }
        .status-banner svg { width: 16px; height: 16px; flex-shrink: 0; }

        @media (max-width: 800px) {
          .contact-grid { grid-template-columns: 1fr; }
          .form-row { grid-template-columns: 1fr; }
          .contact { padding: 80px 20px; }
          .contact-form { padding: 28px 20px; }
        }
      `}</style>

      <section className="contact" id="contact">
        <div className="contact-inner">
          <div className="section-eyebrow">
            <div className="eyebrow-line" />
            <span className="eyebrow-text">Contact</span>
          </div>
          <h2 className="section-title">Let's <span>work together</span></h2>
          <p className="section-sub">Have a project in mind or just want to chat? My inbox is always open.</p>

          <div className="contact-grid">
            {/* Left */}
            <div>
              <p className="contact-info-title">Get in touch</p>
              <p className="contact-info-sub">I'm currently available for freelance work and full-time opportunities. Whether you have a question or just want to say hello — I'll get back to you within 24 hours.</p>

              <div className="contact-items">
                {contacts.map((c) =>
                  c.href ? (
                    <a href={c.href} className="contact-item" key={c.label}>
                      <div className="contact-item-icon">{c.icon}</div>
                      <div>
                        <p className="contact-item-label">{c.label}</p>
                        <p className="contact-item-value">{c.value}</p>
                      </div>
                    </a>
                  ) : (
                    <div className="contact-item" key={c.label} style={{ cursor: "default" }}>
                      <div className="contact-item-icon">{c.icon}</div>
                      <div>
                        <p className="contact-item-label">{c.label}</p>
                        <p className="contact-item-value">{c.value}</p>
                      </div>
                    </div>
                  )
                )}
              </div>

              <div className="social-links">
                <a href="https://github.com/om-muddapur7" target="_blank" rel="noreferrer" className="social-btn" aria-label="GitHub">
                  <svg viewBox="0 0 24 24"><path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z"/></svg>
                </a>
                <a href="https://www.linkedin.com/in/om-muddapur-aa56a525b/" target="_blank" rel="noreferrer" className="social-btn" aria-label="LinkedIn">
                  <svg viewBox="0 0 24 24"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
                </a>
                <a href="https://x.com/Om7248" target="_blank" rel="noreferrer" className="social-btn" aria-label="X">
                  <svg viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.747l7.73-8.835L1.254 2.25H8.08l4.259 5.631 5.905-5.631zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
                </a>
              </div>
            </div>

            {/* Right: form */}
            <div className="contact-form">
              {/* Status banner */}
              {status.type === "success" && (
                <div className="status-banner success">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                  {status.message}
                </div>
              )}
              {status.type === "error" && (
                <div className="status-banner error">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/>
                  </svg>
                  {status.message}
                </div>
              )}

              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label">Your Name</label>
                    <input className="form-input" name="name" placeholder="Om Muddapur" value={form.name} onChange={handleChange} required />
                  </div>
                  <div className="form-group">
                    <label className="form-label">Email Address</label>
                    <input className="form-input" name="email" type="email" placeholder="om@example.com" value={form.email} onChange={handleChange} required />
                  </div>
                </div>
                <div className="form-group">
                  <label className="form-label">Subject</label>
                  <input className="form-input" name="subject" placeholder="Project inquiry" value={form.subject} onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label className="form-label">Message</label>
                  <textarea className="form-textarea" name="message" placeholder="Tell me about your project..." value={form.message} onChange={handleChange} required />
                </div>
                <button className="submit-btn" type="submit" disabled={isLoading}>
                  {isLoading ? (
                    <><div className="spinner" /> Sending…</>
                  ) : (
                    <>
                      Send Message
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 2L11 13M22 2l-7 20-4-9-9-4 20-7z"/></svg>
                    </>
                  )}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}