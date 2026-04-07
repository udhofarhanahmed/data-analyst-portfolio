# Complete Tracker Setup Instructions

## Overview

This guide walks you through setting up all three trackers (Job, Lead, Content Calendar) from scratch. Total setup time: 30-45 minutes.

## What You'll Create

1. **Job Application Tracker** - Track all job applications
2. **Lead & Outreach Tracker** - Track prospects and sales pipeline
3. **Content Calendar** - Plan and track LinkedIn posts
4. **Control Dashboard** - View all metrics in one place

---

## Part 1: Job Application Tracker (15 minutes)

### Create the Sheet
1. Go to **Google Sheets** (sheets.google.com)
2. Click **+ Create New** → **Spreadsheet**
3. Name it: "Job Application Tracker"
4. Click **Share** → Share with yourself (or team)

### Add Headers (Row 1)
Copy and paste into Row 1:

```
Date Applied | Company | Position | Job URL | Status | Salary | Contact Name | Contact Email | Follow-up Date | Notes
```

### Set Up Dropdowns

**For Status Column (E):**
1. Select cells E2:E1000
2. Go to **Data** → **Data Validation**
3. Choose "List of items"
4. Enter: `Applied, Interviewing, Rejected, Offer, Declined`
5. Click **Done**

### Add Formulas

**Column K - Days Since Applied:**
- Click K1, type: `Days Since Applied`
- Click K2, paste: `=IF(A2="", "", TODAY()-A2)`
- Copy down to K1000

**Column L - Follow-up Status:**
- Click L1, type: `Follow-up Status`
- Click L2, paste: `=IF(TODAY()>=I2, "FOLLOW UP NOW", "")`
- Copy down to L1000

### Add Conditional Formatting

1. Select column L (L2:L1000)
2. Go to **Format** → **Conditional Formatting**
3. Format rules: "Text is exactly" → `FOLLOW UP NOW`
4. Choose red background
5. Click **Done**

### Add Summary Metrics (at bottom)

Go to cell A1002 and create:

```
A1002: Total Applications
B1002: =COUNTA(A2:A1000)

A1003: Interviews
B1003: =COUNTIF(E2:E1000, "Interviewing")

A1004: Offers
B1004: =COUNTIF(E2:E1000, "Offer")

A1005: Response Rate
B1005: =B1003/B1002
```

---

## Part 2: Lead & Outreach Tracker (15 minutes)

### Create the Sheet
1. Go to **Google Sheets**
2. Click **+ Create New** → **Spreadsheet**
3. Name it: "Lead & Outreach Tracker"

### Add Headers (Row 1)

```
Date Added | Lead Name | Company | Industry | Email | Phone | Outreach Method | Date Contacted | Status | Follow-up Date | Notes
```

### Set Up Dropdowns

**For Status Column (I):**
1. Select cells I2:I1000
2. Go to **Data** → **Data Validation**
3. Enter: `New, Contacted, Interested, Proposal Sent, Negotiating, Won, Lost`

**For Outreach Method Column (G):**
1. Select cells G2:G1000
2. Go to **Data** → **Data Validation**
3. Enter: `Email, LinkedIn, WhatsApp, Phone, Referral`

### Add Formulas

**Column L - Days Since Contact:**
- Click L1, type: `Days Since Contact`
- Click L2, paste: `=IF(H2="", "", TODAY()-H2)`

**Column M - Follow-up Status:**
- Click M1, type: `Follow-up Status`
- Click M2, paste: `=IF(TODAY()>=J2, "FOLLOW UP NOW", "")`

**Column N - Lead Quality:**
- Click N1, type: `Lead Quality`
- Click N2, paste: `=IF(I2="Won", 5, IF(I2="Negotiating", 4, IF(I2="Proposal Sent", 3, IF(I2="Interested", 2, 1))))`

### Add Conditional Formatting

1. Select column M (M2:M1000)
2. Format: "Text is exactly" → `FOLLOW UP NOW`
3. Choose red background

### Add Summary Metrics

```
A1002: Total Leads
B1002: =COUNTA(A2:A1000)

A1003: Contacted
B1003: =COUNTIF(I2:I1000, "Contacted")

A1004: Interested
B1004: =COUNTIF(I2:I1000, "Interested")

A1005: Won
B1005: =COUNTIF(I2:I1000, "Won")

A1006: Win Rate
B1006: =B1005/B1002
```

---

## Part 3: Content Calendar (10 minutes)

### Create the Sheet
1. Go to **Google Sheets**
2. Click **+ Create New** → **Spreadsheet**
3. Name it: "Content Calendar"

### Add Headers (Row 1)

```
Date | Day | Content Type | Topic | Post Content | Posted | Likes | Comments | Shares | Notes
```

### Set Up Dropdowns

**For Content Type Column (C):**
1. Select cells C2:C1000
2. Go to **Data** → **Data Validation**
3. Enter: `Project Insight, Career Tip, Industry News, Personal Story, Case Study, Question`

**For Posted Column (F):**
1. Select cells F2:F1000
2. Go to **Data** → **Data Validation**
3. Enter: `Yes, No`

### Add Formulas

**Column K - Engagement Score:**
- Click K1, type: `Engagement Score`
- Click K2, paste: `=(G2*1)+(H2*2)+(I2*3)`

### Add Summary Metrics

```
A1002: Total Posts
B1002: =COUNTA(A2:A1000)

A1003: Avg Likes
B1003: =AVERAGE(G2:G1000)

A1004: Avg Comments
B1004: =AVERAGE(H2:H1000)

A1005: Avg Engagement
B1005: =AVERAGE(K2:K1000)
```

---

## Part 4: Control Dashboard (Optional - 10 minutes)

### Create the Sheet
1. Go to **Google Sheets**
2. Click **+ Create New** → **Spreadsheet**
3. Name it: "Control Dashboard"

### Add Summary Section

Create a dashboard that pulls data from all three trackers:

```
MONTHLY TARGETS vs ACTUAL

Job Applications
Target: 40
Actual: ='Job Application Tracker'!B1002
Status: [Green if >= Target]

Outreach Messages
Target: 15
Actual: ='Lead & Outreach Tracker'!B1003
Status: [Green if >= Target]

LinkedIn Posts
Target: 8
Actual: ='Content Calendar'!B1002
Status: [Green if >= Target]

Response Rate
Target: 10%
Actual: ='Job Application Tracker'!B1005
Status: [Green if >= Target]

Win Rate
Target: 5%
Actual: ='Lead & Outreach Tracker'!B1006
Status: [Green if >= Target]
```

---

## Step-by-Step Checklist

### Day 1 - Setup (2-3 hours)
- [ ] Create Job Application Tracker
- [ ] Add headers and dropdowns
- [ ] Add formulas
- [ ] Add conditional formatting
- [ ] Create Lead & Outreach Tracker
- [ ] Add headers and dropdowns
- [ ] Add formulas
- [ ] Create Content Calendar
- [ ] Add headers and dropdowns

### Day 2 - First Entries
- [ ] Add 5 sample job applications
- [ ] Add 3 sample leads
- [ ] Add 1 sample LinkedIn post
- [ ] Test all formulas and dropdowns
- [ ] Verify conditional formatting works

### Day 3 - Automation (Optional)
- [ ] Set up Zapier account
- [ ] Create Job Reminder automation
- [ ] Create Lead Reminder automation
- [ ] Test automations

### Day 4 - Start Using
- [ ] Apply to first job
- [ ] Add to Job Tracker
- [ ] Send first outreach message
- [ ] Add to Lead Tracker
- [ ] Publish first LinkedIn post

---

## Common Setup Issues

**Q: Formulas aren't working**  
A: Make sure you're using `=` at the start. Check that sheet names match exactly.

**Q: Dropdowns not showing**  
A: Go to Data → Data Validation and verify the list is entered correctly.

**Q: Conditional formatting not working**  
A: Make sure you selected the right range and the exact text matches.

**Q: Can't find Data Validation**  
A: It's under the **Data** menu at the top. Make sure you're in Google Sheets (not Docs).

---

## Tips for Success

1. **Backup your sheets** - Download as CSV monthly
2. **Share with accountability partner** - Someone to check your progress
3. **Review weekly** - Check metrics every Sunday
4. **Update daily** - Log activities immediately
5. **Celebrate wins** - Mark offers and meetings clearly

---

## Next Steps

1. **Complete setup today** - Follow this guide exactly
2. **Start logging tomorrow** - Begin adding real data
3. **Set up Zapier** - Add automations after 1 week
4. **Review metrics** - Check progress every Sunday
5. **Adjust strategy** - Based on what's working

---

**Your trackers are the foundation of your system. Set them up right, and everything else flows.**

**Created by:** Farhan Ahmed  
**Contact:** dataanalystfarhan@gmail.com
