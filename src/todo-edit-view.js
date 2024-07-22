import * as modalView from "./modal-view";
import * as todoFormView from "./todo-form-view";
import * as statusInputView from "./todo-status-input-view";
import parseHtml from "./parse-html";
import { isBefore } from "date-fns";

function render(content, formJson, formHandlers) {
    const formData = JSON.parse(formJson);
    let dialog = document.querySelector("dialog");
    if (dialog === null) {
        dialog = document.createElement("dialog");
        content.appendChild(dialog)
    } else {
        dialog.textContent = "";
    }
    modalView.render(dialog, "Edit ToDo Task", formHandlers);
    todoFormView.render(dialog, formJson, formHandlers);

    const form = dialog.querySelector("form");
    form.setAttribute("name", "todoEdit");

    // Add Status (done)
    const statusWrapper = parseHtml(`
        <div class="status-wrapper">
            <div class="label">Status</div>
        </div>>`
    );
    const statusInputWrapper= document.createElement("div");
    statusWrapper.appendChild(statusInputWrapper);
    statusInputView.render(statusInputWrapper, JSON.stringify(formData.todo), ()=>{});
    form.insertBefore(statusWrapper, form.dueDate.parentNode);

    // Populate other data
    form.title.value = formData.todo.title;
    form.dueDate.value = formData.todo.dueDate;
    form.priority.value = formData.todo.priority;
    form.description.value = formData.todo.description;
    form.project.value = formData.todo.projectId;
    setPriorityCheckbox(form, form.priority.value);

    // Alert for overdue date
    if (formData.todo.dueDate !== "") {
        const dueDateObj = new Date(formData.todo.dueDate);
        const today = new Date();
        if (isBefore(dueDateObj, today)){
            const alert = document.createElement("span");
            alert.classList.add("alert");
            alert.textContent = "This task is overdue. Set a new date.";
            form.dueDate.parentNode.appendChild(alert);        
        }
    }

    form.addEventListener(
        "submit",
        (e) => {
            e.preventDefault();
            formHandlers.clickSubmitButton(
                formData.todo.id,
                form.title.value,
                form.dueDate.value,
                form.priority.value,
                form.description.value,
                form.project.value,
                form.done.checked,
            );
        }
    )

    // Prevent submit by enter key for accidental submit
    // Is there any elegant way to do this?
    const inputs = [
        form.title, form.dueDate, form.done, form.urgent, form.important, form.description
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
}

function setPriorityCheckbox(form, priority) {
    const matrix = {
        do: {
            urgent: true,
            important: true
        },
        schedule: {
            urgent: false,
            important: true
        },
        delegate: {
            urgent: true,
            important: false
        },
        eliminate: {
            urgent: false,
            important: false
        },
    };
    form.urgent.checked = matrix[priority].urgent;
    form.important.checked = matrix[priority].important;

    const priorityDisply = form.querySelector(".priority-display");
    priorityDisply.setAttribute("data-value", priority);
    priorityDisply.textContent = priority ;
}

export { render };
