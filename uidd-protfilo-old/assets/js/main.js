/**
 * ========================================
 * PORTFOLIO MAIN JAVASCRIPT
 * ========================================
 * D.Udara Irunika De Zoysa
 * Creative Developer & Cybersecurity Expert
 * ========================================
 */

(function() {
    'use strict';

    // ========================================
    // DOM READY
    // ========================================
    document.addEventListener('DOMContentLoaded', function() {
        initPreloader();
        initCursorGlow();
        initScrollProgress();
        initNavigation();
        initTypewriter();
        initParticles();
        initCounterAnimation();
        initSkillBars();
        initScrollAnimations();
        initProjects();
        initPricingTabs();
        initPricingModal();
        initTimelineToggles();
        initContactForm();
        initFilterButtons();
        initBackToTop();
        initTiltEffect();
        initParallaxEffect();
    });

    // ========================================
    // PRELOADER
    // ========================================
    function initPreloader() {
        const preloader = document.getElementById('preloader');
        if (!preloader) return;

        window.addEventListener('load', function() {
            setTimeout(function() {
                preloader.classList.add('hidden');
                document.body.style.overflow = 'visible';
            }, 500);
        });

        // Fallback: hide after 3 seconds if load event doesn't fire
        setTimeout(function() {
            if (!preloader.classList.contains('hidden')) {
                preloader.classList.add('hidden');
                document.body.style.overflow = 'visible';
            }
        }, 3000);
    }

    // ========================================
    // CURSOR GLOW
    // ========================================
    function initCursorGlow() {
        const glow = document.getElementById('cursor-glow');
        if (!glow) return;

        let isHoveringInteractive = false;

        document.addEventListener('mousemove', function(e) {
            const x = e.clientX;
            const y = e.clientY;
            
            glow.style.left = x + 'px';
            glow.style.top = y + 'px';
            
            // Check if hovering over interactive elements
            const target = e.target;
            const isInteractive = target.matches('a, button, .btn, .service-card, .project-card, .education-item, .sponsor-card, .pricing-card');
            
            if (isInteractive && !isHoveringInteractive) {
                isHoveringInteractive = true;
                glow.style.width = '400px';
                glow.style.height = '400px';
                glow.style.background = 'radial-gradient(circle, rgba(59, 130, 246, 0.12), transparent 70%)';
            } else if (!isInteractive && isHoveringInteractive) {
                isHoveringInteractive = false;
                glow.style.width = '300px';
                glow.style.height = '300px';
                glow.style.background = 'radial-gradient(circle, rgba(59, 130, 246, 0.06), transparent 70%)';
            }
        });

        // Hide glow on touch devices
        if ('ontouchstart' in window) {
            glow.style.display = 'none';
        }
    }

    // ========================================
    // SCROLL PROGRESS
    // ========================================
    function initScrollProgress() {
        const progressBar = document.getElementById('scroll-progress-bar');
        if (!progressBar) return;

        window.addEventListener('scroll', function() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = (scrollTop / docHeight) * 100;
            progressBar.style.width = progress + '%';
        });
    }

    // ========================================
    // NAVIGATION
    // ========================================
    function initNavigation() {
        const header = document.getElementById('header');
        const toggle = document.querySelector('.nav-toggle');
        const navLinks = document.querySelector('.nav-links');
        const links = document.querySelectorAll('.nav-links a');

        // Sticky header
        window.addEventListener('scroll', function() {
            if (window.scrollY > 50) {
                header.classList.add('scrolled');
            } else {
                header.classList.remove('scrolled');
            }
        });

        // Mobile toggle
        if (toggle && navLinks) {
            toggle.addEventListener('click', function() {
                const isOpen = navLinks.classList.toggle('open');
                toggle.classList.toggle('active');
                toggle.setAttribute('aria-expanded', isOpen);
            });
        }

        // Close mobile menu on link click
        links.forEach(function(link) {
            link.addEventListener('click', function() {
                if (navLinks) {
                    navLinks.classList.remove('open');
                }
                if (toggle) {
                    toggle.classList.remove('active');
                    toggle.setAttribute('aria-expanded', 'false');
                }
            });
        });

        // Close on outside click
        document.addEventListener('click', function(e) {
            if (navLinks && navLinks.classList.contains('open')) {
                if (!e.target.closest('nav') && !e.target.closest('.nav-links')) {
                    navLinks.classList.remove('open');
                    if (toggle) {
                        toggle.classList.remove('active');
                        toggle.setAttribute('aria-expanded', 'false');
                    }
                }
            }
        });

        // Active link highlighting
        const sections = document.querySelectorAll('section[id]');
        
        window.addEventListener('scroll', function() {
            let current = '';
            const scrollPos = window.scrollY + 120;
            
            sections.forEach(function(section) {
                const sectionTop = section.offsetTop;
                const sectionHeight = section.offsetHeight;
                
                if (scrollPos >= sectionTop && scrollPos < sectionTop + sectionHeight) {
                    current = section.getAttribute('id');
                }
            });
            
            links.forEach(function(link) {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        });
    }

    // ========================================
    // TYPEWRITER
    // ========================================
    function initTypewriter() {
        const typewriterEl = document.getElementById('typewriter');
        if (!typewriterEl) return;

        const titles = [
            'Creative Designer',
            'Web Developer',
            'Cybersecurity Expert',
            'UI/UX Designer',
            'Full-Stack Developer'
        ];
        
        let index = 0;
        let charIndex = 0;
        let isDeleting = false;
        let speed = 100;

        function type() {
            const current = titles[index];
            
            if (!isDeleting) {
                // Typing
                typewriterEl.textContent = current.substring(0, charIndex + 1);
                charIndex++;
                
                if (charIndex === current.length) {
                    isDeleting = true;
                    speed = 2000; // Pause at end
                } else {
                    speed = 80 + Math.random() * 40;
                }
            } else {
                // Deleting
                typewriterEl.textContent = current.substring(0, charIndex - 1);
                charIndex--;
                
                if (charIndex === 0) {
                    isDeleting = false;
                    index = (index + 1) % titles.length;
                    speed = 500; // Pause before next word
                } else {
                    speed = 40 + Math.random() * 30;
                }
            }
            
            setTimeout(type, speed);
        }

        type();
    }

    // ========================================
    // PARTICLES
    // ========================================
    function initParticles() {
        const container = document.getElementById('hero-particles');
        if (!container) return;

        const count = 50;
        const fragment = document.createDocumentFragment();

        for (let i = 0; i < count; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            
            const size = 2 + Math.random() * 4;
            const x = Math.random() * 100;
            const delay = Math.random() * 15;
            const duration = 10 + Math.random() * 20;
            
            particle.style.width = size + 'px';
            particle.style.height = size + 'px';
            particle.style.left = x + '%';
            particle.style.animationDelay = delay + 's';
            particle.style.animationDuration = duration + 's';
            particle.style.opacity = 0.2 + Math.random() * 0.3;
            
            fragment.appendChild(particle);
        }

        container.appendChild(fragment);
    }

    // ========================================
    // COUNTER ANIMATION
    // ========================================
    function initCounterAnimation() {
        const counters = document.querySelectorAll('.stat-number[data-count]');
        if (!counters.length) return;

        let animated = false;

        function animateCounters() {
            if (animated) return;
            
            const triggerPoint = window.innerHeight * 0.8;
            const rect = counters[0].closest('.hero-stats').getBoundingClientRect();
            
            if (rect.top < triggerPoint) {
                animated = true;
                
                counters.forEach(function(counter) {
                    const target = parseInt(counter.getAttribute('data-count'));
                    const duration = 2000;
                    const startTime = performance.now();
                    
                    function updateCounter(currentTime) {
                        const elapsed = currentTime - startTime;
                        const progress = Math.min(elapsed / duration, 1);
                        const eased = 1 - Math.pow(1 - progress, 3);
                        const current = Math.round(eased * target);
                        
                        counter.textContent = current + '+';
                        
                        if (progress < 1) {
                            requestAnimationFrame(updateCounter);
                        } else {
                            counter.textContent = target + '+';
                        }
                    }
                    
                    requestAnimationFrame(updateCounter);
                });
            }
        }

        window.addEventListener('scroll', animateCounters);
        window.addEventListener('load', function() {
            setTimeout(animateCounters, 500);
        });
    }

    // ========================================
    // SKILL BARS
    // ========================================
    function initSkillBars() {
        const skillCategories = document.querySelectorAll('.skill-category');
        if (!skillCategories.length) return;

        let animated = false;

        function animateSkills() {
            if (animated) return;
            
            const triggerPoint = window.innerHeight * 0.8;
            const rect = skillCategories[0].getBoundingClientRect();
            
            if (rect.top < triggerPoint) {
                animated = true;
                
                skillCategories.forEach(function(category) {
                    category.classList.add('visible');
                    
                    const bars = category.querySelectorAll('.skill-progress');
                    bars.forEach(function(bar) {
                        const width = bar.style.width;
                        bar.style.width = '0';
                        
                        setTimeout(function() {
                            bar.style.width = width;
                        }, 100);
                    });
                });
            }
        }

        window.addEventListener('scroll', animateSkills);
        window.addEventListener('load', function() {
            setTimeout(animateSkills, 800);
        });
    }

    // ========================================
    // SCROLL ANIMATIONS
    // ========================================
    function initScrollAnimations() {
        const elements = document.querySelectorAll('[data-animate]');
        if (!elements.length) return;

        const observer = new IntersectionObserver(function(entries) {
            entries.forEach(function(entry) {
                if (entry.isIntersecting) {
                    const delay = parseInt(entry.target.getAttribute('data-delay')) || 0;
                    
                    setTimeout(function() {
                        entry.target.classList.add('visible');
                    }, delay);
                    
                    observer.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        });

        elements.forEach(function(element) {
            observer.observe(element);
        });
    }

    // ========================================
    // PROJECTS - GitHub API
    // ========================================
    function initProjects() {
        const grid = document.getElementById('projects-grid');
        if (!grid) return;

        const username = 'UdaraIrunika';
        const placeholderImg = 'https://via.placeholder.com/400x250/1a2332/3B82F6?text=Project';

        async function fetchRepos() {
            try {
                const response = await fetch(`https://api.github.com/users/${username}/repos?sort=updated&per_page=12`);
                if (!response.ok) throw new Error('GitHub API error');
                const repos = await response.json();
                
                if (!repos.length) {
                    grid.innerHTML = '<p class="text-center" style="color: var(--text-tertiary); grid-column: 1/-1;">No projects found.</p>';
                    return;
                }

                grid.innerHTML = '';
                
                for (const repo of repos) {
                    const images = await getRepoImages(repo);
                    createProjectCard(repo, images);
                }
            } catch (error) {
                console.error('Error fetching repos:', error);
                grid.innerHTML = `
                    <div class="text-center" style="grid-column: 1/-1; padding: 40px; color: var(--text-tertiary);">
                        <i class="fas fa-exclamation-circle" style="font-size: 2rem; color: var(--accent-yellow);"></i>
                        <p>Unable to load projects. Please try again later.</p>
                        <a href="https://github.com/${username}" target="_blank" rel="noopener noreferrer" class="btn btn-primary" style="margin-top: 16px;">
                            <i class="fab fa-github" aria-hidden="true"></i>
                            View on GitHub
                        </a>
                    </div>
                `;
            }
        }

        async function getRepoImages(repo) {
            const defaultBranch = repo.default_branch || 'main';
            const readmeUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/${defaultBranch}/README.md`;
            const images = [placeholderImg];

            try {
                const response = await fetch(readmeUrl);
                if (!response.ok) return images;
                
                const content = await response.text();
                const imgMatches = [];
                
                // Markdown images
                const mdMatches = content.matchAll(/!\[.*?\]\((.*?)\)/g);
                for (const match of mdMatches) {
                    imgMatches.push(fixImageUrl(match[1], repo.name, defaultBranch));
                }
                
                // HTML images
                if (!imgMatches.length) {
                    const htmlMatches = content.matchAll(/<img.*?src=["'](.*?)["']/g);
                    for (const match of htmlMatches) {
                        imgMatches.push(fixImageUrl(match[1], repo.name, defaultBranch));
                    }
                }
                
                if (imgMatches.length) {
                    return imgMatches.slice(0, 5);
                }
            } catch (error) {
                console.log('No images for repo:', repo.name);
            }
            
            return images;
        }

        function fixImageUrl(url, repoName, branch) {
            if (url.startsWith('http://') || url.startsWith('https://')) {
                return url;
            }
            const cleanUrl = url.replace(/^.\//, '');
            return `https://raw.githubusercontent.com/${username}/${repoName}/${branch}/${cleanUrl}`;
        }

        function createProjectCard(repo, images) {
            const card = document.createElement('div');
            card.className = 'project-card';
            card.setAttribute('data-category', getProjectCategory(repo));

            const description = repo.description || 'No description available';
            const topics = repo.topics || [];
            const hasDemo = repo.homepage && repo.homepage.length > 0;

            card.innerHTML = `
                <div class="project-image">
                    <img src="${images[0]}" alt="${repo.name}" loading="lazy" onerror="this.src='${placeholderImg}'" />
                    <div class="project-image-overlay">
                        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-primary">
                            <i class="fab fa-github" aria-hidden="true"></i>
                            Code
                        </a>
                        ${hasDemo ? `
                            <a href="${repo.homepage}" target="_blank" rel="noopener noreferrer" class="btn btn-outline">
                                <i class="fas fa-external-link" aria-hidden="true"></i>
                                Demo
                            </a>
                        ` : ''}
                        <button class="btn btn-outline project-details-btn" data-repo='${JSON.stringify({
                            name: repo.name,
                            description: description,
                            html_url: repo.html_url,
                            homepage: repo.homepage,
                            topics: topics,
                            images: images
                        })}'>
                            <i class="fas fa-info" aria-hidden="true"></i>
                            Details
                        </button>
                    </div>
                </div>
                <div class="project-info">
                    <h3>${repo.name.replace(/-/g, ' ')}</h3>
                    <p>${description}</p>
                    <div class="project-tech">
                        ${topics.slice(0, 4).map(topic => `<span class="tech-tag">${topic}</span>`).join('')}
                    </div>
                    <div class="project-actions">
                        <a href="${repo.html_url}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost-small">
                            <i class="fab fa-github" aria-hidden="true"></i>
                            Code
                        </a>
                        ${hasDemo ? `
                            <a href="${repo.homepage}" target="_blank" rel="noopener noreferrer" class="btn btn-ghost-small">
                                <i class="fas fa-external-link" aria-hidden="true"></i>
                                Demo
                            </a>
                        ` : ''}
                        <button class="btn btn-ghost-small project-details-btn" data-repo='${JSON.stringify({
                            name: repo.name,
                            description: description,
                            html_url: repo.html_url,
                            homepage: repo.homepage,
                            topics: topics,
                            images: images
                        })}'>
                            <i class="fas fa-info" aria-hidden="true"></i>
                            Details
                        </button>
                    </div>
                </div>
            `;

            grid.appendChild(card);
        }

        function getProjectCategory(repo) {
            const name = repo.name.toLowerCase();
            const topics = repo.topics || [];
            
            if (name.includes('security') || name.includes('cyber') || name.includes('hack') || 
                topics.some(t => t.includes('security') || t.includes('cyber'))) {
                return 'security';
            }
            if (name.includes('design') || name.includes('ui') || name.includes('ux') || 
                topics.some(t => t.includes('design') || t.includes('ui') || t.includes('ux'))) {
                return 'design';
            }
            if (name.includes('iot') || name.includes('arduino') || name.includes('esp') ||
                topics.some(t => t.includes('iot') || t.includes('arduino'))) {
                return 'iot';
            }
            return 'web';
        }

        // Project details modal
        function initProjectModal() {
            const modal = document.getElementById('projectModal');
            if (!modal) return;

            const closeBtn = modal.querySelector('.modal-close');
            const modalImg = document.getElementById('modalImage');
            const modalTitle = document.getElementById('modalTitle');
            const modalDesc = document.getElementById('modalDescription');
            const modalTech = document.getElementById('modalTech');
            const modalRepo = document.getElementById('modalRepo');
            const modalDemo = document.getElementById('modalDemo');

            // Delegate click events for details buttons
            document.addEventListener('click', function(e) {
                const btn = e.target.closest('.project-details-btn');
                if (!btn) return;

                const repoData = JSON.parse(btn.getAttribute('data-repo'));
                
                modalImg.src = repoData.images[0] || placeholderImg;
                modalImg.alt = repoData.name;
                modalTitle.textContent = repoData.name.replace(/-/g, ' ');
                modalDesc.textContent = repoData.description;
                
                modalTech.innerHTML = repoData.topics.map(topic => 
                    `<span class="tech-tag">${topic}</span>`
                ).join('');
                
                modalRepo.href = repoData.html_url;
                
                if (repoData.homepage && repoData.homepage.length > 0) {
                    modalDemo.href = repoData.homepage;
                    modalDemo.style.display = 'inline-flex';
                } else {
                    modalDemo.style.display = 'none';
                }
                
                modal.classList.add('active');
                document.body.style.overflow = 'hidden';
            });

            // Close modal
            function closeModal() {
                modal.classList.remove('active');
                document.body.style.overflow = 'visible';
            }

            closeBtn.addEventListener('click', closeModal);
            modal.addEventListener('click', function(e) {
                if (e.target === modal) closeModal();
            });
            document.addEventListener('keydown', function(e) {
                if (e.key === 'Escape') closeModal();
            });
        }

        fetchRepos();
        initProjectModal();
    }

    // ========================================
    // FILTER BUTTONS
    // ========================================
    function initFilterButtons() {
        const buttons = document.querySelectorAll('.filter-btn');
        const projects = document.querySelectorAll('.project-card');
        
        if (!buttons.length || !projects.length) return;

        buttons.forEach(function(btn) {
            btn.addEventListener('click', function() {
                // Update active button
                buttons.forEach(function(b) {
                    b.classList.remove('active');
                    b.setAttribute('aria-selected', 'false');
                });
                this.classList.add('active');
                this.setAttribute('aria-selected', 'true');

                const filter = this.getAttribute('data-filter');

                projects.forEach(function(project) {
                    const category = project.getAttribute('data-category');
                    
                    if (filter === 'all' || category === filter) {
                        project.style.display = 'block';
                        project.style.animation = 'fadeIn 0.4s ease';
                    } else {
                        project.style.display = 'none';
                    }
                });
            });
        });
    }

    // ========================================
    // PRICING TABS
    // ========================================
    function initPricingTabs() {
        const tabs = document.querySelectorAll('.pricing-tab');
        const categories = {
            'graphic': document.getElementById('graphic-packages'),
            'web': document.getElementById('web-packages'),
            'iot': document.getElementById('iot-packages'),
            'ms': document.getElementById('ms-packages')  // Add this line
        };

        if (!tabs.length) return;

        tabs.forEach(function(tab) {
            tab.addEventListener('click', function() {
                // Update active tab
                tabs.forEach(function(t) {
                    t.classList.remove('active');
                    t.setAttribute('aria-selected', 'false');
                });
                this.classList.add('active');
                this.setAttribute('aria-selected', 'true');

                const category = this.getAttribute('data-category');
                
                // Show/hide categories
                Object.keys(categories).forEach(function(key) {
                    const el = categories[key];
                    if (el) {
                        if (key === category) {
                            el.classList.add('active');
                            el.removeAttribute('hidden');
                        } else {
                            el.classList.remove('active');
                            el.setAttribute('hidden', '');
                        }
                    }
                });
            });
        });
    }

    // ========================================
    // PRICING MODAL
    // ========================================
    function initPricingModal() {
        const modal = document.getElementById('contactModal');
        if (!modal) return;

        const closeBtn = modal.querySelector('.modal-close');
        const packageNameSpan = document.getElementById('packageName');
        const form = document.getElementById('packageContactForm');

        // Open modal
        document.addEventListener('click', function(e) {
            const btn = e.target.closest('.pricing-cta');
            if (!btn) return;

            const packageName = btn.getAttribute('data-package');
            if (packageNameSpan) {
                packageNameSpan.textContent = packageName;
            }
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        });

        // Close modal
        function closeModal() {
            modal.classList.remove('active');
            document.body.style.overflow = 'visible';
            if (form) form.reset();
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', closeModal);
        }

        modal.addEventListener('click', function(e) {
            if (e.target === modal) closeModal();
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') closeModal();
        });

        // Form submission
        if (form) {
            form.addEventListener('submit', function(e) {
                e.preventDefault();

                const submitBtn = this.querySelector('button[type="submit"]');
                const originalText = submitBtn.textContent;
                submitBtn.textContent = 'Sending...';
                submitBtn.disabled = true;

                const formData = new FormData(this);
                const packageName = packageNameSpan ? packageNameSpan.textContent : 'Package';

                const emailData = {
                    package_name: packageName,
                    name: formData.get('name'),
                    email: formData.get('email'),
                    phone: formData.get('phone'),
                    message: formData.get('message'),
                    budget: formData.get('budget'),
                    to_email: 'uiindustryprivetlimited@gmail.com'
                };

                if (typeof emailjs !== 'undefined') {
                    emailjs.send('service_bn85zae', 'template_honbbgg', emailData)
                        .then(function() {
                            alert('✅ Thank you for your interest! We will contact you soon.');
                            closeModal();
                            form.reset();
                        })
                        .catch(function(error) {
                            console.error('EmailJS Error:', error);
                            alert('❌ Sorry, there was an error. Please try again or contact us directly.');
                        })
                        .finally(function() {
                            submitBtn.textContent = originalText;
                            submitBtn.disabled = false;
                        });
                } else {
                    // Fallback: open WhatsApp
                    const message = `Name: ${emailData.name}%0AEmail: ${emailData.email}%0APhone: ${emailData.phone}%0APackage: ${emailData.package_name}%0ABudget: ${emailData.budget}%0AMessage: ${emailData.message}`;
                    window.open(`https://wa.me/94764353012?text=${message}`, '_blank');
                    closeModal();
                    form.reset();
                    submitBtn.textContent = originalText;
                    submitBtn.disabled = false;
                }
            });
        }
    }

    // ========================================
    // TIMELINE TOGGLES
    // ========================================
    function initTimelineToggles() {
        const toggles = document.querySelectorAll('.timeline-toggle');
        
        toggles.forEach(function(toggle) {
            toggle.addEventListener('click', function() {
                const details = this.closest('.education-content').querySelector('.timeline-details');
                const icon = this.querySelector('i');
                
                if (details) {
                    const isHidden = details.hasAttribute('hidden');
                    
                    if (isHidden) {
                        details.removeAttribute('hidden');
                        this.setAttribute('aria-expanded', 'true');
                        if (icon) {
                            icon.className = 'fas fa-chevron-up';
                        }
                    } else {
                        details.setAttribute('hidden', '');
                        this.setAttribute('aria-expanded', 'false');
                        if (icon) {
                            icon.className = 'fas fa-chevron-down';
                        }
                    }
                }
            });
        });
    }

    // ========================================
    // CONTACT FORM
    // ========================================
    function initContactForm() {
        const form = document.getElementById('contactForm');
        if (!form) return;

        form.addEventListener('submit', function(e) {
            e.preventDefault();

            const submitBtn = this.querySelector('button[type="submit"]');
            const originalText = submitBtn.innerHTML;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin" aria-hidden="true"></i> Sending...';
            submitBtn.disabled = true;

            const formData = new FormData(this);
            const emailData = {
                name: formData.get('user_name'),
                email: formData.get('user_email'),
                subject: formData.get('subject'),
                message: formData.get('message'),
                to_email: 'uiindustryprivetlimited@gmail.com'
            };

            if (typeof emailjs !== 'undefined') {
                emailjs.send('service_bn85zae', 'template_auwj83p', emailData , 'wxDUx3lT39EZ5Robm')
                    .then(function() {
                        alert('✅ Message sent successfully! I will get back to you soon.');
                        form.reset();
                    })
                    .catch(function(error) {
                        console.error('EmailJS Error:', error);
                        alert('❌ Failed to send message. Please try again or contact me directly.');
                    })
                    .finally(function() {
                        submitBtn.innerHTML = originalText;
                        submitBtn.disabled = false;
                    });
            } else {
                // Fallback: WhatsApp
                const message = `Name: ${emailData.name}%0AEmail: ${emailData.email}%0ASubject: ${emailData.subject}%0AMessage: ${emailData.message}`;
                window.open(`https://wa.me/+94764353012?text=${message}`, '_blank');
                form.reset();
                submitBtn.innerHTML = originalText;
                submitBtn.disabled = false;
            }
        });
    }

    // ========================================
    // BACK TO TOP
    // ========================================
    function initBackToTop() {
        const button = document.getElementById('backToTop');
        if (!button) return;

        window.addEventListener('scroll', function() {
            if (window.scrollY > 400) {
                button.classList.add('visible');
            } else {
                button.classList.remove('visible');
            }
        });

        button.addEventListener('click', function() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // ========================================
    // TILT EFFECT
    // ========================================
    function initTiltEffect() {
        const cards = document.querySelectorAll('[data-tilt]');
        if (!cards.length) return;

        cards.forEach(function(card) {
            card.addEventListener('mousemove', function(e) {
                const rect = this.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                const centerX = rect.width / 2;
                const centerY = rect.height / 2;
                const rotateX = (y - centerY) / 10;
                const rotateY = (centerX - x) / 10;
                
                this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-4px)`;
            });

            card.addEventListener('mouseleave', function() {
                this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
            });
        });
    }

    // ========================================
    // PARALLAX EFFECT
    // ========================================
    function initParallaxEffect() {
        const heroImage = document.querySelector('.hero-image-wrapper');
        const floatingBadges = document.querySelectorAll('.floating-badge');
        
        if (!heroImage) return;

        document.addEventListener('mousemove', function(e) {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            
            heroImage.style.transform = `translate(${x * 0.3}px, ${y * 0.3}px)`;
            
            floatingBadges.forEach(function(badge, index) {
                const speed = 0.5 + index * 0.2;
                badge.style.transform = `translate(${x * speed}px, ${y * speed}px)`;
            });
        });

        // Reset on touch devices
        if ('ontouchstart' in window) {
            document.removeEventListener('mousemove', function() {});
        }
    }

})();

// ========================================
// POLYFILL FOR OLDER BROWSERS
// ========================================
if (!Element.prototype.matches) {
    Element.prototype.matches = Element.prototype.msMatchesSelector || 
                              Element.prototype.webkitMatchesSelector;
}

if (!Element.prototype.closest) {
    Element.prototype.closest = function(s) {
        var el = this;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

// ========================================
// CONSOLE WELCOME
// ========================================
console.log('%c D.Udara Irunika De Zoysa ', 'font-size: 24px; font-weight: bold; color: #3B82F6;');
console.log('%c Creative Developer & Cybersecurity Expert ', 'font-size: 14px; color: #06B6D4;');
console.log('%c 🚀 Crafting premium digital experiences with security at the core. ', 'font-size: 12px; color: #8B5CF6;');