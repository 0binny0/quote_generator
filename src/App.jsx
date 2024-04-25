import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'

import { QuoteGenerator } from "./components/quote_generator/quoteGenerator.jsx";
import {fetch_quotes, generate_quote} from "./components/quote_generator/utils.js";



function App() {
    const [storedQuotes, setStoredQuotes] = useState(null);

    useEffect(
        () => {
            (
                async () => {
                    const received_quotes = await fetch_quotes();
                    setStoredQuotes(received_quotes);
                }
            )()
        }
    , [storedQuotes]);
    
    return storedQuotes && <QuoteGenerator quotes={ storedQuotes }  />
}

export default App
