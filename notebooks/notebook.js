document.addEventListener('DOMContentLoaded', function() {
  
  // --- Feature 1: Category Collapse Functionality ---
  const categoryToggles = document.querySelectorAll('.category-toggle');

  function initializeToggles() {
    categoryToggles.forEach((toggle, index) => {
      const list = document.getElementById(toggle.getAttribute('aria-controls'));
      if (!list) return;

      if (index === 0) {
        toggle.classList.remove('collapsed');
        list.classList.remove('collapsed');
        toggle.setAttribute('aria-expanded', 'true');
      } else {
        toggle.classList.add('collapsed');
        list.classList.add('collapsed');
        toggle.setAttribute('aria-expanded', 'false');
      }
    });
  }

  categoryToggles.forEach(toggle => {
    toggle.addEventListener('click', () => {
      toggle.classList.toggle('collapsed');
      const controlledList = document.getElementById(toggle.getAttribute('aria-controls'));
      if (controlledList) {
        controlledList.classList.toggle('collapsed');
      }
      const isNowExpanded = !toggle.classList.contains('collapsed');
      toggle.setAttribute('aria-expanded', isNowExpanded);
    });
  });

  initializeToggles();

  // --- START: NEW Citation System ---
  function processCitations() {
    const referenceList = document.querySelector('.reference-list');
    const citationLinks = document.querySelectorAll('a.cite');

    if (!referenceList || citationLinks.length === 0) {
      return; // Don't run if there are no references or citations
    }

    // 1. Create a map of reference IDs to their number
    const referenceMap = new Map();
    const references = referenceList.querySelectorAll('li');
    references.forEach((ref, index) => {
      if (ref.id) {
        referenceMap.set(ref.id, index + 1);
      }
    });

    // 2. Process each citation link in the text
    citationLinks.forEach(link => {
      const key = link.dataset.key;
      if (referenceMap.has(key)) {
        const number = referenceMap.get(key);
        
        // a. Set the citation text and link
        link.textContent = `[${number}]`;
        link.href = `#${key}`;
        
        // b. Add a unique ID to the citation for the back-link
        link.id = `cite-back-${key}-${Math.random().toString(36).substr(2, 5)}`;
      }
    });
    
    // 3. Add back-links to the reference list items
    references.forEach(ref => {
      const key = ref.id;
      // Find all citations that point to this reference
      const citationsForKey = document.querySelectorAll(`a.cite[data-key="${key}"]`);
      if (citationsForKey.length > 0) {
        const backLinksContainer = document.createElement('span');
        backLinksContainer.className = 'back-links';
        backLinksContainer.innerHTML = ' ↩ ';

        citationsForKey.forEach((cite, index) => {
          const backLink = document.createElement('a');
          backLink.href = `#${cite.id}`;
          backLink.textContent = `${index + 1}`;
          backLinksContainer.appendChild(backLink);
        });
        
        ref.appendChild(backLinksContainer);
      }
    });
  }

  processCitations();
  // --- END: NEW Citation System ---
});