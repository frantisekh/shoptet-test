document.addEventListener('DOMContentLoaded', function() {
    var footerNewsletter = document.querySelector('.footer-newsletter');
    if (footerNewsletter) {
        var container = document.createElement('div');
        container.className = 'custom-footer-container';
        footerNewsletter.parentNode.insertBefore(container, footerNewsletter);
        container.appendChild(footerNewsletter);
    }
    
    var newsletterHeader = document.querySelector('.newsletter-header .topic span');
    if (newsletterHeader) {
        newsletterHeader.textContent = 'Zůstaňte s námi v kontaktu';
    }

    var emailInput = document.querySelector('.footer-newsletter input[type="email"]');
    if (emailInput) {
        emailInput.placeholder = '@Zadej svuj email';
    }

    var submitButton = document.querySelector('.footer-newsletter button[type="submit"]');
    if (submitButton) {
        submitButton.textContent = 'Odeslat';
    }
});
