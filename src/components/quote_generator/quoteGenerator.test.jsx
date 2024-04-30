
import { Quote, QuoteGenerator } from "./quoteGenerator.jsx";

import { render, screen } from "@testing-library/react"

test("Verify that a quote is rendered", () => {
     const quote = {text: "Quote title", character: "Quote author"};
     render(<Quote quote={quote}/>);
     const quote_text = screen.getByRole("heading");
     const quote_author = screen.getByRole("paragraph");
     expect(quote_text).toBeInTheDocument();
     expect(quote_text).toHaveTextContent("Quote title");
     expect(quote_author).toBeInTheDocument();
     expect(quote_author).toHaveTextContent("Quote author");
});

test("Verify that buttons to tweet and generate a new quote", () => {
     const quote = {"character": "Me", "text": "To not to be or to be"};
     render(<QuoteGenerator quote={quote} />);
     const current_quote = screen.getByRole("heading");
     const new_quote_button = screen.getByRole("button", {"name": "View a new quote"});
     expect(current_quote).toHaveTextContent(quote.text);
     expect(new_quote_button).toHaveTextContent("New Quote");
});