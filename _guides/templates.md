---
layout: guide
title: "Quick Template Replies"
breadcrumb_title: "Quick Reply Templates"
nav_title: "Templates Guide"
order: 3
icon: "⚡"
topics:
  - "Creating Template Collections"
  - "Dynamic Tagging & Parameters"
  - "Dispatching Quick Replies"
description: "Learn how to configure quick reply message templates inside Conflo CRM to speed up WhatsApp client communication."
keywords: "templates quick reply text message keyword responses templates workflow speed"
subtitle: "Learn how to configure, tag, and send pre-saved text responses directly to leads inside WhatsApp Web to speed up workflows."
badge: "Templates Guide"
toc:
  - id: "creation"
    title: "1. Template Setup"
  - id: "variables"
    title: "2. Dynamic Placeholders"
  - id: "sending"
    title: "3. Dispatching Replies"
sidebar_helper:
  title: "Pro Tip"
  text: "Organize templates with keyboard shortcuts like <code>/pricing</code> or <code>/hello</code> to find them instantly during live chats."
---

## 1. Creating Your Templates {: #creation }

Save drafts of common responses—such as product intros, pricing sheets, or follow-ups—so you never have to retype them.

### Step 1: Open Quick Tab
Click the **Quick** tab inside the injected Conflo sidebar overlay on WhatsApp Web.

### Step 2: Create a Template Card
Click the **+ Add Template** button. Enter a trigger keyword shortcut (e.g. `/intro`) and write your message body in the textbox.

---

## 2. Dynamic Placeholder Tags {: #variables }

Personalize templates automatically by utilizing variables matching the active contact's metadata.

**Available Tags:**

*   `{% raw %}{{name}}{% endraw %}`: Replaced by the contact's WhatsApp display name.
*   `{% raw %}{{email}}{% endraw %}`: Replaced by the email address saved on their CRM profile.
*   `{% raw %}{{value}}{% endraw %}`: Replaced by the deal value stored on their CRM profile.

*Example: "Hi {% raw %}{{name}}{% endraw %}, here is the pricing quote we discussed..."*

---

## 3. Dispatching Quick Replies {: #sending }

Dispatch reply templates with built-in preview tools to prevent accidental message triggers.

### Step 3: Select the Chat Session
Click on any chat session in your WhatsApp contact list. The Conflo sidebar will load the active contact details.

### Step 4: Preview and Send
Locate your template inside the **Quick** tab list. Hover over the template card to review the compiled placeholder text. Click **Send** to drop it directly into the text box and dispatch instantly.
