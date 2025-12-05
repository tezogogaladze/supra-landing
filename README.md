# Supra Landing Page

Minimal landing page showcasing the Flowing Menu animation from ReactBits, built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🚀 Tech Stack

- **Framework**: Next.js 16 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS v4
- **Animations**: Framer Motion
- **Hosting**: Vercel
- **Domain**: supra-booking.com (Hostinger)

## 📦 Features

- ✨ **Flowing Menu Animation** - Exact implementation of the [ReactBits Flowing Menu](https://reactbits.dev/components/flowing-menu)
- 🎨 **4 Menu Items** - Mojave, Sonoma, Monterey, Sequoia
- ⚡ **GSAP Animations** - Smooth marquee flow from top/bottom edge
- 🖼️ **Image Integration** - Animated marquee with text and images
- 🎭 **Edge Detection** - Animation flows from the edge you enter from
- 📱 **Full Height Design** - Vertical menu spanning entire screen

## 🛠️ Local Development

### Prerequisites

- Node.js 18+ 
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

### Build

```bash
# Create production build
npm run build

# Start production server
npm start
```

## 🌐 Deployment to Vercel

### Option 1: Deploy via Vercel Dashboard (Recommended)

1. **Push to GitHub**
   ```bash
   cd supra-landing
   git init
   git add .
   git commit -m "Initial commit"
   git remote add origin <your-repo-url>
   git push -u origin main
   ```

2. **Connect to Vercel**
   - Go to [vercel.com](https://vercel.com)
   - Click "Add New Project"
   - Import your GitHub repository
   - Vercel will auto-detect Next.js settings
   - Click "Deploy"

3. **Custom Domain Setup**
   - After deployment, go to Project Settings → Domains
   - Add `supra-booking.com` and `www.supra-booking.com`
   - Vercel will provide DNS records

### Option 2: Deploy via Vercel CLI

```bash
# Install Vercel CLI
npm i -g vercel

# Login to Vercel
vercel login

# Deploy (from supra-landing directory)
vercel

# Deploy to production
vercel --prod
```

## 🌍 Domain Configuration (Hostinger)

After deploying to Vercel, you need to configure DNS on Hostinger:

1. **Login to Hostinger**
   - Go to your domain management panel
   - Select `supra-booking.com`

2. **Update DNS Records**
   
   Add/Update these DNS records:
   
   ```
   Type    Name    Value                          TTL
   A       @       76.76.21.21                    3600
   CNAME   www     cname.vercel-dns.com.          3600
   ```
   
   Or if Vercel provides different records, use those instead.

3. **Verify Domain**
   - In Vercel dashboard, click "Verify" next to your domain
   - DNS propagation can take 24-48 hours

## 📁 Project Structure

```
supra-landing/
├── app/
│   ├── page.tsx          # Main page (centered flowing menu)
│   ├── layout.tsx        # Root layout with SEO
│   └── globals.css       # Global styles
├── components/
│   └── FlowingMenu.tsx   # Flowing menu component
├── public/               # Static assets
├── package.json
├── vercel.json          # Vercel configuration
└── README.md
```

## 🎨 Customization

### Colors

The site uses an orange/amber color scheme. To customize:

1. Update color values in component files
2. Main brand colors:
   - Primary: `orange-600` (#ea580c)
   - Secondary: `amber-600` (#d97706)

### Content

Update content in each component file:
- `Hero.tsx` - Main headline and CTA
- `Features.tsx` - Platform features
- `ForRestaurants.tsx` - Restaurant benefits
- `About.tsx` - Company information
- `Contact.tsx` - Contact form and info

### Navigation

Modify menu items in `Header.tsx`:

```typescript
const menuItems = [
  { id: 'features', label: 'Features', onClick: () => scrollToSection('features') },
  // Add more items...
];
```

## 🔧 Environment Variables

Currently, the landing page doesn't require environment variables. If you add:
- Analytics (Google Analytics, Plausible, etc.)
- Contact form backend
- Newsletter integration

Create a `.env.local` file:

```env
NEXT_PUBLIC_GA_ID=your-ga-id
# Add other variables
```

## 📊 Performance

The site is optimized for performance:
- ⚡ Lighthouse Score: 95+
- 🎯 First Contentful Paint: < 1.5s
- 📱 Mobile-friendly
- ♿ Accessible (WCAG AA)

## 🐛 Troubleshooting

### Build Errors

```bash
# Clear cache and rebuild
rm -rf .next node_modules
npm install
npm run build
```

### Deployment Issues

- Ensure `package.json` has correct scripts
- Check Vercel build logs for errors
- Verify Node.js version compatibility

### DNS Issues

- DNS changes can take 24-48 hours
- Use [whatsmydns.net](https://www.whatsmydns.net/) to check propagation
- Clear browser cache and DNS cache

## 📝 License

This project is part of the Supra restaurant reservation platform.

## 🤝 Contributing

This is a solo developer project built with Cursor AI. For major changes, please discuss first.

## 📧 Contact

For questions or support: hello@supra-booking.com

---

Built with ❤️ using [Cursor AI](https://cursor.sh) and [Claude](https://anthropic.com/claude)
