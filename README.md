# Dhrumil Patel - Portfolio Website

A modern, responsive, and professional portfolio website built with React.js, Tailwind CSS, and Framer Motion.

## 🚀 Features

- **Modern Design**: Clean, minimal, and professional UI/UX
- **Dark Mode**: Seamless dark/light mode toggle with system preference detection
- **Fully Responsive**: Optimized for mobile, tablet, and desktop devices
- **Smooth Animations**: Subtle animations using Framer Motion
- **SEO Optimized**: Proper meta tags and semantic HTML structure
- **Fast Performance**: Optimized build with Vite
- **Glassmorphism Effects**: Modern UI design patterns
- **Interactive Components**: Hover effects and smooth transitions

## 🛠️ Tech Stack

- **Framework**: React 18
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Icons**: React Icons
- **Build Tool**: Vite
- **Font**: Inter (Google Fonts)

## 📦 Installation

1. Clone the repository:
```bash
git clone <your-repo-url>
cd portfolio
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and visit: `http://localhost:3000`

## 🏗️ Build for Production

```bash
npm run build
```

Preview the production build:
```bash
npm run preview
```

## 📁 Project Structure

```
portfolio/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── About.jsx
│   │   ├── Skills.jsx
│   │   ├── Projects.jsx
│   │   ├── Experience.jsx
│   │   ├── Contact.jsx
│   │   └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── tailwind.config.js
├── vite.config.js
└── README.md
```

## 🎨 Customization

### Update Personal Information

Edit the content in each component file to update:
- Personal details in `Hero.jsx`
- About section in `About.jsx`
- Skills in `Skills.jsx`
- Projects in `Projects.jsx`
- Experience in `Experience.jsx`
- Contact info in `Contact.jsx`

### Update Colors

Modify colors in `tailwind.config.js`:
```javascript
colors: {
  primary: {
    light: '#6366f1',
    DEFAULT: '#4f46e5',
    dark: '#4338ca',
  },
}
```

### Update Social Links

Update links in `Hero.jsx`, `Contact.jsx`, and `Footer.jsx` components.

## 📱 Sections

1. **Hero**: Introduction with CTA buttons
2. **About**: Professional summary and highlights
3. **Skills**: Categorized technical skills
4. **Projects**: Portfolio projects with live demos
5. **Experience**: Work experience timeline
6. **Contact**: Contact form and information
7. **Footer**: Quick links and social media

## 🚀 Deployment

### Deploy to Vercel
```bash
npm install -g vercel
vercel
```

### Deploy to Netlify
```bash
npm run build
# Drag and drop the 'dist' folder to Netlify
```

### Deploy to GitHub Pages
```bash
npm run build
# Deploy the 'dist' folder to gh-pages branch
```

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 👨‍💻 Developer

**Dhrumil Patel**
- Frontend Developer at Arihant Solution
- Specializing in React.js & React Native

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

## ⭐ Show Your Support

Give a ⭐️ if you like this project!

---

Made with ❤️ and React.js
