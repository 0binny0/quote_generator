
function Quote({ quote }) {
    return <>
        <div className="quote_content_wrapper">
            <h1 id="text"><span className="quote_symbol">"</span>{quote.text}<span className="quote_symbol">"</span></h1>
            <p id="author">- {quote.character}</p>
        </div>
    </>
}

function QuoteGenerator({ quote }) {
    return <>
        <div className="wrapper">
            <div id="quote-box">
                <Quote quote={ quote } />
                <div className="button_controls">
                    <a href=""><img src="/logo-black.png" /></a>
                    <button type="button" id="new_quote" aria-label="View a new quote">New Quote</button>
                </div>
            </div>
        </div>
    </>
}

export { Quote, QuoteGenerator };