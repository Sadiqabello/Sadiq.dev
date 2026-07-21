document.addEventListener("DOMContentLoaded", function () {
    const devicon = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

    const skillGroups = [
        {
            category: "Languages",
            open: true,
            skills: [
                { name: "C#", icon: `${devicon}/csharp/csharp-original.svg` },
                { name: "Python", icon: `${devicon}/python/python-original.svg` },
                { name: "JavaScript", icon: `${devicon}/javascript/javascript-original.svg` },
                { name: "TypeScript", icon: `${devicon}/typescript/typescript-original.svg` },
                { name: "Dart", icon: `${devicon}/dart/dart-original.svg` },
                { name: "HTML", icon: `${devicon}/html5/html5-original.svg` },
                { name: "CSS", icon: `${devicon}/css3/css3-original.svg` },
            ],
        },
        {
            category: "Frameworks & Libraries",
            skills: [
                { name: ".NET", icon: `${devicon}/dotnetcore/dotnetcore-original.svg` },
                { name: "Node.js", icon: `${devicon}/nodejs/nodejs-original.svg` },
                { name: "Express.js", icon: `${devicon}/express/express-original.svg` },
                { name: "Django", icon: `${devicon}/django/django-plain.svg` },
                { name: "FastAPI", icon: `${devicon}/fastapi/fastapi-original.svg` },
                { name: "Flask", icon: `${devicon}/flask/flask-original.svg` },
                { name: "React", icon: `${devicon}/react/react-original.svg` },
                { name: "React Native", icon: `${devicon}/react/react-original.svg` },
                { name: "Next.js", icon: `${devicon}/nextjs/nextjs-original.svg` },
                { name: "Flutter", icon: `${devicon}/flutter/flutter-original.svg` },
                { name: "Tailwind CSS", icon: `${devicon}/tailwindcss/tailwindcss-original.svg` },
                { name: "Bootstrap", icon: `${devicon}/bootstrap/bootstrap-original.svg` },
                { name: "JQuery", icon: `${devicon}/jquery/jquery-original.svg` },
            ],
        },
        {
            category: "Databases",
            skills: [
                { name: "SQL Server", icon: `${devicon}/microsoftsqlserver/microsoftsqlserver-plain.svg` },
                { name: "PostgreSQL", icon: `${devicon}/postgresql/postgresql-original.svg` },
                { name: "MySQL", icon: `${devicon}/mysql/mysql-original.svg` },
            ],
        },
        {
            category: "Tools & Platforms",
            skills: [
                { name: "Git", icon: `${devicon}/git/git-original.svg` },
                { name: "GitHub", icon: `${devicon}/github/github-original.svg` },
                { name: "Docker", icon: `${devicon}/docker/docker-original.svg` },
                { name: "Linux", icon: `${devicon}/linux/linux-original.svg` },
                { name: "Postman", icon: `${devicon}/postman/postman-original.svg` },
                { name: "Swagger", icon: "https://static1.smartbear.co/swagger/media/assets/images/swagger_logo.svg" },
                { name: "Visual Studio", icon: `${devicon}/visualstudio/visualstudio-plain.svg` },
                { name: "Visual Studio Code", icon: `${devicon}/vscode/vscode-original.svg` },
                { name: "Slack", icon: `${devicon}/slack/slack-original.svg` },
                { name: "Jira", icon: `${devicon}/jira/jira-original.svg` },
            ],
        },
    ];

    const skillsContainer = document.getElementById("skillsContainer");
    if (!skillsContainer) return;

    skillGroups.forEach(group => {
        const details = document.createElement("details");
        details.classList.add("skills-group");
        details.open = Boolean(group.open);

        const summary = document.createElement("summary");
        summary.classList.add("skills-group__header");

        const label = document.createElement("span");
        label.classList.add("skills-group__label");
        label.textContent = group.category;

        const count = document.createElement("span");
        count.classList.add("skills-group__count");
        count.textContent = group.skills.length;

        summary.appendChild(label);
        summary.appendChild(count);
        details.appendChild(summary);

        const grid = document.createElement("div");
        grid.classList.add("skills-container");

        group.skills.forEach(skill => {
            const skillDiv = document.createElement("div");
            skillDiv.classList.add("skill");

            const img = document.createElement("img");
            img.src = skill.icon;
            img.alt = skill.name;
            img.loading = "lazy";

            const name = document.createElement("span");
            name.textContent = skill.name;

            skillDiv.appendChild(img);
            skillDiv.appendChild(name);
            grid.appendChild(skillDiv);
        });

        details.appendChild(grid);
        skillsContainer.appendChild(details);
    });
});
