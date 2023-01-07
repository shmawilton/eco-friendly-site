





// Environment

const nav = document.querySelector('.nav');
window.addEventListener('scroll', function () {
    if (window.scrollY > nav.offsetHeight + 300) {
        nav.classList.add('active');
        // menu.classList.add('active');
    } else {
        nav.classList.remove('active');
        // menu.classList.remove('active');
    }
});

// Select all cards
const cards = document.querySelectorAll('.card');

// Add scroll event listener
window.addEventListener('scroll', function () {
    // Get current scroll position
    let scrollTop = document.documentElement.scrollTop;

    // Loop through cards
    cards.forEach(card => {
        // Get card's offset top
        let cardTop = card.offsetTop;

        // If card is in view
        if (scrollTop > cardTop - window.innerHeight) {
            // Animate card
            card.style.transform = `translateX(0)`;
        } else {
            // If not in view, reset card's position
            card.style.transform = `translateX(${window.innerWidth}px)`;
        }
    });
});


// Farming



// Solar