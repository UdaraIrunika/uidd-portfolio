# UIDD Portfolio

A modern and responsive personal portfolio website showcasing my projects, skills, education, sponsors, and contact information. Built with **HTML**, **CSS**, and **JavaScript**, this portfolio is designed to present work in a clean, professional, and interactive way.

**Live demo:** [https://uidd-portfolio.vercel.app/](https://uidd-portfolio.vercel.app/)

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [What's Inside (File Map)](#whats-inside-file-map)
- [Tech Stack](#tech-stack)
- [Installation & Run Locally](#installation--run-locally)
- [How to Configure / Customize](#how-to-configure--customize)
  - [Change Hero Text & Typewriter Titles](#change-hero-text--typewriter-titles)
  - [Update Sponsors, Projects, Images](#update-sponsors-projects-images)
  - [Configure EmailJS (Contact Form)](#configure-emailjs-contact-form)
- [Deployment Options](#deployment-options)
- [Accessibility & SEO Notes](#accessibility--seo-notes)
- [Troubleshooting](#troubleshooting)
- [Contributing](#contributing)
- [License](#license)
- [Author / Contact](#author--contact)

---

## Overview

This is a single-page portfolio website with multiple interactive sections (hero, sponsors, about, skills, education timeline, projects, pricing/packages, and a contact modal). The repository includes HTML markup, a single stylesheet, JavaScript for interactivity, and an `assest/img` folder for images.

The main files are `index.html`, `styles.css`, and `script.js` (all in the repository root).

---

## Features

- ✨ Responsive layout optimized for desktop, tablet and mobile
- ⌨️ Hero section with typewriter text effect that cycles titles
- 🤝 Sponsors / partners marquee and grid
- 👤 About section with social links
- 💪 Skills with animated progress bars
- 🎓 Education cards with timeline / expandable details
- 📁 Projects / Pricing sections with CTA buttons and contact modal
- 📧 Contact form integrated with EmailJS (client-side email sending)
- 🎯 Smooth scrolling, sticky header, mobile hamburger nav, and back-to-top button

---

## What's Inside (File Map)

```
/ (root)
├── index.html      # Main single-page HTML (sections, modal, links to CSS/JS)
├── styles.css      # All styling: CSS variables, layout, responsive rules, animations
├── script.js       # All interactivity: nav, smooth scroll, typewriter, EmailJS form handling, modals
├── LICENSE         # MIT license
└── assest/
    └── img/        # Image assets used across the site (profile, sponsors, screenshots)
```

**Key things located in these files:**

- **`index.html`** — includes references to Font Awesome and TinyMCE and links the stylesheet + script; it contains the semantic sections: header, hero, sponsors, about, skills, education, projects/pricing, contact modal.

- **`styles.css`** — uses CSS custom properties (`:root` variables), responsive grid and flex layouts, hero styling, marquee styling for sponsors, and animations for skill bars and cards.

- **`script.js`** — implements:
  - Mobile hamburger toggle & sticky header
  - Smooth anchor scroll
  - Back-to-top button
  - Typewriter effect — controlled by a `titles` array (edit to change shown roles)
  - Animated skill bars on scroll
  - Education-card expand/collapse timeline logic
  - Modal open/close and form submission
  - EmailJS initialization and `send` logic

---

## Tech Stack

- **HTML5** — semantic markup
- **CSS3** — variables, layout, responsive rules, animations
- **JavaScript (ES6)** — interactivity scripts (typewriter, EmailJS, DOM listeners)
- **Font Awesome** — icons (linked in `index.html`)
- **EmailJS** — client-side email sending (configured inside `script.js`)

---

## Installation & Run Locally

1. **Clone the repo:**
   ```bash
   git clone https://github.com/UdaraIrunika/uidd-protfilo.git
   cd uidd-protfilo
   ```

2. **Quick preview:**

   **Option A** — open the file directly:
   - Double-click `index.html` or open it from your editor in a browser.

   **Option B** — run a simple local server (recommended for consistent behavior):
   ```bash
   # Python 3
   python3 -m http.server 8000
   # then open http://localhost:8000
   ```

3. **(Optional)** Install Live Server extension in VS Code and press "Go Live" for automatic reloads.

---

## How to Configure / Customize

### Change Hero Text & Typewriter Titles

1. Open `index.html` and edit the hero `<h1>` to change the displayed name.
2. Open `script.js`, find the `titles` array and replace the strings with your roles:

```javascript
const titles = ["Frontend Developer", "Backend Developer", "UI Designer", "Owner & CEO"];
```

### Update Sponsors, Projects, Images

- Replace images in `assest/img/` and update the `<img>` sources in `index.html`.
- For projects: locate the Projects section in `index.html` and update project cards with title, description, image, and link.

### Configure EmailJS (Contact Form)

`script.js` initializes EmailJS and sends form data. Replace the public key, service ID and template ID with your own values.

**Where to find/edit in `script.js`:**

```javascript
// Replace with your EmailJS public key
emailjs.init("YOUR_PUBLIC_KEY");

// Replace service & template IDs
emailjs.send('service_id', 'template_id', emailData)
```

**EmailJS setup steps:**

1. Create an account at [https://www.emailjs.com/](https://www.emailjs.com/)
2. Create an email service (e.g., Gmail, SMTP)
3. Create a template and map variables (like `name`, `email`, `message`)
4. Copy your public key and replace the `emailjs.init(...)` value in `script.js`
5. Replace the `service_xxx` and `template_xxx` values in the `.send()` calls with your own IDs

**Security note:** EmailJS public keys are meant to be used client-side, but do not place private SMTP credentials directly in client-side code.

---

## Deployment Options

This static site can be deployed to:

- **Vercel** (used for live demo)
- **Netlify**
- **GitHub Pages**
- Any static hosting service

Simply upload the files or connect your repository for automatic deployments.

---

## Accessibility & SEO Notes

- Use descriptive `alt` attributes for all images in `assest/img/`
- Ensure color contrast is sufficient for text over backgrounds
- Use semantic elements (existing `index.html` contains sections and headings)
- Add meta tags (`title`/`description`/`og:`) in the `<head>` for better SEO/social sharing

---

## Troubleshooting

### Contact form not sending:
- Check the console for EmailJS errors
- Confirm `emailjs.init` uses the correct public key and that service/template IDs are valid
- If you get CORS errors, confirm the email service is connected in EmailJS

### Icons not showing:
- Confirm Font Awesome link in `index.html` is reachable (internet required)

### Styles look broken:
- Ensure `styles.css` is properly linked in `index.html`
- If testing locally via `file://`, run a simple server instead: `python -m http.server`

---

## Contributing

Contributions, issues, and feature requests are welcome! Feel free to check the [issues page](https://github.com/UdaraIrunika/uidd-protfilo/issues).

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Author / Contact

**D. Udara Irunika De Zoysa**

🌟 Creative Designer | Web Developer | Cybersecurity Enthusiast 🌟

### Connect with me:

- 🌐 **Portfolio:** [https://uidd-protfilo.vercel.app/](https://uidd-protfilo.vercel.app/)
- 💼 **GitHub:** [@UdaraIrunika](https://github.com/UdaraIrunika)
- 📧 **Email:** [uiindustryprivetlimited@gmail.com](mailto:uiindustryprivetlimited@gmail.com)
- 📍 **Location:** Galewela, Sri Lanka

### What I Do:
- 🎨 **Graphic Design:** Crafting compelling visuals for websites, social media, and marketing
- 💻 **Web Development:** Designing user-friendly, responsive websites with modern technologies
- 🔒 **Cybersecurity:** Exploring security trends and techniques to protect online environments

---

⭐️ If you like this project, please give it a star on GitHub!

💼 **Interested in working together?** Feel free to reach out for collaborations, projects, or just a friendly chat about technology!

### Project Screenshots

#### 1. Main Dashboard / Overview
<img width="1272" height="960" alt="Screenshot 2025-10-08 113641" src="https://github.com/user-attachments/assets/6631eebc-703b-43e7-b232-06095fb6b608" />

#### 2. Education Parner / Sidebar
<img width="429" height="728" alt="Screenshot 2025-10-08 113802" src="https://github.com/user-attachments/assets/9be32859-3a03-4725-8051-b767c1b52660" />

#### 3. Skils / Detail Screen
<img width="448" height="698" alt="Screenshot 2025-10-08 113814" src="https://github.com/user-attachments/assets/3dc2cacb-6d6c-49f4-9442-2553c3308a40" />

#### 4. Education / Detail Screen
<img width="447" height="800" alt="Screenshot 2025-10-08 113828" src="https://github.com/user-attachments/assets/b1dae814-d929-4862-828a-f5f80547a025" />

#### 6. Cetification / Pop-up
<img width="415" height="579" alt="Screenshot 2025-10-08 113844" src="https://github.com/user-attachments/assets/71dd43c3-875d-4f2f-bc64-3c9ff39c7875" />

#### 7. Project / Info Card
<img width="427" height="638" alt="Screenshot 2025-10-08 113856" src="https://github.com/user-attachments/assets/16d22845-4e19-4346-84f4-1c0e93774598" />

#### 8. Price Section / Long View
<img width="432" height="927" alt="Screenshot 2025-10-08 113907" src="https://github.com/user-attachments/assets/9a3ad110-41c6-4491-bdc7-2868f4e66ced" />

#### 9.Live Demo / Full-screen View
<img width="1091" height="958" alt="Screenshot 2025-10-15 185633" src="https://github.com/user-attachments/assets/477698f0-ea24-438f-96b7-5af2b61ab883" />

#### 10. Contact Us / Full-screen View
<img width="1112" height="960" alt="Screenshot 2025-10-08 113917" src="https://github.com/user-attachments/assets/c482bdc0-510b-4acf-8d9d-e6031ce51d2b" />








