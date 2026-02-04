# Admin Panel - Page Builder Guide

## How to Build New Pages for Admin Panel

This guide explains how to create new admin pages that match the existing design and functionality.

---

## Quick Start - Page Template

Here's the minimal structure for a new admin page:

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Page Title - Admin Panel</title>
    <link rel="stylesheet" href="/admin/css/admin-style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <div class="admin-container">
        <!-- Sidebar Navigation -->
        <aside class="sidebar">
            <div class="sidebar-header">
                <h2>Admin Panel</h2>
            </div>
            <nav class="sidebar-nav">
                <!-- Include all nav items here -->
            </nav>
        </aside>

        <!-- Main Content Area -->
        <main class="main-content">
            <!-- Topbar with Menu, Notifications, User Profile -->
            <header class="topbar">
                <!-- Include topbar content -->
            </header>

            <!-- Notification Modal -->
            <div class="notification-modal" id="notificationModal">
                <!-- Include notification modal -->
            </div>

            <!-- Page Content -->
            <div class="page-content">
                <!-- Your page content here -->
            </div>
        </main>
    </div>

    <script src="/admin/js/admin-script.js"></script>
    <script>
        // Page-specific JavaScript here
    </script>
</body>
</html>
```

---

## Step-by-Step Guide

### 1. Create the HTML File
- Place file in: `/admin/` directory
- Name format: `page-name.html` (use hyphens, lowercase)
- Copy structure from similar existing page

### 2. Update Page Title
```html
<title>Your Page Name - Admin Panel</title>
```

### 3. Set Active Navigation Item
In the sidebar nav, find your page's nav-item and add `active` class:
```html
<a href="/admin/your-page.html" class="nav-item active">
    <i class="fas fa-icon-name"></i>
    <span>Page Name</span>
</a>
```

### 4. Add Navigation Link to Other Pages

To make the page accessible from other pages, you need to add a navigation link in all other admin pages:

**For existing pages** (that don't have the link yet):
- Edit the sidebar navigation section
- Add your new nav-item with appropriate icon
- Keep alphabetical or logical order

**For future pages**:
- All pages should include the new link in their sidebar

### 5. Use Consistent Components

#### Form Sections
```html
<div class="form-section">
    <div class="section-icon">
        <i class="fas fa-icon"></i>
    </div>
    <div class="section-content">
        <h3>Section Title</h3>
        <div class="form-grid">
            <!-- Form fields here -->
        </div>
    </div>
</div>
```

#### Form Groups
```html
<div class="form-group">
    <label for="fieldId">Label <span class="required">*</span></label>
    <input type="text" id="fieldId" name="fieldId" required>
    <small>Helper text</small>
</div>
```

#### Buttons
```html
<!-- Primary Button -->
<button type="submit" class="btn-primary">
    <i class="fas fa-icon"></i> Button Text
</button>

<!-- Secondary Button -->
<button type="button" class="btn-secondary">
    <i class="fas fa-icon"></i> Button Text
</button>

<!-- Danger Button -->
<button type="button" class="btn-danger">
    <i class="fas fa-icon"></i> Delete
</button>
```

#### Badges
```html
<span class="badge completed">Active</span>
<span class="badge pending">Pending</span>
<span class="badge">Default</span>
```

#### Tables
```html
<table class="data-table">
    <thead>
        <tr>
            <th>Column 1</th>
            <th>Column 2</th>
            <th>Action</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Data 1</td>
            <td>Data 2</td>
            <td>
                <a href="#" class="action-link">Edit</a>
                <button class="btn-danger">Delete</button>
            </td>
        </tr>
    </tbody>
</table>
```

---

## Design System Reference

### Colors (CSS Variables)
```css
--primary: #00d9ff (Cyan)
--danger: #ff2e63 (Red)
--success: #00d97f (Green)
--warning: #ffa502 (Orange)
--dark-bg: #0a0e17 (Dark background)
--dark-secondary: #13182c (Secondary dark)
```

### Typography
```css
Font Family: Inter (300, 400, 500, 600, 700 weights)
Line height: 1.6
Letter spacing: 0.5px
```

### Spacing
```css
--spacing-xs: 4px
--spacing-sm: 8px
--spacing-md: 12px
--spacing-lg: 16px
--spacing-xl: 20px
--spacing-xxl: 24px
```

### Border Radius
```css
--border-radius: 8px
```

---

## Navigation Integration

### Adding to Sidebar
To add a new page to all admin pages' sidebars:

1. **Identify insertion point** - Keep alphabetical or logical order
2. **HTML to add:**
```html
<a href="/admin/new-page.html" class="nav-item">
    <i class="fas fa-icon"></i>
    <span>Page Name</span>
</a>
```

3. **Pages to update:**
   - dashboard.html
   - projects.html, add-project.html, edit-project.html
   - services.html, add-service.html, edit-service.html
   - pricing.html, add-pricing.html, edit-pricing.html
   - invoices.html, add-invoice.html, edit-invoice.html, invoice-preview.html
   - testimonials.html, add-testimonial.html, edit-testimonial.html
   - users.html, add-user.html, edit-user.html
   - inquiries.html, view-inquiry.html
   - profile.html
   - settings.html

---

## Common Page Types

### 1. List/Dashboard Page
- Display data in table or card grid
- Include filters and search
- Add buttons for create/edit/delete
- Show pagination if needed
- **Example**: `users.html`, `projects.html`

### 2. Add Page (Form)
- Multiple form sections with icons
- Form validation
- Submit button saves/creates
- Cancel button returns to list
- **Example**: `add-user.html`, `add-invoice.html`

### 3. Edit Page (Form)
- Same as Add page but with pre-filled data
- May include delete button
- Read-only fields if needed
- **Example**: `edit-user.html`

### 4. Detail/Preview Page
- Display-only information
- Print functionality
- Download as PDF option
- Edit button links to edit page
- **Example**: `invoice-preview.html`

---

## Form Validation JavaScript

### Basic Pattern
```javascript
function handleSubmit(e) {
    e.preventDefault();
    
    // Validation logic
    const fullName = document.getElementById('fullName').value;
    if (!fullName.trim()) {
        alert('Full Name is required');
        return;
    }
    
    // Submit or process
    alert('Form submitted successfully!');
    // window.location.href = '/admin/list-page.html';
}
```

### Password Validation Example
```javascript
const password = document.getElementById('password').value;
const confirmPassword = document.getElementById('confirmPassword').value;

if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
}

if (password.length < 8) {
    alert('Password must be at least 8 characters!');
    return;
}
```

---

## Checklist for New Pages

- [ ] Create HTML file in `/admin/` directory
- [ ] Update page title
- [ ] Include all required stylesheets and fonts
- [ ] Add sidebar navigation with all items
- [ ] Mark current page as `active` in nav
- [ ] Include topbar with menu toggle, notifications, user profile
- [ ] Include notification modal
- [ ] Use correct button styles (primary, secondary, danger)
- [ ] Use form sections with icons for grouping
- [ ] Add form validation if needed
- [ ] Include admin-script.js reference
- [ ] Test responsive design (mobile, tablet, desktop)
- [ ] Add navigation link to all other admin pages
- [ ] Test all internal links

---

## Example: Building a New "Teams" Page

### Step 1: Create teams.html
Copy from an existing list page and modify:
- Change page title to "Teams"
- Update h1 to "Teams"
- Modify table columns for team data
- Change form IDs to team-related names

### Step 2: Add Navigation Links
Add to all 25 admin pages' sidebars (after Services, before Pricing):
```html
<a href="/admin/teams.html" class="nav-item">
    <i class="fas fa-object-group"></i>
    <span>Teams</span>
</a>
```

### Step 3: Create add-team.html
Copy from add-user.html or similar:
- Change form sections for team-specific fields
- Update validation logic
- Modify success message

### Step 4: Create edit-team.html
Copy from add-team.html:
- Pre-fill form with team data
- Add delete button (optional)
- Update form submission

### Step 5: Test
- Click through all pages
- Verify navigation links work
- Test form submission
- Check responsive design

---

## Important Notes

1. **CSS Classes Already Exist** - Don't create custom CSS, use provided classes
2. **Icons** - Use FontAwesome 6.4.0 (included)
3. **Colors** - Use CSS variables, don't hardcode colors
4. **Responsive** - All pages are mobile-friendly by default
5. **Dark Theme** - Maintains dark theme consistency across all pages
6. **Navigation Updates** - When adding new pages, update ALL existing pages' sidebars

---

## Quick Links

- **CSS File**: `/admin/css/admin-style.css` (2064 lines)
- **JS File**: `/admin/js/admin-script.js`
- **Fonts**: Inter from Google Fonts
- **Icons**: FontAwesome 6.4.0
- **Design Colors**: Cyan (#00d9ff), Red (#ff2e63), Green (#00d97f), Orange (#ffa502)

