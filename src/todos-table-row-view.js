import parseHtml from "./parse-html.js";

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
    cell.appendChild(parseHtml(`
            <button class="toggle" value="${row.done ? "on" : "off"}">
                <span>${row.done ? "Done" : "Not Yet"}</span>
                <svg viewBox="0, 0, 10, 10" xmlns="http://www.w3.org/2000/svg" fill="#fafafa">
                    <circle cx="5" cy="5" r="4"/>
                </svg>
            </button>
        `));
    tr.appendChild(cell);

    cell = document.createElement("td");
    cell.classList.add("project");
    cell.appendChild(parseHtml(`
        <a>${row.project}</a>
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
    tr.querySelector(".status button").addEventListener(
        "click",
        handlers.clickStatusButton
    )
}

function update(tr, rowJson){
    const rowData = JSON.parse(rowJson);
    setRowPriority(tr, rowData.priority);
    tr.querySelector(".title a").textContent = rowJson.title;
    tr.querySelector(".due-date").textContent = rowJson.dueDate;
    tr.querySelector(".priority").textContent = rowJson.priority;
    tr.querySelector(".status span").textContent = rowJson.done ? "Done" : "Not Yet";
    tr.querySelector(".project a").textContent = rowJson.project;
}

function setRowPriority(tr, priority){
    tr.classList.remove("do");
    tr.classList.remove("schedule");
    tr.classList.remove("delegate");
    tr.classList.remove("eliminate");
    tr.classList.add(priority);
}


export {render, update};