import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, ShieldCheck } from "lucide-react";
import { createFileRoute } from "@tanstack/react-router";

import { experience, profile, projects, skills } from "@/lib/portfolio-content";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Ashraf Mohammad | Cybersecurity Portfolio" },
      {
        name: "description",
        content:
          "Explore Ashraf Mohammad's cybersecurity projects in threat detection, adversarial machine learning, and digital evidence integrity.",
      },
      { property: "og:title", content: "Ashraf Mohammad | Cybersecurity Portfolio" },
      {
        property: "og:description",
        content:
          "Cybersecurity projects, research interests, and experience from Ashraf Mohammad.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Ashraf Mohammad | Cybersecurity Portfolio" },
      {
        name: "twitter:description",
        content:
          "Threat detection, adversarial machine learning, and digital evidence integrity.",
      },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700;800&family=IBM+Plex+Mono:wght@400;500&family=Space+Grotesk:wght@400;500;600;700&display=swap",
      },
    ],
  }),
  component: Portfolio,
});

function Portfolio() {
  const projectCount = String(projects.length).padStart(2, "0");

  return (
    <main>
      <header className="site-header">
        <a className="brand-lockup" href="#home" aria-label="Ashraf Mohammad, home">
          <span className="brand-mark">AM</span>
          <span className="brand-name">Ashraf Mohammad</span>
        </a>
        <nav className="main-nav" aria-label="Main navigation">
          <a href="#projects">Work <span>{projectCount}</span></a>
          <a href="#about">About</a>
          <a className="nav-contact" href={`mailto:${profile.email}`}>
            Contact <ArrowUpRight aria-hidden="true" size={15} />
          </a>
        </nav>
      </header>

      <section className="hero page-shell" id="home">
        <div className="hero-copy">
          <div className="eyebrow"><span className="status-pip" /> Cybersecurity · Computer Science Engineering</div>
          <h1>Ashraf<br /><span>Mohammad</span></h1>
          <p className="hero-role">Building ideas that defend what matters.</p>
          <p className="hero-intro">{profile.intro}</p>
          <div className="hero-actions">
            <a className="button-primary" href="#projects">Explore my work <ArrowDown aria-hidden="true" size={17} /></a>
            <a className="text-link" href={`mailto:${profile.email}`}>Let’s connect <ArrowUpRight aria-hidden="true" size={16} /></a>
          </div>
          <div className="hero-location"><MapPin aria-hidden="true" size={14} /> {profile.location}</div>
        </div>

        <div className="hero-visual">
          <div className="visual-index"><span>FIELD NOTE / 001</span><span>SAFE SIMULATION</span></div>
          <svg className="signal-map" viewBox="0 0 560 480" role="img" aria-labelledby="signal-title signal-description">
            <title id="signal-title">Signals moving through a cybersecurity detector</title>
            <desc id="signal-description">An animated synthetic signal passes through an adaptive detector and arrives at a verified node.</desc>
            <defs>
              <linearGradient id="signal-flow" x1="0" y1="1" x2="1" y2="0">
                <stop className="gradient-hot" offset="0%" />
                <stop className="gradient-cyan" offset="100%" />
              </linearGradient>
              <pattern id="map-dots" width="22" height="22" patternUnits="userSpaceOnUse">
                <circle cx="1" cy="1" r="1" className="map-dot" />
              </pattern>
            </defs>
            <rect x="1" y="1" width="558" height="478" rx="6" className="visual-frame" />
            <rect x="1" y="1" width="558" height="478" rx="6" fill="url(#map-dots)" />
            <path className="map-rail" d="M62 240h96m244 0h96M280 62v76m0 166v76" />
            <path className="map-link" d="M157 240c28-84 45-99 123-99s97 22 123 99c-27 83-48 99-123 99s-97-18-123-99Z" />
            <path className="map-flow" d="M64 240h97c25-82 45-99 119-99s98 23 123 99h96" />
            <path className="map-arc" d="M280 62v77m0 201v77" />
            <circle className="orbit-ring orbit-ring-one" cx="280" cy="240" r="129" />
            <circle className="orbit-ring orbit-ring-two" cx="280" cy="240" r="93" />
            <circle className="detector-halo" cx="280" cy="240" r="47" />
            <circle className="detector-core" cx="280" cy="240" r="23" />
            <circle className="flow-dot" cx="280" cy="141" r="5" />
            <circle className="node node-hot" cx="64" cy="240" r="8" />
            <circle className="node node-cyan" cx="496" cy="240" r="8" />
            <circle className="node node-lime" cx="280" cy="62" r="6" />
            <text className="graphic-label" x="38" y="211">SYNTHETIC INPUT</text>
            <text className="graphic-label" x="388" y="211">VERIFIED</text>
            <text className="graphic-center" x="280" y="247" textAnchor="middle">DETECT</text>
            <text className="graphic-caption" x="26" y="447">SIGNAL / 07.26</text>
            <text className="graphic-caption" x="453" y="447">SAFE BY DESIGN</text>
          </svg>
          <div className="visual-note"><ShieldCheck aria-hidden="true" size={17} /><span>Threats are simulated.<br /><strong>Learning is real.</strong></span></div>
        </div>
        <a className="scroll-cue" href="#projects" aria-label="Scroll to selected work"><span>SCROLL TO EXPLORE</span><ArrowDown aria-hidden="true" size={15} /></a>
      </section>

      <section className="ticker" aria-label="Focus areas">
        <div className="ticker-track" aria-hidden="true">
          {Array.from({ length: 2 }, (_, index) => (
            <span className="ticker-set" key={index}>
              <span>THREAT DETECTION</span><i />
              <span>ADVERSARIAL ML</span><i />
              <span>DIGITAL EVIDENCE</span><i />
              <span>SECURITY RESEARCH</span><i />
            </span>
          ))}
        </div>
      </section>

      <section className="work-section page-shell" id="projects">
        <div className="section-heading">
          <div><p className="section-kicker">01 / Selected work</p><h2>Curiosity,<br /><span>put to work.</span></h2></div>
          <p className="section-aside">A few things I’ve built, explored, and learned by doing.</p>
        </div>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.number}>
              <div className="project-topline"><span className="project-number">{project.number} / {projectCount}</span><span className="project-category">{project.category}</span></div>
              <h3>{project.title}</h3>
              <p className="project-subtitle">{project.subtitle}</p>
              <p className="project-description">{project.description}</p>
              <ul className="project-details">
                {project.details.map((detail) => <li key={detail}>{detail}</li>)}
              </ul>
              <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <span className="project-arrow" aria-hidden="true"><ArrowUpRight size={20} /></span>
            </article>
          ))}
        </div>
      </section>

      <section className="about-band" id="about">
        <div className="about-layout page-shell">
          <div className="about-intro">
            <p className="section-kicker">02 / A little about me</p>
            <h2>Learn fast.<br /><span>Build carefully.</span></h2>
            <p>I’m a first-year cybersecurity student drawn to the questions behind secure systems: how they fail, how we notice, and how we make them stronger.</p>
            <div className="about-links">
              <a href={profile.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight aria-hidden="true" size={15} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight aria-hidden="true" size={15} /></a>
            </div>
          </div>

          <div className="timeline-wrap">
            <h3 className="subsection-title">The path so far <span>03 entries</span></h3>
            <div className="timeline">
              {experience.slice(0, 3).map((item) => (
                <article className="timeline-entry" key={`${item.title}-${item.organization}`}>
                  <span className="timeline-dot" />
                  <p className="timeline-period">{item.period}</p>
                  <h4>{item.title}</h4>
                  <p className="timeline-org">{item.organization}</p>
                  <p className="timeline-detail">{item.detail}</p>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="skills-section page-shell" id="skills">
        <div className="section-heading skills-heading">
          <div><p className="section-kicker">03 / Tools in progress</p><h2>Current<br /><span>toolkit.</span></h2></div>
          <p className="section-aside">Learning by building, testing ideas, and staying curious.</p>
        </div>
        <div className="skills-list">
          {skills.map((group, index) => (
            <div className="skill-row" key={group.title}>
              <span className="skill-index">0{index + 1}</span>
              <h3>{group.title}</h3>
              <ul>{group.items.map((item) => <li key={item}>{item}</li>)}</ul>
            </div>
          ))}
        </div>
        <div className="founder-note"><span>ALSO BUILDING</span><div><h3>TSOS</h3><p>Exploring a mobile and device security platform, informed by research into Samsung Knox and Apple iOS security models.</p></div><span className="founder-arrow"><ArrowUpRight aria-hidden="true" size={20} /></span></div>
      </section>

      <footer className="contact-section" id="contact">
        <div className="contact-inner page-shell">
          <p className="section-kicker">04 / Start a conversation</p>
          <h2>Let’s make<br /><span>something safer.</span></h2>
          <a className="contact-cta" href={`mailto:${profile.email}`}><Mail aria-hidden="true" size={19} /> {profile.email} <ArrowUpRight aria-hidden="true" size={20} /></a>
          <div className="footer-bottom">
            <span>© {new Date().getFullYear()} {profile.name}</span>
            <span>{profile.location}</span>
            <div className="footer-socials">
              <a href={`tel:${profile.phone}`} aria-label="Call Ashraf"><span>Phone</span><ArrowUpRight aria-hidden="true" size={14} /></a>
              <a href={profile.github} target="_blank" rel="noreferrer" aria-label="GitHub profile"><Github aria-hidden="true" size={16} /></a>
              <a href={profile.linkedin} target="_blank" rel="noreferrer" aria-label="LinkedIn profile"><Linkedin aria-hidden="true" size={16} /></a>
            </div>
          </div>
        </div>
      </footer>
    </main>
  );
}
