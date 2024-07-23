import * as todosTableRowView from "./todos-table-row-view.js";
import parseHtml from "./parse-html.js";
import trashIcon from "./images/trash-can.svg"

let handlers;

function render(table, tableJson, tableHandlers){
    handlers = tableHandlers;

    const tableData = JSON.parse(tableJson);

    const caption = document.createElement("caption");
    caption.textContent = tableData.caption;
    table.appendChild(caption);


    const thead = document.createElement("thead");
    const tr = document.createElement("tr");
    thead.appendChild(tr);

    let cell = document.createElement("th");
    cell.classList.add("select");
    cell.appendChild(parseHtml(`
        <button class="multi-delete">
            <img src="${trashIcon}" alt="Delete icon">
        </button>
    `));
    tr.appendChild(cell);

    cell = document.createElement("th");
    cell.classList.add("title");
    cell.setAttribute("scope", "col");
    cell.textContent = "Title";
    tr.appendChild(cell);

    cell = document.createElement("th");
    cell.classList.add("due-date");
    cell.setAttribute("scope", "col");
    cell.textContent = "Due Date";
    tr.appendChild(cell);

    cell = document.createElement("th");
    cell.classList.add("priority");
    cell.setAttribute("scope", "col");
    cell.textContent = "Priority";
    tr.appendChild(cell);

    cell = document.createElement("th");
    cell.classList.add("done");
    cell.setAttribute("scope", "col");
    cell.textContent = "Status";
    tr.appendChild(cell);

    cell = document.createElement("th");
    cell.classList.add("project");
    cell.setAttribute("scope", "col");
    cell.textContent = "Project";
    tr.appendChild(cell);
    
    table.appendChild(thead);
    
    const tbody = document.createElement("tbody");
    table.appendChild(tbody);
    for (let row of tableData.rows) {
        const tr = document.createElement("tr");
        tr.setAttribute("data-id", row.id);
        tbody.appendChild(tr);
        todosTableRowView.render(tr, JSON.stringify(row), handlers);
    }

    const multiDeleteButton = table.querySelector("button.multi-delete");
    multiDeleteButton.addEventListener(
        "click",
        () => {
            const todoIds = [];
            table.querySelectorAll("input[name='select']:checked").forEach(
                input => todoIds.push(input.value)
            );
            handlers.clickMultiDeleteButton(todoIds);
        }
    );

    multiDeleteButton.disabled = true;
    
    table.querySelectorAll("input[name='select']").forEach(
        select => select.addEventListener(
            "change",
            () => {
                if (table.querySelectorAll("input[name='select']:checked").length > 0) {
                    multiDeleteButton.disabled = false;
                } else {
                    multiDeleteButton.disabled = true;
                }
            }
        )
    )
    
}

function update(table, tableJson){
    const tableData = JSON.parse(tableJson);
    const caption = table.querySelector("caption");
    caption.textContent = tableData.caption;

    const tbody = table.querySelector("tbody");
    tbody.textContent = "";

    for (let row of tableData.rows) {
        const tr = document.createElement("tr");
        tr.setAttribute("data-id", row.id);
        tbody.appendChild(tr);
        todosTableRowView.render(tr, JSON.stringify(row), handlers);
    }
}

function deleteRowById(table, rowId) {
    const tr = table.querySelector(`tr[data-id="${rowId}"]`);
    if (tr) {
        tr.remove();
    }    
}

export { render, update, deleteRowById };