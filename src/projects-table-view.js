import * as tableRow from "./table-row";
import * as projectsTableRowView from "./projects-table-row-view";
import trashIcon from "./images/trash-can.svg"


function render(table, tableJson, tableHandlers) {

    const tableData = JSON.parse(tableJson);

    const caption = document.createElement("caption");
    caption.textContent = tableData.caption;
    table.appendChild(caption);

    const thead = document.createElement("thead");
    table.appendChild(thead);

    const tr = document.createElement("tr");
    thead.appendChild(tr);

    const cellsData = [
        {
            tag: "th",
            classes: ["select"],
            attribute: {},
            text: null,
            contentHtml: `<button class="multi-delete">
                <img src="${trashIcon}" alt="Delete icon">
                </button>`
        },
        {
            tag: "th",
            classes: ["name", "title"],
            attribute: {scope: "col"},
            text: "Name",
            contentHtml: null
        },
        {
            tag: "th",
            classes: ["todos",],
            attribute: { scope: "col" },
            text: "Todos",
            contentHtml: null
        },
        {
            tag: "th",
            classes: ["not-done",],
            attribute: { scope: "col" },
            text: "Not Yet",
            contentHtml: null
        },
        {
            tag: "th",
            classes: ["overdue",],
            attribute: { scope: "col" },
            text: "Overdue",
            contentHtml: null
        },
        {
            tag: "th",
            classes: ["progress",],
            attribute: { scope: "col", colspan: 2},
            text: "Progress",
            contentHtml: null
        },
    ]

    const handlers = [];

    tableRow.render(tr, JSON.stringify(cellsData), handlers);

    const tbody = document.createElement("tbody");
    table.appendChild(tbody);

    for (let row of tableData.rows) {
        const tr = document.createElement("tr");
        tr.setAttribute("data-id", row.id);
        tbody.appendChild(tr);
        projectsTableRowView.render(tr, JSON.stringify(row), tableHandlers);
    }
}

function update(){
}

function deleteRowById(table, rowId) {
    const tr = table.querySelector(`tr[data-id="${rowId}"]`);
    console.log(rowId);
    if (tr) {
        tr.remove();
    }
}

export { render, update, deleteRowById };