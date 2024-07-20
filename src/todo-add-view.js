import parseHtml from "./parse-html";
import * as modalView from "./modal-view";

function render(content, formJson, formHandlers){
    const formData = JSON.parse(formJson);
    const dialog = document.createElement("dialog");
    content.appendChild(dialog)
    modalView.render(dialog, "New ToDo Task", formHandlers);
}

function update(){

}

export {render, update}