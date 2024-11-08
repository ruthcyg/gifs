// Function to toggle content visibility inside a card
function toggleCard(element) {
    const content = element.querySelector('.content');
    content.style.display = content.style.display === 'block' ? 'none' : 'block';
}
