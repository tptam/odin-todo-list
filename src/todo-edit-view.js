import * as modalView from "./modal-view";
import * as todoFormView from "./todo-form-view";
import * as statusButtonView from "./todo-status-button-view"
import parseHtml from "./parse-html";
import { isBefore } from "date-fns";

function render(content, formJson, formHandlers) {
    const formData = JSON.parse(formJson);
    const dialog = document.createElement("dialog");
    content.appendChild(dialog)
    modalView.render(dialog, "Edit ToDo Task", formHandlers);
    todoFormView.render(dialog, formJson, formHandlers);

    const form = dialog.querySelector("form");
    form.setAttribute("name", "todoEdit");

    const title = form.querySelector("#title");
    const dueDate = form.dueDate;
    const priority = form.priority;
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


    // Add Status (done)
    const doneLabel = parseHtml("<label for='done'></label>");
    doneLabel.textContent = "Status";
    const done = parseHtml("<input type='hidden' name='done' id='done'>");
    done.value = formData.todo.done;
    doneLabel.appendChild(button);
    doneLabel.appendChild(done);

    form.insertBefore(doneLabel, dueDate.parentNode);

    // Populate other data
    title.value = formData.todo.title;
    dueDate.value = formData.todo.dueDate;
    priority.value = formData.todo.priority;
    description.value = formData.todo.description;
    project.value = formData.todo.projectId;
    setPriorityCheckbox(form, priority.value);

    // Alert for overdue date
    const dueDateObj = new Date(formData.todo.dueDate);
    const today = new Date();
    console.log(dueDateObj);
    if (isBefore(dueDateObj, today)){
        const alert = document.createElement("span");
        alert.classList.add("alert");
        alert.textContent = "This task is overdue. Set a new date.";
        dueDate.parentNode.appendChild(alert);        
    }

    form.addEventListener(
        "submit",
        (e) => {
            e.preventDefault();
            formHandlers.clickSubmitButton(
                formData.todo.id,
                title.value,
                dueDate.value,
                priority.value,
                description.value,
                project.value,
                done.value,
            );
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
