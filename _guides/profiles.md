---
layout: guide
title: "Custom Contact Fields"
breadcrumb_title: "Custom Contact Fields"
nav_title: "Custom Fields"
order: 4
icon: "🏷️"
topics:
  - "Setting Up Contact Fields"
  - "Managing Notes & Deal Stages"
  - "Local Cache Storage Backups"
description: "Learn how to configure custom fields, deal stages, and lead notes in Conflo CRM."
keywords: "crm profiles fields metadata custom notes deals segment value save emails leads"
subtitle: "Learn how to organize WhatsApp conversations using custom client profiles, track deal sizes, assign stages, and keep notes."
badge: "CRM Profiles Guide"
toc:
  - id: "profile"
    title: "1. CRM Profile Cards"
  - id: "schema"
    title: "2. Lead Stages & Values"
  - id: "storage"
    title: "3. Local Backups & Cache"
sidebar_helper:
  title: "Security Alert"
  text: "All custom profile values are stored in your local browser sandbox. Nobody else can see or access them."
---

## 1. Inside the CRM Profile Cards {: #profile }

When you select a conversation on WhatsApp Web, Conflo's sidebar displays a custom profile card dedicated to that specific contact.

### Step 1: Open Profile Tab
Click the **Profile** tab inside the injected Conflo CRM sidebar interface.

### Step 2: View Active Contact
Select any contact chat. The sidebar immediately loads the active contact's local profile fields, allowing you to view notes or update fields on the fly.

---

## 2. Managing Lead Stages & Deal Values {: #schema }

Track your pipeline phases and potential revenue directly inside the WhatsApp window.

### Step 3: Assign Lead Stage
Choose a pipeline category: **New Lead**, **Negotiation**, **Won**, or **Lost**. Filters can then segment your contacts by stage in the Home panel.

### Step 4: Input Email & Value
Enter the client's business email and deal size (value). These columns are automatically indexed and will export to spreadsheets dynamically.

---

## 3. Local Storage Cache & Backups {: #storage }

Because Conflo operates locally for maximum privacy, it stores all database attributes in the browser's local sandbox memory.

### Step 5: Data Auto-Saving
There is no manual "Save" button for notes or values. The extension automatically records keystrokes to your local cache in real-time, preventing lost client notes.

### Step 6: Inspect Cache & Clear
To review your local storage limit or clear cached data entirely, navigate to the Settings tab inside the sidebar. Click **Clear Cache** to permanently delete all profile notes from the browser memory.
