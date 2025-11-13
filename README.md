# DeepakPortfolio

A modern, visually appealing portfolio website built with React.js, featuring reusable components and React Router for seamless navigation.

## Features

- ✨ Modern and responsive design
- 🔄 Reusable React components (Button, Card, Section, Navbar, Footer)
- 🛣️ React Router for multi-page navigation
- 📱 Fully responsive layout
- 🎨 Beautiful gradient effects and animations
- ⚡ Fast and optimized with Vite

## Pages

- **Home**: Hero section with introduction and featured skills
- **About**: Personal information, experience, and education
- **Projects**: Showcase of portfolio projects with details
- **Contact**: Contact form and information

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Install dependencies:

```bash
npm install
```

2. Start the development server:

```bash
npm run dev
```

3. Open your browser and navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

### Preview Production Build

```bash
npm run preview
```

## Project Structure

```
DeepakPortfolio/
├── src/
│   ├── components/       # Reusable components
│   │   ├── Button.jsx
│   │   ├── Card.jsx
│   │   ├── Section.jsx
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/           # Page components
│   │   ├── Home.jsx
│   │   ├── About.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx          # Main app component with routing
│   ├── main.jsx         # Entry point
│   └── index.css        # Global styles
├── index.html
├── package.json
└── vite.config.js
```

## Customization

### Update Personal Information

1. **Home Page**: Edit `src/pages/Home.jsx` to update your name, title, and description
2. **About Page**: Edit `src/pages/About.jsx` to update your experience and education
3. **Projects Page**: Edit `src/pages/Projects.jsx` to add your actual projects
4. **Contact Page**: Edit `src/pages/Contact.jsx` to update contact information

### Styling

- Global styles and CSS variables are in `src/index.css`
- Component-specific styles are in their respective `.css` files
- Color scheme can be customized by modifying CSS variables in `src/index.css`

## Technologies Used

- React 18
- React Router DOM 6
- Vite
- CSS3 (with CSS Variables)

## License

This project is open source and available under the MIT License.
