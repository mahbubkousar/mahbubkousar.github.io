document.addEventListener('DOMContentLoaded', function() {
  
  const categoryToggles = document.querySelectorAll('.category-toggle');

  // Function to initialize toggles on page load
  function initializeToggles() {
    // We now use forEach with an index to identify the first item
    categoryToggles.forEach((toggle, index) => {
      const list = document.getElementById(toggle.getAttribute('aria-controls'));
      if (!list) return; // Skip if the corresponding list isn't found

      // --- START OF CHANGE ---
      // If this is the first category (index is 0), expand it.
      if (index === 0) {
        toggle.classList.remove('collapsed'); // Ensure it's not collapsed
        list.classList.remove('collapsed');   // Ensure the list is not collapsed
        toggle.setAttribute('aria-expanded', 'true'); // Set accessibility state to expanded
      } 
      // Otherwise, collapse all other categories.
      else {
        toggle.classList.add('collapsed');
        list.classList.add('collapsed');
        toggle.setAttribute('aria-expanded', 'false');
      }
      // --- END OF CHANGE ---
    });
  }

  // Set up click listeners for each toggle button
  // This logic remains the same, as it correctly handles individual toggles.
  categoryToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      // Toggle the class on the button itself (for the arrow rotation)
      toggle.classList.toggle('collapsed');
      
      // Find and toggle the class on the corresponding list
      const controlledList = document.getElementById(toggle.getAttribute('aria-controls'));
      if (controlledList) {
        controlledList.classList.toggle('collapsed');
      }
      
      // Update the ARIA attribute for accessibility based on the NEW state
      const isNowExpanded = !toggle.classList.contains('collapsed');
      toggle.setAttribute('aria-expanded', isNowExpanded);
    });
  });

  // Run the initialization
  initializeToggles();

});