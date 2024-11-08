// Select all card elements
const cards = document.querySelectorAll('.card');

// Add a fade-in effect with staggered delay
cards.forEach((card, index) => {
    card.style.opacity = '0';  // Hide initially
    card.style.transform = 'translateY(20px)';  // Small offset for slide effect

    setTimeout(() => {
        card.style.opacity = '1';
        card.style.transform = 'translateY(0)';
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    }, index * 150);  // Delay increases for each card
});

