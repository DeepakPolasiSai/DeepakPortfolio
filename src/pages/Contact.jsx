import { useState } from 'react'
import Section from '../components/Section'
import Card from '../components/Card'
import Button from '../components/Button'
import './Contact.css'

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  })

  const [status, setStatus] = useState('')

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    setStatus('Thank you for your message! I will get back to you soon.')
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setStatus(''), 5000)
  }

  const contactInfo = [
    {
      icon: '📧',
      title: 'Email',
      value: 'your.email@example.com',
      link: 'mailto:your.email@example.com',
    },
    {
      icon: '📱',
      title: 'Phone',
      value: '+1 (555) 123-4567',
      link: 'tel:+15551234567',
    },
    {
      icon: '📍',
      title: 'Location',
      value: 'Your City, Country',
      link: '#',
    },
  ]

  return (
    <div className="contact">
      <Section id="contact" title="Get In Touch" subtitle="Let's work together">
        <div className="contact-content">
          <div className="contact-info-section">
            <Card className="contact-info-card">
              <h3 className="contact-info-title">Contact Information</h3>
              <p className="contact-info-description">
                Feel free to reach out if you have any questions or would like
                to discuss a project.
              </p>
              <div className="contact-info-list">
                {contactInfo.map((info, index) => (
                  <a
                    key={index}
                    href={info.link}
                    className="contact-info-item"
                  >
                    <span className="contact-icon">{info.icon}</span>
                    <div className="contact-info-text">
                      <span className="contact-info-label">{info.title}</span>
                      <span className="contact-info-value">{info.value}</span>
                    </div>
                  </a>
                ))}
              </div>
            </Card>
          </div>

          <div className="contact-form-section">
            <Card className="contact-form-card">
              <h3 className="contact-form-title">Send a Message</h3>
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="form-input"
                    required
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className="form-textarea"
                    rows="6"
                    required
                  ></textarea>
                </div>

                {status && (
                  <div className="form-status success">{status}</div>
                )}

                <Button type="submit" size="large" className="submit-button">
                  Send Message
                </Button>
              </form>
            </Card>
          </div>
        </div>
      </Section>
    </div>
  )
}

export default Contact

