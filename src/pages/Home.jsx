import { Link } from 'react-router-dom'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Sai Deepak Polasi</span>
            </h1>
            <h2 className="hero-subtitle">Product-Focused Full-Stack Engineer</h2>
            <p className="hero-description">
              I'm a Product-Focused Full-Stack Engineer with 4+ years of experience building resilient, high-scale systems (Python, Java/Spring Boot, React/TypeScript, Swift/iOS). I specialize in engineering leverage—architecting microservices processing 2.5M+ daily transactions and delivering reusable platform components that accelerate feature velocity for entire product teams. My focus is on driving measurable business outcomes, from maintaining 99.99% API uptime to reducing critical production defects by 45% and accelerating feature delivery by 40%.
            </p>
            <div className="hero-buttons">
              <Link to="/projects">
                <Button size="large">View My Work</Button>
              </Link>
              <Link to="/contact">
                <Button variant="outline" size="large">Get In Touch</Button>
              </Link>
            </div>
          </div>
          <div className="hero-image">
            <div className="hero-avatar">
              <div className="avatar-placeholder">
                <img 
                  src="/profile.jpg" 
                  alt="Sai Deepak Polasi" 
                  className="profile-image"
                />
              </div>
            </div>
            <div className="resume-buttons">
              <a
                href="/deepak_SDE_project.pdf.pdf"
                download="deepak_SDE_project.pdf"
                className="resume-button download"
              >
                <span className="resume-icon">📥</span>
                <span>Download Resume</span>
              </a>
              <a
                href="/deepak_SDE_project.pdf.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="resume-button view"
              >
                <span className="resume-icon">👁️</span>
                <span>View Resume</span>
              </a>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Skills" subtitle="Technologies I work with" background="gray">
        <div className="skills-grid">
          {[
            'React', 'TypeScript', 'JavaScript', 'Next.js', 
            'Node.js', 'Express', 'Java', 'Spring Boot',
            'Python', 'Swift', 'iOS', 'C++',
            'MongoDB', 'PostgreSQL', 'GraphQL', 'Socket.io',
            'Stripe', 'JWT', 'Clerk', 'Docker',
            'Tailwind CSS', 'Material UI', 'CSS', 'HTML',
            'Vite', 'OpenAI API', 'AI/ML', 'Airtable',
            'Cloudinary', 'reCAPTCHA', 'Serverless'
          ].map((skill) => (
            <div key={skill} className="skill-item">
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Featured Projects" subtitle="Highlights from my portfolio">
        <div className="featured-projects-grid">
          {[
            {
              id: 1,
              title: 'DeepaCart',
              description: 'Production-ready MERN e-commerce suite with AI-powered product recommendations, secure Stripe checkout, comprehensive admin dashboard, and vector-powered merchandising. Built with React, Node.js, Express, MongoDB, and integrated AI/ML capabilities for intelligent product suggestions.',
              technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT', 'AI/ML', 'Material UI'],
              githubUrl: 'https://github.com/DeepakPolasiSai/DeepaCart.git',
              image: '🛒',
              imageGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
            },
            {
              id: 2,
              title: 'ConnectSphere',
              description: 'Professional networking platform clone with Clerk authentication, post creation, comments, likes, media uploads via Cloudinary, and dark/light themes. Built with Next.js 14, TypeScript, MongoDB, and modern UI components for a seamless user experience.',
              technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Clerk', 'Tailwind CSS', 'Cloudinary'],
              githubUrl: 'https://github.com/DeepakPolasiSai/ConnectSphere.git',
              image: '💼',
              imageGradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
            },
          ].map((project) => (
            <Card key={project.id} hover className="featured-project-card">
              <div 
                className="featured-project-image" 
                style={{ background: project.imageGradient }}
              >
                <span className="featured-project-emoji">{project.image}</span>
              </div>
              <div className="featured-project-content">
                <h3 className="featured-project-title">{project.title}</h3>
                <p className="featured-project-description">{project.description}</p>
                <div className="featured-project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag-small">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="featured-project-link">
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="small">View on GitHub</Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
        <div style={{ textAlign: 'center', marginTop: '2rem' }}>
          <Link to="/projects">
            <Button variant="primary" size="large">View All Projects</Button>
          </Link>
        </div>
      </Section>
    </div>
  )
}

export default Home

