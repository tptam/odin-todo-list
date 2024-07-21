import parseHtml from "./parse-html";
import { format } from "date-fns";
import ConvertIcon from "./images/triangle.svg";

const template = `
    <form>
        <label for="title"><span>Title<span class="required">*</span></span>
        <input type="text" name="title" id="title"
            required
            maxlength="100"
            placeholder="What's your task? (Required, keep it under 100 characters)">
        </label>
        <label for="due-date">Due Date
        <input type="date" name="dueDate" id="due-date" 
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
                <div class="priority-display" data-value="eliminate">eliminate</div>
                <a href="https://en.wikipedia.org/wiki/Time_management#The_Eisenhower_Method" target="_blank" rel="noopener noreferrer">
                    What does this mean?
                    <span class="more">Learn more about Eisenhower Matrix!</span>
                </a>
                <input type="hidden" name="priority" id="priority" value="eliminate">
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
            <button type="button" class="cancel">Cancel</button>
            <button type="submit">Submit</button>
        </div>
    </form>
`;

function render(parent, formJson, formHandlers) {
    const formData = JSON.parse(formJson);
    console.table(formData);

    const form = parseHtml(template);
    parent.appendChild(form);
    const select = form.querySelector("select");
    formData.projects.forEach(
        project => {
            const option = document.createElement("option");
            option.value = project.id;
            option.textContent = project.name;
            select.appendChild(option);
        }
    )

    const cancelButton = form.querySelector(".cancel");
    cancelButton.addEventListener(
        "click",
        event => {
            event.preventDefault();
            formHandlers.clickCancelButton();
        }
    );


    // Prevent submit by enter key for accidental submit
    // Is there any elegant way to do this?
    const inputs = [
        form.title, form.dueDate, form.urgent, form.important, form.description
    ];

    inputs.forEach(
        (elem, index) => {
            if (elem !== form.description) {
                elem.addEventListener(
                    "keydown",
                    (e) => {
                        if (e.key === "Enter") {
                            inputs[index + 1].focus();
                            e.preventDefault();
                        }
                    }
                )
            }
        }
    )

    const checkboxes = form.querySelectorAll("#urgent, #important");
    checkboxes.forEach(
        box => addEventListener(
            // Somehow "click" event fires when user interacts with other inputs
            // Use "change" instead
            "change", updatePriority
        )
    )

    const submitButton = form.querySelector("button[type='submit'");
    form.addEventListener(
        "submit",
        (e) => {
            e.preventDefault();
            formHandlers.clickSubmitButton(
                form.title.value,
                form.dueDate.value,
                form.priority.value,
                form.description.value,
                form.project.value,
            );
        }
    )
}

function updatePriority() {
    const priority = document.querySelector("#priority");
    const priorityDisplay = document.querySelector(".priority-display");
    const urgent = document.querySelector("#urgent").checked;
    const important = document.querySelector("#important").checked;
    let level;
    if (urgent && important) {
        level = "do";
    } else if (!urgent && important) {
        level = "schedule"
    } else if (urgent && !important) {
        level = "delegate"
    } else {
        level = "eliminate"
    }
    priority.value = level;
    priorityDisplay.textContent = level;
    priorityDisplay.setAttribute("data-value", level);
}


export {render};