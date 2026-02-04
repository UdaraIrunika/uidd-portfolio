# UIDD Admin Panel Database Documentation

## Overview
Complete MySQL database schema for the UIDD Admin Panel with sample data, views, stored procedures, and triggers.

## Database Information
- **Database Name**: `uidd_admin`
- **Character Set**: `utf8mb4`
- **Collation**: `utf8mb4_unicode_ci`
- **Engine**: InnoDB
- **Total Tables**: 15

## Installation

### Prerequisites
- MySQL 5.7+ or MariaDB 10.2+
- XAMPP or similar local server environment
- phpMyAdmin (optional, for GUI management)

### Setup Instructions

1. **Start MySQL Server**
   ```bash
   # In XAMPP Control Panel, start MySQL
   ```

2. **Import Database**
   
   **Option A: Using phpMyAdmin**
   - Open phpMyAdmin (http://localhost/phpmyadmin)
   - Click "New" to create database
   - Click "Import" tab
   - Choose file: `uidd_database.sql`
   - Click "Go"

   **Option B: Using MySQL Command Line**
   ```bash
   mysql -u root -p < uidd_database.sql
   ```

   **Option C: Using XAMPP Shell**
   ```bash
   cd C:\xampp\mysql\bin
   mysql -u root -p
   source D:/XAMPP/htdocs/ALL_PROJECTS/UIDD/database/uidd_database.sql
   ```

3. **Verify Installation**
   ```sql
   USE uidd_admin;
   SHOW TABLES;
   SELECT COUNT(*) FROM users;
   ```

## Database Schema

### Core Tables

#### 1. **users** - User Management
- Stores admin panel users with roles and permissions
- Roles: `admin`, `editor`, `viewer`
- Password: Bcrypt hashed
- Two-factor authentication support

#### 2. **user_permissions** - Role-Based Permissions
- Granular permission control per user
- Permissions: create, edit, delete, view, manage users, manage settings

#### 3. **user_activity_log** - Activity Tracking
- Logs all user actions for audit trail
- Stores IP addresses and user agents
- Indexed for performance

#### 4. **user_sessions** - Session Management
- Tracks active user sessions
- Stores device and location information
- Auto-cleanup of expired sessions

#### 5. **projects** - Project Management
- Complete project lifecycle tracking
- Client information
- Budget and timeline management
- Progress tracking (0-100%)
- Technology stack (JSON field)
- Team members (JSON field)

#### 6. **services** - Service Offerings
- Service catalog management
- Categorized by type
- Feature lists (JSON field)
- SEO metadata
- Display order control

#### 7. **pricing_plans** - Pricing Tiers
- Multiple billing cycles
- Feature lists (JSON field)
- Resource limits (projects, storage, users)
- Featured/popular highlighting
- Custom button text and links

#### 8. **pricing_addons** - Add-on Services
- One-time or recurring pricing
- Independent from pricing plans
- Display order management

#### 9. **testimonials** - Client Testimonials
- 5-star rating system
- Client information and photos
- Project association
- Featured testimonial support
- Status: published, pending, draft

#### 10. **inquiries** - Contact Inquiries
- Lead management system
- Status tracking workflow
- Priority levels
- Assignment to team members
- Source tracking

#### 11. **inquiry_responses** - Inquiry Communication
- Thread-based responses
- User attribution
- Timestamp tracking

#### 12. **notifications** - In-App Notifications
- User-specific notifications
- Type: success, info, warning, error
- Read/unread status
- Action URLs for quick access

#### 13. **settings** - System Configuration
- Key-value storage
- Type validation
- Category organization
- Public/private visibility

#### 14. **media** - File Management
- Upload tracking
- File metadata
- User attribution
- MIME type and size tracking

## Sample Data

### Default Users
| Username | Email | Password | Role |
|----------|-------|----------|------|
| admin | admin@uidd.com | admin123 | admin |
| john_editor | john@uidd.com | admin123 | editor |
| sarah_viewer | sarah@uidd.com | admin123 | viewer |
| mike_dev | mike@uidd.com | admin123 | editor |

### Sample Projects (5)
- E-Commerce Platform (Completed)
- Mobile App Design (In Progress)
- Website Redesign (In Progress)
- Analytics Dashboard (Planning)
- Marketing Campaign (Review)

### Sample Services (6)
- Web Development ($5,000+)
- UI/UX Design ($3,000+)
- Mobile App Development ($8,000+)
- Backend Development ($6,000+)
- E-Commerce Solutions ($10,000+)
- Digital Marketing Strategy ($4,000+)

### Sample Pricing Plans (3)
- Starter ($2,999)
- Professional ($7,999) - Featured
- Enterprise ($15,999+)

### Sample Add-ons (5)
- Mobile App ($5,000)
- AI Integration ($3,000)
- Security Audit ($500)
- Monthly Maintenance ($299/month)
- Analytics Package ($1,500)

## Database Views

### v_active_projects
Lists all active projects with calculated days remaining
```sql
SELECT * FROM v_active_projects;
```

### v_service_stats
Service statistics by category
```sql
SELECT * FROM v_service_stats;
```

### v_recent_inquiries
Recent inquiries with assignment details
```sql
SELECT * FROM v_recent_inquiries;
```

### v_user_dashboard_stats
User statistics for dashboard
```sql
SELECT * FROM v_user_dashboard_stats;
```

## Stored Procedures

### sp_get_project_stats()
Get comprehensive project statistics
```sql
CALL sp_get_project_stats();
```

### sp_get_inquiry_stats()
Get inquiry statistics by status
```sql
CALL sp_get_inquiry_stats();
```

### sp_log_activity(user_id, action, description, ip_address)
Log user activity
```sql
CALL sp_log_activity(1, 'login', 'User logged in', '192.168.1.1');
```

### sp_create_notification(user_id, type, title, message, action_url)
Create user notification
```sql
CALL sp_create_notification(1, 'info', 'New Message', 'You have a new message', '/admin/messages');
```

## Triggers

### tr_project_complete
Auto-update project progress to 100% when status changes to completed

### tr_new_inquiry_notification
Auto-create notification when new inquiry is submitted

### tr_update_last_login
Auto-update user's last login timestamp and increment login count

## Indexes

All tables are properly indexed for optimal performance:
- Primary keys on all ID columns
- Foreign key indexes
- Status and category indexes
- Date indexes for chronological queries
- Fulltext indexes for search functionality

## Relationships

```
users (1) -----> (N) projects
users (1) -----> (N) user_activity_log
users (1) -----> (N) user_sessions
users (1) -----> (1) user_permissions
users (1) -----> (N) notifications
users (1) -----> (N) media

projects (1) -----> (N) testimonials

inquiries (1) -----> (N) inquiry_responses
inquiries (N) -----> (1) users [assigned_to]
```

## Security Considerations

1. **Password Hashing**: All passwords use bcrypt ($2y$10$)
2. **SQL Injection Prevention**: Use prepared statements
3. **XSS Prevention**: Sanitize all user inputs
4. **CSRF Protection**: Implement token validation
5. **Session Security**: Use secure session tokens
6. **File Upload Validation**: Check MIME types and file sizes

## Backup & Maintenance

### Daily Backup
```bash
mysqldump -u root -p uidd_admin > backup_$(date +%Y%m%d).sql
```

### Restore from Backup
```bash
mysql -u root -p uidd_admin < backup_20260204.sql
```

### Clean Up Old Sessions
```sql
DELETE FROM user_sessions WHERE expires_at < NOW();
```

### Clean Up Old Activity Logs (older than 90 days)
```sql
DELETE FROM user_activity_log WHERE created_at < DATE_SUB(NOW(), INTERVAL 90 DAY);
```

## API Integration Points

### Authentication
- Login: Validate against `users` table
- Session: Store in `user_sessions` table
- Permissions: Check `user_permissions` table

### CRUD Operations
- Projects: `/api/projects`
- Services: `/api/services`
- Pricing: `/api/pricing`
- Testimonials: `/api/testimonials`
- Inquiries: `/api/inquiries`

### Dashboard Statistics
- Use views and stored procedures for optimized queries
- Cache results for better performance

## Configuration

### PHP Database Connection (PDO)
```php
<?php
$host = 'localhost';
$db = 'uidd_admin';
$user = 'root';
$pass = '';
$charset = 'utf8mb4';

$dsn = "mysql:host=$host;dbname=$db;charset=$charset";
$options = [
    PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION,
    PDO::ATTR_DEFAULT_FETCH_MODE => PDO::FETCH_ASSOC,
    PDO::ATTR_EMULATE_PREPARES => false,
];

try {
    $pdo = new PDO($dsn, $user, $pass, $options);
} catch (\PDOException $e) {
    throw new \PDOException($e->getMessage(), (int)$e->getCode());
}
?>
```

### PHP Database Connection (MySQLi)
```php
<?php
$conn = new mysqli('localhost', 'root', '', 'uidd_admin');

if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}

$conn->set_charset("utf8mb4");
?>
```

## Common Queries

### Get Active Projects
```sql
SELECT * FROM projects 
WHERE status IN ('planning', 'in-progress', 'review') 
ORDER BY priority DESC, start_date ASC;
```

### Get New Inquiries
```sql
SELECT * FROM inquiries 
WHERE status = 'new' 
ORDER BY priority DESC, created_at DESC;
```

### Get User Activity
```sql
SELECT a.*, u.full_name 
FROM user_activity_log a
JOIN users u ON a.user_id = u.user_id
WHERE a.created_at >= DATE_SUB(NOW(), INTERVAL 7 DAY)
ORDER BY a.created_at DESC;
```

### Get Featured Testimonials
```sql
SELECT * FROM testimonials 
WHERE status = 'published' AND is_featured = TRUE 
ORDER BY display_order ASC;
```

### Get Active Pricing Plans
```sql
SELECT * FROM pricing_plans 
WHERE status = 'active' AND show_homepage = TRUE
ORDER BY display_order ASC;
```

## Troubleshooting

### Issue: Cannot connect to database
**Solution**: Ensure MySQL is running in XAMPP Control Panel

### Issue: Import fails with character encoding error
**Solution**: Ensure UTF-8 encoding when importing

### Issue: Foreign key constraint fails
**Solution**: Import tables in correct order (parent tables first)

### Issue: Trigger not working
**Solution**: Check MySQL version supports triggers (5.0.2+)

## Performance Optimization

1. **Enable Query Cache** (MySQL 5.7 and below)
2. **Use Connection Pooling**
3. **Implement Read Replicas** for high traffic
4. **Regular Index Optimization**
   ```sql
   OPTIMIZE TABLE projects, inquiries, user_activity_log;
   ```
5. **Monitor Slow Queries**
   ```sql
   SHOW PROCESSLIST;
   ```

## Version History

- **v1.0** (2026-02-04): Initial database schema with all tables, sample data, views, procedures, and triggers

## Support

For issues or questions:
- Check documentation above
- Review SQL file comments
- Test queries in phpMyAdmin
- Verify XAMPP MySQL is running

---

**Database Version**: 1.0  
**Last Updated**: February 4, 2026  
**Schema Status**: Production Ready ✅
