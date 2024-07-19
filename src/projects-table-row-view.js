import * as tableRow from "./table-row";


function render(tr, rowJson, rowHandlers) {
    const row = JSON.parse(rowJson);

    const cellsData = [
        {
            tag: "td",
            classes: ["select"],
            attribute: {},
            text: null,
            contentHtml: `<input type="checkbox" name="select" value="${row.id}">`
        },
        {
            tag: "td",
            classes: ["name", "title"],
            attribute: { scope: "row" },
            text: null,
            contentHtml: `<a>${row.name}</a>`
        },
        {
            tag: "td",
            classes: ["todos",],
            attribute: {},
            text: null,
            contentHtml: `<a>${row.todos}</a>`
        },
        {
            tag: "td",
            classes: ["done",],
            attribute: {},
            text: null,
            contentHtml: `<a>${row.done}</a>`
        },
        {
            tag: "td",
            classes: ["overdue",],
            attribute: {},
            text: null,
            contentHtml: `<a>${row.overdue}</a>`
        },
        {
            tag: "td",
            classes: ["progress",],
            attribute: {},
            text: null,
            contentHtml: `<a>${row.progress}</a>`
        },
        {
            tag: "td",
            classes: ["progress-bar",],
            attribute: {},
            text: "",
            contentHtml: null
        },
    ]

    const handlers = [];

    tableRow.render(tr, JSON.stringify(cellsData), handlers);
}

function update(tr, rowJson) {
    const row = JSON.parse(rowJson);
    tr.querySelector(".name a").textContent = row.name;
    tr.querySelector(".todos a").textContent = row.todos;
    tr.querySelector(".done a").textContent = row.done;
    tr.querySelector(".overdue a").textContent = row.overdue;
    tr.querySelector(".progress").textContent = row.progress;
}

export { render, update };