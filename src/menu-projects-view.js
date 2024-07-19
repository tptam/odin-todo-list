import parseHtml from "./parse-html.js";

function render(menu, projectsData, handlers) {
    const projects = JSON.parse(projectsData);
    projects.forEach(
        project => {
            const link = document.createElement("a");
            link.classList.add("link-project");
            link.textContent = project.name;
            link.addEventListener(
                "click",
                (event) => {
                    handlers.clickProjectLink(project.id)
                }
            )
            menu.appendChild(link);
        }
    );

    menu.appendChild(parseHtml(`
        <a id="link-projects-all" class="separate" href="#">View all</a>
    `));
    menu.appendChild(parseHtml(`
        <a id="add-project" class="separate" href="#">Add...</a>
    `));
    
    menu.querySelector("a#link-projects-all")
        .addEventListener(
            "click",
            handlers.clickAllProjectsLink
        );

    menu.querySelector("a#add-project")
        .addEventListener(
            "click",
            handlers.addProject
        );
}

function update(menu, projectsData){

}

export {render, update};