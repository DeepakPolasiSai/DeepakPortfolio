import Section from '../components/Section'
import Card from '../components/Card'
import './About.css'

const About = () => {
  const experiences = [
    {
      title: 'Senior Developer',
      company: 'Tech Company',
      period: '2022 - Present',
      description: 'Leading development of innovative web applications.',
    },
    {
      title: 'Full Stack Developer',
      company: 'Startup Inc',
      period: '2020 - 2022',
      description: 'Built scalable applications using modern technologies.',
    },
  ]

  const education = [
    {
      degree: 'Bachelor of Science',
      field: 'Computer Science',
      university: 'University Name',
      year: '2020',
    },
  ]

  return (
    <div className="about">
      <Section id="about" title="About Me" subtitle="Get to know me better">
        <div className="about-content">
          <div className="about-text">
            <p className="about-description">
              I'm a passionate full-stack developer with a love for creating
              beautiful and functional web applications. With years of experience
              in modern web technologies, I bring ideas to life through clean code
              and innovative solutions.
            </p>
            <p className="about-description">
              When I'm not coding, you can find me exploring new technologies,
              contributing to open-source projects, or sharing knowledge with
              the developer community.
            </p>
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
              <p className="experience-description">{exp.description}</p>
            </Card>
          ))}
        </div>
      </Section>

      <Section title="Education">
        <div className="education-grid">
          {education.map((edu, index) => (
            <Card key={index} className="education-card">
              <h3 className="education-degree">{edu.degree}</h3>
              <p className="education-field">{edu.field}</p>
              <p className="education-university">{edu.university}</p>
              <p className="education-year">{edu.year}</p>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default About

