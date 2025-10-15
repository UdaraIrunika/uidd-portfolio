<?php
include 'include/header.php';
?>
<br><br>


<section id="demos" class="demos-section">
    <div class="container">
        <h2 class="section-title">Products & Demos</h2>
        <p class="section-subtitle">Explore my latest projects with live demos and testing links</p>

        <div id="demos-grid" class="demos-grid"></div>

        <script>
        fetch('assest/api/get-demos.php')
            .then(res => res.json())
            .then(data => {
                const grid = document.getElementById('demos-grid');
                data.forEach(demo => {
                    const card = document.createElement('div');
                    card.classList.add('demo-card');
                    card.innerHTML = `
                        <div class="demo-image">
                            <img src="https://placehold.co/600x400?text=${demo.name}" alt="${demo.name}">
                            <div class="demo-overlay">
                                <div class="demo-links">
                                    <a href="${demo.url}" class="demo-btn live-demo" target="_blank">
                                        <i class="fas fa-external-link-alt"></i> Live Demo
                                    </a>
                                    <a href="${demo.repo}" class="demo-btn github-link" target="_blank">
                                        <i class="fab fa-github"></i> Source Code
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div class="demo-content">
                            <h3>${demo.name}</h3>
                            <p>${demo.description}</p>
                            <div class="demo-tech"><span class="tech-tag">${demo.framework}</span></div>
                            <div class="demo-status">
                                <span class="status-badge status-live">Live</span>
                                <span class="demo-date">Created: ${demo.created}</span>
                            </div>
                        </div>
                    `;
                    grid.appendChild(card);
                });
            });
        </script>
    </div>
</section>




<?php
include 'include/footer.php';
?>