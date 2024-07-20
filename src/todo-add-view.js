import parseHtml from "./parse-html";
import * as modalView from "./modal-view";

function render(content, formJson, formHandlers){
    const formData = JSON.parse(formJson);
    modalView.render(content, "New ToDo Task", formHandlers);
}

function update(){

}

export {render, update}