import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import './Projects.css'

const Projects = () => {
  const projects = [
    {
      id: 1,
      title: 'DeepaCart',
      description: 'Production-ready MERN e-commerce suite with AI-powered product recommendations, secure Stripe checkout, comprehensive admin dashboard, and vector-powered merchandising.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT', 'AI/ML', 'Material UI'],
      image: '🛒',
      imageGradient: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      githubUrl: 'https://github.com/DeepakPolasiSai/DeepaCart.git',
    },
    {
      id: 2,
      title: 'DeePlate',
      description: 'Full-stack food delivery platform featuring separate customer and admin React applications, JWT authentication, Stripe integration, and real-time order management.',
      technologies: ['React', 'Node.js', 'Express', 'MongoDB', 'Stripe', 'JWT', 'Vite'],
      image: '🍽️',
      imageGradient: 'linear-gradient(135deg, #f093fb 0%, #f5576c 100%)',
      githubUrl: 'https://github.com/DeepakPolasiSai/DeePlate.git',
    },
    {
      id: 3,
      title: 'ChatApp',
      description: 'Real-time chat application built with Socket.IO for instant messaging, user authentication, live notifications, and seamless communication experience.',
      technologies: ['React', 'Node.js', 'Socket.io', 'MongoDB', 'Express', 'JWT'],
      image: '💬',
      imageGradient: 'linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)',
      githubUrl: 'https://github.com/DeepakPolasiSai/ChatApp.git',
    },
    {
      id: 4,
      title: 'AI Writing Studio',
      description: 'AI-powered writing assistant that transforms short ideas into fully-fledged blog outlines and drafts using OpenAI API with a clean, intuitive interface.',
      technologies: ['Next.js', 'OpenAI API', 'React', 'Docker', 'Serverless'],
      image: '✍️',
      imageGradient: 'linear-gradient(135deg, #fa709a 0%, #fee140 100%)',
      githubUrl: 'https://github.com/DeepakPolasiSai/AI-Writing-Studio.git',
    },
    {
      id: 5,
      title: 'ConnectSphere',
      description: 'Professional networking platform clone with Clerk authentication, post creation, comments, likes, media uploads via Cloudinary, and dark/light themes.',
      technologies: ['Next.js', 'TypeScript', 'MongoDB', 'Clerk', 'Tailwind CSS', 'Cloudinary'],
      image: '💼',
      imageGradient: 'linear-gradient(135deg, #30cfd0 0%, #330867 100%)',
      githubUrl: 'https://github.com/DeepakPolasiSai/ConnectSphere.git',
    },
    {
      id: 6,
      title: 'PulseWave',
      description: 'Social media growth studio with Airtable integration, user onboarding workflows, conversion-focused landing pages, and reCAPTCHA-protected contact forms.',
      technologies: ['React', 'Vite', 'Express', 'Airtable', 'Tailwind CSS', 'reCAPTCHA'],
      image: '📱',
      imageGradient: 'linear-gradient(135deg, #a8edea 0%, #fed6e3 100%)',
      githubUrl: 'https://github.com/DeepakPolasiSai/PulseWave.git',
    },
  ]

  return (
    <div className="projects">
      <Section id="projects" title="My Projects" subtitle="A collection of my recent work">
        <div className="projects-grid">
          {projects.map((project) => (
            <Card key={project.id} hover className="project-card">
              <div 
                className="project-image" 
                style={{ background: project.imageGradient }}
              >
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
                  <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                    <Button variant="primary" size="small">View on GitHub</Button>
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

