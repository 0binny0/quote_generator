import {useEffect, useRef } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { QuoteGenerator } from "./components/quote_generator/quoteGenerator.jsx";
import { fetch_quotes } from "./components/quote_generator/utils.js";

function App() {

    const quotes_ref = useRef(null);

    useEffect(() => {
        (
            async () => {
                const quotes = fetch_quotes();
                quotes_ref.current = quotes;
            }
        )()
    } , []);

    return <>
        <QuoteGenerator quote={generate_quote(quotes_ref.current)} />
    </>
}

export default App
