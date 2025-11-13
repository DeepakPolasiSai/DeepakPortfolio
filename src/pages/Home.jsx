import { Link } from 'react-router-dom'
import Section from '../components/Section'
import Button from '../components/Button'
import './Home.css'

const Home = () => {
  return (
    <div className="home">
      <Section id="hero" className="hero-section">
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Hi, I'm <span className="gradient-text">Your Name</span>
            </h1>
            <h2 className="hero-subtitle">Full Stack Developer</h2>
            <p className="hero-description">
              I create beautiful, functional, and user-friendly web experiences.
              Passionate about clean code and innovative solutions.
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
                <span>👨‍💻</span>
              </div>
            </div>
          </div>
        </div>
      </Section>

      <Section title="Skills" subtitle="Technologies I work with" background="gray">
        <div className="skills-grid">
          {['React', 'JavaScript', 'Node.js', 'Python', 'CSS', 'HTML'].map((skill) => (
            <div key={skill} className="skill-item">
              <span className="skill-name">{skill}</span>
            </div>
          ))}
        </div>
      </Section>

      <Section title="Featured Projects" subtitle="Some of my recent work">
        <div className="featured-projects">
          <div className="project-preview">
            <h3>Project 1</h3>
            <p>Description of your amazing project...</p>
            <Link to="/projects">
              <Button variant="outline">View All Projects</Button>
            </Link>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Home

