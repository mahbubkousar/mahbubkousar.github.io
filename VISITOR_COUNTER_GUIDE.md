# Visitor Counter - Complete Guide

This guide covers everything you need to add a visitor counter to any page in your portfolio.

## Table of Contents
1. [Quick Start (3 Steps)](#quick-start-3-steps)
2. [HTML Snippets & Examples](#html-snippets--examples)
3. [Page ID Naming Conventions](#page-id-naming-conventions)
4. [Path Reference by Location](#path-reference-by-location)
5. [Complete Examples](#complete-examples)
6. [Customization](#customization)
7. [Troubleshooting](#troubleshooting)

---

## Quick Start (3 Steps)

### Step 1: Configure Firebase (One-time Setup)

1. Follow the complete guide in `FIREBASE_SETUP.md`
2. Replace placeholder values in `firebase-config.js` with your Firebase project credentials
3. Set up Firebase Realtime Database security rules

### Step 2: Add 3 Code Blocks to Your HTML

#### A. Add CSS Link in `<head>`
```html
<link rel="stylesheet" href="path/to/visitor-counter.css" />
```

#### B. Add Counter HTML

**For regular pages** (before closing `</article>` or `</footer>`):
```html
<!-- Visitor Counter -->
<div id="visitor-counter-container" class="visitor-counter-container" data-page-id="YOUR_UNIQUE_PAGE_ID">
  <div class="visitor-stats">
    <div class="visitor-stat">
      <span class="visitor-stat-label">Total visits:</span>
      <span class="visitor-stat-count" id="overall-visitor-count"></span>
    </div>
    <span class="visitor-stat-separator">§</span>
    <div class="visitor-stat">
      <span class="visitor-stat-label">Page visits:</span>
      <span class="visitor-stat-count" id="page-visitor-count"></span>
    </div>
  </div>
</div>
```

**For notebook posts** (after closing `</aside>` references sidebar, but before closing `.note-container`):
```html
<!-- Visitor Counter -->
<div id="visitor-counter-container" class="visitor-counter-container" data-page-id="YOUR_UNIQUE_PAGE_ID">
  <div class="visitor-stats">
    <div class="visitor-stat">
      <span class="visitor-stat-label">Total visits:</span>
      <span class="visitor-stat-count" id="overall-visitor-count"></span>
    </div>
    <span class="visitor-stat-separator">§</span>
    <div class="visitor-stat">
      <span class="visitor-stat-label">Page visits:</span>
      <span class="visitor-stat-count" id="page-visitor-count"></span>
    </div>
  </div>
</div>
```

**Important**: Replace `YOUR_UNIQUE_PAGE_ID` with a descriptive identifier (see [naming conventions](#page-id-naming-conventions))

#### C. Add Scripts (before closing `</body>`)
```html
<!-- Firebase SDK -->
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
<script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js"></script>

<!-- Firebase Configuration & Visitor Counter -->
<script src="path/to/firebase-config.js"></script>
<script src="path/to/visitor-counter.js"></script>
```

### Step 3: Adjust Paths Based on File Location

See [Path Reference by Location](#path-reference-by-location) below for correct paths.

---

## HTML Snippets & Examples

### Files You Need

✅ **Firebase Configuration**: `firebase-config.js` (root directory)
✅ **Visitor Counter Logic**: `visitor-counter.js` (root directory)
✅ **Minimal Styling**: `visitor-counter.css` (root directory)
✅ **Setup Guide**: `FIREBASE_SETUP.md`

### What the Counter Does

1. **Session-based tracking**: Each unique browser session counts as one visit
2. **Two counters**:
   - Overall site visits (across all pages)
   - Individual page visits
3. **Real-time updates**: Numbers update automatically via Firebase
4. **No duplicates**: Same visitor won't be counted twice in one session

---

## Page ID Naming Conventions

Use descriptive, unique IDs with underscores. Follow these patterns:

### Existing Page IDs (for reference)

| Page Location | Page ID |
|--------------|---------|
| `index.html` (root) | `home` |
| `notebooks/index.html` | `notebook_index` |
| `notebooks/posts/demo-note.html` | `notebook_demo_note` |
| `notebooks/posts/post_00001/index.html` | `notebook_post_00001` |
| `quick-notes/index.html` | `quick_notes_index` |
| `resources/index.html` | `resources_index` |
| `resources/pages/code-binary-search.html` | `resource_code_binary_search` |
| `resources/pages/file-iris-dataset.html` | `resource_file_iris_dataset` |
| `resources/pages/note-big-o-cheatsheet.html` | `resource_note_big_o` |
| `resources/pages/link-python-docs.html` | `resource_link_python_docs` |
| `resources/pages/tool-vscode-settings.html` | `resource_tool_vscode` |

### Naming Pattern for New Pages

- **Main sections**: `section_index` (e.g., `blog_index`, `projects_index`)
- **Notebook posts**: `notebook_post_XXXXX` (e.g., `notebook_post_00002`)
- **Resource pages**: `resource_type_name` (e.g., `resource_code_quicksort`, `resource_note_algorithms`)
- **Quick notes**: `quick_note_XXXXX` (e.g., `quick_note_00001`)

---

## Path Reference by Location

### Root Level Pages (`index.html`)
```html
<!-- CSS -->
<link rel="stylesheet" href="visitor-counter.css" />

<!-- Scripts -->
<script src="firebase-config.js"></script>
<script src="visitor-counter.js"></script>
```

### Notebooks Index (`notebooks/index.html`)
```html
<!-- CSS -->
<link rel="stylesheet" href="../visitor-counter.css" />

<!-- Scripts -->
<script src="../firebase-config.js"></script>
<script src="../visitor-counter.js"></script>
```

### Notebook Posts (`notebooks/posts/post_XXXXX/index.html`)
```html
<!-- CSS -->
<link rel="stylesheet" href="../../../visitor-counter.css" />

<!-- Scripts -->
<script src="../../../firebase-config.js"></script>
<script src="../../../visitor-counter.js"></script>
```

### Resources Index (`resources/index.html`)
```html
<!-- CSS -->
<link rel="stylesheet" href="../visitor-counter.css" />

<!-- Scripts -->
<script src="../firebase-config.js"></script>
<script src="../visitor-counter.js"></script>
```

### Resource Pages (`resources/pages/xxx.html`)
```html
<!-- CSS -->
<link rel="stylesheet" href="../../visitor-counter.css" />

<!-- Scripts -->
<script src="../../firebase-config.js"></script>
<script src="../../visitor-counter.js"></script>
```

### Quick Notes Index (`quick-notes/index.html`)
```html
<!-- CSS -->
<link rel="stylesheet" href="../visitor-counter.css" />

<!-- Scripts -->
<script src="../firebase-config.js"></script>
<script src="../visitor-counter.js"></script>
```

---

## Complete Examples

### Example 1: New Notebook Post (`notebooks/posts/post_00002/index.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Mathematical Analysis - Mahbub Kousar</title>
  <link rel="stylesheet" href="../../../style.css" />
  <link rel="stylesheet" href="../notebook.css" />
  <link rel="stylesheet" href="../../../visitor-counter.css" />
</head>

<body>
  <div class="note-container">
    <!-- Main Content Column -->
    <article class="note-content">
      <h1>Mathematical Analysis</h1>
      <p>Your content here...</p>

      <a href="../../index.html" class="back-link">Back to Notebook Index</a>
    </article>

    <!-- References Sidebar -->
    <aside class="references-sidebar">
      <h3>References</h3>
      <ol class="ref-list">
        <li class="ref-item" id="ref1">
          <span class="ref-id">[1]</span>
          <span class="ref-content">Reference content here</span>
        </li>
      </ol>
    </aside>

    <!-- Visitor Counter (placed after references sidebar) -->
    <div id="visitor-counter-container" class="visitor-counter-container" data-page-id="notebook_post_00002">
      <div class="visitor-stats">
        <div class="visitor-stat">
          <span class="visitor-stat-label">Total visits:</span>
          <span class="visitor-stat-count" id="overall-visitor-count"></span>
        </div>
        <span class="visitor-stat-separator">§</span>
        <div class="visitor-stat">
          <span class="visitor-stat-label">Page visits:</span>
          <span class="visitor-stat-count" id="page-visitor-count"></span>
        </div>
      </div>
    </div>
  </div>

  <!-- Firebase SDK -->
  <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js"></script>

  <!-- Firebase Configuration & Visitor Counter -->
  <script src="../../../firebase-config.js"></script>
  <script src="../../../visitor-counter.js"></script>
</body>
</html>
```

### Example 2: New Resource Page (`resources/pages/code-quicksort.html`)

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>QuickSort Implementation - Resources - Mahbub Kousar</title>
  <link rel="stylesheet" href="../../style.css" />
  <link rel="stylesheet" href="../resource.css" />
  <link rel="stylesheet" href="../../visitor-counter.css" />
</head>

<body>
  <article>
    <h1>QuickSort Implementation</h1>
    <p>Your content here...</p>

    <a href="../index.html">Back to Resources</a>

    <!-- Visitor Counter -->
    <div id="visitor-counter-container" class="visitor-counter-container" data-page-id="resource_code_quicksort">
      <div class="visitor-stats">
        <div class="visitor-stat">
          <span class="visitor-stat-label">Total visits:</span>
          <span class="visitor-stat-count" id="overall-visitor-count"></span>
        </div>
        <span class="visitor-stat-separator">§</span>
        <div class="visitor-stat">
          <span class="visitor-stat-label">Page visits:</span>
          <span class="visitor-stat-count" id="page-visitor-count"></span>
        </div>
      </div>
    </div>
  </article>

  <!-- Firebase SDK -->
  <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js"></script>

  <!-- Firebase Configuration & Visitor Counter -->
  <script src="../../firebase-config.js"></script>
  <script src="../../visitor-counter.js"></script>
</body>
</html>
```

### Example 3: Root Level Page

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>About - Mahbub Kousar</title>
  <link rel="stylesheet" href="style.css" />
  <link rel="stylesheet" href="visitor-counter.css" />
</head>

<body>
  <article>
    <h1>About Me</h1>
    <p>Your content here...</p>

    <!-- Visitor Counter -->
    <div id="visitor-counter-container" class="visitor-counter-container" data-page-id="about">
      <div class="visitor-stats">
        <div class="visitor-stat">
          <span class="visitor-stat-label">Total visits:</span>
          <span class="visitor-stat-count" id="overall-visitor-count"></span>
        </div>
        <span class="visitor-stat-separator">§</span>
        <div class="visitor-stat">
          <span class="visitor-stat-label">Page visits:</span>
          <span class="visitor-stat-count" id="page-visitor-count"></span>
        </div>
      </div>
    </div>
  </article>

  <!-- Firebase SDK -->
  <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-app-compat.js"></script>
  <script src="https://www.gstatic.com/firebasejs/9.22.0/firebase-database-compat.js"></script>

  <!-- Firebase Configuration & Visitor Counter -->
  <script src="firebase-config.js"></script>
  <script src="visitor-counter.js"></script>
</body>
</html>
```

---

## Customization

### Visual Design Features

The counter features:
- **Minimal design** matching your LaTeX-inspired aesthetics
- **Small caps typography** consistent with your navigation
- **Subtle opacity** (0.6 default, 0.85 on hover)
- **Academic separator** using the section symbol (§)
- **Loading animation** (··· dots) while fetching data
- **Fully responsive** on mobile devices

### Change Counter Position

Move the HTML block to any location in your page. Common placements:
- Before closing `</article>` tag
- Inside `<footer>` element
- After "Back to Index" or "Back to Resources" links

### Modify Styling

Edit `visitor-counter.css` to customize:

```css
.visitor-counter-container {
  font-size: 0.8em;        /* Change font size */
  opacity: 0.6;             /* Change transparency */
  margin-top: 3rem;         /* Adjust spacing */
  text-align: center;       /* Change alignment */
}

.visitor-counter-container:hover {
  opacity: 0.85;            /* Hover effect */
}
```

### Show Only One Counter

Remove either the "Total visits" or "Page visits" section from the HTML:

**Only show page visits:**
```html
<div id="visitor-counter-container" class="visitor-counter-container" data-page-id="your_page_id">
  <div class="visitor-stats">
    <div class="visitor-stat">
      <span class="visitor-stat-label">Page visits:</span>
      <span class="visitor-stat-count" id="page-visitor-count"></span>
    </div>
  </div>
</div>
```

### Different Labels

Change the label text:
```html
<span class="visitor-stat-label">Your custom label:</span>
```

Examples:
- "Visitors:", "Views:", "Reads:", etc.
- "Site visitors:", "Total readers:", etc.

---

## Troubleshooting

### Counter not showing?

1. **Check browser console** (F12) for errors
2. **Verify Firebase config** - Ensure no placeholder values in `firebase-config.js`
3. **Check file paths** - Verify CSS and JS paths are correct relative to your page
4. **Inspect HTML** - Make sure the counter div has the correct structure

### Shows "···" (loading dots) forever?

1. **Firebase not initialized** - Check `firebase-config.js` credentials
2. **Database rules** - Verify Firebase database rules allow read/write access
3. **Internet connection** - Ensure stable connection
4. **Browser console** - Check for Firebase initialization errors

### Numbers not updating?

1. **Clear cache** - Clear browser cache and sessionStorage
2. **Test incognito** - Open in incognito/private mode for fresh session
3. **Firebase Console** - Check Firebase Console → Database to see actual values
4. **Session tracking** - Remember: same session won't increment counter again

### Counter increments too much?

- Check if counter HTML is duplicated on the page
- Verify only one `data-page-id` container exists
- Ensure scripts aren't loaded multiple times

### Different numbers on different pages?

This is expected! Each page has its own counter. Only the "Total visits" (overall) counter should be the same across all pages.

---

## Files Reference

- **`firebase-config.js`** - Firebase project configuration
- **`visitor-counter.js`** - Counter logic and Firebase interaction
- **`visitor-counter.css`** - Minimal styling
- **`FIREBASE_SETUP.md`** - Complete Firebase setup instructions
- **`VISITOR_COUNTER_GUIDE.md`** - This file

---

## Next Steps

1. ✅ Set up Firebase (see `FIREBASE_SETUP.md`)
2. ✅ Test on existing pages (e.g., `notebooks/posts/post_00001/index.html`)
3. ✅ Add to new pages using this guide
4. ✅ Monitor usage in Firebase Console
5. ✅ Customize styling to match your preferences

---

**Need help?** Check the existing implementation in any of these files:
- `index.html`
- `notebooks/posts/post_00001/index.html`
- `resources/pages/code-binary-search.html`
