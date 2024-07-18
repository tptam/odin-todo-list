import parseHtml from "./parse-html.js";

function render(menu, projectsData, handlers) {
    const projects = JSON.parse(projectsData);
    projects.forEach(
        project => menu.appendChild(parseHtml(`
            <a class="link-project" data-projectId="${project.id}">
                ${project.name}
            </a>
        `))
    );
    menu.appendChild(parseHtml(`
        <a id="link-projects-all" class="separate" href="#">View all</a>
    `));
    menu.appendChild(parseHtml(`
        <a id="add-project" class="separate" href="#">Add...</a>
    `));

    menu.querySelectorAll("a.link-project").forEach(
        link => link.addEventListener(
            "click",
            e => handlers.clickProjectLink(link.getAttribute("data-projectId"))
        )
    );
    
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