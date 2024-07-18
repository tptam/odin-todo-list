import parseHtml from "./parse-html";

function render(button, done, handler){
    button.classList.add("toggle");
    button.value = done ? "on" : "off";
    button.append(parseHtml(`<span>${done ? "Done" : "Not Yet"}</span>`));
    button.append(parseHtml(`
        <svg viewBox="0, 0, 10, 10" xmlns="http://www.w3.org/2000/svg" fill="#fafafa">
            <circle cx="5" cy="5" r="4"/>
        </svg>
    `));
    button.addEventListener("click", handler);
}

function update(button, done){
    button.value = done ? "on" : "off";
    button.querySelector("span").textContent = done ? "Done" : "Not Yet";
}

function toggle(button){
    if (button.value === "on") {
        update(button, false);
    } else {
        update(button, true);
    }
}

export {render, update, toggle}