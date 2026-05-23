# Sciqus UI/UX Demo

A sleek, modern static website showcasing Sciqus Infotech’s self‑service portal solutions.

## 📖 Overview
This repository contains a single‑page web demo built with **HTML**, **CSS**, and vanilla **JavaScript**. It demonstrates:
- A responsive navigation bar with an elegant underline‑sweep hover effect.
- A 4‑column product grid that cleanly displays product cards.
- A polished footer featuring the Sciqus logo with a subtle hover‑scale animation.
- Sections for hero, trusted‑by logo ticker, features, testimonials, a video, and a contact form.

## 🚀 Getting Started
### Prerequisites
- Any modern web browser (Chrome, Edge, Safari, Firefox, etc.)
- (Optional) a lightweight local server for smoother asset loading – e.g. `serve`, `http-server`, or Python’s built‑in server.

### Clone the repo
```bash
git clone https://github.com/KrishShrotiya/Sciqus-UIUX.git
cd Sciqus-UIUX
```
### Open the site
#### Quick way (no server)
Simply double‑click `index.html` or open it via the browser:
```bash
open index.html   # macOS
# or manually drag the file into your browser window
```
#### Using a local dev server (recommended)
```bash
# Using npm's serve (install if you don’t have it)
npm install -g serve
serve .   # serves the current directory at http://localhost:5000
```
Or with Python:
```bash
python3 -m http.server 8000
# then visit http://localhost:8000 in your browser
```
### Explore
- **Navigation**: Hover over the links to see the glowing underline sweep.
- **Products Grid**: Four cards line‑up in a single row on desktop; the layout collapses gracefully on smaller screens.
- **Footer**: The Sciqus logo scales slightly on hover for a premium feel.

## 🎨 Design Highlights
- **Glass‑morphism** style with translucent cards (`backdrop-filter: blur(10px)`).
- **Dynamic hover effects** powered by CSS transitions.
- **Responsive grid** using `grid-template-columns: repeat(4, 1fr);`.
- **Consistent brand colors** via CSS custom properties (see `index.css`).


## 🛠️ Development
The project is intentionally lightweight – there is no build step. If you wish to extend it:
1. Edit `index.html`, `index.css`, or `main.js` directly.
2. Reload the browser (or your local server) to see changes.
3. Commit & push your updates.

## 📜 License
This demo is provided for educational purposes. Feel free to fork, modify, and use it in your own projects.
