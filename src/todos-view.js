import parseHtml from "./parse-html.js";
import * as todosTableView from "./todos-table-view.js";

function render(content, todosData, handlers) {
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

function update(content, todosData) {
    const table = content.querySelector("table.todos");
    todosTableView.update(table, todosData);  
}

export {render, update};