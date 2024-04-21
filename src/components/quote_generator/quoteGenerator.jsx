
function Quote({ quote }) {
    return <>
        <div className="quote_content_wrapper">
            <h1 id="text">{quote.text}</h1>
            <p id="author">- {quote.character}</p>
        </div>
    </>
}

function QuoteGenerator({ quote }) {
    return <>
        <div id="quote-box">
            <Quote quote={ quote } />
            <div>
                <a href=""><img src="/logo-black.png" /></a>
                <button type="button" id="new_quote" aria-label="View a new quote">New Quote</button>
            </div>
        </div>
    </>
}

export { Quote, QuoteGenerator };