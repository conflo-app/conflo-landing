---
layout: guide
title: "Exporting Contacts & Group Members"
breadcrumb_title: "Exporting Contacts & Groups"
nav_title: "Export Guide"
order: 2
icon: "📤"
topics:
  - "Selecting Contacts & Groups"
  - "Configuring Columns & Formatting"
  - "Excel, CSV, and vCard Workflows"
description: "Learn how to export WhatsApp contacts and group participants to Excel and CSV with Conflo CRM."
keywords: "export xlsx csv vcard contact group segment whatsapp download raw leads"
subtitle: "A complete guide to filtering leads, choosing columns, extracting WhatsApp group members, and downloading datasets safely to your computer."
badge: "Exporter Guide"
toc:
  - id: "segments"
    title: "1. Filter List Segments"
  - id: "columns"
    title: "2. Configure Exporter Fields"
  - id: "formats"
    title: "3. File Format Selection"
  - id: "groups"
    title: "4. Group Member Exports"
sidebar_helper:
  title: "Backup Reminder"
  text: "Since Conflo is 100% offline, local CRM tags are not synced to the cloud. Export data regularly to avoid losing lists."
---

## 1. Filtering Contact Segments {: #segments }

Conflo allows you to target specific types of contacts so you don't end up with massive, unorganized databases.

### Step 1: Open Export Panel
Click on the **Export** tab inside the Conflo sidebar or open the floating exporter window from the top extension control header.

### Step 2: Choose Segment Filter
Select your data subset. You can filter by: **Unsaved Chats** (cold outreach leads), **All Chat Sessions**, **WhatsApp Groups**, or official custom labels.

---

## 2. Configuring Exported Columns {: #columns }

Customize the data structure of your final spreadsheet. Toggle attributes on or off prior to packaging.

### Step 3: Toggle Attributes
Select which headers to output: Phone Number, WA Display Name, Country Code, ISO2 Code, Group joined date, and custom CRM fields (Email, Value, Stage, and Notes).

---

## 3. File Format Selection {: #formats }

Conflo compiles datasets locally using browser-based scripts. Download files in four popular extensions:

*   **Excel (.xlsx):** Best for general business storage and marketing reviews.
*   **CSV (.csv):** Preferred for importing directly into third-party CRM tools, Google Sheets, or email campaigns.
*   **JSON (.json):** Structured nested format for developers or custom scripting.
*   **vCard (.vcf):** Used to bulk-import contacts directly into your mobile phone (iPhone or Android).

---

## 4. Exporting WhatsApp Group Members {: #groups }

Perfect for community managers. Extract the full roster of group participants instantly.

### Step 4: Select the Target Group
Navigate to the specific WhatsApp Group in your chat list. Conflo's sidebar will automatically adapt to the group metadata.

### Step 5: Trigger Bulk Extraction
Click **Export Group Members**. Conflo will parse the participant list from the DOM securely and download the spreadsheet file instantly.
