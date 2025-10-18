# Profiro Website (Next.js on Vercel)

This repo is a **zero-setup starter** for your app website:
- `/` — Landing page
- `/privacy` — Privacy Policy
- `/terms` — Terms of Use
- `/blog` — Blog index + example posts

## 0) Requirements
- Install **Node.js LTS** from https://nodejs.org/ (v18+ recommended)
- Install **Git** from https://git-scm.com/

## 1) Run locally
```bash
npm install
npm run dev
```
Open http://localhost:3000

## 2) Edit legal texts
- `pages/privacy.js` — replace placeholder sections with your own policy
- `pages/terms.js` — replace with your terms
- Update email/links as needed

## 3) Create a GitHub repository
```bash
git init
git add .
git commit -m "Initial commit: Profiro website"
git branch -M main
git remote add origin https://github.com/YOUR_GITHUB_USERNAME/profiro-website.git
git push -u origin main
```

## 4) Deploy to Vercel
1. Create account at https://vercel.com/ and sign in with GitHub.
2. **New Project → Import** `profiro-website` repo.
3. Accept defaults and deploy. After the first deployment you get a public URL.

## 5) Connect your domain (profiroapp.com)
- In Vercel dashboard: Project → **Settings → Domains** → add `profiroapp.com`
- At your domain registrar (Wedos): set DNS **CNAME**/A records as Vercel instructs
- Wait for DNS to propagate (usually minutes).

## 6) Link from App & App Store
- Use these stable URLs in your app/paywall:
  - `https://profiroapp.com/privacy`
  - `https://profiroapp.com/terms`
- In App Store Connect, add the Privacy Policy URL.

## 7) Add blog posts
- Quick way: create `pages/blog/my-post.js` and return HTML.
- Later you can switch to Markdown/MDX if you want.

## 8) Production build (optional)
```bash
npm run build
npm start
```

---

**Tip:** This repo uses the classic Pages Router for simplicity. You can later migrate to the App Router if you want.
