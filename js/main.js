function toggleContactMe(action) {
    var pane = document.getElementById('contact-me-pane');
    var overlay = document.getElementById('overlay');
    if (action === 'show') {
        pane.classList.remove('contact-me-inactive');
        pane.classList.add('contact-me-active');
        overlay.classList.remove('hidden');
    } else {
        pane.classList.remove('contact-me-active');
        pane.classList.add('contact-me-inactive');
        overlay.classList.add('hidden');
    }
}

function openMobileNav() {
    document.getElementById('mobile-nav').classList.remove('offscreen-nav-hidden');
}

function closeMobileNav() {
    document.getElementById('mobile-nav').classList.add('offscreen-nav-hidden');
}

function scrollToSection(id) {
    closeMobileNav();
    var el = document.getElementById(id);
    if (el) {
        el.scrollIntoView({ behavior: 'smooth' });
    }
}

function openContact() {
    closeMobileNav();
    setTimeout(function() {
        toggleContactMe('show');
    }, 300);
}

function checkScrollPosition() {
    var nav = document.getElementById('nav-on-scroll');
    window.addEventListener('scroll', function() {
        if (window.scrollY > 500) {
            nav.classList.remove('nav-top-hidden');
            nav.classList.add('nav-top-visible');
        } else {
            nav.classList.remove('nav-top-visible');
            nav.classList.add('nav-top-hidden');
        }
    });
}
