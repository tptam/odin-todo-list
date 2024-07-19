function render(parent, rate, step = 5, blockRatio = 0.6, color = "black") {
    const percent = Math.round(rate * 100);
    const blockN = Math.floor(percent / step);
    const blockWidth = step * blockRatio;

    // createElement does not work with SVG elements. instead:
    const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");

    svg.setAttribute("viewBox", "0, 0, 100, 25");
    svg.setAttribute("fill", color);
    parent.appendChild(svg);

    for (let i = 0; i < blockN; i++) {
        const block = document.createElementNS("http://www.w3.org/2000/svg", "rect");
        block.setAttribute("width", blockWidth);
        block.setAttribute("height", 25);
        block.setAttribute("x", i * step);
        block.setAttribute("y", 0);
        svg.appendChild(block);
    }
}

export { render }


