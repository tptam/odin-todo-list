
import * as view from "./view.js";
import Service from "./service.js";
import Controller from "./controller.js";

import "./style.css";

const service = new Service();
const controller = new Controller(view, service);


controller.init();
controller.displayTodoAddModal();

// controller.init();

// const form = document.querySelector("dialog");
// form.showModal();