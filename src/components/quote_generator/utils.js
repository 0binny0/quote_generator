
function set_rgb_color() {
    return `rgb(${new Array(0, 1, 2).map(
        (element) => Math.floor(Math.random() * 256)
    ).join(" ")})`;
}

export { set_rgb_color };