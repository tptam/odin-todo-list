import parseHtml from "./parse-html";

let handlers;

function render(content, tableJson, tableHandlers) {
    handlers = tableHandlers;
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
        todosTableView.render(table, JSON.stringify(tableData), handlers);
    }

    const addButton = parseHtml(
        '<button class="add project">+</button>'
    );
    content.appendChild(addButton);

    addButton.addEventListener(
        "click",
        handlers.clickAddButton
    )
}

function update() {

}

export {render, update};