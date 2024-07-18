import parseHtml from "./parse-html.js";
import * as todosTableView from "./todos-table-view.js";

let handlers;

function render(content, tableJson, todosHandlers) {
    handlers = todosHandlers;
    const tableData = JSON.parse(tableJson);

    content.innerHTML = "";

    if (tableData.rows.length === 0) {
        content.appendChild(parseHtml(`
            <div class="empty">
                <h1>${tableData.caption}</h1>
                <p>
                    No todo task found. Create one (or just relax).
                </p>
            </div>
        `));
    } else {
        const table = document.createElement("table");
        table.classList.add("todos");
        content.appendChild(table);
        todosTableView.render(table, JSON.stringify(tableData), handlers);
    }

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