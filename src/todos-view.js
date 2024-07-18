import parseHtml from "./parse-html.js";
import * as todosTableView from "./todos-table-view.js";

let handlers;

function render(content, todosData, todosHandlers) {
    handlers = todosHandlers;

    content.innerHTML = "";
    const table = document.createElement("table");
    content.appendChild(table);
    todosTableView.render(table, todosData, handlers);

    const addButton = parseHtml(
        '<button class="add">+</button>'
    );
    content.appendChild(addButton);

    addButton.addEventListener(
        "click",
        handlers.clickAddButton
    )
}

function update(content, todosJson, handlers) {
    const table = content.querySelector("table.todos");
    todosTableView.update(table, todosJson);  
}


export {render, update};