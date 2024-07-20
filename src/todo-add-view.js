import parseHtml from "./parse-html";
import { format } from "date-fns";
import * as modalView from "./modal-view";
import ConvertIcon from "./images/triangle.svg";

const template = `
    <form>
        <label for="title"><span>Title<span class="required">*</span></span>
        <input type="text" name="title" id="title" required
            placeholder="Task's title (required)">
        </label>
        <label for="due-date">Due Date
        <input type="date" name="due-date" id="due-date" 
            min="${format(new Date(), "yyyy-MM-dd")}">
        </label>
        <div class="priority-wrapper">
            <div class="label">Priority</div>
            <div class="priority-input-wrapper">
                <div class="prompt">This task is...</div>
                <fieldset>
                    <label for="urgent">
                        <input type="checkbox" name="urgent" id="urgent">
                        Urgent
                    </label>
                    <label for="important">
                        <input type="checkbox" name="important" id="important">
                        Important
                    </label>
                </fieldset>
                <img src="${ConvertIcon}">
                <div class="priority-value eliminate">Eliminate</div>
                <a href="https://en.wikipedia.org/wiki/Time_management#The_Eisenhower_Method" target="_blank" rel="noopener noreferrer">
                    What does this mean?
                    <span class="more">Learn more about Eisenhower Matrix!</span>
                </a>
            </div>
        </div>
        <label for="description">
            Description
            <textarea name="description" id="description" rows="3"></textarea>
        </label>
        <label for="project">Project
            <select name="project" id="project">
                <option value="">---Select---</option>
            </select>
        </label>
        <div class="button-wrapper">
            <button class="cancel">Cancel</button>
            <button type="submit">Add</button>
        </div>
    </form>
`;

function render(content, formJson, formHandlers){
    const formData = JSON.parse(formJson);
    const dialog = document.createElement("dialog");
    content.appendChild(dialog)
    modalView.render(dialog, "New ToDo Task", formHandlers);
    const form = parseHtml(template);
    dialog.append(form);

    const select = dialog.querySelector("select");
    formData.projects.forEach(
        project => {
            const option = document.createElement("option");
            option.value = project.id;
            option.textContent =project.name;
            select.appendChild(option);
        }
    )

    const cancelButton = dialog.querySelector(".cancel");
    cancelButton.addEventListener(
        "click", 
        event => {
            event.preventDefault();
            formHandlers.clickCancelButton();
        }
    );
}

function update(){

}

export {render, update}