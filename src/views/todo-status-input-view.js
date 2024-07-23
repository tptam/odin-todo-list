import parseHtml from "../parse-html";

function render(wrapper, json, changeHandler) {
    wrapper.classList.add("button-like-checkbox-wrapper");
    const data = JSON.parse(json);

    // Unique ID is required for when modal shows over todos view
    const doneId = `done_${crypto.randomUUID()}`;
    const label = parseHtml(`
        <label for="${doneId}"></label>
    `);
    const span = parseHtml(`
        <span>${data.done ? "Done" : "Not Yet"}</span>
    `);
    const checkbox = parseHtml(`
        <input type="checkbox" name="done" id="${doneId}">
    `);
    checkbox.checked = data.done;

    label.appendChild(span);
    label.appendChild(checkbox);

    wrapper.appendChild(label);
    
    checkbox.addEventListener(
        "change",
        () => {
            updateLabel();
            changeHandler(data.id);
        }
    );

    function updateLabel() {
        span.textContent = checkbox.checked ? "Done" : "Not Yet";
    }
}


export {render}
