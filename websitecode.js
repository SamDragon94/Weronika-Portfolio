// Filtering functionality
const filterButtons = document.querySelectorAll('.filter-btn');
const masonryItems = document.querySelectorAll('.item');

filterButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const category = btn.dataset.category;

    masonryItems.forEach(item => {
      if (category === 'all' || item.dataset.category === category) {
        item.style.display = 'block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

// Lightbox effect (optional, if needed)
