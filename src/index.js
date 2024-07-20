
import * as view from "./view.js";
import * as model from "./model.js"
// import Service from "./service.js";
import Controller from "./controller.js";

import "./style.css";


const controller = new Controller(view, model);

controller.init();
controller.displayTodoAddModal();

// controller.init();

// const form = document.querySelector("dialog");
// form.showModal();