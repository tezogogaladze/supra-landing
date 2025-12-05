# Supra Landing Page - Deployment Guide

Complete step-by-step guide to deploy the Supra landing page to Vercel with custom domain from Hostinger.

## 📋 Prerequisites

- [x] Vercel account (sign up at [vercel.com](https://vercel.com))
- [x] GitHub account
- [x] Domain `supra-booking.com` on Hostinger
- [x] Access to Hostinger DNS management

## 🚀 Step 1: Push to GitHub

```bash
cd supra-landing

# Initialize git (if not already done)
git init

# Add all files
git add .

# Commit
git commit -m "Initial commit: Supra landing page"

# Create repository on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/supra-landing.git
git branch -M main
git push -u origin main
```

## ☁️ Step 2: Deploy to Vercel

### Method A: Vercel Dashboard (Easiest)

1. **Go to Vercel**
   - Visit [vercel.com/new](https://vercel.com/new)
   - Sign in with GitHub

2. **Import Repository**
   - Click "Import Project"
   - Select your `supra-landing` repository
   - Click "Import"

3. **Configure Project**
   - **Framework Preset**: Next.js (auto-detected)
   - **Root Directory**: `./`
   - **Build Command**: `npm run build` (default)
   - **Output Directory**: `.next` (default)
   - **Install Command**: `npm install` (default)

4. **Environment Variables**
   - Skip for now (none required)
   - Can add later if needed

5. **Deploy**
   - Click "Deploy"
   - Wait 2-3 minutes for build to complete
   - You'll get a URL like `supra-landing.vercel.app`

### Method B: Vercel CLI

```bash
# Install Vercel CLI globally
npm i -g vercel

# Login
vercel login

# Deploy from supra-landing directory
vercel

# Follow prompts:
# - Set up and deploy? Yes
# - Which scope? Your account
# - Link to existing project? No
# - What's your project's name? supra-landing
# - In which directory is your code located? ./

# Deploy to production
vercel --prod
```

## 🌐 Step 3: Configure Custom Domain

### In Vercel Dashboard

1. **Go to Project Settings**
   - Open your project in Vercel
   - Click "Settings" → "Domains"

2. **Add Domain**
   - Click "Add Domain"
   - Enter: `supra-booking.com`
   - Click "Add"

3. **Add www Subdomain**
   - Click "Add Domain" again
   - Enter: `www.supra-booking.com`
   - Click "Add"
   - Choose: Redirect to `supra-booking.com`

4. **Get DNS Configuration**
   - Vercel will show DNS records needed
   - Keep this page open for next step

### Expected DNS Records from Vercel

Vercel typically provides these records:

```
Type    Name    Value                          TTL
A       @       76.76.21.21                    3600
CNAME   www     cname.vercel-dns.com.          3600
```

**Note**: Your exact values may differ. Use what Vercel provides!

## 🔧 Step 4: Configure DNS on Hostinger

1. **Login to Hostinger**
   - Go to [hostinger.com](https://hostinger.com)
   - Login to your account
   - Go to "Domains" → Select `supra-booking.com`

2. **Access DNS Management**
   - Click "DNS / Name Servers"
   - Click "Manage DNS Records"

3. **Update DNS Records**
   
   **Remove existing A and CNAME records for @ and www (if any)**

   **Add new records from Vercel:**

   | Type  | Name | Value                    | TTL  |
   |-------|------|--------------------------|------|
   | A     | @    | 76.76.21.21              | 3600 |
   | CNAME | www  | cname.vercel-dns.com.    | 3600 |

   **Important Notes:**
   - Use the exact values Vercel provided
   - `@` represents the root domain (supra-booking.com)
   - `www` is for www.supra-booking.com
   - TTL of 3600 (1 hour) is standard

4. **Save Changes**
   - Click "Save" or "Update Records"

## ⏱️ Step 5: Verify Domain

1. **Back to Vercel**
   - Return to Vercel Domains page
   - Click "Verify" next to your domain

2. **Wait for DNS Propagation**
   - DNS changes take 5 minutes to 48 hours
   - Usually works within 1-2 hours
   - Vercel will automatically verify once DNS propagates

3. **Check Propagation Status**
   - Use [whatsmydns.net](https://www.whatsmydns.net/)
   - Enter: `supra-booking.com`
   - Select: `A` record
   - Check if it shows `76.76.21.21` globally

## ✅ Step 6: Test Your Site

Once DNS has propagated:

1. **Visit Your Domain**
   ```
   https://supra-booking.com
   https://www.supra-booking.com
   ```

2. **Check SSL Certificate**
   - Vercel automatically provisions SSL
   - Look for 🔒 padlock in browser
   - May take a few minutes after DNS verification

3. **Test All Sections**
   - Navigation
   - Smooth scrolling
   - Animations
   - Contact form
   - Mobile responsiveness

## 🔄 Continuous Deployment

Now that you're set up, any push to your GitHub main branch will automatically deploy to Vercel:

```bash
# Make changes to your code
git add .
git commit -m "Update hero section"
git push

# Vercel automatically builds and deploys
# Check deployment status at vercel.com
```

## 🐛 Troubleshooting

### Domain Not Working

**Check DNS Records:**
```bash
# Check A record
dig supra-booking.com +short
# Should return: 76.76.21.21

# Check CNAME
dig www.supra-booking.com +short
# Should return: cname.vercel-dns.com.
```

**Common Issues:**
- ❌ Old DNS records not removed
- ❌ Wrong TTL (use 3600)
- ❌ Extra characters in DNS values
- ❌ DNS not propagated yet (wait longer)

### SSL Certificate Not Working

- Wait 10-15 minutes after DNS verification
- Vercel auto-provisions Let's Encrypt certificates
- Check Vercel dashboard for certificate status

### Build Errors

```bash
# Test build locally first
npm run build

# If successful, push to GitHub
# If errors, fix them before deploying
```

### Hostinger DNS Help

If you can't find DNS settings:
1. Hostinger → Domains → Your Domain
2. Look for "DNS Zone" or "DNS Records"
3. Click "Manage" or "Edit"
4. If using external nameservers, switch to Hostinger nameservers first

## 📊 Post-Deployment Checklist

- [ ] Site loads at `supra-booking.com`
- [ ] `www.supra-booking.com` redirects to main domain
- [ ] SSL certificate is active (🔒)
- [ ] All animations work smoothly
- [ ] Mobile responsive design works
- [ ] Contact form functions
- [ ] All links work
- [ ] Dark mode toggles properly
- [ ] Lighthouse score > 90

## 🎯 Next Steps

1. **Analytics**
   - Add Google Analytics or Plausible
   - Track visitor behavior

2. **SEO**
   - Submit sitemap to Google Search Console
   - Add meta tags for social sharing

3. **Performance**
   - Optimize images (use Next.js Image component)
   - Enable Vercel Analytics

4. **Features**
   - Connect contact form to backend/email service
   - Add newsletter signup
   - Integrate with actual app download links

## 📞 Support

**Vercel Issues:**
- [Vercel Documentation](https://vercel.com/docs)
- [Vercel Support](https://vercel.com/support)

**Hostinger Issues:**
- [Hostinger Knowledge Base](https://support.hostinger.com)
- Live chat in Hostinger dashboard

**DNS Propagation:**
- [DNS Checker](https://dnschecker.org)
- [What's My DNS](https://www.whatsmydns.net)

---

**Deployment Time Estimate:**
- GitHub push: 2 minutes
- Vercel deployment: 3-5 minutes
- DNS configuration: 5 minutes
- DNS propagation: 1-24 hours
- **Total: ~30 minutes to 1 day**

Good luck! 🚀

