const menu = document.querySelector('.nav-colapse');


const toggle = document.querySelector('.toggle');
toggle.addEventListener('click', () => {
    menu.classList.toggle('collapse');
    toggle.classList.toggle('active');
});




// Environment
const loader = document.getElementById("loader-container");
window.addEventListener("load", function () {
    loader.style.display = "none";
});

const nav = document.querySelector('.nav');

window.addEventListener('scroll', function () {
    if (window.scrollY > nav.offsetHeight + 300) {
        nav.classList.add('active');
        menu.classList.add('active');
        // menu.classList.add('active');
    } else {
        nav.classList.remove('active');
        menu.classList.remove('active');
    }
});

// const image = document.querySelector('.image-container');
// const prev = document.querySelector('.prev')
// const next = document.querySelector('.next')

// prev.addEventListener('click', function () {
//     image.style.background.url = './images-env/compost.jpg';
// })

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