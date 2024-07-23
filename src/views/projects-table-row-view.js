import * as tableRow from "../table-row";
import * as progressBar from "./project-progress-bar-view";

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
            contentHtml: `<a data-projectId="${row.id}">${row.name}</a>`
        },
        {
            tag: "td",
            classes: ["todos",],
            attribute: {},
            text: null,
            contentHtml: `<a data-projectId="${row.id}">${row.todos}</a>`
        },
        {
            tag: "td",
            classes: ["not-done",],
            attribute: {},
            text: null,
            contentHtml: `<a data-projectId="${row.id}">${row.notDone}</a>`
        },
        {
            tag: "td",
            classes: ["overdue",],
            attribute: {},
            text: null,
            contentHtml: `<a data-projectId="${row.id}">${row.overdue}</a>`
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
            text: null,
            contentHtml: null
        },
    ]

    const handlers = [
        {
            selector: ".name a",
            type: "click",
            func: () => rowHandlers.clickNameLink(row.id),
        },
        {
            selector: ".todos a",
            type: "click",
            func: (event) => rowHandlers.clickTodosLink(row.id)
        },
        {
            selector: ".not-done a",
            type: "click",
            func: (event) => rowHandlers.clickNotDoneLink(row.id)
        },
        {
            selector: ".overdue a",
            type: "click",
            func: (event) => rowHandlers.clickOverdueLink(row.id)
        },
    ];

    tableRow.render(tr, JSON.stringify(cellsData), handlers);

    const progressBarCell = tr.querySelector("td.progress-bar");
    if (progressBarCell !== null) {
        progressBar.render(progressBarCell, row.progressRate);
    }
    progressBarCell.classList.add(
        row.progressRate === 1 ? "complete" :
            row.progressRate >= 0.75 ? "over75" :
                row.progressRate >= 0.50 ? "over50" :
                    row.progressRate >= 0.25 ? "over25" : "under25"
    )
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