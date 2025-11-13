import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'E-Commerce Platform',
      description: 'A full-featured e-commerce platform with payment integration, user authentication, and admin dashboard.',
      technologies: ['React', 'Node.js', 'MongoDB', 'Stripe'],
      image: '🛒',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 2,
      title: 'Task Management App',
      description: 'A collaborative task management application with real-time updates and team collaboration features.',
      technologies: ['React', 'Firebase', 'TypeScript'],
      image: '📋',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 3,
      title: 'Weather Dashboard',
      description: 'A beautiful weather dashboard with location-based forecasts and interactive charts.',
      technologies: ['React', 'API Integration', 'Chart.js'],
      image: '🌤️',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 4,
      title: 'Social Media App',
      description: 'A social media platform with posts, comments, likes, and real-time notifications.',
      technologies: ['React', 'Node.js', 'Socket.io', 'PostgreSQL'],
      image: '📱',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 5,
      title: 'Portfolio Website',
      description: 'A responsive portfolio website showcasing projects and skills with modern design.',
      technologies: ['React', 'CSS', 'React Router'],
      image: '💼',
      liveUrl: '#',
      githubUrl: '#',
    },
    {
      id: 6,
      title: 'Blog Platform',
      description: 'A content management system for blogging with markdown support and SEO optimization.',
      technologies: ['React', 'Next.js', 'MDX', 'GraphQL'],
      image: '✍️',
      liveUrl: '#',
      githubUrl: '#',
    },
  ]

  return (
    <div className="projects">
      <Section id="projects" title="My Projects" subtitle="A collection of my recent work">
        <div className="projects-grid">
          {projects.map((project) => (
            <Card key={project.id} hover className="project-card">
              <div className="project-image">
                <span className="project-emoji">{project.image}</span>
              </div>
              <div className="project-content">
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
                <div className="project-technologies">
                  {project.technologies.map((tech, index) => (
                    <span key={index} className="tech-tag">
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="project-links">
                  <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="small">Live Demo</Button>
                  </a>
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="outline" size="small">GitHub</Button>
                  </a>
                </div>
              </div>
            </Card>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default Projects

