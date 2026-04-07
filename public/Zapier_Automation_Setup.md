# Zapier Automation Setup Guide

## Overview

Zapier connects your Google Sheets trackers, Gmail, Google Calendar, and other tools to automate repetitive tasks. This guide shows you how to set up 5 essential automations.

## Getting Started with Zapier

1. Go to **zapier.com**
2. Sign up for free account
3. Click **Create** → **Zap**
4. Follow the workflow builder

## Automation 1: Job Application Reminder

**Purpose:** Get notified when it's time to follow up on a job application

**Setup:**
1. **Trigger:** Google Sheets - New or updated spreadsheet row
   - Sheet: Job Application Tracker
   - Worksheet: Sheet1
   - Trigger: When a row is added
2. **Filter:** Status = "Applied"
3. **Action:** Gmail - Send Email
   - To: Your email
   - Subject: "Follow up on [Company] - [Position]"
   - Body: "Time to follow up on your application to [Company] for [Position]"

**Result:** You get an email reminder 7 days after applying

---

## Automation 2: Lead Follow-up Notification

**Purpose:** Get notified when it's time to follow up with a lead

**Setup:**
1. **Trigger:** Google Sheets - New or updated spreadsheet row
   - Sheet: Lead & Outreach Tracker
   - Trigger: When row is updated
2. **Filter:** Follow-up Date = TODAY()
3. **Action:** Gmail - Send Email
   - To: Your email
   - Subject: "Follow up with [Lead Name] at [Company]"
   - Body: "Time to follow up with [Lead Name]. Last contact: [Date Contacted]"

**Result:** Automatic reminder when follow-up date arrives

---

## Automation 3: Calendar Event for Follow-ups

**Purpose:** Automatically create calendar events for follow-ups

**Setup:**
1. **Trigger:** Google Sheets - New or updated spreadsheet row
   - Sheet: Lead & Outreach Tracker
   - Trigger: When row is added
2. **Action:** Google Calendar - Create Event
   - Calendar: Your calendar
   - Event Title: "Follow up with [Lead Name]"
   - Date: [Follow-up Date]
   - Time: 10:00 AM
   - Description: "[Company] - [Notes]"

**Result:** Follow-up dates automatically appear in your calendar

---

## Automation 4: Weekly Progress Report

**Purpose:** Get a weekly summary of your progress

**Setup:**
1. **Trigger:** Schedule - Every Monday at 9:00 AM
2. **Action:** Gmail - Send Email
   - To: Your email
   - Subject: "Weekly Progress Report - [Date]"
   - Body: Include metrics from your trackers:
     - Total applications this week
     - Total outreach messages
     - Interviews scheduled
     - Leads in pipeline

**Manual Step:** Copy metrics from your sheets into the email template

**Result:** Weekly accountability and progress tracking

---

## Automation 5: LinkedIn Post Reminder

**Purpose:** Get reminded to post on LinkedIn

**Setup:**
1. **Trigger:** Schedule - Every Monday, Wednesday, Friday at 8:00 AM
2. **Action:** Gmail - Send Email
   - To: Your email
   - Subject: "Time to post on LinkedIn!"
   - Body: "Check your Content Calendar for today's post. Remember to engage with 5-10 other posts after posting."

**Result:** Consistent LinkedIn posting schedule

---

## Advanced Automations (Optional)

### Automation 6: Lead Scoring

**Purpose:** Automatically score leads based on engagement

**Setup:**
1. **Trigger:** Google Sheets - New or updated spreadsheet row
2. **Filter:** Status = "Interested"
3. **Action:** Google Sheets - Update spreadsheet row
   - Column: Lead Quality Score
   - Value: 3 (or higher based on status)

---

### Automation 7: Email to Google Sheets

**Purpose:** Capture emails in your tracker

**Setup:**
1. **Trigger:** Gmail - New Email
   - From: Specific senders or with specific labels
2. **Action:** Google Sheets - Create spreadsheet row
   - Sheet: Lead Tracker
   - Add sender info and email content

---

## Free Zapier Limits

- **Free Plan:** 100 tasks/month
- **Each automation uses 1 task per trigger**

### Recommended Free Tier Setup
- Automation 1 (Job Reminders): 5 tasks/month
- Automation 2 (Lead Reminders): 5 tasks/month
- Automation 3 (Calendar Events): 10 tasks/month
- Automation 4 (Weekly Report): 4 tasks/month
- Automation 5 (LinkedIn Reminders): 12 tasks/month

**Total: ~36 tasks/month (well within 100 limit)**

---

## Manual Alternatives (If Not Using Zapier)

If you prefer not to use Zapier, you can:

1. **Google Calendar Reminders:** Set manual reminders for follow-up dates
2. **Google Forms:** Create forms to capture leads
3. **Gmail Filters:** Organize emails by label
4. **Google Apps Script:** Write custom automation (advanced)

---

## Tips for Success

- **Start Simple:** Begin with 2-3 automations
- **Test First:** Test each automation before going live
- **Monitor:** Check that automations are working
- **Adjust:** Modify based on what you learn
- **Scale:** Add more as you get comfortable

---

## Troubleshooting

**Q: My automation isn't working**  
A: Check the trigger conditions, make sure sheets are named correctly, verify email addresses.

**Q: I'm running out of Zapier tasks**  
A: Upgrade to paid plan ($20/month) for unlimited tasks, or use fewer automations.

**Q: How do I test an automation?**  
A: Add a test row to your sheet and see if the action triggers.

**Q: Can I use other tools instead of Zapier?**  
A: Yes! IFTTT, Make, or Google Apps Script are alternatives.

---

## Next Steps

1. Set up Automation 1 (Job Reminders) first
2. Test it with a sample row
3. Add Automation 2 (Lead Reminders)
4. Once comfortable, add remaining automations
5. Monitor and adjust based on results

---

**Automate the repetitive. Focus on the important. Scale your impact.**

**Created by:** Farhan Ahmed  
**Contact:** dataanalystfarhan@gmail.com
