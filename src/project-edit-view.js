import * as modalView from "./modal-view";
import parseHtml from "./parse-html";

function render(content, formJson, formHandlers) {
    let dialog = content.querySelector("dialog");
    if (dialog !== null) {
        dialog.textContent = "";
    } else {
        dialog = document.createElement("dialog");
        content.appendChild(dialog);
    }
    const formData = JSON.parse(formJson);
    modalView.render(dialog, "New Project", formHandlers);

    const form = parseHtml(`
        <form name="projectEdit">
            <label for="name">
                Name
                <input type="text" name="name" id="name" 
                    required 
                    maxlength="100"
                    placeholder="What's your project? (Required, keep it under 100 characters)"
                    value="${formData.project.name}"
                >
            </label>
            <div class="button-wrapper">
                <button type="button" class="cancel">Cancel</button>
                <button type="submit">Submit</button>
            </div>
       </form>`);
    dialog.appendChild(form);

    const cancelButton = form.querySelector(".cancel");
    cancelButton.addEventListener(
        "click",
        event => {
            event.preventDefault();
            formHandlers.clickCancelButton();
        }
    );

    form.addEventListener(
        "submit",
        (event) => {
            event.preventDefault();
            formHandlers.clickSubmitButton(formData.project.id, form.name.value);
        }
    )
}

export { render };