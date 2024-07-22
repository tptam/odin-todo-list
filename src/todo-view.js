import * as modalView from "./modal-view";
import * as todoFormView from "./todo-form-view";
import * as statusInputView from "./todo-status-input-view";
import parseHtml from "./parse-html";

function render(content, formJson, formHandlers) {
    const formData = JSON.parse(formJson);
    const dialog = document.createElement("dialog");
    content.appendChild(dialog)
    modalView.render(dialog, "ToDo Task", formHandlers);
    dialog.appendChild(parseHtml(`
        <div class="todo-display">
            <div class="title row">
                <div class="label">Title</div>
                <div class="data">${formData.todo.title}</div>
            </div>
            <div class="status row">
                <div class="label">Status</div>
                <div class="data"></div>
            </div>
            <div class="due-date row">
                <div class="label">Due Date</div>
                <div class="data">${formData.todo.dueDate}</div>
            </div>
            <div class="priority row">
                <div class="label">Priority</div>
                <div class="data">
                    <div class="priority-display" data-value="${formData.todo.priority}">${formData.todo.priority}</div>
                    <a href="https://en.wikipedia.org/wiki/Time_management#The_Eisenhower_Method" target="_blank" rel="noopener noreferrer">
                        What does this mean?
                        <span class="more">Learn more about Eisenhower Matrix!</span>
                    </a>                
                </div>
            </div>
            <div class="description row">
                <div class="label">Description</div>
                <div class="data">${formData.todo.description}</div>
            </div>
            <div class="project row">
                <div class="label">Project</div>
                <div class="data">${formData.todo.projectName}</div>
            </div>
            <form>
                <button class="cancel">Cancel</button>
                <button class="edit">Edit</button>
            </form>
        </div>
    `));


    // Add status component
    const statusWrapper = document.createElement("div");
    statusWrapper.classList.add("status-input-wrapper");
    statusInputView.render(statusWrapper, JSON.stringify(formData.todo), () => { });
    statusWrapper.querySelector("input").disabled = true;
    dialog.querySelector(".status>.data").appendChild(statusWrapper);

    dialog.querySelector("button.edit").addEventListener(
        "click",
        (event) => {
            event.preventDefault();
            formHandlers.clickEditButton(formData.todo.id);
        }
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
