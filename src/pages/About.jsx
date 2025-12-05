import Section from '../components/Section'
import Card from '../components/Card'
import './About.css'

const About = () => {
  const experiences = [
    {
      title: 'Software Engineer',
      company: 'Coupa Software',
      location: 'San Mateo, CA',
      period: 'January 2025 – Present',
      achievements: [
        'Architected and scaled a critical microservice within the core Business Spend Management (BSM) platform, processing over 2.5 million financial transactions daily and directly supporting 500+ Fortune 500 customers.',
        'Led the end-to-end development of the "Unified Data Ingestion" system using Python and proprietary technologies, reducing the data processing time for large enterprise clients by 32% and increasing API reliability to 99.99% uptime.',
        'Improved application performance by leading a refactor of high-traffic UI components (React/TypeScript), optimizing the data fetching layer to reduce perceived latency by an average of 1.4 seconds for the core procurement dashboard.',
        'Established ownership of the front-end design system\'s component library, developing 20+ reusable, highly-tested components and serving as the subject matter expert; this effort resulted in a 40% acceleration of feature delivery time for three dependent product teams.',
        'Drove quality standards by instituting a mandatory comprehensive code review process for high-risk services, resulting in a 45% decrease in critical production defects within one quarter and mentoring three junior engineers on best practices for scalable architecture.',
        'Collaborated cross-functionally with Product Managers, UX Designers, and Infrastructure teams to define the 12-month technical roadmap, successfully delivering four medium-to-large scoped features ahead of schedule and integrating new architectural patterns into legacy systems.',
      ],
    },
    {
      title: 'Software Engineer',
      company: 'CitiusTech',
      location: 'Hyderabad, India / Remote',
      period: 'May 2021 – December 2023',
      achievements: [
        'Architected and led the migration of a proprietary healthcare data ingestion platform from monolithic architecture to a Python-based microservices framework, increasing system throughput by 85% and reducing deployment time from 4 hours to 20 minutes.',
        'Optimized core system efficiency by re-designing the caching layer (C++) for high-volume data retrieval, which decreased database load by 60% and lowered average API response latency by 68ms across all client integrations.',
        'Established end-to-end ownership of the internal monitoring and alerting system for the production environment, developing custom dashboards (JavaScript/React) that gave engineers real-time visibility into system health, proactively resolving an average of 7 high-severity issues per month.',
        'Improved code quality and system stability by championing comprehensive unit testing and advanced code review protocols (leveraging Java), which reduced critical production defects post-rollout by 55% over an 18-month period.',
        'Provided technical direction and mentorship for a 4-person team, leading complex product efforts to onboard a new security compliance module and ensuring 100% adherence to new HIPAA standards across 10+ enterprise applications.',
        'Drove a cost-saving initiative by optimizing cloud resource allocation and containerization strategies for core infrastructure services, resulting in a documented $15,000+ reduction in monthly operational expenditure.',
      ],
    },
    {
      title: 'Software Engineer Intern (Mobile/API)',
      company: 'CitiusTech',
      location: 'Chennai, India',
      period: 'May 2020 – December 2020',
      achievements: [
        'Engineered and shipped a critical security enhancement feature for the flagship mobile banking application (Swift/iOS), impacting over 1 million daily active users and leading to a 15% reduction in high-severity vulnerability reports during post-deployment monitoring.',
        'Developed and integrated a new real-time notifications GraphQL endpoint on the core Java server stack, decreasing the end-to-end latency for critical financial alerts by 250ms compared to the legacy REST API.',
        'Refactored the mobile data service layer (Swift) to standardize error handling and authentication flows, creating 8 reusable UI components that accelerated feature development time for the iOS team by an estimated 20 hours per sprint.',
        'Optimized application performance by diagnosing and resolving a core data serialization bottleneck in a high-volume Java API service, resulting in a 9% reduction in memory usage on lower-end Android/iOS devices.',
        'Participated actively in an Agile development cycle, including weekly design reviews and code reviews, contributing 100+ lines of production-ready Swift and Java code and maintaining a perfect code coverage score of 100% for all owned features.',
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
              My work is centered on achieving measurable engineering leverage and operational excellence across the stack (Python, Java/Spring Boot, React/TypeScript, Swift/iOS):
            </p>
            <div className="about-highlights">
              <div className="highlight-item">
                <h4 className="highlight-title">Scaling Enterprise Systems</h4>
                <p className="highlight-description">
                  I architect and scale critical microservices processing over 2.5 million financial transactions daily, supporting 500+ Fortune 500 customers. I've led platform migrations that increased system throughput by 85% and reduced deployment time by 95%.
                </p>
              </div>
              <div className="highlight-item">
                <h4 className="highlight-title">Driving Product Velocity</h4>
                <p className="highlight-description">
                  I own and deliver reusable platform components, including 20+ highly-tested design system components that accelerate feature delivery time by 40% for multiple product teams. I've optimized UI performance to reduce perceived latency by 1.4 seconds.
                </p>
              </div>
              <div className="highlight-item">
                <h4 className="highlight-title">Engineering Excellence & Quality</h4>
                <p className="highlight-description">
                  I establish robust quality standards through comprehensive code review processes, reducing critical production defects by 45-55%. I've achieved 99.99% API uptime and maintained 100% code coverage for all owned features.
                </p>
              </div>
              <div className="highlight-item">
                <h4 className="highlight-title">Performance & Cost Optimization</h4>
                <p className="highlight-description">
                  I optimize system performance through caching layer redesigns, reducing database load by 60% and API latency by 68ms. I've driven cost-saving initiatives that reduced monthly operational expenditure by $15,000+.
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
              {exp.location && <p className="experience-location">{exp.location}</p>}
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

