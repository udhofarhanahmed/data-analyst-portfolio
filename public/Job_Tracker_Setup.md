# Job Tracker Setup Guide

## Overview

The Job Tracker helps you organize, track, and follow up on all job applications. It's a Google Sheets template that keeps everything in one place.

## How to Create Your Job Tracker

### Step 1: Create a New Google Sheet
1. Go to **Google Sheets** (sheets.google.com)
2. Click **+ Create New** → **Spreadsheet**
3. Name it: "Job Application Tracker"
4. Share it with yourself (optional: share with accountability partner)

### Step 2: Set Up Column Headers

Create these columns in Row 1:

| A | B | C | D | E | F | G | H | I | J |
|---|---|---|---|---|---|---|---|---|---|
| Date Applied | Company | Position | Job URL | Status | Salary | Contact Name | Contact Email | Follow-up Date | Notes |

### Step 3: Add Data Validation

For the **Status** column (Column E), add a dropdown:
1. Select column E
2. Go to **Data** → **Data Validation**
3. Choose "List of items"
4. Enter: `Applied, Interviewing, Rejected, Offer, Declined`

### Step 4: Add Formulas

**Column K - Days Since Applied:**
```
=TODAY()-A2
```

**Column L - Follow-up Status:**
```
=IF(TODAY()>=I2, "FOLLOW UP NOW", "")
```

### Step 5: Add Conditional Formatting

To highlight urgent follow-ups:
1. Select column L
2. Go to **Format** → **Conditional Formatting**
3. Format cells if: `Text is exactly` → `FOLLOW UP NOW`
4. Choose red background

## Sample Data

| Date | Company | Position | Status | Salary | Follow-up | Notes |
|------|---------|----------|--------|--------|-----------|-------|
| 3/15/2026 | TechCorp | Data Analyst | Applied | $70K-80K | 3/22/2026 | Great company, sent via LinkedIn |
| 3/16/2026 | FinanceHub | Senior Analyst | Interviewing | $80K-90K | 3/23/2026 | Phone interview scheduled |
| 3/17/2026 | DataSoft | Analyst | Rejected | - | - | Not a fit for their team |

## Monthly Metrics to Track

### Summary Section (at bottom of sheet)

Create a summary table:

```
Total Applications: =COUNTA(A2:A1000)
Interviews: =COUNTIF(E2:E1000, "Interviewing")
Offers: =COUNTIF(E2:E1000, "Offer")
Response Rate: =COUNTIF(E2:E1000, "Interviewing")/COUNTA(A2:A1000)
Conversion Rate: =COUNTIF(E2:E1000, "Offer")/COUNTA(A2:A1000)
```

## Daily Workflow

1. **Morning:** Check "Follow-up Status" column for any red cells (urgent follow-ups)
2. **Apply:** Add new application to tracker
3. **Follow-up:** Send message to contacts with red "FOLLOW UP NOW" status
4. **Update:** Change status when you hear back
5. **Evening:** Review tracker, plan tomorrow's actions

## Tips for Success

- **Be Consistent:** Log every application immediately
- **Follow Up:** Set follow-up date 1 week after applying
- **Track Everything:** Include salary, contact info, notes
- **Review Weekly:** Check metrics and adjust strategy
- **Celebrate Wins:** Mark offers and interviews clearly

## Metrics to Monitor

| Metric | Target | Formula |
|--------|--------|---------|
| Applications/Month | 35-40 | Count per month |
| Response Rate | 10-15% | Interviews / Total |
| Interview Rate | 5-10% | Interviews / Responses |
| Offer Rate | 20-30% | Offers / Interviews |

## Troubleshooting

**Q: How do I know who to follow up with?**  
A: Look for the red "FOLLOW UP NOW" cells. Those are your priority.

**Q: Should I follow up more than once?**  
A: Yes, follow up 3 times total: Day 7, Day 14, Day 21. After that, move on.

**Q: How do I track salary information?**  
A: Add it when you see it in the job posting. Update if they mention it during interview.

---

**Start tracking today. Data drives better decisions.**

**Created by:** Farhan Ahmed  
**Contact:** dataanalystfarhan@gmail.com
