import * as modalView from "./modal-view";
import * as todoFormView from "./todo-form-view";

function render(content, formJson, formHandlers) {
    const dialog = document.createElement("dialog");
    content.appendChild(dialog)
    modalView.render(dialog, "New ToDo Task", formHandlers);
    todoFormView.render(dialog, formJson, formHandlers);
    dialog.querySelector("form").setAttribute("name", "todoAdd");

    const form = document.todoAdd;
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
}

export { render };
