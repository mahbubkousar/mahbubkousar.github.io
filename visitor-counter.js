/**
 * Minimal Visitor Counter for Portfolio
 * Tracks overall site visitors and individual page visitors using Firebase
 */

class VisitorCounter {
  constructor() {
    this.database = firebase.database();
    this.hasBeenCounted = false;
  }

  /**
   * Initialize the visitor counter
   * @param {string} pageId - Unique identifier for the page (e.g., 'home', 'notebook-post-00001')
   */
  async init(pageId) {
    try {
      // Check if this visitor has already been counted in this session
      const sessionKey = `visited_${pageId}`;
      const alreadyCounted = sessionStorage.getItem(sessionKey);

      if (!alreadyCounted) {
        // Increment counters
        await Promise.all([
          this.incrementCounter('overall'),
          this.incrementCounter(pageId)
        ]);

        // Mark as counted in this session
        sessionStorage.setItem(sessionKey, 'true');
      }

      // Listen for counter updates and display them
      this.displayCounters(pageId);
    } catch (error) {
      console.error('Error initializing visitor counter:', error);
      this.displayError();
    }
  }

  /**
   * Increment a counter in Firebase
   * @param {string} counterId - The counter to increment
   */
  async incrementCounter(counterId) {
    const counterRef = this.database.ref(`visitors/${counterId}`);

    return counterRef.transaction((current) => {
      return (current || 0) + 1;
    });
  }

  /**
   * Display the counters on the page
   * @param {string} pageId - Current page identifier
   */
  displayCounters(pageId) {
    const overallRef = this.database.ref('visitors/overall');
    const pageRef = this.database.ref(`visitors/${pageId}`);

    // Listen for overall visitor count
    overallRef.on('value', (snapshot) => {
      const count = snapshot.val() || 0;
      const element = document.getElementById('overall-visitor-count');
      if (element) {
        element.textContent = this.formatNumber(count);
      }
    });

    // Listen for page visitor count
    pageRef.on('value', (snapshot) => {
      const count = snapshot.val() || 0;
      const element = document.getElementById('page-visitor-count');
      if (element) {
        element.textContent = this.formatNumber(count);
      }
    });
  }

  /**
   * Format number with comma separators
   * @param {number} num - Number to format
   */
  formatNumber(num) {
    return num.toLocaleString('en-US');
  }

  /**
   * Display error state
   */
  displayError() {
    const container = document.getElementById('visitor-counter-container');
    if (container) {
      container.innerHTML = '<p style="opacity: 0.5; font-size: 0.8em;">Visitor counter temporarily unavailable</p>';
    }
  }
}

// Initialize counter when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  // Get page ID from data attribute or generate from URL
  const counterElement = document.getElementById('visitor-counter-container');

  if (counterElement) {
    const pageId = counterElement.dataset.pageId ||
                   window.location.pathname.replace(/[^a-zA-Z0-9]/g, '_') ||
                   'home';

    const counter = new VisitorCounter();
    counter.init(pageId);
  }
});
