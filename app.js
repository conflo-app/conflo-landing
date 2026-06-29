/* ==========================================================================
   Conflo CRM Landing Page Scripts
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {
    // 1. Interactive Mockup Tab Switcher
    const tabButtons = document.querySelectorAll('.mock-tab-btn');
    const tabPanes = document.querySelectorAll('.tab-pane');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const targetTab = button.getAttribute('data-tab');

            // Set active state on button
            tabButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // Set active state on tab pane
            tabPanes.forEach(pane => {
                pane.classList.remove('active');
                if (pane.id === `tab-${targetTab}`) {
                    pane.classList.add('active');
                }
            });
        });
    });

    // 2. FAQ Accordion Interactions
    const faqItems = document.querySelectorAll('.faq-item');

    faqItems.forEach(item => {
        const questionButton = item.querySelector('.faq-question');
        questionButton.addEventListener('click', () => {
            const isActive = item.classList.contains('active');

            // Close all items
            faqItems.forEach(faq => faq.classList.remove('active'));

            // Toggle clicked item
            if (!isActive) {
                item.classList.add('active');
            }
        });
    });
});
