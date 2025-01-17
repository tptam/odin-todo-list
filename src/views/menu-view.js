import * as projectMenuView from "./menu-projects-view.js";

function render(menu, projectsData, handlers) {
    menu.querySelector("#link-todos-all")
        .addEventListener(
            "click",
            handlers.clickAllTodosLink
        );

    menu.querySelector("#link-todos-today")
        .addEventListener(
            "click",
            handlers.clickTodayTodosLink
        );
    
    menu.querySelector("#link-todos-overdue")
        .addEventListener(
            "click",
            handlers.clickOverdueTodosLink
        );

    const projectMenu = menu.querySelector("#project-menu");
    projectMenuView.render(projectMenu, projectsData, handlers);    

    menu.querySelector("#link-dummy-data")
        .addEventListener(
            "click",
            handlers.clickDummyDataLink
        );

    menu.querySelector("#link-clear")
        .addEventListener(
            "click",
            handlers.clickClearLink
        );
}

function update(menu, projectsData) {
    const projectMenu = menu.querySelector("#project-menu");
    projectMenuView.update(projectMenu, projectsData);
}

function updateHighlight(menu, menuClass){
    menu.querySelectorAll("button").forEach(
        button => {
            if (button.classList.contains(menuClass)) {
                button.classList.add("selected");
            } else {
                button.classList.remove("selected");
            }
        }
    );
}

export { render, update, updateHighlight };