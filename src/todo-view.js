import * as modalView from "./modal-view";
import * as todoFormView from "./todo-form-view";
import * as statusInputView from "./todo-status-input-view";
import parseHtml from "./parse-html";
import { isBefore } from "date-fns";

function render(content, formJson, formHandlers) {
    const formData = JSON.parse(formJson);
    const dialog = document.createElement("dialog");
    content.appendChild(dialog)
    modalView.render(dialog, "ToDo Task", formHandlers);
    todoFormView.render(dialog, formJson, formHandlers);

    const form = dialog.querySelector("form");
    form.setAttribute("name", "todo");

    // Add Status (done)
    const statusWrapper = parseHtml(`
        <div class="status-wrapper">
            <div class="label">Status</div>
        </div>>`
    );
    const statusInputWrapper = document.createElement("div");
    statusWrapper.appendChild(statusInputWrapper);
    statusInputView.render(statusInputWrapper, JSON.stringify(formData.todo), () => { });
    form.insertBefore(statusWrapper, form.dueDate.parentNode);

    // Populate other data
    form.title.value = formData.todo.title;
    form.dueDate.value = formData.todo.dueDate;
    form.priority.value = formData.todo.priority;
    form.description.value = formData.todo.description;
    form.project.value = formData.todo.projectId;
    setPriorityCheckbox(form, form.priority.value);

    // Change buttons
    const submitButton = form.querySelector("button[type='submit']"); 
    const editButton = parseHtml("<button class='edit'>Edit</button>");
    const deleteButton = parseHtml("<button class='delete'>Delete</button>");
    submitButton.parentNode.appendChild(deleteButton);
    submitButton.parentNode.appendChild(editButton);
    submitButton.remove();

    editButton.addEventListener(
        "click",
        formHandlers.clickEditButton
    );
    deleteButton.addEventListener(
        "click",
        formHandlers.clickDeleteButton
    );
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
    priorityDisply.textContent = priority;
}

export { render };
