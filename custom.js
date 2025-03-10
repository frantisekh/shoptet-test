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

    var benefitsSection = document.querySelector('.container--bannersBenefit');
    var footer = document.querySelector('#footer');
    if (benefitsSection && footer) {
        footer.parentNode.insertBefore(benefitsSection, footer);
    }

    var blogWrapper = document.querySelector('.homepage-blog-wrapper');
    var indexContentWrapper = document.querySelector('.index-content-wrapper');
    if (blogWrapper && benefitsSection && indexContentWrapper) {
        // Nejprve přesuneme blogWrapper mimo indexContentWrapper
        indexContentWrapper.parentNode.insertBefore(blogWrapper, indexContentWrapper);
        // Poté přesuneme blogWrapper před benefitsSection
        benefitsSection.parentNode.insertBefore(blogWrapper, benefitsSection);

        // Vložíme nový div.container jako prvního potomka do blogWrapper
        var newContainer = document.createElement('div');
        newContainer.className = 'container';
        while (blogWrapper.firstChild) {
            newContainer.appendChild(blogWrapper.firstChild);
        }
        blogWrapper.appendChild(newContainer);

        // Změníme nadpis "Nové články" na "Přečtěte si z našeho blogu"
        var blogTitle = blogWrapper.querySelector('.homepage-blog-wrapper .homepage-group-title');
        if (blogTitle) {
            blogTitle.textContent = 'Přečtěte si z našeho blogu';
        }

        // Obalíme všechny .news-item do dvou divů .news-wrapper > .container
        var newsItems = blogWrapper.querySelectorAll('.news-item');
        if (newsItems.length > 0) {
            var newsWrapper = document.createElement('div');
            newsWrapper.className = 'container news-wrapper-outer';
            var container = document.createElement('div');
            container.className = 'news-wrapper';
            newsItems.forEach(function(item) {
                container.appendChild(item);
            });
            newsWrapper.appendChild(container);
            blogWrapper.appendChild(newsWrapper);
        }

        // Přidáme HTML tlačítko s odkazem
        var button = document.createElement('a');
        button.href = 'https://706264.myshoptet.com/nase-novinky/';
        button.className = 'btn btn-primary';
        button.textContent = 'Zobrazit více';
        newsWrapper.appendChild(button);

        // Přidáme ikonu a text před všechny elementy .description
        var descriptions = document.querySelectorAll('.description');
        descriptions.forEach(function(description) {
            var icon = document.createElement('img');
            icon.src = 'https://706264.myshoptet.com/user/documents/upload/user.svg';
            icon.alt = 'User Icon';
            icon.style.marginRight = '5px';

            var wrapper = document.createElement('div');
            wrapper.className = 'author-info';
            wrapper.appendChild(icon);

            // Vložíme HTML pomocí innerHTML
            wrapper.innerHTML += '<span>Lukáš</span> <span>I</span> <span>0 Comments</span>';

            description.parentNode.insertBefore(wrapper, description);
        });

        // Přidáme datum před všechny nadpisy článků
        var articleTitles = document.querySelectorAll('.title');
        articleTitles.forEach(function(title) {
            var dateNode = document.createElement('div');
            dateNode.className = 'article-date';
            dateNode.textContent = '20.12.2021';
            title.parentNode.insertBefore(dateNode, title);
        });
    }
});
