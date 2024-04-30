import { useState, useEffect, useCallback } from 'react'
import './App.css'

import { QuoteGenerator } from "./components/quote_generator/quoteGenerator.jsx";
import {fetch_quotes, set_rgb_color} from "./components/quote_generator/utils.js";
import { colorContext } from "./components/quote_generator/context.js";

let quotes_populated = false;
function App() {
    let [storedQuotes, setStoredQuotes] = useState(null);
    let [color, setColor] = useState(set_rgb_color());

    useEffect(() => {
        document.body.style.cssText = `background: ${color};`;
        if (!quotes_populated) {
            quotes_populated = true;
            (
                async () => {
                    const received_quotes = await fetch_quotes();
                    setStoredQuotes(received_quotes);
                }
            )()
        }
    } , []);

    return storedQuotes && <colorContext.Provider value={color}>
        <QuoteGenerator quotes={ storedQuotes } colorChange={setColor}/>
    </colorContext.Provider>
}

export default App
