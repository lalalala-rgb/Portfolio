# Personal Portfolio Template

A modern, elegant, and fully responsive portfolio template built with React, Vite, and Tailwind CSS. This template features sections for showcasing your skills, completed projects, ongoing work, and contact information.

## ✨ Features

- **Modern Design**: Clean and professional layout with smooth animations
- **Fully Responsive**: Works perfectly on desktop, tablet, and mobile devices
- **Easy Customization**: All personal information is centralized in a single config file
- **Smooth Scrolling**: Elegant navigation with smooth scrolling between sections
- **Interactive Components**: Hover effects, animations, and interactive elements
- **Contact Form**: Built-in contact form with mailto functionality
- **Social Links**: Integration with GitHub, LinkedIn, and other social platforms
- **SEO Friendly**: Optimized structure for search engines

## 🚀 Quick Start

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn

### Installation

1. Clone or download this project
2. Navigate to the project directory:
   ```bash
   cd Portfolio
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Start the development server:
   ```bash
   npm run dev
   ```

5. Open your browser and visit `http://localhost:5173`

## 🎨 Customization

### 1. Personal Information

Edit the `src/config/portfolioConfig.js` file to customize your portfolio:

```javascript
export const portfolioConfig = {
  // Update with your personal information
  name: "Your Name Here",
  tagline: "Your Professional Tagline",
  location: "Your City, Country",
  email: "your.email@example.com",
  
  // Add your bio
  bio: "Your professional bio...",
  
  // Update social links
  social: {
    github: "https://github.com/yourusername",
    linkedin: "https://linkedin.com/in/yourprofile",
    // ... other social links
  },
  
  // Customize your skills
  skills: {
    "Frontend Development": ["React", "JavaScript", "CSS3"],
    // ... add your skills by category
  },
  
  // Add your projects
  projects: [
    {
      title: "Project Name",
      description: "Project description...",
      technologies: ["React", "Node.js"],
      // ... project details
    }
  ],
  
  // Add ongoing projects
  ongoingProjects: [
    {
      title: "Ongoing Project",
      progress: 75,
      // ... ongoing project details
    }
  ]
};
```

### 2. Adding Project Images

1. Place your project images in the `public` folder
2. Update the `image` property in your project objects:
   ```javascript
   {
     title: "My Project",
     image: "/my-project-screenshot.jpg", // Path relative to public folder
     // ... other properties
   }
   ```

### 3. Customizing Colors and Theme

Edit the `theme` object in `portfolioConfig.js`:

```javascript
theme: {
  primaryColor: "#3B82F6",      // Blue
  secondaryColor: "#10B981",    // Green
  accentColor: "#F59E0B",       // Amber
  // ... other theme properties
}
```

### 4. Adding Your Resume

1. Place your resume PDF in the `public` folder (e.g., `resume.pdf`)
2. Update the resume link in the config:
   ```javascript
   social: {
     resume: "/resume.pdf"
   }
   ```

## 📱 Sections Overview

### Hero Section
- Your name and professional tagline
- Brief bio/introduction
- Call-to-action buttons
- Location and availability status

### Skills Section
- Organized by categories (Frontend, Backend, Tools, etc.)
- Interactive skill tags
- Professional summary

### Projects Section
- Featured and all projects filter
- Project cards with descriptions
- Technology tags
- Live demo and GitHub links

### Ongoing Projects Section
- Current work in progress
- Progress tracking
- Priority indicators
- Expected completion dates

### Contact Section
- Contact form with mailto functionality
- Social media links
- Response time information
- Location and availability

### Footer
- Quick navigation links
- Social media icons
- Copyright information

## 🛠 Building for Production

To build the portfolio for production:

```bash
npm run build
```

The build files will be generated in the `dist` folder, ready for deployment.

## 🚀 Deployment

### Netlify
1. Build the project: `npm run build`
2. Drag and drop the `dist` folder to [Netlify](https://netlify.com)

### Vercel
1. Connect your GitHub repository to [Vercel](https://vercel.com)
2. Vercel will automatically build and deploy your portfolio

### GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`
2. Add to package.json:
   ```json
   "scripts": {
     "deploy": "gh-pages -d dist"
   }
   ```
3. Run: `npm run build && npm run deploy`

## 📝 Customization Tips

### Adding New Sections
1. Create a new component in `src/components/`
2. Import and add it to `App.jsx`
3. Update the navigation in `Header.jsx` and `Footer.jsx`

### Modifying Animations
- Animation classes are defined in `src/index.css`
- Tailwind animations are configured in `tailwind.config.js`

### Color Scheme
- Update colors in the `portfolioConfig.js` theme section
- Modify Tailwind colors in `tailwind.config.js`

### Typography
- Font family is set in `tailwind.config.js`
- Update font sizes using Tailwind classes

## 🤝 Contributing

Feel free to fork this project and submit pull requests for improvements!

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🎯 Next Steps After Setup

1. **Customize** the `portfolioConfig.js` file with your information
2. **Add** your project images to the `public` folder
3. **Update** colors and theme to match your preference
4. **Test** the contact form and social links
5. **Deploy** to your preferred hosting platform

Need help? Check the configuration file for detailed comments and examples!

## 📞 Support

If you encounter any issues or have questions about customization, feel free to:
- Check the configuration file for examples
- Review the component files for implementation details
- Open an issue for technical problems

**Happy coding!** 🚀

## React Compiler

The React Compiler is not enabled on this template because of its impact on dev & build performances. To add it, see [this documentation](https://react.dev/learn/react-compiler/installation).

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project.
