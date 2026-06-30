---
layout: legal
title: "Privacy Policy"
badge: "Trust & Privacy"
effective_date: "June 30, 2026"
last_updated: "June 30, 2026"
description: "Privacy Policy for Conflo CRM. Learn how we secure your data with zero-knowledge, local-only processing."
permalink: /privacy/
---
<div class="legal-card highlight">
    <h3>Our Privacy Promise</h3>
    <p>Conflo CRM is built with a <strong>Zero-Knowledge architecture</strong>. We do not collect, view, or store your personal chats, contacts, or messages. All your WhatsApp CRM data remains entirely on your own local device.</p>
</div>

<section class="legal-section">
    <h2>1. Zero-Knowledge Local Storage</h2>
    <p>Unlike cloud CRMs that upload your lead databases to central servers, Conflo runs entirely on your local machine. All CRM operations—including contact tags, deal values, notes, and quick reply templates—are stored locally using your browser's secure <code>chrome.storage.local</code> database and <code>IndexedDB</code>.</p>
    <ul>
        <li>We have no backend database storing your contact list or messages.</li>
        <li>If you uninstall the extension or clear your browser data, your local CRM configuration will be permanently deleted. We recommend exporting your leads to Excel regularly.</li>
    </ul>
</section>

<section class="legal-section">
    <h2>2. Chrome Web Store Compliance</h2>
    <p>Conflo's use of information received from Google APIs adheres to the <strong>Chrome Web Store User Data Policy</strong>, including the "Limited Use" requirements:</p>
    <ul>
        <li><strong>Specific Purpose:</strong> We use Chrome extension APIs (such as storage, sidePanel, and scripting) strictly to provide and improve local CRM functionalities.</li>
        <li><strong>No Sale of Data:</strong> We never sell, transfer, or disclose user data to data brokers, advertising networks, or third-party entities.</li>
        <li><strong>Ad-Free:</strong> We do not use your data or browser history to serve targeted advertisements.</li>
    </ul>
</section>

<section class="legal-section">
    <h2>3. Data We Do Process</h2>
    <p>To run our services, we process a minimal amount of configuration data, which is completely isolated from your WhatsApp chats:</p>
    <ul>
        <li><strong>License Validation:</strong> When you upgrade to a Premium plan, we process your license key and a hashed identifier to verify active subscription status.</li>
        <li><strong>Payment Information:</strong> All billing, invoicing, and tax requirements are handled securely by our external payment gateway. We never see or store your credit card details.</li>
        <li><strong>Anonymous Performance Metrics:</strong> We collect aggregated, anonymous telemetry (such as feature usage and error rates) to fix bugs and improve performance. This telemetry contains no PII or contact data.</li>
    </ul>
</section>

<section class="legal-section">
    <h2>4. Extension Permissions</h2>
    <p>To function seamlessly inside WhatsApp Web, the extension requests the following browser permissions:</p>
    <ul>
        <li><code>storage</code>: To save your contact profiles, templates, and CRM configurations locally on your hard drive.</li>
        <li><code>scripting</code>: Used strictly to render the Conflo sidebar and custom buttons inside the WhatsApp Web tab.</li>
        <li><code>host_permissions</code>: Restricted exclusively to <code>web.whatsapp.com</code> to run our CRM overlay natively.</li>
    </ul>
</section>

<section class="legal-section">
    <h2>5. Your Rights and Erasure</h2>
    <p>Because your data is stored locally, you have absolute ownership over it. You can inspect, modify, or erase all CRM data at any time by:</p>
    <ol>
        <li>Accessing the "Export" dashboard inside the extension to download all data.</li>
        <li>Uninstalling the Conflo Extension from your Google Chrome browser settings, which instantly purges all local storage.</li>
    </ol>
</section>

<section class="legal-section">
    <h2>6. Contact and Inquiries</h2>
    <p>If you have any questions about this Privacy Policy or how Conflo handles local data, please reach out to our privacy team at <a href="mailto:support@conflo.app">support@conflo.app</a>.</p>
</section>
