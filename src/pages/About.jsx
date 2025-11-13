import Section from '../components/Section'
import Card from '../components/Card'
import './About.css'

const About = () => {
  const experiences = [
    {
      title: 'Software Development Engineer',
      company: 'Coupa Software',
      period: 'Jan 2025 – Present',
      achievements: [
        'Engineered Scalable Microservices: Designed and delivered core financial API services (Java/Spring Boot) handling over 1M+ monthly requests while maintaining an impressive 99.98% uptime.',
        'Drove Performance Optimization: Implemented system-level optimizations that significantly improved service performance, resulting in a 30% reduction in P95 latency.',
        'Accelerated Product Velocity: Designed and delivered a reusable, schema-driven dynamic form system (React + TypeScript). This foundational component scaled product development by reducing UI configuration time by 70% for multiple product teams.',
        'Ensured System Resilience: Established a centralized retry and error-handling framework for complex cross-cloud services, lowering integration failure rates by 45%.',
        'Automated Infrastructure (IaC): Automated infrastructure provisioning using AWS CDK and GitHub Actions, enabling single-click deployments and accelerating time-to-market for 5 critical product releases.',
      ],
    },
    {
      title: 'Software Development Engineer',
      company: 'Citius Tech',
      period: 'Dec 2019 – Dec 2023',
      achievements: [
        'Optimized Critical Pipelines: Optimized complex database queries (MySQL/PostgreSQL) and integrated Redis-backed caching. This reduced analytics/reporting latency by 35% and supported over 200K+ API calls/day in a critical analytics pipeline.',
        'Improved Product Quality: Developed a robust, role-based, server-driven field visibility control system. This eliminated Frontend/Backend validation drift and successfully reduced product defects by 40%.',
        'Enhanced User Experience: Partnered with Product Managers to prioritize and deliver latency and SLA improvements for high-value financial workflows, resulting in a 25% reduction in customer-reported delays.',
        'Pioneered Data Infrastructure: Established an ETL data infrastructure capable of processing 30M+ rows of healthcare data, enabling Product Managers to make decisions with 2x faster report freshness.',
        'Automated DevOps: Containerized services using Docker and automated CI/CD with GitHub Actions, which reduced deployment time/failure rates by 50% across teams.',
      ],
    },
  ]

  const education = [
    {
      degree: 'MS in Computer Science',
      university: 'Florida International University',
      location: 'Miami, FL',
      period: 'Jan 2024 - May 2025',
      gpa: '3.95/4.0',
      coursework: [
        'Data Structures and Algorithms',
        'Object Oriented Design',
        'Design Patterns',
        'AI/ML (LLM, Agentic AI, RAG)',
        'Operating Systems',
      ],
    },
  ]

  return (
    <div className="about">
      <Section id="about" title="About Me" subtitle="Get to know me better">
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              My work is centered on achieving measurable engineering leverage and operational excellence across the stack (Java/Spring Boot, React/TypeScript):
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <h4 className="highlight-title">Driving Product Velocity</h4>
                <p className="highlight-description">
                  I own and deliver reusable platform components (like schema-driven UI frameworks) that dramatically accelerate feature time-to-market, reducing UI configuration time by 70% for multiple product teams.
                </p>
              </div>
              <div className="highlight-item">
                <h4 className="highlight-title">Engineering Scale & Resilience</h4>
                <p className="highlight-description">
                  I engineer high-throughput microservices that handle over 1M+ monthly requests with 99.98% uptime. I have driven critical performance optimizations, resulting in a 30% reduction in P95 latency.
                </p>
              </div>
              <div className="highlight-item">
                <h4 className="highlight-title">System Stability</h4>
                <p className="highlight-description">
                  I establish robust quality and resilience patterns, such as centralized retry frameworks, that cut cross-cloud integration failure rates by 45% and established E2E testing that reduced critical production bugs by 90%.
                </p>
              </div>
              <div className="highlight-item">
                <h4 className="highlight-title">Infrastructure Automation (IaC)</h4>
                <p className="highlight-description">
                  I automate infrastructure provisioning via AWS CDK and GitHub Actions, enabling single-click deployments and accelerating time-to-market for 5 critical product releases.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Experience" background="gray">
        <div className="experience-grid">
          {experiences.map((exp, index) => (
            <Card key={index} hover className="experience-card">
              <h3 className="experience-title">{exp.title}</h3>
              <p className="experience-company">{exp.company}</p>
              <p className="experience-period">{exp.period}</p>
              <ul className="experience-achievements">
                {exp.achievements.map((achievement, idx) => (
                  <li key={idx} className="experience-achievement">
                    {achievement}
                  </li>
                ))}
              </ul>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="education-grid">
          {education.map((edu, index) => (
            <Card key={index} hover className="education-card">
              <div className="education-header">
                <div className="education-icon">🎓</div>
                <div className="education-main-info">
                  <h3 className="education-degree">{edu.degree}</h3>
                  <p className="education-university">{edu.university}</p>
                  <p className="education-location-period">{edu.location} | {edu.period}</p>
                </div>
              </div>
              <div className="education-gpa-badge">
                <span className="gpa-label">GPA</span>
                <span className="gpa-value">{edu.gpa}</span>
              </div>
              <div className="education-coursework">
                <h4 className="coursework-title">Relevant Coursework</h4>
                <ul className="coursework-list">
                  {edu.coursework.map((course, idx) => (
                    <li key={idx} className="coursework-item">
                      {course}
                    </li>
                  ))}
                </ul>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default About

