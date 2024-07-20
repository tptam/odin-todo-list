import { format } from "date-fns";
import * as modalView from "./modal-view";
import * as todoFormView from "./todo-form-view";

function render(content, formJson, formHandlers) {
    const dialog = document.createElement("dialog");
    content.appendChild(dialog)
    modalView.render(dialog, "New ToDo Task", formHandlers);
    todoFormView.render(dialog, formJson, formHandlers);
    dialog.querySelector("form").setAttribute("name", "todoAdd");
}

export { render };
