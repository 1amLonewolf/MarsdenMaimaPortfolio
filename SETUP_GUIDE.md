# Portfolio Setup Guide

## 🚀 Quick Start

### 1. Install Dependencies

```bash
npm install
```

### 2. Set Up Environment Variables

1. Copy the example environment file:
   ```bash
   cp .env.example .env
   ```

2. Fill in your credentials (see EmailJS Setup below)

### 3. Run Development Server

```bash
npm run dev
```

### 4. Build for Production

```bash
npm run build
```

---

## 📧 EmailJS Setup (Required for Contact Form)

### Step 1: Create EmailJS Account
1. Go to [https://dashboard.emailjs.com/](https://dashboard.emailjs.com/)
2. Sign up for a free account

### Step 2: Add Email Service
1. Click **"Email Services"** in the left sidebar
2. Click **"Add New Service"**
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the connection steps
5. Copy your **Service ID** (e.g., `service_abc123`)

### Step 3: Create Email Template
1. Click **"Email Templates"** in the left sidebar
2. Click **"Create New Template"**
3. Use this template structure:

```
Subject: New Contact Form Submission from {{from_name}}

From: {{from_name}} <{{from_email}}>

Message:
{{message}}

---
This message was sent from the contact form on Marsden Maima's portfolio.
```

4. Save the template and copy your **Template ID** (e.g., `template_xyz789`)

### Step 4: Get Public Key
1. Click **"Account"** (your name) in the top right
2. Go to **"API Keys"**
3. Copy your **Public Key**

### Step 5: Add to .env File

Create/edit `.env` in your project root:

```env
VITE_EMAILJS_SERVICE_ID=your_service_id_here
VITE_EMAILJS_TEMPLATE_ID=your_template_id_here
VITE_EMAILJS_PUBLIC_KEY=your_public_key_here
VITE_GITHUB_USERNAME=1amLonewolf
```

---

## 📝 Content Customization Checklist

### Home Page (`src/pages/Home.jsx`)
- [ ] Replace profile image URL with your actual photo
  - Option 1: Add photo to `/public/profile.jpg` and use `/profile.jpg`
  - Option 2: Use a hosted image URL
- [ ] Update location in Contact section if desired

### Projects Page (`src/pages/Projects.jsx`)
- [ ] Replace featured project #1 with your actual project
  - Update title, description, impact statement
  - Add screenshot to `/public/projects/` folder
  - Update live demo and GitHub URLs
- [ ] Replace featured project #2 with your actual project
- [ ] Add more projects by copying the template structure

### Contact Page (`src/pages/Contact.jsx`)
- [ ] Update LinkedIn URL
- [ ] Update location if desired
- [ ] Verify email address is correct

### Footer (`src/components/Footer.jsx`)
- [ ] Update LinkedIn URL in social links

### index.html
- [ ] Replace `https://yourportfolio.com` with your actual domain
- [ ] Add `/og-image.jpg` for social sharing (1200x630px recommended)
- [ ] Update favicon files in `/public` folder

---

## 🎨 Design Customization

### Color Scheme
Edit CSS variables in `src/index.css`:

```css
:root {
  --primary-blue: #0066ff;      /* Main accent color */
  --cyan-accent: #00d4ff;       /* Secondary accent */
  --bg-primary: #0a0a0f;        /* Main background */
  --bg-secondary: #12121a;      /* Section backgrounds */
  /* ... more variables ... */
}
```

### Typography
The portfolio uses:
- **Inter** for body text (loaded from Google Fonts)
- **Fira Code / JetBrains Mono** for code elements (system fallback)

To change fonts, update the Google Fonts link in `index.html` and CSS variables in `index.css`.

---

## 📁 Recommended File Structure

```
portfolio/
├── public/
│   ├── profile.jpg           # Your profile photo
│   ├── og-image.jpg          # Social sharing image (1200x630)
│   ├── favicon-16x16.png     # Favicon
│   ├── favicon-32x32.png     # Favicon
│   ├── apple-touch-icon.png  # iOS icon
│   ├── vite.svg              # Current favicon
│   └── projects/
│       ├── ecommerce.jpg     # Project screenshots
│       └── dashboard.jpg
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   └── Contact.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .env                      # Your environment variables (create this)
├── .env.example              # Template for .env
├── index.html
├── package.json
└── vite.config.js
```

---

## 🔧 Troubleshooting

### Contact Form Not Sending
1. Verify `.env` file exists with correct values
2. Check browser console for errors
3. Ensure EmailJS template variables match: `from_name`, `from_email`, `message`
4. Verify EmailJS service is connected and active

### GitHub Repos Not Loading
1. Check that `VITE_GITHUB_USERNAME` is correct
2. GitHub API has rate limits (60 requests/hour for unauthenticated)
3. Verify your GitHub username is public

### Styles Not Applying
1. Clear browser cache
2. Run `npm run dev` to restart dev server
3. Check for CSS syntax errors

### Build Fails
```bash
# Clear node_modules and reinstall
rm -rf node_modules package-lock.json
npm install
npm run build
```

---

## 🚀 Deployment

### Vercel (Recommended)
1. Install Vercel CLI: `npm i -g vercel`
2. Run: `vercel`
3. Follow prompts
4. Environment variables will be auto-detected from `.env`

### Netlify
1. Connect your GitHub repository
2. Build command: `npm run build`
3. Publish directory: `dist`
4. Add environment variables in Netlify dashboard

### GitHub Pages
1. Install: `npm i -D vite-plugin-gh-pages`
2. Update `vite.config.js` with base path
3. Run: `npm run deploy`

---

## 📈 Optional Enhancements

### Add Dark/Light Mode Toggle
Add a theme toggle button that switches CSS variables.

### Add Project Filtering
Add category tags and filter buttons on the Projects page.

### Add Testimonials Section
Create a new component with client testimonials.

### Add Blog Section
Integrate with a headless CMS or markdown files.

### Add Analytics
Add Google Analytics or Vercel Analytics:
```jsx
// In index.html
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
```

### Add Resume Download
Add a download button in the Hero section linking to `/resume.pdf`.

---

## 📞 Support

If you encounter issues:
1. Check the [React documentation](https://react.dev)
2. Check the [Vite documentation](https://vitejs.dev)
3. Check the [EmailJS documentation](https://www.emailjs.com/docs/)
4. Review browser console for errors

---

**Built with ❤️ and dedication to excellence**
