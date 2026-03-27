# Contributing to Marsden's Portfolio

First off, thank you for considering contributing! It's people like you that make the open-source community such a great place to learn, inspire, and create.

---

## 🤝 How Can I Contribute?

### Reporting Bugs

Before creating bug reports, please check the existing issues as you might find out that you don't need to create one. When you are creating a bug report, please include as many details as possible:

**Example:**
```markdown
**Bug Summary**
Contact form not sending emails on mobile devices

**Steps to Reproduce**
1. Open site on mobile
2. Navigate to contact page
3. Fill out form
4. Click submit

**Expected Behavior**
Form should send email and show success message

**Actual Behavior**
Nothing happens, no error message

**Environment**
- Device: iPhone 12
- Browser: Safari iOS 15
- Version: Latest
```

### Suggesting Enhancements

Enhancement suggestions are welcome! Please describe what you'd like to see added and why it would be valuable.

**Example:**
```markdown
**Feature Request**
Add dark/light mode toggle

**Why?**
Users might prefer light mode in bright environments

**Implementation Ideas**
- Toggle button in navbar
- Save preference to localStorage
- Use CSS variables for theming
```

### Pull Requests

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Make your changes
4. Test thoroughly
5. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
6. Push to the branch (`git push origin feature/AmazingFeature`)
7. Open a Pull Request

---

## 📋 Pull Request Guidelines

### Before Submitting

- [ ] Code follows the existing style
- [ ] No console.log statements (use for development only)
- [ ] Tested on multiple screen sizes
- [ ] No breaking changes
- [ ] Updated documentation if needed

### Good PR Examples

✅ **Add new project card component**
- Clear description of what it does
- Screenshots of the component
- Explanation of why it's needed

✅ **Fix mobile navigation bug**
- Description of the bug
- Steps to reproduce
- Explanation of the fix
- Before/after screenshots

❌ **Bad PR Examples**
- "Fixed stuff" (too vague)
- Multiple unrelated changes
- No testing information

---

## 🎨 Coding Standards

### JavaScript/React

```jsx
// ✅ Do: Use meaningful variable names
const featuredProjects = [...];
const handleSubmit = async (e) => {...};

// ❌ Don't: Use vague names
const data = [...];
const func = () => {...};

// ✅ Do: Use functional components with hooks
function MyComponent() {
  const [state, setState] = useState();
  return <div>...</div>;
}

// ✅ Do: Add comments for complex logic
// Calculate project impact percentage
const impactScore = (metrics.reduce((a, b) => a + b, 0) / total) * 100;
```

### CSS

```css
/* ✅ Do: Use CSS variables for colors */
.color-example {
  color: var(--primary-blue);
}

/* ✅ Do: Use meaningful class names */
.project-card { ... }
.project-title { ... }

/* ❌ Don't: Use generic names */
.card { ... }
.title { ... }
```

---

## 🧪 Testing

Before submitting a PR, please test:

### Desktop
- [ ] Chrome (latest)
- [ ] Firefox (latest)
- [ ] Safari (latest)
- [ ] Edge (latest)

### Mobile
- [ ] iOS Safari
- [ ] Chrome Mobile
- [ ] Screen width: 320px to 1920px

### Functionality
- [ ] All links work
- [ ] Contact form sends emails
- [ ] Navigation works
- [ ] 404 page loads for invalid routes
- [ ] Loader appears on refresh
- [ ] Animations are smooth (60fps)

---

## 📝 Documentation

When adding new features, please update:

1. **README.md** - Feature list, installation instructions
2. **DEPLOYMENT.md** - If deployment steps change
3. **Code Comments** - Explain complex logic

Example documentation update:

```markdown
### New Feature: Project Filter

Added filter buttons to sort projects by technology.

**Usage:**
```jsx
<ProjectFilter 
  categories={['React', 'Node.js', 'Full-Stack']}
  onFilter={(category) => {...}}
/>
```

**Location:** `src/components/ProjectFilter.jsx`
```

---

## 🚀 Development Setup

```bash
# Fork and clone
git clone https://github.com/YOUR_USERNAME/portfolio.git
cd portfolio

# Install dependencies
npm install

# Create branch
git checkout -b feature/your-feature

# Make changes and test
npm run dev

# Commit and push
git add .
git commit -m "Add your feature"
git push origin feature/your-feature

# Open Pull Request on GitHub
```

---

## 📧 Questions?

Need help? Feel free to:
- Open an issue with your question
- Email: maimamarsden@gmail.com
- Join the discussion in existing issues

---

## 🎯 Areas Needing Contribution

### High Priority
- [ ] Add project filtering/search
- [ ] Improve accessibility (ARIA labels)
- [ ] Add unit tests
- [ ] Optimize images for faster loading

### Medium Priority
- [ ] Add testimonials section
- [ ] Create blog component
- [ ] Add project case studies
- [ ] Improve SEO meta tags

### Low Priority
- [ ] Add dark/light mode toggle
- [ ] Add print stylesheet
- [ ] Create admin dashboard
- [ ] Add multi-language support

---

## 🙏 Thank You!

Every contribution, no matter how small, makes a difference. Thank you for taking the time to contribute!

**Happy coding!** 🚀

---

*This project follows the [Contributor Covenant Code of Conduct](https://www.contributor-covenant.org/). By participating, you are expected to uphold this code.*
