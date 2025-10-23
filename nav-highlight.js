// Active navigation link highlighting
(function() {
  const navLinks = document.querySelectorAll('.top-nav a');
  const currentPath = window.location.pathname;
  
  // Remove all active classes first
  navLinks.forEach(link => link.classList.remove('active'));
  
  // Determine which link should be active based on current path
  navLinks.forEach(link => {
    const href = link.getAttribute('href');
    
    // Portfolio page
    if ((href === '#top' || href === 'index.html' || href === '../index.html' || href === '../../index.html') && 
        (currentPath.endsWith('index.html') || currentPath.endsWith('/')) && 
        !currentPath.includes('notebooks') && 
        !currentPath.includes('resources') && 
        !currentPath.includes('quick-notes')) {
      link.classList.add('active');
    }
    
    // Notebook pages
    else if (href.includes('notebooks') && currentPath.includes('notebooks')) {
      link.classList.add('active');
    }
    
    // Resources pages
    else if (href.includes('resources') && currentPath.includes('resources')) {
      link.classList.add('active');
    }
    
    // Quick Notes pages
    else if (href.includes('quick-notes') && currentPath.includes('quick-notes')) {
      link.classList.add('active');
    }
  });
})();
