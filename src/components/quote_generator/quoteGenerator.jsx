
import { useState, useRef, useContext } from "react";

import { set_rgb_color } from "./utils.js";
import { colorContext } from "./context.js";
function Quote({ quote }) {
    const color = useContext(colorContext);
    return <>
        <div style={{ "color": color }} className="quote_content_wrapper">
            <h1 id="text"><span className="quote_symbol">"</span>{quote.quote}<span className="quote_symbol">"</span></h1>
            <p id="author">- {quote.character}</p>
        </div>
    </>
}

function QuoteGenerator(props) {

    let button_ref = useRef(null);
    let [currentQuote, setCurrentQuote] = useState(() => {
        return props.quotes[Math.floor(Math.random() * props.quotes.length)];
    });

    function generate_new_quote() {
        const color = set_rgb_color()
        document.body.style.cssText = `background: ${color}; color: ${color}`;
        setCurrentQuote(props.quotes[Math.floor(Math.random() * props.quotes.length)]);
        props.colorChange(color);
    }


    return <>
        <h1 className="quote_header">Quotes from The Simpsons</h1>
        <div className="wrapper">
            <div id="quote-box">
                <Quote quote={ currentQuote } />
                <div className="button_controls">
                    <a id="tweet_quote" onMouseOver={
                        (e) => {
                            const query_string = encodeURIComponent(
                                `"${currentQuote.quote}" - ${currentQuote.character}`
                            ).replace(" ", "%20");
                            console.log(query_string);
                            e.currentTarget.setAttribute(
                                "href", `https://twitter.com/intent/tweet?text=${query_string}`
                            )
                        }
                    }><img alt="Tweet quote to X" src="/logo-black.png" /></a>
                    <button ref={ button_ref } onClick={generate_new_quote} type="button" id="new_quote" aria-label="View a new quote">New Quote</button>
                </div>
            </div>
        </div>
    </>
}

export { Quote, QuoteGenerator };