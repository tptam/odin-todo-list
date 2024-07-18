import parseHtml from "./parse-html.js";

function render(tr, rowJson, handlers){
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

function update(){

}

export {render, update};