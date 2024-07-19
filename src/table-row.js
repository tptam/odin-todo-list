import parseHtml from "./parse-html";

export function render(tr, cellsJson, handlers){
    const cellsData = JSON.parse(cellsJson);
    for (let data of cellsData) {
        const cell = document.createElement(data.tag);
        data.classes.forEach(
            val => cell.classList.add(val)
        )
        for (let key in data.attribute) {
            cell.setAttribute(key, data.attribute[key]);
        }

        if (data.text !== null) {
            cell.textContent = data.text;
        }
        
        const child = parseHtml(data.contentHtml);
        if (child !== null) {
            cell.appendChild(child);
        }

        tr.appendChild(cell);
    }

    for (let handler of handlers) {
        const targets = tr.querySelectorAll(handler.selector);
        if (targets.length === 0) {
            return;
        }
        targets.forEach(
            target => target.addEventListener(
                handler.type,
                handler.func
            )
        )
    }
}