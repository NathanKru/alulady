# EmailJS Setup Guide

## Step 1: Create EmailJS Account
1. Go to [EmailJS.com](https://www.emailjs.com/) and create a free account
2. Verify your email address

## Step 2: Add Email Service
1. In your EmailJS dashboard, go to "Email Services"
2. Click "Add New Service"
3. Choose your email provider (Gmail, Outlook, etc.)
4. Follow the authentication steps
5. Note down your **Service ID** (e.g., `service_abc123`)

## Step 3: Create Email Template
1. Go to "Email Templates" in your dashboard
2. Click "Create New Template"
3. Use this template structure:

**Subject:** New {{request_type}} from {{from_name}}

**Body:**
```
Hello Alu Lady Team,

You have received a new {{request_type}}:

**Contact Information:**
- Name: {{from_name}}
- Email: {{from_email}}
- Phone: {{phone_number}}

**Service Requested:** {{service_type}}

**Message:**
{{message}}

Please respond to this inquiry as soon as possible.

Best regards,
Alu Lady Website
```

4. Save the template and note down your **Template ID** (e.g., `template_xyz789`)

## Step 4: Get Your User ID
1. Go to "Account" → "API Keys"
2. Copy your **Public Key** (User ID)

## Step 5: Update the Code
Replace the placeholder values in `src/App3.js`:

```javascript
// Line 25: Replace YOUR_EMAILJS_USER_ID with your actual User ID
emailjs.init("YOUR_EMAILJS_USER_ID");

// Lines 67-68: Replace with your actual Service ID and Template ID
await emailjs.send(
  'YOUR_SERVICE_ID', // Replace with your Service ID
  'YOUR_TEMPLATE_ID', // Replace with your Template ID
  templateParams
);
```

## Example with Real Values:
```javascript
emailjs.init("user_abc123def456");

await emailjs.send(
  'service_xyz789',
  'template_abc123',
  templateParams
);
```

## Testing
1. Start your React app: `npm start`
2. Click "Get a Quote" or "Schedule Your Maintenance Today"
3. Fill out the form and submit
4. Check your email to see if the message was received

## Troubleshooting
- Make sure all IDs are correct (no extra spaces)
- Check your browser console for any error messages
- Verify your email service is properly connected in EmailJS dashboard
- Ensure your template variables match exactly (case-sensitive)

## Free Plan Limits
- 200 emails per month
- Basic templates
- Standard support

For more emails or advanced features, consider upgrading to a paid plan. 