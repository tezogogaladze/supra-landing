# 📧 Email Not Appearing in Hostinger - Troubleshooting

Resend says "delivered" but you don't see the email in Hostinger. Let's fix this!

---

## ✅ Step 1: Check Spam/Junk Folder

**This is the #1 reason!**

1. Login to **https://webmail.hostinger.com**
2. Username: `support@supra-booking.com`
3. Check folders:
   - ✉️ Inbox
   - 🗑️ **Spam / Junk** ← Check here!
   - 🗑️ Trash
   - 📁 All Mail

**Found it in Spam?**
- Mark it as "Not Spam"
- Add `noreply@supra-booking.com` to contacts

---

## ✅ Step 2: Verify Email Account Exists

Make sure the email account is actually created:

1. Go to **https://hpanel.hostinger.com**
2. Click **"Emails"** in sidebar
3. Look for `support@supra-booking.com` in the list

**If you DON'T see it**:
- The email account doesn't exist yet
- Create it: Click "Create Email Account"
- Email: `support`
- Domain: `@supra-booking.com`
- Set password → Create

**If you DO see it**:
- Good! It exists
- Try logging into webmail again

---

## ✅ Step 3: Check MX Records in Hostinger

Your domain needs MX records to RECEIVE emails:

1. Go to Hostinger → Domains → supra-booking.com → DNS Zone
2. Look for **MX records**

**What you should see**:
```
Type: MX
Name: @ (or supra-booking.com)
Value: mx1.hostinger.com (or similar)
Priority: 10
```

**If you DON'T see MX records for Hostinger**:
- You might have only added Resend's MX records
- You need BOTH Hostinger MX (for receiving) AND Resend records (for sending)

---

## 🔧 CRITICAL: MX Record Conflict

**PROBLEM**: You might have replaced Hostinger's MX records with Resend's!

### Check Your Current MX Records:

Run this command in Terminal:
```bash
dig supra-booking.com MX +short
```

**What you should see**:
```
10 mx1.hostinger.com.
10 mx2.hostinger.com.
```

**If you see Amazon SES**:
```
10 feedback-smtp.us-east-1.amazonses.com.
```

**This is the problem!** You replaced Hostinger's MX with Resend's.

### The Fix:

You need MX records pointing to **Hostinger** to receive emails in Hostinger:

1. Go to Hostinger → DNS Zone
2. **Delete** the Amazon SES MX record (if present)
3. **Add** Hostinger MX records:

```
Type: MX
Name: @
Value: mx1.hostinger.com
Priority: 10

Type: MX
Name: @
Value: mx2.hostinger.com
Priority: 20
```

**Note**: You DON'T need Resend's MX record for sending emails. Only for receiving emails TO Resend (which you don't need).

---

## ✅ Step 4: Wait and Retry

If you just set up the email:

1. **Wait 5-10 minutes** for email system to activate
2. **Send another test** from the contact form
3. **Refresh** your Hostinger webmail

---

## ✅ Step 5: Check Resend Logs

See exactly what happened:

1. Go to **Resend dashboard** → **"Logs"** or **"Activity"**
2. Find your test email
3. Click on it
4. Check the status:
   - ✅ **Delivered** - Email was accepted by the server
   - ❌ **Bounced** - Email address doesn't exist
   - ❌ **Failed** - Delivery failed

**If it says "Bounced"**:
- The email address doesn't exist or can't receive emails
- Create the email account in Hostinger
- Verify MX records

---

## 🎯 Quick Diagnostic

### Test 1: Send Email to Yourself

Try sending an email FROM `support@supra-booking.com` TO yourself:

1. Login to Hostinger webmail
2. Compose new email
3. Send to your personal email (Gmail, etc.)
4. Check if you receive it

**If it works**: Email account is active  
**If it doesn't**: Account might not be fully activated

### Test 2: Send Email TO support@supra-booking.com

From your personal email:

1. Send an email to `support@supra-booking.com`
2. Check Hostinger webmail inbox
3. Should arrive in seconds

**If it works**: Receiving is working!  
**If it bounces**: MX records are wrong

---

## 🔍 Common Issues & Solutions

### Issue 1: "Email Bounced" in Resend

**Cause**: Email address doesn't exist

**Fix**:
1. Create email account in Hostinger
2. Wait 5-10 minutes
3. Try again

### Issue 2: MX Records Point to Resend

**Cause**: You added Resend's MX records

**Fix**:
1. Remove Amazon SES MX records
2. Add Hostinger MX records (mx1.hostinger.com, mx2.hostinger.com)
3. Wait 30 minutes for DNS propagation

### Issue 3: Email in Spam

**Cause**: First-time sender, might be flagged

**Fix**:
1. Check spam folder in Hostinger webmail
2. Mark as "Not Spam"
3. Add to whitelist

### Issue 4: Email Account Not Activated

**Cause**: Just created, still processing

**Fix**:
- Wait 10 minutes
- Try logging out and back in
- Contact Hostinger support chat

---

## 🚨 Quick Fix - Use Your Personal Email Temporarily

While troubleshooting, you can send to your personal email:

**Change in Vercel Environment Variables**:

Add another variable:
- **Name**: `CONTACT_EMAIL`
- **Value**: `your-personal-email@gmail.com`

**Update** `app/api/contact/route.ts`:
```typescript
to: [process.env.CONTACT_EMAIL || 'support@supra-booking.com'],
```

This way you'll definitely receive emails while you fix the Hostinger setup!

---

## ✅ Recommended Solution

**The safest approach**:

1. **Remove Resend's MX record** from Hostinger DNS
2. **Keep only Hostinger's MX records**:
   - mx1.hostinger.com
   - mx2.hostinger.com
3. **Resend can still SEND** emails without its MX record
4. **Hostinger receives** the emails normally

### What Records You Actually Need:

**For SENDING (Resend)**:
- ✅ SPF (TXT record)
- ✅ DKIM (TXT record)  
- ✅ Domain verification (TXT record)
- ❌ MX record (NOT needed for sending!)

**For RECEIVING (Hostinger)**:
- ✅ MX records (mx1.hostinger.com, mx2.hostinger.com)

---

## 🎯 Action Plan

**Do this now**:

1. Check Hostinger webmail spam folder
2. Run `dig supra-booking.com MX +short` to see MX records
3. If it shows Amazon SES → remove it, add Hostinger MX
4. Create/verify email account exists in Hostinger
5. Test sending to yourself from Hostinger webmail

**Let me know what you find!** 🔍

The email system WILL work once we identify which step is the issue!

