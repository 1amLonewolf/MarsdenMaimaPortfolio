# 🐺 Marsden Maima - Web Developer Portfolio

A modern, dark-themed portfolio website showcasing professional web development work with smooth animations, GitHub integration, and a fully functional contact form.

![Portfolio Preview](./public/og-image.jpg)

---

## ✨ Features

### 🎨 Design
- **Dark Mode Theme** - Sleek black/gray palette with electric blue & cyan accents
- **Smooth Animations** - Bouncy hover effects, typing animation, glowing elements
- **Responsive Layout** - Perfect on mobile, tablet, and desktop
- **Wolf Branding** - Custom logo integrated throughout (navbar, footer, favicon, loader)

### 🛠️ Technical
- **React 18+** - Modern component-based architecture
- **Vite** - Lightning-fast builds and HMR
- **React Router** - Client-side navigation
- **EmailJS Integration** - Working contact form with auto-reply
- **GitHub API** - Live repository fetching
- **Vercel Analytics** - Visitor tracking (privacy-friendly)
- **SEO Optimized** - Meta tags, Open Graph, structured data

### 📄 Pages
- **Home** - Hero section with typing animation and profile photo
- **Projects** - Featured projects + live GitHub repositories
- **Contact** - Working form with email notifications
- **404** - Custom error page with wolf theme

### 🎯 Components
- **Loader** - Animated loading screen with spinning rings
- **Navbar** - Sticky navigation with mobile menu
- **Footer** - Social links and branding
- **Project Cards** - Hover effects with gradient borders

---

## 🚀 Quick Start

### Prerequisites
- Node.js 16+ and npm/yarn installed
- Git for version control

### Installation

```bash
# Clone the repository
git clone https://github.com/1amLonewolf/portfolio.git
cd portfolio

# Install dependencies
npm install

# Start development server
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
portfolio/
├── public/
│   ├── logo-wolf.png          # Wolf logo
│   ├── favicon.svg            # Browser tab icon
│   ├── og-image.jpg           # Social sharing image
│   └── Projects/              # Project screenshots
│       ├── SchoolFlow Hub Screenshot.jpg
│       ├── StudentManagerReportsScreenshot.PNG
│       └── ExcellentLifeFoundationScreenshot.PNG
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Navigation bar
│   │   ├── Footer.jsx         # Footer with social links
│   │   └── Loader.jsx         # Loading animation
│   ├── pages/
│   │   ├── Home.jsx           # Hero section
│   │   ├── Projects.jsx       # Project showcase
│   │   ├── Contact.jsx        # Contact form
│   │   └── NotFound.jsx       # 404 error page
│   ├── App.jsx                # Main app component
│   ├── main.jsx               # Entry point
│   └── index.css              # Global styles
├── .env                       # Environment variables (create from .env.example)
├── .env.example               # Environment variable template
├── index.html                 # HTML template with SEO
├── package.json               # Dependencies
└── vite.config.js             # Vite configuration
```

---

## ⚙️ Configuration

### Environment Variables

Create a `.env` file in the root directory:

```bash
cp .env.example .env
```

Fill in your credentials:

```env
# EmailJS Configuration (https://dashboard.emailjs.com/)
VITE_EMAILJS_SERVICE_ID=your_service_id
VITE_EMAILJS_TEMPLATE_ID=your_template_id
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID=your_autoreply_template_id
VITE_EMAILJS_PUBLIC_KEY=your_public_key

# GitHub Configuration
VITE_GITHUB_USERNAME=1amLonewolf
```

### EmailJS Setup

1. **Create Account**: Go to [EmailJS Dashboard](https://dashboard.emailjs.com/)
2. **Add Email Service**: Connect your Gmail account
3. **Create Contact Template** with variables:
   - `{{from_name}}`
   - `{{from_email}}`
   - `{{message}}`
   - `{{to_name}}`
4. **Create Auto-Reply Template** with variables:
   - `{{from_name}}`
   - `{{to_email}}`
5. **Get Credentials**: Copy Service ID, Template IDs, and Public Key to `.env`

### Custom Domain (Optional)

1. Purchase a domain (e.g., from Namecheap, GoDaddy)
2. In Vercel dashboard: Settings → Domains → Add your domain
3. Update DNS records as instructed
4. Update `index.html` meta tags with your domain

---

## 🎨 Customization

### Change Colors

Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-blue: #0066ff;      /* Main accent */
  --cyan-accent: #00d4ff;       /* Secondary accent */
  --bg-primary: #0a0a0f;        /* Main background */
  --bg-secondary: #12121a;      /* Section backgrounds */
  /* ... more variables */
}
```

### Update Content

**Personal Info:**
- `src/pages/Home.jsx` - Hero section text
- `src/pages/Contact.jsx` - Contact information
- `src/components/Footer.jsx` - Social links

**Projects:**
- `src/pages/Projects.jsx` - Update `featuredProjects` array
- Add screenshots to `/public/Projects/`
- Update live URLs and GitHub links

**Logo & Branding:**
- Replace `/public/logo-wolf.png` with your logo
- Update `/public/favicon.svg` for browser tab
- Update `/public/og-image.jpg` for social sharing

### Adjust Animations

**Typing Speed** (Home.jsx):
```css
/* src/index.css */
.hero-subtitle .typing-effect {
  animation: typing 20s steps(15) infinite;
  /* Change 20s for faster/slower typing */
}
```

**Loader Duration** (Loader.jsx):
```jsx
// src/components/Loader.jsx
setTimeout(() => {
  setIsLoaded(true)
}, 1500) // Change milliseconds
```

---

## 📦 Build & Deploy

### Build for Production

```bash
npm run build
```

Output will be in the `dist/` folder.

### Deploy to Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

Add your environment variables in Vercel dashboard:
1. Go to your project
2. Settings → Environment Variables
3. Add all variables from `.env`

### Deploy to Netlify

```bash
# Install Netlify CLI
npm i -g netlify-cli

# Deploy
netlify deploy --prod
```

### Deploy to GitHub Pages

```bash
# Install gh-pages
npm i -D gh-pages

# Add to package.json scripts:
"scripts": {
  "deploy": "gh-pages -d dist"
}

# Deploy
npm run deploy
```

---

## 🧪 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies
npm install

# Update dependencies
npm update
```

---

## 📊 Features Breakdown

### Loading Animation (`Loader.jsx`)
- Wolf logo with pulsing effect
- 3 animated spinning rings (blue/cyan gradient)
- Progress bar animation
- "Loading..." text with blinking dots
- Auto-fades after 1.5 seconds

### 404 Error Page (`NotFound.jsx`)
- Giant "404" gradient text
- Floating wolf logo
- Friendly error message
- Navigation buttons (Home, Projects)
- Quick links section
- Background glow effects

### Contact Form (`Contact.jsx`)
- Real-time validation
- EmailJS integration
- Auto-reply to sender
- Success/error messages
- Loading state
- Accessible form fields

### Projects Page (`Projects.jsx`)
- Featured projects section (manually curated)
- GitHub repositories section (auto-fetched)
- Project cards with hover effects
- Tech stack badges
- Impact statements
- Live demo & source code links

---

## 🔧 Troubleshooting

### Contact Form Not Working
1. Verify `.env` file exists with correct values
2. Check EmailJS template variables match exactly
3. Ensure EmailJS service is connected
4. Check browser console for errors

### GitHub Repos Not Loading
1. Verify `VITE_GITHUB_USERNAME` is correct
2. GitHub API has rate limits (60/hour unauthenticated)
3. Ensure username is public on GitHub

### Build Fails
```bash
# Clear cache and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

### Animations Not Working
1. Hard refresh browser (`Ctrl + Shift + R`)
2. Check browser console for CSS errors
3. Verify CSS files are imported in `main.jsx`

---

## 📈 Performance

- **Lighthouse Score**: 95+ (Performance, Accessibility, SEO)
- **First Contentful Paint**: < 1.5s
- **Time to Interactive**: < 3s
- **Bundle Size**: ~200KB (gzipped: ~68KB)

### Optimization Tips
- Images are lazy-loaded
- CSS is minified and tree-shaken
- Code splitting via React Router
- Vite's fast builds and tree-shaking

---

## 🛡️ Security

- ✅ Environment variables not committed (`.env` in `.gitignore`)
- ✅ External links use `rel="noopener noreferrer"`
- ✅ Form validation (client-side)
- ✅ No sensitive data exposed
- ✅ HTTPS enforced on hosting platforms

---

## 📝 License

This project is open source and available under the [MIT License](LICENSE).

---

## 🤝 Contributing

Contributions, issues, and feature requests are welcome!

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## 📧 Contact

**Marsden Maima**
- Email: maimamarsden@gmail.com
- LinkedIn: [linkedin.com/in/marsden-maima](https://www.linkedin.com/in/marsden-maima/)
- GitHub: [github.com/1amLonewolf](https://github.com/1amLonewolf)

Project Link: [github.com/1amLonewolf/portfolio](https://github.com/1amLonewolf/portfolio)

---

## 🙏 Acknowledgments

- [React](https://react.dev/) - UI library
- [Vite](https://vitejs.dev/) - Build tool
- [EmailJS](https://www.emailjs.com/) - Email service
- [Bootstrap Icons](https://icons.getbootstrap.com/) - Icon library
- [Vercel](https://vercel.com/) - Hosting platform

---

**Built with ❤️ and dedication to excellence**

*"Every project matters. I pour my expertise and dedication into creating exceptional digital experiences that drive real results."*
