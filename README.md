# INDUSQA Modern Website

A complete redesign and rebuild of the INDUSQA consultancy and certification service provider website.

## 🚀 Features

- **Modern UI/UX**: Clean, professional, and responsive design built with HTML, CSS, and Vanilla JS.
- **Admin Panel**: A simple, secure dashboard to manage blogs and view contact form submissions.
- **Blog System**: Dynamic blog loading from JSON, with administrative control.
- **Service Sections**: Detailed content for ISO 27001, GDPR, SOC 2, and CMMI.
- **Interactive Elements**: Stats counters, smooth scrolling, and hidden easter eggs.
- **SEO & Performance**: Optimized meta tags, semantic HTML, and fast loading times.

## 🛠️ Tech Stack

- **Frontend**: HTML5, CSS3 (Modern Flexbox/Grid), Vanilla JavaScript (ES6+).
- **Backend**: JSON-based storage for blogs and LocalStorage for prototyping contact submissions and admin authentication.
- **Icons**: FontAwesome 6.

## 📂 Project Structure

- `/index.html`: Home page.
- `/css/`: Stylesheets including `style.css`.
- `/js/`: Main JavaScript logic in `main.js`.
- `/images/`: Project assets including the company logo.
- `/pages/`: Content pages (About, Services, Blog, Contact).
- `/admin/`: Admin panel and login system.
- `/data/`: JSON data storage for blogs.
- `/404.html`: Custom error page.

## 💻 How to Run Locally

1.  Clone or download the project repository.
2.  Open the `index.html` file in any modern web browser.
3.  For full functionality (like fetching blog data), it's recommended to run a local development server (e.g., VS Code's "Live Server" extension).

## 🔐 Admin Access

- **Login URL**: `/admin/index.html`
- **Username**: `admin`
- **Password**: `indusqa2026`

*Note: In this prototype, admin login status and blog edits are stored in your browser's LocalStorage.*

## 🎨 Easter Eggs

- **Konami Code**: Press `↑ ↑ ↓ ↓ ← → ← → B A` on any page to activate "Audit Mode".
- **Logo Animation**: Click the INDUSQA logo 5 times to trigger a secret animation.
- **Console Ninja**: Check the browser console (F12) for a hidden message.
- **Compliance Tooltip**: Hover over key certification icons for a special message (implementation via `title` attributes).

## ☁️ Deployment

The website is static-ready and can be easily hosted on:
- **GitHub Pages**
- **Netlify**
- **Vercel**
- **Static Web Hosting**

Just upload the entire directory to your hosting provider.

---
© 2026 INDUSQA. Built for Excellence.
