
import { useEffect, useState, forwardRef, useRef } from "react";

import { set_rgb_color, generate_quote } from "./utils.js";
const Quote = forwardRef(function Quote({ quote }, ref) {
    return <>
        <div ref={ref} className="quote_content_wrapper">
            <h1 id="text"><span className="quote_symbol">"</span>{quote.quote}<span className="quote_symbol">"</span></h1>
            <p id="author">- {quote.character}</p>
        </div>
    </>
});

function QuoteGenerator({ quotes }) {

    let quote_text_ref = useRef(null);
    let quote = generate_quote(quotes);
    let [current_quote, setCurrentQuote] = useState(quote);

    function generate_new_quote() {
        //pass
    }

    return <>
        <div className="wrapper">
            <div id="quote-box">
                <Quote ref={ quote_text_ref } quote={ current_quote } />
                <div className="button_controls">
                    <a href=""><img src="/logo-black.png" /></a>
                    <button onClick={generate_new_quote} type="button" id="new_quote" aria-label="View a new quote">New Quote</button>
                </div>
            </div>
        </div>
    </>
};

export { Quote, QuoteGenerator };