const loadMoreButton = document.querySelector('.load-more-roundel');
const hiddenCards = document.getElementById('hidden-cards');

loadMoreButton.addEventListener('click', () => {
  hiddenCards.style.display = 'block'; // Show the hidden cards
  loadMoreButton.style.display = 'none'; // Optionally hide the button
  // Add code here to fetch and dynamically load more cards
});
