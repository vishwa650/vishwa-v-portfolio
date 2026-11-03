# Vishwa V — Portfolio

Personal developer portfolio for **Vishwa V**, a Data Analyst specialising in Python, SQL, Power BI, and data-driven dashboards.

🌐 **Live site:** https://YOUR-SITE-URL/

---

## Tech Stack

| Layer | Tool |
|---|---|
| UI Framework | React 19 |
| Build Tool | Vite |
| Styling | Tailwind CSS 4 |
| Animations | Framer Motion, AOS |
| Contact Form | EmailJS |
| Cursor Effect | WebGL (SplashCursor) |

---

## Run Locally

```bash
# 1 — Install dependencies
npm install

# 2 — Start the development server (http://localhost:5173)
npm run dev

# 3 — Build for production
npm run build
```

---

## Environment Variables

Create a `.env.local` file in the project root with the following variables (get the values from your [EmailJS](https://www.emailjs.com/) account):

```env
VITE_EMAILJS_SERVICE_ID=
VITE_EMAILJS_TEMPLATE_ID=
VITE_EMAILJS_PUBLIC_KEY=
```

> If these are left empty the contact form falls back to opening the device's default mail app.

---

## Credits

Built during the placement training program at [TAP Academy](https://thetapacademy.com/) (full-stack development, AI and augmented reality training).
