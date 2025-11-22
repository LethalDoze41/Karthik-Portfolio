import React, { useState, useEffect, useRef } from 'react';
import './App.css';

const App = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const heroRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'experience', 'skills', 'education', 'contact'];
      const scrollPosition = window.scrollY + 100;
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  const experiences = [
    {
      title: "Engineering Program Manager",
      company: "eBay Inc.",
      location: "San Jose, CA",
      period: "Feb 2025 – Present",
      type: "Contract",
      highlights: [
        "Led AI coding assistants implementation reducing developer friction from 70% to 40%",
        "Improved bug burndown rate to over 80% through AI bug-fix tools",
        "Established reporting framework using JIRA dashboards and Tableau"
      ],
      tech: ["AI/ML", "JIRA", "Tableau", "Gantt Charts"]
    },
    {
      title: "Program Manager",
      company: "Apple Inc./Infosys Limited",
      location: "Cupertino, CA",
      period: "Jul 2023 – Jan 2025",
      type: "Contract",
      highlights: [
        "Spearheaded global digital transformation increasing sales efficiency by 70%",
        "Implemented AI forecast engine achieving +/-2% variance",
        "Reduced stockouts by 30% through omnichannel inventory visibility"
      ],
      tech: ["AI", "Tableau", "SAP", "Digital Transformation"]
    },
    {
      title: "Program Manager",
      company: "Allegion",
      location: "Winston-Salem, NC",
      period: "Apr 2021 – Jul 2023",
      type: "Contract",
      highlights: [
        "Automated returns and warranty program with AI web-based tools",
        "Reduced high-priority risks by 65% saving $1.2M in potential delays",
        "Managed Mobile Application Management (MAM) solutions rollout"
      ],
      tech: ["Automation", "Risk Management", "MAM"]
    },
    {
      title: "Program Manager",
      company: "Wayfair",
      location: "Boston, MA",
      period: "May 2020 – Apr 2021",
      type: "Contract",
      highlights: [
        "Implemented AI-driven customer segmentation increasing conversion by 35%",
        "Improved organic search visibility by 45% through SEO strategy",
        "Developed unified customer data platform improving ROI by 32%"
      ],
      tech: ["AI", "SEO", "CDP", "Marketing"]
    },
    {
      title: "Project Manager",
      company: "Snapdeal",
      location: "Bangalore, India",
      period: "Mar 2015 – Nov 2017",
      highlights: [
        "Redesigned e-commerce website and mobile application",
        "Performed GAP Analysis on legacy systems",
        "Created UI/UX wireframes using Balsamiq"
      ],
      tech: ["E-commerce", "UI/UX", "Balsamiq", "JAD"]
    },
    {
      title: "Business Analyst",
      company: "Accenture",
      location: "Bangalore, India", 
      period: "Mar 2012 – Jan 2015",
      highlights: [
        "Analyzed supply chain performance to improve processes",
        "Created SRS, BRD, FRD documentation",
        "Performed impact and GAP analysis for new requirements"
      ],
      tech: ["Supply Chain", "Business Analysis", "Documentation"]
    }
  ];

  const skills = {
    "Project Management": ["JIRA", "Confluence", "MS Project", "MS SharePoint", "Microsoft Office Suite"],
    "Methodologies": ["Agile", "SCRUM", "SAFe", "Kanban", "XP", "Waterfall", "Spiral"],
    "Cloud & DevOps": ["AWS (EC2, S3, Lambda)", "Azure", "GCP", "Docker", "Kubernetes", "Oracle EBS"],
    "Digital Transformation": ["Salesforce Commerce Cloud", "Adobe Experience Cloud", "MS Power Automate"],
    "Testing & API": ["HP ALM/QC", "Swagger", "SOAP UI", "Postman", "Selenium", "REST", "SOAP"],
    "Analytics & Reporting": ["Tableau", "Power BI", "SAP Business Objects", "Informatica Power Center"],
    "Design": ["MS Visio", "Balsamiq", "Figma", "Miro"]
  };

  return (
    <div className="portfolio-container">
      <nav className={`navbar ${activeSection !== 'hero' ? 'scrolled' : ''}`}>
        <div className="nav-container">
          <div className="nav-logo">
            <span className="logo-text">KH</span>
          </div>
          <div className={`nav-links ${isMenuOpen ? 'mobile-open' : ''}`}>
            {['About', 'Experience', 'Skills', 'Education', 'Contact'].map((item) => (
              <a
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={activeSection === item.toLowerCase() ? 'active' : ''}
              >
                {item}
              </a>
            ))}
          </div>
          <button 
            className="mobile-menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle menu"
          >
            <span></span>
            <span></span>
            <span></span>
          </button>
        </div>
      </nav>

      <section id="hero" ref={heroRef} className="hero-section">
        <div className="hero-particles"></div>
        <div className="hero-content">
          <div className="hero-text">
            <span className="hero-greeting">Hi, I'm</span>
            <h1 className="hero-name">
              <span className="first-name">Karthik</span>
              <span className="last-name">Hegde</span>
            </h1>
            <h2 className="hero-title">Program Manager | AI/ML Specialist</h2>
            <p className="hero-subtitle">
              Driving digital transformation through strategic leadership and innovative AI solutions
            </p>
            <div className="hero-stats">
              <div className="stat">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
              <div className="stat">
                <span className="stat-number">70%</span>
                <span className="stat-label">Efficiency Gains</span>
              </div>
              <div className="stat">
                <span className="stat-number">$1.2M</span>
                <span className="stat-label">Cost Savings</span>
              </div>
            </div>
            <div className="hero-cta">
              <button onClick={() => scrollToSection('contact')} className="btn-primary">
                Get In Touch
              </button>
              <button onClick={() => scrollToSection('experience')} className="btn-secondary">
                View Projects
              </button>
            </div>
          </div>
          <div className="hero-visual">
            <div className="geometric-shape shape-1"></div>
            <div className="geometric-shape shape-2"></div>
            <div className="geometric-shape shape-3"></div>
          </div>
        </div>
      </section>

      <section id="about" className="about-section">
        <div className="section-container">
          <h2 className="section-title">
            <span className="title-accent">About</span> Me
          </h2>
          <div className="about-content">
            <div className="about-text">
              <p className="about-intro">
                A seasoned Program/Project Manager with over 10 years of experience in the IT industry, 
                specializing in AI/ML implementation, Retail and E-Commerce software development.
              </p>
              <p>
                I excel at driving results by leveraging strong analytical skills and a data-driven approach 
                to mitigate risks, manage complex projects, and lead cross-functional teams. My expertise 
                lies in translating business needs into technical solutions and delivering high-impact 
                initiatives in fast-paced environments.
              </p>
              <div className="about-highlights">
                <div className="highlight-card">
                  <i className="icon-ai"></i>
                  <h4>AI/ML Innovation</h4>
                  <p>Leading AI implementation projects that transform business operations</p>
                </div>
                <div className="highlight-card">
                  <i className="icon-strategy"></i>
                  <h4>Strategic Leadership</h4>
                  <p>Aligning technical initiatives with business goals for maximum impact</p>
                </div>
                <div className="highlight-card">
                  <i className="icon-results"></i>
                  <h4>Results-Driven</h4>
                  <p>Consistently delivering measurable improvements in efficiency and revenue</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="experience" className="experience-section">
        <div className="section-container">
          <h2 className="section-title">
            Professional <span className="title-accent">Experience</span>
          </h2>
          <div className="timeline">
            {experiences.map((exp, index) => (
              <div key={index} className={`timeline-item ${index % 2 === 0 ? 'left' : 'right'}`}>
                <div className="timeline-marker"></div>
                <div className="timeline-card">
                  <div className="card-header">
                    <h3 className="position-title">{exp.title}</h3>
                    <div className="company-info">
                      <span className="company-name">{exp.company}</span>
                      <span className="location">{exp.location}</span>
                    </div>
                    <div className="period-type">
                      <span className="period">{exp.period}</span>
                      {exp.type && <span className="type">{exp.type}</span>}
                    </div>
                  </div>
                  <ul className="highlights">
                    {exp.highlights.map((highlight, hIndex) => (
                      <li key={hIndex}>{highlight}</li>
                    ))}
                  </ul>
                  <div className="tech-stack">
                    {exp.tech.map((tech, tIndex) => (
                      <span key={tIndex} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="skills" className="skills-section">
        <div className="section-container">
          <h2 className="section-title">
            Technical <span className="title-accent">Skills</span>
          </h2>
          <div className="skills-grid">
            {Object.entries(skills).map(([category, items]) => (
              <div key={category} className="skill-category">
                <h3 className="category-title">{category}</h3>
                <div className="skill-items">
                  {items.map((skill, index) => (
                    <span key={index} className="skill-item">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="education" className="education-section">
        <div className="section-container">
          <h2 className="section-title">
            Education & <span className="title-accent">Certifications</span>
          </h2>
          <div className="education-grid">
            <div className="education-column">
              <h3 className="column-title">Education</h3>
              <div className="education-card">
                <div className="degree">MS in IT Management</div>
                <div className="institution">Campbellsville University</div>
                <div className="location">Louisville, KY</div>
                <div className="year">2023</div>
              </div>
              <div className="education-card">
                <div className="degree">BS in Business Management</div>
                <div className="institution">Full Sail University</div>
                <div className="location">Winter Park, FL</div>
                <div className="year">2020</div>
              </div>
            </div>
            <div className="certification-column">
              <h3 className="column-title">Certifications</h3>
              <div className="certification-card">
                <div className="cert-icon">PMP</div>
                <div className="cert-details">
                  <div className="cert-name">Project Management Professional</div>
                  <div className="cert-issuer">PMI - 2024</div>
                  <a href="#" className="cert-verify">Verify Credential →</a>
                </div>
              </div>
              <div className="certification-card">
                <div className="cert-icon">CSM</div>
                <div className="cert-details">
                  <div className="cert-name">Certified Scrum Master</div>
                  <div className="cert-issuer">International Scrum Institute - 2023</div>
                  <a href="#" className="cert-verify">Verify Credential →</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="contact-section">
        <div className="section-container">
          <h2 className="section-title">
            Let's <span className="title-accent">Connect</span>
          </h2>
          <div className="contact-content">
            <p className="contact-intro">
              I'm always interested in discussing new opportunities, innovative projects, 
              and ways to drive digital transformation through strategic leadership.
            </p>
            <div className="contact-methods">
              <a href="tel:669-249-8833" className="contact-item">
                <span className="contact-icon">📱</span>
                <span className="contact-text">669-249-8833</span>
              </a>
              <a href="mailto:khegde2013@gmail.com" className="contact-item">
                <span className="contact-icon">✉️</span>
                <span className="contact-text">khegde2013@gmail.com</span>
              </a>
              <a href="https://linkedin.com/in/karthikhegde" target="_blank" rel="noopener noreferrer" className="contact-item">
                <span className="contact-icon">💼</span>
                <span className="contact-text">LinkedIn Profile</span>
              </a>
            </div>
            <button className="btn-download">
              Download Resume
            </button>
          </div>
        </div>
      </section>

      <footer className="footer">
        <p>© 2025 Karthik Hegde. Built with React & deployed on GitHub Pages.</p>
      </footer>
    </div>
  );
};

export default App;
