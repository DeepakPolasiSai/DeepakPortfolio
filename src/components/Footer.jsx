import './Footer.css'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  const socialLinks = [
    { name: 'GitHub', url: 'https://github.com/DeepakPolasiSai', icon: '🔗' },
    { name: 'LinkedIn', url: 'https://www.linkedin.com/in/deepaksaipolasi/', icon: '🔗' },
    { name: 'Instagram', url: 'https://www.instagram.com/its_deeeee_/', icon: '🔗' },
  ]

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">DeepakPolasiSai</h3>
            <p className="footer-description">
              Product-Focused Full-Stack Engineer building resilient, high-scale systems.
            </p>
          </div>
          
          <div className="footer-section">
            <h4 className="footer-heading">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="/">Home</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/projects">Projects</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-heading">Connect</h4>
            <div className="social-links">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={social.name}
                >
                  {social.icon} {social.name}
                </a>
              ))}
            </div>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; {currentYear} DeepakPolasiSai. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer

