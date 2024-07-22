import * as modalView from "./modal-view";
import parseHtml from "./parse-html";


function render(content, formJson, formHandlers) {
    let dialog = content.querySelector("dialog");
    if (dialog !== null) {
        dialog.textContent = "";
    } else {
        dialog = document.createElement("dialog");
    }

    const formData = JSON.parse(formJson);
    content.appendChild(dialog)
    modalView.render(dialog, "Project", formHandlers);

    dialog.appendChild(parseHtml(`
        <div class="project single-display">
            <div class="name row">
                <div class="label">
                    Name
                </div>
                <div class="data">${formData.project.name}</div>
            </div>
            <form>
                <button class="cancel">Cancel</button>
                <button class="edit">Edit</button>
            </form>
        </div>
    `));

    dialog.querySelector("button.cancel").addEventListener(
        "click",
        event => {
            event.preventDefault();
            formHandlers.clickCancelButton();
        }
    );

    dialog.querySelector("button.edit").addEventListener(
        "click",
        (event) => {
            event.preventDefault();
            formHandlers.clickEditButton(formData.project.id);
        }
    );
}

export { render };