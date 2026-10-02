# TJ&U Fitness: Next.js code

Built for your `fitness` project (Next.js 16, React 19, Tailwind 4). No new packages needed.

## Install
1. Copy `src/` and `public/logo.png` from this folder into your `fitness` folder. Replace the existing `src/app/layout.tsx`, `page.tsx` and `globals.css`.
2. Run `npm run dev` and open http://localhost:3000.

## Pages
`/` home · `/membership` · `/training` · `/wellness` · `/community` · `/gallery` · `/about` · `/signup` · `/login` · `/dashboard`

## Things to replace before launch
- **Sign up, log in and M-Pesa are mock-ups.** Accounts are stored in the visitor's browser (`src/lib/auth.tsx`) and payment is simulated (`src/app/signup/page.tsx` → `sendStk`). Connect a real backend and the Daraja STK Push API.
- **The contact form doesn't send anything** (`src/app/about/ContactForm.tsx`).
- **Photos and videos are Pexels stock.** Image ids are in `src/lib/data.ts`. For your own videos, use `<LoopVideo src="/videos/clip.mp4" />` with files in `public/videos/`.
- **Saturday and Sunday hours** say "Call to confirm" (`HOURS` in `src/lib/data.ts`).