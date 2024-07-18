import parseHtml from "./parse-html.js";
import * as todosTableView from "./todos-table-view.js";

let handlers;

function render(content, tableJson, todosHandlers) {
    handlers = todosHandlers;
    const tableData = JSON.parse(tableJson);

    content.innerHTML = "";

    // if (todo)

    const table = document.createElement("table");
    table.classList.add("todos");
    content.appendChild(table);
    todosTableView.render(table, JSON.stringify(tableData), handlers);

    const addButton = parseHtml(
        '<button class="add">+</button>'
    );
    content.appendChild(addButton);

    addButton.addEventListener(
        "click",
        handlers.clickAddButton
    )
}

function update(content, tableJson) {
    const table = content.querySelector("table.todos");
    todosTableView.update(table, tableJson);  
}


export {render, update};