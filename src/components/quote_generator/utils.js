
function set_rgb_color() {
    return `rgb(${[0, 1, 2].map(
        () => Math.floor(Math.random() * 256)
    ).join(" ")})`;
}

async function fetch_quotes() {
    return await fetch(
        "https://thesimpsonsquoteapi.glitch.me/quotes?count=20"
    ).then(response => response.json());
}

function generate_quote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length + 1)]
}


export { set_rgb_color, fetch_quotes, generate_quote };