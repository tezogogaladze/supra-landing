# 🚀 Supra Landing Page - Deployment Guide

Complete step-by-step guide to deploy to Vercel with your Hostinger domain.

---

## 📋 Prerequisites Checklist

- [x] Vercel account (you have this)
- [x] Domain `supra-booking.com` on Hostinger (you have this)
- [x] GitHub account (create at github.com if needed)
- [x] Git installed on your computer
- [x] Landing page code ready (you have this)

---

## 🎯 STEP 1: Push Your Code to GitHub

### 1.1 Initialize Git Repository

Open Terminal and run these commands **one by one**:

```bash
cd /Users/seaways/Desktop/Supra/supra/supra-landing
```

```bash
git init
```

```bash
git add .
```

```bash
git commit -m "Initial commit: Supra landing page"
```

### 1.2 Create GitHub Repository

1. Go to **https://github.com/new**
2. Repository name: `supra-landing`
3. Description: "Supra restaurant booking landing page"
4. Keep it **Private** (recommended) or Public
5. **DO NOT** initialize with README, .gitignore, or license
6. Click **"Create repository"**

### 1.3 Push to GitHub

GitHub will show you commands. Use these (replace `YOUR_USERNAME` with your GitHub username):

```bash
git remote add origin https://github.com/YOUR_USERNAME/supra-landing.git
```

```bash
git branch -M main
```

```bash
git push -u origin main
```

**If prompted for credentials:**
- Username: Your GitHub username
- Password: Use a **Personal Access Token** (not your password)
  - Generate token at: https://github.com/settings/tokens
  - Select: `repo` permissions
  - Copy the token and use it as password

---

## ☁️ STEP 2: Deploy to Vercel

### 2.1 Connect GitHub to Vercel

1. Go to **https://vercel.com**
2. Click **"Log in"** or **"Sign Up"**
3. Choose **"Continue with GitHub"**
4. Authorize Vercel to access your GitHub

### 2.2 Import Your Repository

1. On Vercel Dashboard, click **"Add New..."** → **"Project"**
2. Find your `supra-landing` repository
3. Click **"Import"**

### 2.3 Configure Project

Vercel will auto-detect Next.js. Settings should be:

```
Framework Preset: Next.js
Root Directory: ./
Build Command: npm run build (auto-detected)
Output Directory: .next (auto-detected)
Install Command: npm install (auto-detected)
Node.js Version: 18.x or 20.x
```

**Environment Variables**: None needed (skip this)

### 2.4 Deploy!

1. Click **"Deploy"**
2. Wait 2-3 minutes for the build
3. You'll get a URL like: `https://supra-landing-abc123.vercel.app`
4. Click **"Visit"** to test your site

✅ **Your site is now live!** (on Vercel's domain)

---

## 🌐 STEP 3: Add Custom Domain (Hostinger)

### 3.1 Add Domain in Vercel

1. In your Vercel project, go to **"Settings"** tab
2. Click **"Domains"** in left sidebar
3. Click **"Add"** button
4. Type: `supra-booking.com`
5. Click **"Add"**

### 3.2 Add www Subdomain (Recommended)

1. Click **"Add"** again
2. Type: `www.supra-booking.com`
3. Select: **"Redirect to supra-booking.com"**
4. Click **"Add"**

### 3.3 Get DNS Records from Vercel

Vercel will show you the DNS records needed. They look like this:

**For supra-booking.com:**
```
Type: A
Name: @
Value: 76.76.21.21
```

**For www.supra-booking.com:**
```
Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

⚠️ **IMPORTANT**: Your exact values might be slightly different! Use what Vercel shows you.

**Keep this Vercel page open** - you'll need these values for the next step.

---

## 🔧 STEP 4: Configure DNS on Hostinger

### 4.1 Access Hostinger DNS Settings

1. Go to **https://hpanel.hostinger.com**
2. Log in to your account
3. Click **"Domains"** in left menu
4. Find **"supra-booking.com"**
5. Click **"Manage"** button

### 4.2 Go to DNS Zone

1. Look for **"DNS / Name Servers"** tab
2. Click on it
3. Click **"Manage"** or **"DNS Zone"**

You should see a list of DNS records.

### 4.3 Delete Existing Records (Important!)

**Before adding new records**, you need to remove conflicting ones:

1. Look for any **A record** with Name `@` or blank
2. Click the **trash/delete icon** next to it
3. Look for any **CNAME record** with Name `www`
4. Delete that too

### 4.4 Add Vercel DNS Records

**Add A Record for Root Domain:**

1. Click **"Add Record"** button
2. Type: Select **"A"**
3. Name: Type **"@"** (or leave blank)
4. Points to: **76.76.21.21** (use the value from Vercel!)
5. TTL: **3600** (or 14400, doesn't matter much)
6. Click **"Save"** or **"Add Record"**

**Add CNAME Record for www:**

1. Click **"Add Record"** again
2. Type: Select **"CNAME"**
3. Name: Type **"www"**
4. Points to: **cname.vercel-dns.com** (use the value from Vercel!)
5. TTL: **3600**
6. Click **"Save"** or **"Add Record"**

### 4.5 Save Changes

Make sure you've saved all changes in Hostinger DNS panel.

---

## ⏱️ STEP 5: Wait for DNS Propagation

### What Happens Now:

DNS changes take time to spread across the internet:
- **Minimum**: 5 minutes
- **Typical**: 1-2 hours
- **Maximum**: 24-48 hours

### Check Propagation Status

Use this tool to check if DNS is ready:
**https://www.whatsmydns.net**

1. Enter: `supra-booking.com`
2. Select: **A** record
3. Click **"Search"**
4. Should show: `76.76.21.21` across the world

---

## ✅ STEP 6: Verify Domain in Vercel

### 6.1 Check Verification Status

1. Go back to Vercel → Your Project → Settings → Domains
2. Look at your domains:
   - `supra-booking.com` should show ✅ or "Pending"
   - `www.supra-booking.com` should show ✅ or "Pending"

### 6.2 Wait for Verification

- Vercel automatically checks DNS every few minutes
- Once DNS propagates, it will verify automatically
- SSL certificate will be issued automatically (Let's Encrypt)

### 6.3 SSL Certificate

Vercel provides free SSL (https://) automatically:
- Usually ready within 10 minutes after DNS verification
- You'll see a 🔒 padlock icon in your browser
- No action needed on your part!

---

## 🎉 STEP 7: Test Your Live Site!

Once DNS propagates and Vercel verifies:

### Test These URLs:

1. **https://supra-booking.com** ✓
2. **https://www.supra-booking.com** ✓ (should redirect to main)
3. **https://supra-booking.com/about** ✓
4. **https://supra-booking.com/contact** ✓

### What to Check:

- [x] Site loads correctly
- [x] Images display (logo, app store badges, etc.)
- [x] Satoshi font loads properly
- [x] Flowing menu animation works
- [x] Links work (logo → /about, For Restaurants → /contact)
- [x] SSL certificate is active (🔒 in browser)
- [x] Mobile responsive design works

---

## 🔄 Future Updates (Continuous Deployment)

### How It Works:

Now that you're connected, any changes you make will auto-deploy!

### To Update Your Site:

```bash
cd /Users/seaways/Desktop/Supra/supra/supra-landing

# Make your changes to files...

# Then commit and push:
git add .
git commit -m "Update: description of changes"
git push
```

**That's it!** Vercel will automatically:
1. Detect the push
2. Build your site
3. Deploy to supra-booking.com
4. Usually takes 1-2 minutes

---

## 🐛 Troubleshooting

### Domain Not Working?

**Check DNS with command line:**
```bash
dig supra-booking.com +short
# Should return: 76.76.21.21

dig www.supra-booking.com +short
# Should return: cname.vercel-dns.com.
```

**Common Issues:**

1. **"Invalid Configuration" in Vercel**
   - DNS records not updated yet
   - Wait 1 hour and check again
   - Verify DNS records in Hostinger are correct

2. **"DNS Record Not Found"**
   - Check you typed domain correctly
   - Ensure A record points to correct IP
   - Clear your browser cache (Cmd+Shift+R)

3. **Site Shows "404" or Wrong Content**
   - Domain might be pointing elsewhere
   - Check Hostinger nameservers (should be Hostinger's, not external)
   - Contact Hostinger support if needed

4. **SSL Not Working**
   - Wait 15 minutes after DNS verification
   - Vercel auto-provisions SSL
   - Check Vercel dashboard for SSL status

### Vercel Build Fails?

**Check Build Logs:**
1. Go to Vercel project → "Deployments"
2. Click on the failed deployment
3. Click "View Function Logs" or "Build Logs"
4. Share the error message for help

### Need Help?

- **Vercel Support**: https://vercel.com/support
- **Hostinger Support**: https://support.hostinger.com (24/7 live chat)
- **DNS Check**: https://www.whatsmydns.net

---

## 📊 Deployment Summary

| Step | What | Time |
|------|------|------|
| 1 | Push to GitHub | 5 min |
| 2 | Deploy to Vercel | 3 min |
| 3 | Add domain in Vercel | 2 min |
| 4 | Configure Hostinger DNS | 5 min |
| 5 | DNS propagation | 1-24 hrs |
| 6 | Vercel verification | Auto |
| 7 | Test live site | 5 min |

**Total Active Time**: ~20 minutes  
**Total Wait Time**: 1-24 hours (DNS)

---

## 🎯 Quick Command Reference

### For Future Updates:

```bash
# Navigate to project
cd /Users/seaways/Desktop/Supra/supra/supra-landing

# Check status
git status

# Add changes
git add .

# Commit
git commit -m "Your update message"

# Push to deploy
git push
```

### Check Deployment:

- **Vercel Dashboard**: https://vercel.com/dashboard
- **View Deployments**: Your Project → "Deployments" tab
- **View Logs**: Click any deployment → "View Function Logs"

---

## ✨ You're Done!

Once DNS propagates:
- ✅ Your site is live at **https://supra-booking.com**
- ✅ SSL/HTTPS works automatically
- ✅ Future updates deploy automatically
- ✅ Vercel provides analytics and performance monitoring

**Congratulations! Your Supra landing page is now live!** 🎉

---

**Last Updated**: December 5, 2025  
**Domain**: supra-booking.com  
**Hosting**: Vercel  
**DNS**: Hostinger

