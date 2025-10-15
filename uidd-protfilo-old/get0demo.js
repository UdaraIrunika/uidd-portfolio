// Browser version
async function getVercelProjects() {
    try {
        const response = await fetch("https://api.vercel.com/v9/projects", {
            headers: {
                "Authorization": `Bearer ${token}`,
                "Content-Type": "application/json"
            }
        });

        const data = await response.json();
        const demos = [];

        if (data.projects) {
            data.projects.forEach(project => {
                const name = project.name;
                const framework = project.framework || 'Custom';
                const createdAt = new Date(project.createdAt).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'long',
                    day: 'numeric'
                });
                const url = `https://${name}.vercel.app`;
                const repo = project.link?.repo || null;
                const repoUrl = repo ? `https://github.com/${project.link.org}/${repo}` : "#";

                demos.push({
                    'name': name.charAt(0).toUpperCase() + name.slice(1),
                    'description': `Project built with ${framework} framework.`,
                    'url': url,
                    'repo': repoUrl,
                    'framework': framework,
                    'created': createdAt
                });
            });
        }

        return demos;
    } catch (error) {
        console.error('Error fetching projects:', error);
        throw error;
    }
}

// Usage in browser
getVercelProjects()
    .then(demos => {
        // Do something with the demos array
        console.log(demos);
        // If you need to output as JSON like the PHP version
        document.body.innerHTML = `<pre>${JSON.stringify(demos, null, 2)}</pre>`;
    })
    .catch(error => {
        console.error('Error:', error);
    });