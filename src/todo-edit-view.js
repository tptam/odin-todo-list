import * as modalView from "./modal-view";
import * as todoFormView from "./todo-form-view";
import * as statusButtonView from "./todo-status-button-view"

function render(content, formJson, formHandlers) {
    const formData = JSON.parse(formJson);
    const dialog = document.createElement("dialog");
    content.appendChild(dialog)
    modalView.render(dialog, "Edit ToDo Task", formHandlers);
    todoFormView.render(dialog, formJson, formHandlers);

    const form = dialog.querySelector("form");
    form.setAttribute("name", "todoEdit");

    const title = form.title;
    const dueDate = form.dueDate;
    const priority = form.priority;
    const urgent = form.urgent;
    const important = form.important;
    const description = form.description;
    const project = form.project;

    const button = document.createElement("button");
    button.classList.add("status");
    statusButtonView.render(
        button, 
        JSON.stringify({
            id: formData.todo.id,
            done: formData.todo.done,
        }), 
        formHandlers.clickStatusButton
    );
    form.insertBefore(button, dueDate.parentNode);
}

export { render };
