// Admin Panel JavaScript

// Check authentication on page load
function checkAuth() {
    if (!localStorage.getItem('adminUser')) {
        window.location.href = '/admin/login.html';
    }
}

// Display admin username
function displayUsername() {
    const adminUser = JSON.parse(localStorage.getItem('adminUser') || '{}');
    const userElements = document.querySelectorAll('#adminUsername');
    userElements.forEach(el => {
        el.textContent = adminUser.username || 'Admin';
    });
}

// Sidebar toggle
document.addEventListener('DOMContentLoaded', function() {
    checkAuth();
    displayUsername();

    const sidebarToggle = document.getElementById('sidebarToggle');
    const menuToggle = document.getElementById('menuToggle');
    const sidebar = document.querySelector('.sidebar');

    if (sidebarToggle) {
        sidebarToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }

    if (menuToggle) {
        menuToggle.addEventListener('click', function() {
            sidebar.classList.toggle('active');
        });
    }

    // Close sidebar when clicking outside on mobile
    document.addEventListener('click', function(event) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickInsideToggle = sidebarToggle && sidebarToggle.contains(event.target);
        const isClickInsideMenu = menuToggle && menuToggle.contains(event.target);

        if (!isClickInsideSidebar && !isClickInsideToggle && !isClickInsideMenu) {
            if (window.innerWidth < 768) {
                sidebar.classList.remove('active');
            }
        }
    });

    // Logout functionality
    const logoutButtons = document.querySelectorAll('#logoutBtn');
    logoutButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            if (confirm('Are you sure you want to logout?')) {
                localStorage.removeItem('adminUser');
                window.location.href = '/admin/login.html';
            }
        });
    });

    // Modal functionality
    setupModals();

    // Notification click
    const notificationBtns = document.querySelectorAll('.notification-btn');
    notificationBtns.forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation();
            const modal = document.getElementById('notificationModal');
            if (modal) {
                modal.classList.toggle('active');
            }
        });
    });
});

// Modal Setup
function setupModals() {
    const modals = document.querySelectorAll('.modal');
    
    modals.forEach(modal => {
        const closeButtons = modal.querySelectorAll('.modal-close, .modal-close-btn');
        closeButtons.forEach(btn => {
            btn.addEventListener('click', function() {
                modal.classList.remove('active');
            });
        });

        // Close modal when clicking outside
        modal.addEventListener('click', function(e) {
            if (e.target === modal) {
                modal.classList.remove('active');
            }
        });

        // Form submission
        const form = modal.querySelector('form');
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();
                alert('Item added successfully!');
                form.reset();
                modal.classList.remove('active');
            });
        }
    });

    // Button click handlers to open modals
    const modalButtons = {
        'addProjectBtn': 'projectModal',
        'addServiceBtn': 'serviceModal',
        'addPricingBtn': 'pricingModal',
        'addAddonBtn': 'addonModal',
        'addTestimonialBtn': 'testimonialModal',
        'addUserBtn': 'userModal'
    };

    for (const [btnId, modalId] of Object.entries(modalButtons)) {
        const btn = document.getElementById(btnId);
        const modal = document.getElementById(modalId);
        
        if (btn && modal) {
            btn.addEventListener('click', function() {
                modal.classList.add('active');
            });
        }
    }
}

// Search functionality
document.addEventListener('DOMContentLoaded', function() {
    const searchInputs = document.querySelectorAll('.search-input');
    
    searchInputs.forEach(input => {
        input.addEventListener('keyup', function() {
            const searchTerm = this.value.toLowerCase();
            const table = this.closest('.filters').nextElementSibling.querySelector('.data-table');
            
            if (table) {
                const rows = table.querySelectorAll('tbody tr');
                rows.forEach(row => {
                    const text = row.textContent.toLowerCase();
                    row.style.display = text.includes(searchTerm) ? '' : 'none';
                });
            }
        });
    });
});

// Filter functionality
document.addEventListener('DOMContentLoaded', function() {
    const filterSelects = document.querySelectorAll('.filter-select');
    
    filterSelects.forEach(select => {
        select.addEventListener('change', function() {
            const filterValue = this.value;
            const table = this.closest('.filters').nextElementSibling.querySelector('.data-table');
            
            if (table) {
                const rows = table.querySelectorAll('tbody tr');
                rows.forEach(row => {
                    if (filterValue === 'All Status' || filterValue === 'All Roles' || filterValue === 'All Filters') {
                        row.style.display = '';
                    } else {
                        const statusCell = row.querySelector('.badge');
                        if (statusCell && statusCell.textContent.includes(filterValue)) {
                            row.style.display = '';
                        } else {
                            row.style.display = 'none';
                        }
                    }
                });
            }
        });
    });
});

// Delete functionality
document.addEventListener('DOMContentLoaded', function() {
    const deleteButtons = document.querySelectorAll('.btn-action');
    
    deleteButtons.forEach(btn => {
        if (btn.querySelector('.fa-trash')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                if (confirm('Are you sure you want to delete this item?')) {
                    const row = this.closest('tr');
                    if (row) {
                        row.style.opacity = '0.5';
                        setTimeout(() => {
                            row.remove();
                            alert('Item deleted successfully!');
                        }, 300);
                    }
                }
            });
        }
    });
});

// Action buttons (Edit/Reply)
document.addEventListener('DOMContentLoaded', function() {
    const actionButtons = document.querySelectorAll('.btn-action');
    
    actionButtons.forEach(btn => {
        if (!btn.querySelector('.fa-trash')) {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                alert('Opening edit dialog...');
            });
        }
    });
});

// Settings form handling
document.addEventListener('DOMContentLoaded', function() {
    const settingsForms = document.querySelectorAll('.settings-section form');
    
    settingsForms.forEach(form => {
        form.addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Settings saved successfully!');
        });
    });
});

// Responsive sidebar
window.addEventListener('resize', function() {
    const sidebar = document.querySelector('.sidebar');
    if (window.innerWidth >= 768) {
        sidebar.classList.remove('active');
    }
});

// Chart.js initialization (if exists)
if (typeof Chart !== 'undefined') {
    console.log('Chart.js loaded successfully');
}

// Close notification modal when clicking outside
document.addEventListener('click', function(event) {
    const notificationModal = document.getElementById('notificationModal');
    const notificationBtn = document.querySelector('.notification-btn');
    
    if (notificationModal && notificationBtn && 
        !notificationModal.contains(event.target) && 
        !notificationBtn.contains(event.target)) {
        notificationModal.classList.remove('active');
    }
});

// Close notification modal button
document.addEventListener('DOMContentLoaded', function() {
    const notificationClose = document.querySelector('.notification-close');
    if (notificationClose) {
        notificationClose.addEventListener('click', function(e) {
            e.stopPropagation();
            const modal = document.getElementById('notificationModal');
            if (modal) {
                modal.classList.remove('active');
            }
        });
    }
});