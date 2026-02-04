# Quick Reference Card - Admin Panel Development

## 🚀 Quick Start

### Building a New Page (5 steps)
1. **Copy** `TEMPLATE_PAGE.html` → `your-page.html`
2. **Update** page title: `<title>Your Page - Admin Panel</title>`
3. **Update** h1 heading: `<h1>Your Page</h1>`
4. **Mark active** nav item: `class="nav-item active"`
5. **Add to all pages**: Copy nav-item link to all other sidebars

---

## 📋 Form Components

### Single Text Input
```html
<div class="form-group">
    <label for="name">Name <span class="required">*</span></label>
    <input type="text" id="name" name="name" required>
</div>
```

### Select Dropdown
```html
<div class="form-group">
    <label for="role">Role <span class="required">*</span></label>
    <select id="role" name="role" required>
        <option value="">Select Role</option>
        <option value="admin">Admin</option>
        <option value="user">User</option>
    </select>
</div>
```

### Checkbox
```html
<label>
    <input type="checkbox" name="option" value="yes">
    <span>Option Label</span>
</label>
```

### Textarea
```html
<div class="form-group full-width">
    <label for="message">Message</label>
    <textarea id="message" name="message" rows="4"></textarea>
</div>
```

### File Input
```html
<div class="form-group">
    <label for="file">Upload File</label>
    <input type="file" id="file" name="file">
</div>
```

---

## 🎨 Styling Classes

### Buttons
| Class | Use |
|-------|-----|
| `btn-primary` | Save, Submit, Confirm |
| `btn-secondary` | Cancel, Reset, Back |
| `btn-danger` | Delete, Remove |
| `btn-back` | Back to list |
| `btn-add-item` | Add new item |
| `btn-remove-item` | Remove item |

### Form Structure
| Class | Use |
|-------|-----|
| `form-section` | Group of related fields |
| `form-group` | Single input field |
| `form-grid` | Responsive 2-column layout |
| `full-width` | Spans full width |
| `checkbox-group` | Group of checkboxes |

### Status Badges
```html
<span class="badge completed">Completed</span>
<span class="badge pending">Pending</span>
<span class="badge">Default</span>
```

### Icons (FontAwesome)
```html
<i class="fas fa-save"></i>      <!-- Save -->
<i class="fas fa-trash"></i>     <!-- Delete -->
<i class="fas fa-edit"></i>      <!-- Edit -->
<i class="fas fa-plus"></i>      <!-- Add -->
<i class="fas fa-times"></i>     <!-- Close -->
<i class="fas fa-arrow-left"></i> <!-- Back -->
<i class="fas fa-download"></i>  <!-- Download -->
<i class="fas fa-print"></i>     <!-- Print -->
<i class="fas fa-envelope"></i>  <!-- Email -->
```

---

## ✅ Form Validation Pattern

```javascript
function handleSubmit(e) {
    e.preventDefault();
    
    // Get values
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    
    // Validate required
    if (!name) {
        alert('Name is required!');
        return;
    }
    
    // Validate format (email)
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        alert('Invalid email!');
        return;
    }
    
    // Success
    alert('Form submitted successfully!');
    window.location.href = '/admin/list-page.html';
}
```

---

## 🎯 Common Validation Patterns

### Email Validation
```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
if (!emailRegex.test(email)) {
    alert('Invalid email address!');
    return;
}
```

### Password Validation
```javascript
if (password.length < 8) {
    alert('Password must be at least 8 characters!');
    return;
}
if (password !== confirmPassword) {
    alert('Passwords do not match!');
    return;
}
```

### Phone Number
```javascript
const phoneRegex = /^\d{3}-\d{3}-\d{4}$/;
if (!phoneRegex.test(phone)) {
    alert('Phone format: XXX-XXX-XXXX');
    return;
}
```

### Number Range
```javascript
const value = parseFloat(document.getElementById('price').value);
if (value < 0 || value > 99999) {
    alert('Price must be between 0 and 99999!');
    return;
}
```

---

## 🏗️ Page Structure Template

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <!-- Meta and CSS -->
    <title>Page Title - Admin Panel</title>
    <link rel="stylesheet" href="/admin/css/admin-style.css">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
</head>
<body>
    <div class="admin-container">
        <!-- Sidebar with navigation -->
        <aside class="sidebar">
            <!-- Sidebar content -->
        </aside>

        <!-- Main content area -->
        <main class="main-content">
            <!-- Topbar with menu and user info -->
            <header class="topbar">
                <!-- Topbar content -->
            </header>

            <!-- Notifications modal -->
            <div class="notification-modal" id="notificationModal">
                <!-- Notifications -->
            </div>

            <!-- Page content -->
            <div class="page-content">
                <!-- Your page content here -->
            </div>
        </main>
    </div>

    <script src="/admin/js/admin-script.js"></script>
    <script>
        // Page-specific JavaScript
    </script>
</body>
</html>
```

---

## 🔧 CSS Variables (Use These!)

```css
--primary: #00d9ff          /* Cyan - main color */
--dark-bg: #0a0e17          /* Very dark background */
--dark-secondary: #13182c   /* Dark secondary background */
--danger: #ff2e63           /* Red - delete/warning */
--success: #00d97f          /* Green - success */
--warning: #ffa502          /* Orange - warning */
--light: #e0e0e0            /* Light text */
--border-radius: 8px        /* Standard border radius */
```

**Don't hardcode colors!** Always use CSS variables.

---

## 📊 Invoice Calculation Logic

### Auto-generated Number
```javascript
function generateInvoiceNumber() {
    const currentYear = new Date().getFullYear();
    const sequenceNum = String(Math.floor(Math.random() * 999) + 1).padStart(3, '0');
    return `INV-${currentYear}-${sequenceNum}`;
}
```

### Calculate Line Total
```javascript
const quantity = 1;
const unitPrice = 100;
const taxPercent = 10;
const lineAmount = quantity * unitPrice;
const lineTax = lineAmount * (taxPercent / 100);
const lineTotal = lineAmount + lineTax; // $110
```

### Calculate Invoice Total
```javascript
function calculateTotals() {
    let subtotal = 0, totalTax = 0;
    
    // Sum all line items
    rows.forEach(row => {
        const qty = parseFloat(row.qty) || 0;
        const price = parseFloat(row.price) || 0;
        const tax = parseFloat(row.tax) || 0;
        const lineAmount = qty * price;
        const lineTax = lineAmount * (tax / 100);
        
        subtotal += lineAmount;
        totalTax += lineTax;
    });
    
    // Apply discount to subtotal
    const discountPercent = parseFloat(document.getElementById('discount').value) || 0;
    const discountAmount = subtotal * (discountPercent / 100);
    
    // Final total
    const total = subtotal + totalTax - discountAmount;
}
```

---

## 🗂️ File Organization

```
admin/
├── css/
│   └── admin-style.css          (All styling - 2064 lines)
├── js/
│   └── admin-script.js          (Global functionality)
├── PAGE_BUILDER_GUIDE.md        (Detailed guide)
├── PAGES_OVERVIEW.md            (Pages list)
├── QUICK_REFERENCE.md           (This file)
├── TEMPLATE_PAGE.html           (Copy to create new pages)
├── dashboard.html               (Main dashboard)
├── users.html, add-user.html, edit-user.html
├── projects.html, add-project.html, edit-project.html
├── services.html, add-service.html, edit-service.html
├── pricing.html, add-pricing.html, edit-pricing.html
├── invoices.html, add-invoice.html, edit-invoice.html, invoice-preview.html
├── testimonials.html, add-testimonial.html, edit-testimonial.html
├── inquiries.html, view-inquiry.html
├── profile.html
├── settings.html
└── login.html
```

---

## 🎓 Useful Snippets

### Toggle Active Class
```javascript
document.querySelectorAll('.nav-item').forEach(item => {
    item.classList.remove('active');
    if (item.href.includes('current-page')) {
        item.classList.add('active');
    }
});
```

### Format Currency
```javascript
const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD'
});
formatter.format(1234.56); // "$1,234.56"
```

### Format Date
```javascript
const date = new Date('2026-02-04');
const formatted = date.toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
});
// "February 4, 2026"
```

### Get Form Data
```javascript
const formData = new FormData(document.getElementById('myForm'));
const data = Object.fromEntries(formData);
// { field1: value1, field2: value2, ... }
```

---

## ⚠️ Common Mistakes

❌ **Don't:**
- Hardcode colors (use CSS variables)
- Create custom CSS (use existing classes)
- Use inline styles (use CSS classes)
- Forget to add `required` to required fields
- Use different button styles inconsistently
- Forget to add page to all sidebars
- Miss form validation

✅ **Do:**
- Use `--primary`, `--danger`, etc.
- Use classes from admin-style.css
- Keep forms consistent with examples
- Add helper text with `<small>`
- Use proper button classes
- Update all 25 pages when adding new nav item
- Validate all user inputs
- Test on mobile and desktop

---

## 🚀 Deploy Checklist

Before deploying a new page:
- [ ] HTML syntax valid (no extra characters)
- [ ] All navigation items present in sidebar
- [ ] Current page marked as active
- [ ] Form validation working
- [ ] Links all working
- [ ] Responsive on mobile/tablet
- [ ] No console errors
- [ ] No hardcoded colors
- [ ] Uses only existing CSS classes
- [ ] Page added to all other sidebars (if applicable)
- [ ] Tested on Chrome, Firefox, Safari

---

## 📞 Quick Help

| Question | Answer |
|----------|--------|
| Where to add new page? | Copy `TEMPLATE_PAGE.html` |
| Which CSS to use? | `/admin/css/admin-style.css` |
| How to validate form? | Check form-validation-pattern above |
| Where are colors? | CSS variables in style tag |
| How to add button? | Use `btn-primary`, `btn-secondary`, etc. |
| Where is sidebar? | In each page's HTML |
| How to make page active? | Add `class="nav-item active"` |
| Need new component? | Use existing form/button/badge classes |

---

**Last Updated:** February 4, 2026
**Total Pages:** 26
**Admin Modules:** 9 (Dashboard, Projects, Services, Pricing, Invoices, Testimonials, Users, Inquiries, Profile, Settings)

