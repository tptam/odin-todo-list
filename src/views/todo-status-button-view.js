import parseHtml from "../tools/parse-html";

function render(button, buttonJson, handler){
    const buttonData = JSON.parse(buttonJson);
    button.classList.add("toggle");
    button.value = buttonData.done ? "on" : "off";
    button.append(parseHtml(`<span>${buttonData.done ? "Done" : "Not Yet"}</span>`));
    button.append(parseHtml(`
        <svg viewBox="0, 0, 10, 10" xmlns="http://www.w3.org/2000/svg" fill="#fafafa">
            <circle cx="5" cy="5" r="4"/>
        </svg>
    `));
    button.addEventListener(
        "click",
        event => {
            handler(button, buttonData.id);
            event.preventDefault();
        }
    );
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