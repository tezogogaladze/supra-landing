# Supra Landing Page - Quick Start

Get up and running in 2 minutes! ⚡

## 🚀 Quick Setup

```bash
# 1. Navigate to the landing page directory
cd supra-landing

# 2. Install dependencies
npm install

# 3. Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) 🎉

## 📝 What You Have

A full-screen landing page showcasing:

- ✨ **Flowing Menu** - Exact implementation of [ReactBits Flowing Menu](https://reactbits.dev/components/flowing-menu)
- 🎨 **4 Menu Items** - Vertical menu with Mojave, Sonoma, Monterey, Sequoia
- ⚡ **GSAP Animations** - White marquee flows in from top/bottom edge on hover
- 🖼️ **Marquee Effect** - Scrolling text with images
- 📱 **Edge Detection** - Animation direction based on where you enter the menu item

## 🎯 Next Steps

### 1. Test Locally (1 minute)
```bash
npm run dev
# Visit http://localhost:3000
```

### 2. Customize Content (2 minutes)
- Update button labels in `app/page.tsx`
- Change button actions/onClick handlers
- Modify colors in `components/FlowingMenu.tsx`

### 3. Deploy to Vercel (15 minutes)
```bash
# Push to GitHub
git add .
git commit -m "Ready for deployment"
git push

# Then follow DEPLOYMENT.md guide
```

### 4. Connect Domain (30-60 minutes)
- Follow Step 3 & 4 in `DEPLOYMENT.md`
- Update DNS on Hostinger
- Wait for DNS propagation

## 📚 Documentation

- **README.md** - Complete project documentation
- **DEPLOYMENT.md** - Detailed deployment guide
- **.env.example** - Environment variables template

## 🛠️ Common Commands

```bash
# Development
npm run dev          # Start dev server
npm run build        # Build for production
npm run start        # Start production server
npm run lint         # Run ESLint

# Deployment
vercel               # Deploy to Vercel (preview)
vercel --prod        # Deploy to production
```

## 🎨 Customization Quick Wins

### Change Brand Colors
Find and replace in all component files:
- `orange-600` → your primary color
- `amber-600` → your secondary color

### Update SEO
Edit `app/layout.tsx`:
- Title
- Description
- OpenGraph tags

### Add Your Logo
Replace logo text in `components/Header.tsx`:
```typescript
<div className="text-2xl font-bold text-orange-600">
  Your Logo Here
</div>
```

## 🐛 Troubleshooting

**Port already in use?**
```bash
# Kill process on port 3000
lsof -ti:3000 | xargs kill -9
# Or use different port
npm run dev -- -p 3001
```

**Build errors?**
```bash
# Clear cache and reinstall
rm -rf .next node_modules package-lock.json
npm install
npm run build
```

**Type errors?**
```bash
# Check TypeScript
npx tsc --noEmit
```

## ✅ Deployment Checklist

Before deploying:
- [ ] Test locally (`npm run build`)
- [ ] Update button labels and actions
- [ ] Customize colors if needed
- [ ] Test hover animations
- [ ] Test dark mode
- [ ] Verify smooth spring physics

## 📞 Need Help?

- Check `README.md` for full documentation
- See `DEPLOYMENT.md` for deployment guide
- Vercel docs: [vercel.com/docs](https://vercel.com/docs)
- Next.js docs: [nextjs.org/docs](https://nextjs.org/docs)

---

**Total Time to Deploy: ~1 hour** ⏱️

Happy building! 🚀

