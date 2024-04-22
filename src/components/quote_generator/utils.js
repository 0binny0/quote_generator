
function set_rgb_color() {
    return `rgb(${new Array(0, 1, 2).map(
        (element) => Math.floor(Math.random() * 256)
    ).join(" ")})`;
}

async function fetch_quotes() {
    return await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=20"
    ).then(response => response.json());
}


export { set_rgb_color, fetch_quotes };