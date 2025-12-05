# 📧 Email Setup Guide - Resend Integration

The contact form on your landing page sends emails to `support@supra-booking.com` using Resend.

---

## 🚀 Quick Setup (5 minutes)

### Step 1: Sign Up for Resend

1. Go to **https://resend.com**
2. Click **"Sign Up"** or **"Get Started"**
3. Sign up with your email
4. Verify your email address

**Cost**: FREE for up to 100 emails/day (perfect for contact forms!)

---

### Step 2: Get Your API Key

1. Once logged in, go to **"API Keys"** in the sidebar
2. Click **"Create API Key"**
3. Name it: `Supra Landing Page`
4. Permissions: **"Sending access"** (default)
5. Click **"Add"**
6. **Copy the API key** (starts with `re_...`)
   - ⚠️ Save it now! You can't see it again later

---

### Step 3: Verify Your Domain (Important!)

Before you can send emails FROM `@supra-booking.com`, you need to verify the domain:

1. In Resend dashboard, go to **"Domains"**
2. Click **"Add Domain"**
3. Enter: `supra-booking.com`
4. Click **"Add"**

Resend will show you DNS records to add. You need to add these to Hostinger:

**Typical records look like:**
```
Type: TXT
Name: _resend
Value: resend-domain-verify=xyz123...

Type: MX
Name: @
Value: feedback-smtp.us-east-1.amazonses.com
Priority: 10

Type: TXT  
Name: @
Value: v=spf1 include:amazonses.com ~all

Type: TXT
Name: resend._domainkey
Value: p=MIGfMA0GCSqGSIb3DQEBAQUAA4GN...
```

**Add these to Hostinger:**
1. Go to Hostinger → Domains → supra-booking.com → DNS Zone
2. Add each record exactly as shown by Resend
3. Click "Save"

**Wait 5-30 minutes** for DNS propagation, then click "Verify" in Resend.

---

### Step 4: Add API Key to Vercel

1. Go to **https://vercel.com/dashboard**
2. Click on your **"supra-landing"** project
3. Go to **"Settings"** tab
4. Click **"Environment Variables"** in sidebar
5. Add new variable:
   - **Name**: `RESEND_API_KEY`
   - **Value**: Paste your API key (starts with `re_...`)
   - **Environment**: Select all (Production, Preview, Development)
6. Click **"Save"**

---

### Step 5: Redeploy

After adding the environment variable:

1. Go to **"Deployments"** tab
2. Find the latest deployment
3. Click **"..."** menu → **"Redeploy"**
4. Click **"Redeploy"** to confirm

Or just push a new commit:
```bash
cd /Users/seaways/Desktop/Supra/supra/supra-landing
git add .
git commit -m "Add email configuration"
git push
```

---

## ✅ Test Your Contact Form

Once deployed with the API key:

1. Go to **https://supra-booking.com/contact**
2. Fill out the form
3. Click **"Submit Application"**
4. Check your **support@supra-booking.com** inbox!

---

## 🔧 Local Development Setup (Optional)

To test emails locally:

1. Create `.env.local` file:
   ```bash
   cd /Users/seaways/Desktop/Supra/supra/supra-landing
   cp .env.local.example .env.local
   ```

2. Edit `.env.local`:
   ```env
   RESEND_API_KEY=re_your_actual_api_key_here
   ```

3. Restart dev server:
   ```bash
   npm run dev
   ```

4. Test at http://localhost:3000/contact

**Note**: `.env.local` is already in `.gitignore` - it won't be committed to GitHub.

---

## 📧 Email Details

### What Gets Sent:

**To**: support@supra-booking.com  
**From**: noreply@supra-booking.com  
**Reply-To**: Customer's email  
**Subject**: "New Restaurant Application: [Restaurant Name]"

**Email Content**:
- Restaurant Name
- Contact Person
- Email
- Phone Number
- Message (if provided)

### Email Format:

```
New Restaurant Application

Restaurant Name: [Name]
Contact Person: [Person]
Email: [Email]
Phone: [Phone]
Message: [Message if provided]

---
Sent from Supra Landing Page Contact Form
```

---

## 🐛 Troubleshooting

### "Failed to send email" error

**Check**:
1. API key is correct in Vercel environment variables
2. Domain is verified in Resend
3. You haven't exceeded 100 emails/day (free tier limit)
4. Check Resend dashboard for error logs

### Emails not arriving

**Check**:
1. Spam/junk folder in support@supra-booking.com
2. Domain verification is complete in Resend
3. DNS records are added correctly in Hostinger
4. Email address support@supra-booking.com exists and is active

### "403 Forbidden" or "401 Unauthorized"

**Issue**: API key is missing or invalid

**Fix**:
1. Check environment variable name: `RESEND_API_KEY` (exact match)
2. Verify API key is correct (copy/paste again)
3. Redeploy after adding/fixing the key

### Local development not working

**Issue**: `.env.local` not set up

**Fix**:
1. Create `.env.local` file
2. Add your API key
3. Restart `npm run dev`

---

## 📊 Resend Dashboard

Monitor your emails:
- **Activity** - See all sent emails
- **Logs** - View delivery status and errors
- **Analytics** - Open rates, click rates (if enabled)
- **Domains** - Manage domain verification

---

## 💰 Pricing (as of Dec 2025)

- **Free Tier**: 100 emails/day, 3,000/month
- **Pro**: $20/month for 50,000 emails/month
- **Scale**: Custom pricing for higher volumes

For a contact form, free tier is usually more than enough!

---

## 🔐 Security Notes

1. **API Key**: Keep it secret! Only in Vercel environment variables
2. **Never commit** `.env.local` to git (already in .gitignore)
3. **Rate limiting**: Consider adding if you get spam
4. **Validation**: Form validates required fields server-side

---

## ✨ You're All Set!

Once you complete Steps 1-5:
- ✅ Contact form sends real emails
- ✅ You receive submissions at support@supra-booking.com
- ✅ Users get confirmation message
- ✅ Professional, reliable email delivery

---

## 📞 Support

**Resend Issues**:
- Docs: https://resend.com/docs
- Support: https://resend.com/support

**Need Help?**
- Check Resend logs for errors
- Verify domain status in Resend dashboard
- Ensure DNS records are correct in Hostinger

---

**Setup Time**: ~15 minutes total (5 min Resend + 5 min Vercel + 5 min DNS)

Good luck! 🎉

