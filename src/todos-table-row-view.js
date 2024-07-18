import parseHtml from "./parse-html.js";
import * as statusButton from "./todo-status-button-view.js";

let handlers;

function render(tr, rowJson, rowHandlers){
    handlers = rowHandlers;

    const row = JSON.parse(rowJson);
    tr.classList.add(row.priority);

    let cell = document.createElement("td");
    cell.classList.add("select");
    cell.appendChild(parseHtml(`
        <input type="checkbox" name="select" value="${row.id}"></input>
        `));
    tr.appendChild(cell);

    cell = document.createElement("th");
    cell.classList.add("title");
    cell.setAttribute("scope", "row");
    cell.appendChild(parseHtml(`
        <a>${row.title}</a>
        `));
    tr.appendChild(cell);

    cell = document.createElement("td");
    cell.classList.add("due-date");
    cell.textContent = row.dueDate;
    tr.appendChild(cell);

    cell = document.createElement("td");
    cell.classList.add("priority");
    cell.textContent = row.priority;
    tr.appendChild(cell);

    cell = document.createElement("td");
    cell.classList.add("status");    
    const button = document.createElement("button");
    cell.appendChild(button);
    statusButton.render(button, row.done, handlers.clickStatusButton);
    tr.appendChild(cell);

    cell = document.createElement("td");
    cell.classList.add("project");
    cell.appendChild(parseHtml(`
        <a data-projectId="${row.projectId}">${row.project}</a>
        `));
    tr.appendChild(cell);

    tr.querySelector(".title a").addEventListener(
        "click",
        handlers.clickTitleLink
    );

    tr.querySelector(".project a").addEventListener(
        "click",
        handlers.clickProjectLink
    );
}

function update(tr, rowJson){
    const rowData = JSON.parse(rowJson);
    setRowPriority(tr, rowData.priority);
    tr.querySelector(".title a").textContent = rowData.title;
    tr.querySelector(".due-date").textContent = rowData.dueDate;
    tr.querySelector(".priority").textContent = rowData.priority;

    const button = tr.querySelector(".status button");
    statusButton.toggle(button);

    tr.querySelector(".project a").textContent = rowData.project;
}

function setRowPriority(tr, priority){
    tr.classList.remove("do");
    tr.classList.remove("schedule");
    tr.classList.remove("delegate");
    tr.classList.remove("eliminate");
    tr.classList.add(priority);
}


export {render, update};