# SkyFly - Flight Booking Landing Page

**Fly Anywhere, Anytime — Get 40% OFF**

SkyFly is a modern, conversion-focused landing page for a flight booking agency. It is designed to drive phone calls with a strong USP: **10 Second Response Time, 24/7 Support**.

> **Live Tagline:** Book your flight tickets at the best prices with SkyFly. Our support team responds within 10 seconds — 24/7, 365 days.

---

### 🔗 Live Demo

Open `index.html` in any browser to view the landing page locally. No build tools required.

---

### ✨ Key Features

**1. Conversion Optimized Design**
- Top urgent bar with blinking offer animation: `Get up to 40% OFF`
- Sticky navbar with prominent green pulsing `Call Now` CTA
- Floating call button fixed at bottom-right for mobile/desktop
- Multiple call-to-action sections strategically placed

**2. Trust Building Elements**
- Live support badge with pulsing green dot: `Live Support — We reply in 10 seconds, Anytime!`
- Trust strip with 3 metrics:
  - ⚡ 10 sec Average Response Time
  - 🕐 24/7 Support
  - ⭐ 4.9/5 from 12,000+ Travelers

**3. Flight Search UI**
- Clean search box with fields: From, To, Date, Passengers
- Client-side validation in `script.js`
- `Search Flight` button triggers a summary alert and encourages calling

**4. Content Sections**
- **Popular Destinations:** 4 cards (Dhaka → Dubai, Bangkok, London, Singapore) with images from Unsplash, pricing, and hover animation
- **Why Choose SkyFly?:** 4 feature cards (Best Price, 10-Second Response, Secure Payment, 24/7 Support)
- **CTA Call Section:** Gradient background, large call button, and reassurance note: `No waiting • Instant response • Free consultation`

**5. Fully Responsive**
- Breakpoints: 900px and 500px
- Grid-based layouts adapt from multi-column to single-column on mobile
- Mobile-friendly navigation and search form

---

### 🛠️ Tech Stack

- **HTML5** — Semantic structure, SEO meta tags
- **CSS3** — Custom CSS (no frameworks), Flexbox & CSS Grid, Animations (`@keyframes blink`, `pulseGreen`, `pulseDot`), Linear gradients, `backdrop-filter`
- **JavaScript (Vanilla)** — `searchFlight()` function for form validation
- **External Assets:** Unsplash images for hero and destination cards

No dependencies, no npm, no build process. Pure static files.

---

### 📁 Project Structure

```
SkyFly/
│
├── index.html              # Main landing page
├── style.css               # Main stylesheet (landing page)
├── script.js               # Flight search logic
│
├── privacy/
│   ├── privacy.html        # Privacy Policy page
│   └── style.css           # (Your uploaded style_002da9.css / style_547f39.css are variants)
│
├── terms/
│   ├── terms.html          # Terms & Conditions page
│   └── style.css           # Stylesheet for terms
│
└── disclaimer/
    ├── disclaimer.html     # Disclaimer page
    └── style.css           # Stylesheet for disclaimer
```

**Note:** The uploaded files include multiple CSS variants (`style_3c5544.css`, `style_002da9.css`, `style_547f39.css`). The main file used by `index.html` is `style.css`. Make sure to rename or link the correct stylesheet for the sub-pages if you move them to folders.

For sub-pages, update stylesheet path and back-link:

```html
<link rel="stylesheet" href="../style.css">
<a href="../index.html">Back to Home</a>
```

---

### 🚀 Getting Started

#### 1. Clone or Download
```bash
git clone https://github.com/your-username/skyfly-landing.git
cd skyfly-landing
```

Or simply download the ZIP and extract.

#### 2. Run Locally
Just double-click `index.html` or use a local server:

```bash
# With Python
python -m http.server 8000

# With VS Code Live Server
Right-click index.html -> Open with Live Server
```

Visit: `http://localhost:8000`

#### 3. Deploy
This is a static site. You can deploy to:
- **Netlify:** Drag & drop folder
- **Vercel:** `vercel --prod`
- **GitHub Pages:** Push to `main` branch and enable Pages
- **cPanel / Any Hosting:** Upload all files via FTP

---

### ⚙️ Customization Guide

#### Change Phone Number
Search and replace `+8801712345678` in `index.html` (appears in 6 places):
- Top bar CTA
- Navbar button
- Hero button
- CTA section
- Footer
- Floating button

Also update `tel:` links: `tel:+8801712345678`

#### Change Offer Percentage
In `index.html`:
```html
<div class="top-bar">⚡ <span>LIMITED TIME OFFER:</span> Get up to 40% OFF...</div>
<h2>Fly Anywhere, Anytime — <span>Get 40% OFF</span></h2>
```

#### Update Destinations
Edit the `.destinations` grid in `index.html`. Each card structure:
```html
<div class="card">
  <img src="IMAGE_URL" alt="City">
  <div class="card-body">
    <h3>Dhaka → Dubai</h3>
    <p>Starting from</p>
    <span class="price">$450</span>
  </div>
</div>
```

#### Colors & Branding
Edit CSS variables in `style.css`:
- Primary Blue: `#0077ff` / `#00264d`
- CTA Green: `#16a34a` / `#15803d`
- Urgent Gradient: `#ff6a00` to `#ee0979`
- Accent Yellow: `#ffd43b`

#### Search Logic
Currently `script.js` shows an alert. To integrate with a backend:
```javascript
function searchFlight() {
  // Add API call here
  // window.location.href = `/results?from=${from}&to=${to}&date=${date}`
}
```

---

### 📄 Pages Included

1.  **Home (`index.html`):** Hero, search, destinations, features, CTA, footer
2.  **Privacy Policy (`privacy.html`):** Data collection, usage, sharing, cookies, security, user rights
3.  **Terms & Conditions (`terms.html`):** Booking terms, payment, cancellation
4.  **Disclaimer (`disclaimer.html`):** Liability and informational disclaimer

All legal pages have consistent navbar and footer navigation.

---

### 🔍 SEO Optimized

Meta tags in `<head>`:
```html
<title>SkyFly - Book Your Flight Tickets Online | 10 Second Response 24/7</title>
<meta name="description" content="Book cheap flight tickets with SkyFly. Best prices, instant booking, secure payment and 10 second response support 24/7. Call +880 1712-345678 now!">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

Recommendations to improve further:
- Add Open Graph tags for social sharing
- Add `alt` text to all images (already done for destination cards)
- Add JSON-LD schema for Travel Agency
- Compress Unsplash images or use WebP with lazy loading

---

### 📱 Browser Support

- Chrome / Edge (latest)
- Firefox (latest)
- Safari (latest)
- Android Chrome / iOS Safari

Uses only widely supported CSS features. No IE11 support required.

---

### 📞 Contact & Support CTA

All call buttons use `tel:` protocol:
```html
<a href="tel:+8801712345678" class="btn-call">📞 Call Now: +880 1712-345678</a>
```

Ensure phone number is clickable on mobile devices for maximum conversion.

---

### 📝 License

This project is free to use for personal and commercial projects. No attribution required, but appreciated.

Copyright © 2025 SkyFly. All rights reserved. | Made with ❤️

---

### 🙋‍♂️ Author

**SkyFly Team**
- Website: `https://skyfly.com` (placeholder)
- Support Email: `privacy@skyfly.com`
- Phone: `+880 1712-345678`

---

### 🚧 Future Improvements

- [ ] Add backend integration for real flight search API (e.g., Amadeus, Duffel)
- [ ] Add form backend to capture leads via email/WhatsApp
- [ ] Add language switcher (EN/BN)
- [ ] Add testimonials / reviews carousel
- [ ] Implement click-to-call tracking with Google Ads / Meta Pixel
- [ ] Add FAQ section with accordion
- [ ] Optimize images and add lazy loading

---

> **Tip:** For best conversion, connect this landing page with Google Ads call extension and add Meta Pixel / Google Analytics 4 to track `tel:` clicks.
