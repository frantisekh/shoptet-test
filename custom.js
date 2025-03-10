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

        // Nahradíme obsah tlačítka "do košíku" ikonou
        var addToCartButtons = document.querySelectorAll('.add-to-cart-button');
        addToCartButtons.forEach(function(button) {
            button.innerHTML = '<img src="https://706264.myshoptet.com/user/documents/upload/shopping-cart.svg" alt="Shopping Cart Icon">';
        });

        // Najdeme všechny elementy s barvou #009901 a nahradíme ji za #63DA46
        var elementsWithColor = document.querySelectorAll('[style*="color:#009901"]');
        elementsWithColor.forEach(function(element) {
            element.style.color = '#63DA46';
        });
        // Najdeme všechny elementy s barvou #cb0000 a nahradíme ji za #F24D4D
        var elementsWithColor = document.querySelectorAll('[style*="color:#cb0000"]');
        elementsWithColor.forEach(function(element) {
            element.style.color = '#F24D4D;';
        });
    }

    var availabilityDivs = document.querySelectorAll('.availability span');
    availabilityDivs.forEach(function(span) {
        if (span.textContent.trim() === 'Na dotaz') {
            span.style.color = '#979797';
        }
    });

    // Zobrazíme pouze 4 produkty
    var products = document.querySelectorAll('.products-block>div .p');
    products.forEach(function(product, index) {
        if (index >= 4) {
            product.style.display = 'none';
        }
    });

    // Přidáme tlačítko za .shp-tabs-wrapper.homepage-tabs-wrapper
    var tabsWrapper = document.querySelector('.shp-tabs-wrapper.homepage-tabs-wrapper');
    if (tabsWrapper) {
        var wrapperDiv = document.createElement('div');
        wrapperDiv.className = 'text-center show-more-container';

        var newButton = document.createElement('a');
        newButton.href = '#';
        newButton.className = 'btn btn-secondary';
        newButton.textContent = 'Zobrazit více produktů';

        newButton.addEventListener('click', function(event) {
            event.preventDefault();
            products.forEach(function(product) {
                product.style.display = 'block';
            });
            newButton.style.display = 'none'; // Skryjeme tlačítko po kliknutí
        });

        wrapperDiv.appendChild(newButton);
        tabsWrapper.parentNode.insertBefore(wrapperDiv, tabsWrapper.nextSibling);
    }


    // Přidáme logo s odkazem před .row.custom-footer.elements-2
    var footerRow = document.querySelector('.row.custom-footer.elements-2');
    if (footerRow) {
        var link = document.createElement('a');
        link.href = 'https://706264.myshoptet.com/';
        link.className = 'footer-logo'; // Přidáme třídu footer-logo

        var img = document.createElement('img');
        img.src = 'https://cdn.myshoptet.com/usr/706264.myshoptet.com/user/logos/logo.png';
        img.alt = 'Můj e-shop';
        img.loading = 'eager';

        link.appendChild(img);
        footerRow.parentNode.insertBefore(link, footerRow);
    }

    // Změníme textaci a logo v patičce
    var signature = document.getElementById('signature');
    if (signature) {
        // Vytvoříme nový odkaz pro text "Vytvořil Shoptet"
        var textLink = document.createElement('a');
        textLink.href = 'https://www.shoptet.cz/?utm_source=footer&utm_medium=link&utm_campaign=create_by_shoptet';
        textLink.className = 'title';
        textLink.target = '_blank';
        textLink.textContent = 'Vytvořil Shoptet |';

        // Vytvoříme nový odkaz s logem a textem "MirandaMedia Group, s.r.o."
        var link = document.createElement('a');
        link.href = 'https://www.mirandamedia.cz/';
        link.className = 'image';
        link.target = '_blank';

        var img = document.createElement('img');
        img.src = 'https://706264.myshoptet.com/user/documents/upload/8e9fdce4362bf880d782e6435ebb7be6.png';
        img.width = 17;
        img.height = 17;
        img.alt = 'MirandaMedia Group, s.r.o.';
        img.className = 'miranda-logo';
        img.loading = 'eager';

        link.appendChild(img);

        // Přidáme text "MirandaMedia Group, s.r.o." do stejného odkazu
        var companyText = document.createTextNode(' MirandaMedia Group, s.r.o.');
        link.appendChild(companyText);

        // Vyčistíme původní obsah a přidáme nové prvky
        signature.innerHTML = '';
        signature.style.display = 'inline-block';
        signature.style.visibility = 'visible';
        signature.appendChild(textLink);
        signature.appendChild(link);
    }

    // bulletky carouselu
    var carouselInner = document.querySelector('.carousel-inner');
    if (carouselInner) {
        var items = carouselInner.querySelectorAll('.item');
        var carouselIndicators = document.createElement('ol');
        carouselIndicators.className = 'carousel-indicators';

        items.forEach(function(item, index) {
            var indicator = document.createElement('li');
            indicator.setAttribute('data-target', '#carousel');
            indicator.setAttribute('data-slide-to', index);
            if (item.classList.contains('active')) {
                indicator.className = 'active';
            }

            indicator.addEventListener('click', function() {
                // Použijeme Shoptet implementaci Bootstrap carousel
                $('#carousel').carousel(index);
            });

            carouselIndicators.appendChild(indicator);
        });

        var carousel = document.querySelector('#carousel');
        carousel.appendChild(carouselIndicators);
        
        // Přidáme naznačení skrolování
        var scrollIndicator = document.createElement('div');
        scrollIndicator.className = 'scroll-indicator';
        
        // Vytvoříme vertikální text "Skroluj"
        var scrollText = document.createElement('div');
        scrollText.className = 'scroll-text';
        scrollText.textContent = 'Skroluj';
        
        // Přidáme čáru pod textem
        var scrollLine = document.createElement('div');
        scrollLine.className = 'scroll-line';
        
        // Složíme prvky dohromady
        scrollIndicator.appendChild(scrollText);
        scrollIndicator.appendChild(scrollLine);
        
        // Přidáme do carouselu
        carousel.appendChild(scrollIndicator);
    }
});
