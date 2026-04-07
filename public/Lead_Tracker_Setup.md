# Lead Tracker Setup Guide

## Overview

The Lead Tracker helps you manage prospects, track outreach, and organize your sales pipeline. It's essential for building a client base and generating income.

## How to Create Your Lead Tracker

### Step 1: Create a New Google Sheet
1. Go to **Google Sheets** (sheets.google.com)
2. Click **+ Create New** → **Spreadsheet**
3. Name it: "Lead & Outreach Tracker"
4. Share it with yourself

### Step 2: Set Up Column Headers

Create these columns in Row 1:

| A | B | C | D | E | F | G | H | I | J | K |
|---|---|---|---|---|---|---|---|---|---|---|
| Date Added | Lead Name | Company | Industry | Email | Phone | Outreach Method | Date Contacted | Status | Follow-up Date | Notes |

### Step 3: Add Data Validation

For the **Status** column (Column I), add a dropdown:
1. Select column I
2. Go to **Data** → **Data Validation**
3. Choose "List of items"
4. Enter: `New, Contacted, Interested, Proposal Sent, Negotiating, Won, Lost`

For the **Outreach Method** column (Column G):
1. Enter: `Email, LinkedIn, WhatsApp, Phone, Referral`

### Step 4: Add Formulas

**Column L - Days Since Contact:**
```
=IF(H2="", "", TODAY()-H2)
```

**Column M - Follow-up Status:**
```
=IF(TODAY()>=J2, "FOLLOW UP NOW", "")
```

**Column N - Lead Quality Score:**
```
=IF(I2="Won", 5, IF(I2="Negotiating", 4, IF(I2="Proposal Sent", 3, IF(I2="Interested", 2, 1))))
```

### Step 5: Add Conditional Formatting

To highlight hot leads:
1. Select column M
2. Go to **Format** → **Conditional Formatting**
3. Format cells if: `Text is exactly` → `FOLLOW UP NOW`
4. Choose red background

## Sample Data

| Date | Lead Name | Company | Industry | Email | Status | Follow-up | Notes |
|------|-----------|---------|----------|-------|--------|-----------|-------|
| 3/15/2026 | Ahmed Khan | TechCorp | Tech | ahmed@tech.com | Interested | 3/22/2026 | Discussed project scope |
| 3/16/2026 | Fatima Ali | FinanceHub | Finance | fatima@finance.com | Proposal Sent | 3/23/2026 | Sent proposal for $5K project |
| 3/17/2026 | Hassan Malik | DataSoft | Analytics | hassan@data.com | Contacted | 3/24/2026 | Initial email sent |

## Sales Pipeline Stages

**New** → **Contacted** → **Interested** → **Proposal Sent** → **Negotiating** → **Won**

Each stage represents progress in the sales process.

## Monthly Metrics to Track

### Summary Section (at bottom of sheet)

```
Total Leads: =COUNTA(A2:A1000)
Contacted: =COUNTIF(I2:I1000, "Contacted")
Interested: =COUNTIF(I2:I1000, "Interested")
Proposals Sent: =COUNTIF(I2:I1000, "Proposal Sent")
Won: =COUNTIF(I2:I1000, "Won")
Contact Rate: =COUNTIF(I2:I1000, "Contacted")/COUNTA(A2:A1000)
Win Rate: =COUNTIF(I2:I1000, "Won")/COUNTA(A2:A1000)
```

## Daily Workflow

1. **Morning:** Check "Follow-up Status" column for red cells
2. **Add Leads:** Add new prospects to tracker
3. **Outreach:** Send messages to new leads
4. **Follow-up:** Contact leads with red "FOLLOW UP NOW" status
5. **Update:** Change status when you hear back
6. **Evening:** Review tracker, plan tomorrow

## Outreach Sequence

For each lead, follow this sequence:

| Day | Action | Status |
|-----|--------|--------|
| Day 0 | Initial contact (email, LinkedIn, WhatsApp) | Contacted |
| Day 3 | Check for response | Contacted |
| Day 7 | Follow-up message | Interested (if responded) |
| Day 14 | Second follow-up | Proposal Sent (if interested) |
| Day 21 | Final follow-up | Negotiating (if engaged) |

## Tips for Success

- **Personalize:** Spend 5-7 minutes on each outreach
- **Follow Up:** Most deals come from persistence, not initial contact
- **Track Everything:** Log every interaction
- **Qualify Leads:** Focus on high-quality prospects
- **Celebrate Wins:** Mark won deals clearly

## Metrics to Monitor

| Metric | Target | Formula |
|--------|--------|---------|
| Leads Added/Month | 15-20 | Count per month |
| Contact Rate | 50-70% | Contacted / Total |
| Interest Rate | 20-30% | Interested / Contacted |
| Proposal Rate | 10-20% | Proposals / Interested |
| Win Rate | 5-10% | Won / Total |

## Troubleshooting

**Q: How do I find leads?**  
A: LinkedIn, industry directories, referrals, cold outreach, networking events.

**Q: When should I follow up?**  
A: After 7 days if no response. Then again at day 14 and day 21.

**Q: What if they say no?**  
A: Mark as "Lost" but stay connected. They might refer you or need services later.

**Q: How do I track project value?**  
A: Add a "Project Value" column and track total pipeline value.

---

**Build your pipeline. Track your progress. Scale your income.**

**Created by:** Farhan Ahmed  
**Contact:** dataanalystfarhan@gmail.com
