# 🚀 Deployment Guide - Quick Launch

This guide will get your portfolio live in under 10 minutes!

---

## 📋 Pre-Deployment Checklist

### ✅ Complete These First

- [ ] **Test locally**: `npm run dev` - everything works
- [ ] **Build test**: `npm run build` - no errors
- [ ] **Environment variables**: `.env` file ready
- [ ] **GitHub repo**: Code pushed to GitHub
- [ ] **Profile photo**: Added to `/public/`
- [ ] **Project screenshots**: Added to `/public/Projects/`

---

## 🎯 Option 1: Deploy to Vercel (Recommended)

**Why Vercel?**
- ✅ Free hosting forever
- ✅ Automatic HTTPS
- ✅ Custom domain (free)
- ✅ Auto-deploys on git push
- ✅ Built-in analytics
- ✅ Edge network (fast worldwide)

### Step-by-Step:

#### 1. Install Vercel CLI
```bash
npm install -g vercel
```

#### 2. Login to Vercel
```bash
vercel login
```
Choose your preferred login method (GitHub recommended)

#### 3. Deploy
```bash
vercel
```

**Follow the prompts:**
```
? Set up and deploy "~/Desktop/Portfolio/portfolio"? [Y/n] → y
? Which scope do you want to deploy to? → Select your account
? Link to existing project? [y/N] → N (first time)
? What's your project's name? → marsden-portfolio (or your choice)
? In which directory is your code located? → ./
```

#### 4. Add Environment Variables

Go to Vercel Dashboard → Your Project → Settings → Environment Variables

Add these:
```
VITE_EMAILJS_SERVICE_ID     = service_vn5m1ib
VITE_EMAILJS_TEMPLATE_ID    = template_9xiivtl
VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID = template_1llu75e
VITE_EMAILJS_PUBLIC_KEY     = jnxg0CAWjgquu2Ssn
VITE_GITHUB_USERNAME        = 1amLonewolf
```

Click **Save**

#### 5. Redeploy
```bash
vercel --prod
```

**Done!** 🎉 Your site is live!

---

## 🎯 Option 2: Deploy to Netlify

#### 1. Install Netlify CLI
```bash
npm install -g netlify-cli
```

#### 2. Login
```bash
netlify login
```

#### 3. Deploy
```bash
netlify deploy --prod
```

**Follow prompts:**
```
? What would you like to do? → Create & configure a new site
? Choose your team → Your team name
? What's your site's name? → marsden-portfolio
? Build command → npm run build
? Directory to deploy → dist
```

#### 4. Add Environment Variables
```bash
netlify env:set VITE_EMAILJS_SERVICE_ID service_vn5m1ib
netlify env:set VITE_EMAILJS_TEMPLATE_ID template_9xiivtl
netlify env:set VITE_EMAILJS_AUTOREPLY_TEMPLATE_ID template_1llu75e
netlify env:set VITE_EMAILJS_PUBLIC_KEY jnxg0CAWjgquu2Ssn
netlify env:set VITE_GITHUB_USERNAME 1amLonewolf
```

#### 5. Deploy Again
```bash
netlify deploy --prod
```

**Done!** 🎉

---

## 🎯 Option 3: GitHub Pages

#### 1. Install gh-pages
```bash
npm install -D gh-pages
```

#### 2. Update `package.json`
```json
{
  "homepage": "https://1amlonewolf.github.io/portfolio",
  "scripts": {
    "deploy": "gh-pages -d dist"
  }
}
```

#### 3. Update `vite.config.js`
```js
export default defineConfig({
  base: '/portfolio/',
  plugins: [react()],
})
```

#### 4. Deploy
```bash
npm run build
npm run deploy
```

**Done!** Site live at: `https://1amlonewolf.github.io/portfolio`

---

## 🌐 Add Custom Domain

### On Vercel:

1. Go to Dashboard → Your Project → Settings → Domains
2. Add your domain: `marsdenmaima.com`
3. Add DNS records at your domain registrar:
   ```
   Type: A
   Name: @
   Value: 76.76.21.21
   
   Type: CNAME
   Name: www
   Value: cname.vercel-dns.com
   ```
4. Wait 24-48 hours for DNS propagation
5. Enable HTTPS (automatic)

### On Netlify:

1. Go to Domain Settings → Add custom domain
2. Enter your domain
3. Update DNS at registrar:
   ```
   Type: A
   Name: @
   Value: 75.2.60.5
   
   Type: CNAME
   Name: www
   Value: your-site-name.netlify.app
   ```

---

## 📊 Post-Deployment Tasks

### 1. Test Everything
- [ ] Contact form works (test with real email)
- [ ] All links work
- [ ] Mobile responsive
- [ ] 404 page works (visit random URL)
- [ ] Loader appears on refresh

### 2. Update Meta Tags
Edit `index.html` and replace:
```html
<meta property="og:url" content="https://your-actual-domain.com" />
<meta property="twitter:url" content="https://your-actual-domain.com" />
```

### 3. Submit to Google
1. Go to [Google Search Console](https://search.google.com/search-console)
2. Add your property (domain)
3. Submit sitemap: `https://your-domain.com/sitemap.xml`
4. Request indexing

### 4. Add Analytics
- **Vercel Analytics**: Already included! View in Vercel dashboard
- **Google Analytics**: Add tracking code to `index.html`

### 5. Test Performance
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [WebPageTest](https://www.webpagetest.org/)
- Aim for 90+ scores

---

## 🔄 Auto-Deploy on Git Push

### Vercel:
Already configured! Just push to your main branch:
```bash
git add .
git commit -m "Update projects"
git push origin main
```
Vercel auto-deploys in ~30 seconds.

### Netlify:
Connect your GitHub repo in Netlify dashboard → Builds → Connect to Git

---

## 🐛 Troubleshooting

### Build Fails on Vercel
1. Check build logs in Vercel dashboard
2. Verify `npm run build` works locally
3. Check Node version (should be 16+)

### Environment Variables Not Working
1. Redeploy after adding variables
2. Variables must start with `VITE_`
3. Check for typos

### Contact Form Not Working
1. Verify EmailJS credentials are correct
2. Check EmailJS dashboard for errors
3. Test locally first

### Custom Domain Not Working
1. Wait 24-48 hours for DNS
2. Clear browser cache
3. Check DNS propagation: [whatsmydns.net](https://whatsmydns.net)

---

## 📈 Next Steps After Launch

1. **Share on Social Media**
   - LinkedIn post with portfolio link
   - Twitter thread about your journey
   - GitHub README update

2. **Add to Resume**
   - Add portfolio URL to resume header
   - Include QR code for print resumes

3. **Network**
   - Share in developer communities
   - Add to email signature
   - Include in job applications

4. **Monitor & Improve**
   - Check Vercel Analytics weekly
   - Gather feedback from visitors
   - A/B test different sections

---

## 🎉 Success! You're Live!

Your portfolio is now:
- ✅ Live on the internet
- ✅ Mobile-friendly
- ✅ SEO optimized
- ✅ Fast & secure (HTTPS)
- ✅ Ready to impress clients/recruiters

**Share it everywhere!** 🚀

---

**Need Help?**
- Vercel Docs: [vercel.com/docs](https://vercel.com/docs)
- Netlify Docs: [docs.netlify.com](https://docs.netlify.com)
- EmailJS Docs: [emailjs.com/docs](https://www.emailjs.com/docs)
