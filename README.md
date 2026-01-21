# KissanDostAIWeb

**Pakistan's First Voice-Based AI Farming Assistant**

A production-ready static website for KissanDostAI, showcasing an innovative voice-based AI solution designed to empower Pakistani farmers with instant agricultural guidance in Urdu, accessible through simple phone calls.

---

## Table of Contents

- [Problem Statement](#problem-statement)
- [Solution](#solution)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Credits](#credits)
- [License](#license)

---

## Problem Statement

Pakistani farmers often lack access to:
- **Timely agricultural information** (weather, crop health, market prices)
- **Guidance in their native language** (Urdu)
- **Internet-independent solutions** (most farmers use basic phones)
- **24/7 support** (agricultural departments have limited hours)

This creates barriers to productivity and informed decision-making.

---

## Solution

**KissanDostAI** is a voice-based AI assistant that:
- ✅ Works on **any mobile phone** (no smartphone required)
- ✅ Communicates in **Urdu** (farmer's native language)
- ✅ Requires **no internet connection** (uses GSM calls)
- ✅ Operates **24/7** (always available)
- ✅ Provides **real-time data** (weather, market prices, crop advice)

---

## Features

| Feature | Description |
|---------|-------------|
| **Voice-Based Interface** | Natural conversation without typing |
| **Urdu Support** | Fully optimized for local language |
| **No Internet Required** | Works on basic GSM calls |
| **24/7 Availability** | Always-on assistance |
| **Real-time Information** | Weather, market, and agricultural data |
| **Basic Phone Compatible** | Works on feature phones (non-smartphones) |
| **Instant Responses** | Zero latency answers |

---

## Tech Stack

### Frontend
- **HTML5** - Semantic markup
- **CSS3** - Tailwind CSS (CDN)
- **JavaScript** - Vanilla JS (no frameworks)
- **Lucide Icons** - Modern icon library
- **Responsive Design** - Mobile-first approach

### Tools & Services
- **Formspree** - Contact form handling
- **Google Fonts** - Typography (Inter)
- **Pexels/Unsplash** - Stock images

---

## Project Structure

```
kisandostai/
│
├── index.html                 # Main entry point (minimal, loads components)
├── css/
│   └── main.css              # Custom styles, animations, overrides
│
├── js/
│   └── main.js               # Component loader, Lucide init, interactions
│
├── components/               # Modular HTML sections
│   ├── navbar.html
│   ├── hero.html
│   ├── about.html
│   ├── mission.html
│   ├── how-it-works.html
│   ├── features.html
│   ├── faq.html
│   ├── contact.html
│   └── footer.html
│
├── assets/
│   ├── images/              # Product images
│
├── docs/
│   ├── ARCHITECTURE.md      # Technical architecture
│
└── .gitignore              # Git ignore rules
```

### Why This Structure?

✅ **Component-Based**: Each section is independent and reusable  
✅ **Scalable**: Easy to add/modify sections  
✅ **Maintainable**: Clear separation of concerns  
✅ **Performance**: Minimal dependencies, CDN-based resources  
✅ **SEO-Friendly**: Semantic HTML5  
✅ **Accessibility**: WCAG-compliant markup  

---

## Getting Started

### Prerequisites
- A modern web browser (Chrome, Firefox, Safari, Edge)
- Git installed on your system
- A Vercel account (free tier available)

### Local Development

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd kisandostaiweb
   ```

2. **Start a local server**
   ```bash
   # Using Python 3
   python3 -m http.server 8000
   
   # Using Node.js (if installed)
   npx http-server
   ```

3. **Open in browser**
   ```
   http://localhost:8000
   ```

### Deploy to Vercel (Recommended)

1. **Install Vercel CLI**
   ```bash
   npm install -g vercel
   ```

2. **Deploy**
   ```bash
   vercel
   ```

3. **Your site is live!**
   Vercel provides instant URL and automatic HTTPS

### Testing Component Loading
- Open **Developer Tools** (F12)
- Check **Console** for any loading errors
- Verify **Network tab** shows all components loaded
- Test **responsive design** using Device Emulation

---

## File Descriptions

### `index.html`
- Lightweight entry point
- Contains only metadata and placeholders
- Loads all components dynamically via JavaScript
- Includes Tailwind CSS and Lucide Icons CDN

### `css/main.css`
- Custom animations (fade-in-up)
- Scrollbar styling
- Accordion/details animations
- Form focus states
- Utility classes

### `js/main.js`
- Asynchronous component loader
- Lucide icon initialization
- Smooth scroll behavior
- Form submission handling
- DOM ready listeners

### Components (`/components/`)
Each component is a **self-contained HTML fragment**:
- **navbar.html** - Fixed header with navigation
- **hero.html** - Main hero section with CTA
- **about.html** - Team and project information
- **mission.html** - Mission statement section
- **how-it-works.html** - Step-by-step process
- **features.html** - Key features grid
- **faq.html** - Frequently asked questions
- **contact.html** - Formspree contact form
- **footer.html** - Footer with links

---

## Design System

### Colors
- **Primary**: Emerald (`#10b981`)
- **Dark**: Charcoal (`#292929`)
- **Light**: Gray/White (`#f1f1f1` - `#ffffff`)

### Typography
- **Font**: Inter (Google Fonts)
- **Weights**: 300, 400, 500, 600
- **Scale**: Responsive (mobile-first)

### Components
- **Buttons**: Primary (emerald), Secondary (gray), CTA
- **Cards**: Hover effects, shadows, transitions
- **Forms**: Custom focus states, accessibility
- **Animations**: Fade-in, slide, sweep effects

---

## External Resources

### Images (from Pexels/Unsplash)
- Wheat field, farmer portraits, rural landscapes
- All optimized for web

### Services
- **Tailwind CSS**: Utility-first CSS framework (CDN)
- **Lucide Icons**: 500+ customizable SVG icons
- **Google Fonts**: Inter typeface
- **Formspree**: Contact form backend

---

## Credits

### Development Team
- **Moeen Ahmed** - Project Lead
- **Abdul Hannan** - Full Stack Developer
- **Waqas Rashid** - UI/UX Designer

### Supervisor
- **Mr. Amer Taj** - Department of Computer Science, UET Peshawar

### Institution
- **University of Engineering and Technology (UET), Peshawar, Pakistan**
- **Department of Computer Science**
- **Final Year Project (2026)**

---

## License

This project is open-source and available under the **MIT License**.

Feel free to use, modify, and distribute for educational and commercial purposes.

---

## Support & Contact

- **Email**: support@kisandostai.com
- **Website**: [KissanDostAI](https://kisandostai.com)
- **GitHub**: [KissanDostAI Repository](https://github.com/kisandostaiweb)

---

## Documentation

- [Architecture Guide](./docs/ARCHITECTURE.md) - Technical details
- [Deployment Guide](./docs/DEPLOYMENT.md) - Vercel deployment
- [Contributing Guidelines](./docs/CONTRIBUTING.md) - How to contribute

---

**Made with ❤️ for Pakistani farmers**
