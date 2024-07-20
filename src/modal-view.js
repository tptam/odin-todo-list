import parseHtml from "./parse-html";
import CloseIcon from "./images/close.svg";

function render(dialog, title, modalHandlers) {
    const closeButton = parseHtml(`
        <button type="button" class="close">
            <img src="${CloseIcon}" alt="Close">
        </button>
    `);
    const h1 = parseHtml(`<h1>${title}</h1>`);

    closeButton.addEventListener("click", modalHandlers.clickCloseButton);

    dialog.appendChild(closeButton);
    dialog.appendChild(h1);
    dialog.showModal();
}

function update(content, title) {
}

export { render, update }