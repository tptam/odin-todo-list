import parseHtml from "./parse-html";
import * as projectsTableView from "./projects-table-view";


function render(content, tableJson, tableHandlers) {
    const tableData = JSON.parse(tableJson);
    content.innerHTML = "";

    if (tableData.rows.length == 0) {
        content.appendChild(parseHtml(`
            <div class="empty">
                <h1>${tableData.caption}</h1>
                <p>
                    No projects yet. Time to dream big (or take a nap)!
                </p>
            </div>
        `));
    } else {
        const table = document.createElement("table");
        table.classList.add("projects");
        content.appendChild(table);
        projectsTableView.render(table, JSON.stringify(tableData), tableHandlers);
    }

    const addButton = parseHtml(
        '<button class="add project">+</button>'
    );
    content.appendChild(addButton);

    addButton.addEventListener(
        "click",
        tableHandlers.clickAddButton
    )
}

function update(content, tableJson) {
    const table = content.querySelector("table.projects");
    projectsTableView.update(table, tableJson);
}

export {render, update};