<?php
include 'include/header.php';
?>
<br><br>

<section id="projects" class="projects">
  <div class="container">
    <h2 class="section-title">My Projects</h2>
    <div id="projects-grid" class="projects-grid"></div>
    <div class="view-more">
      <a href="https://github.com/UdaraIrunika?tab=repositories" class="btn secondary" target="_blank">View All Projects</a>
    </div>
  </div>

  <!-- Image Modal -->
  <div id="imageModal" class="modal">
      <span class="close">&times;</span>
      <img class="modal-content" id="modal-img">
      <span class="prev">&#10094;</span>
      <span class="next">&#10095;</span>
  </div>
</section>

<script>
const username = 'UdaraIrunika';
const placeholderImg = 'https://via.placeholder.com/400x250';
let currentImages = [];
let currentIndex = 0;

async function fetchRepos() {
    const res = await fetch(`https://api.github.com/users/${username}/repos`);
    const repos = await res.json();

    for (let repo of repos) {
        const defaultBranch = repo.default_branch || 'main';
        const readmeUrl = `https://raw.githubusercontent.com/${username}/${repo.name}/${defaultBranch}/README.md`;

        let images = [placeholderImg];

        try {
            const readmeRes = await fetch(readmeUrl);
            if (readmeRes.ok) {
                const content = await readmeRes.text();

                // Extract all Markdown images
                const mdMatches = [...content.matchAll(/!\[.*?\]\((.*?)\)/g)];
                images = mdMatches.map(m => fixUrl(m[1], repo.name, defaultBranch));

                // If no markdown images, check HTML <img> tags
                if (images.length === 0) {
                    const htmlMatches = [...content.matchAll(/<img.*?src=["'](.*?)["']/g)];
                    images = htmlMatches.map(m => fixUrl(m[1], repo.name, defaultBranch));
                }

                if (images.length === 0) images = [placeholderImg];
            }
        } catch (err) {
            console.log('No README or image for repo:', repo.name);
        }

        addProjectCard(repo.name, repo.description || 'No description', repo.html_url, images);
    }
}

function fixUrl(url, repoName, branch) {
    if (url.startsWith('http')) return url;
    return `https://raw.githubusercontent.com/${username}/${repoName}/${branch}/${url.replace(/^.\//,'')}`;
}

function addProjectCard(name, desc, repoUrl, images) {
    const grid = document.getElementById('projects-grid');
    const card = document.createElement('div');
    card.className = 'project-card';

    card.innerHTML = `
        <img src="${images[0]}" alt="${name}" class="project-img">
        <div class="project-info">
            <h3>${name}</h3>
            <p>${desc}</p>
            <div class="project-links">
                <a href="${repoUrl}" target="_blank" class="btn small">Code</a>
                <a href="#" class="btn small secondary modal-btn">View Images</a>
            </div>
        </div>
    `;

    // Store images in dataset for the modal
    card.querySelector('.modal-btn').dataset.images = JSON.stringify(images);

    grid.appendChild(card);
}

// Modal logic
const modal = document.getElementById("imageModal");
const modalImg = document.getElementById("modal-img");
const prev = modal.querySelector(".prev");
const next = modal.querySelector(".next");

document.addEventListener('click', (e) => {
    if (e.target.classList.contains('modal-btn')) {
        e.preventDefault();
        currentImages = JSON.parse(e.target.dataset.images);
        currentIndex = 0;
        modal.style.display = "flex";
        modalImg.src = currentImages[currentIndex];
    }
});

// Navigation
prev.onclick = () => {
    if (currentImages.length === 0) return;
    currentIndex = (currentIndex - 1 + currentImages.length) % currentImages.length;
    modalImg.src = currentImages[currentIndex];
};
next.onclick = () => {
    if (currentImages.length === 0) return;
    currentIndex = (currentIndex + 1) % currentImages.length;
    modalImg.src = currentImages[currentIndex];
};

// Close modal
document.querySelector(".close").onclick = () => modal.style.display = "none";
window.onclick = (e) => { if (e.target === modal) modal.style.display = "none"; };

// Fetch repos on load
fetchRepos();
</script>

<style>
.projects-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 20px;
}
.project-card {
    background: #fff;
    border-radius: 10px;
    overflow: hidden;
    box-shadow: 0 4px 15px rgba(0,0,0,0.1);
    transition: transform 0.3s;
}
.project-card:hover { transform: translateY(-5px); }
.project-card img { width: 100%; cursor: default; border-bottom: 1px solid #eee; }
.project-info { padding: 15px; }
.project-links { margin-top: 10px; display: flex; gap: 10px; }

/* Modal */
.modal {
    display: none;
    position: fixed;
    z-index: 1000;
    left: 0; top: 0;
    width: 100%; height: 100%;
    background-color: rgba(0,0,0,0.8);
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.modal-content {
    max-width: 80%;
    max-height: 80%;
    border-radius: 10px;
}
.close, .prev, .next {
    position: absolute;
    color: #fff;
    font-size: 40px;
    font-weight: bold;
    cursor: pointer;
    user-select: none;
}
.close { top: 30px; right: 35px; }
.prev { top: 50%; left: 30px; transform: translateY(-50%); }
.next { top: 50%; right: 30px; transform: translateY(-50%); }
</style>




<?php
include 'include/footer.php';
?>