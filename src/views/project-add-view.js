import * as modalView from "./modal-view";
import parseHtml from "../tools/parse-html";

const template = `
    <form name="projectAdd">
        <label for="name">
            <span>Name<span class="required">*</span></span>
            <input type="text" name="name" id="name" 
                required 
                maxlength="50"
                placeholder="What's your project? (Required, keep it under 50 characters)">
        </label>
        <div class="button-wrapper">
            <button type="button" class="cancel">Cancel</button>
            <button type="submit">Submit</button>
        </div>
    </form>
`

function render(content, formJson, formHandlers) {
    let dialog = content.querySelector("dialog");
    if (dialog !== null) {
        dialog.textContent = "";
    } else {
        dialog = document.createElement("dialog");
        content.appendChild(dialog);
    }
    
    const formData = JSON.parse(formJson); // For future new features
    content.appendChild(dialog)
    modalView.render(dialog, "New Project", formHandlers);

    const form = parseHtml(template);
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
            formHandlers.clickSubmitButton(form.name.value);
        }
    )

    


}

export {render};