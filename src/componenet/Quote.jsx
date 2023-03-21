import React, { useState, useEffect } from "react";
import axios from "axios";

function Quote() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [allQuotes, setAllQuotes] = useState([]);

  console.log(allQuotes);
  // Fetch all quotes on initial render
  useEffect(() => {
    axios
      .get("https://type.fit/api/quotes")
      .then((res) => {
        setAllQuotes(res.data)
    }
      )
      .catch((err) => console.error(err));
  }, []);

  console.log(allQuotes)

  // Fetch a random quote from all quotes
  function getQuote() {
    const randomNumber = Math.floor(Math.random() * allQuotes.length);
    const text = allQuotes[randomNumber].text;
    const author = allQuotes[randomNumber].author;

    setQuote({ text, author });
  }

  return (
    <div className="App">
      <p><b>"{quote.text}"</b></p>
      <p><i>-{quote.author}</i></p>

      <button onClick={getQuote}>New quote</button>
    </div>
  );
}

export default Quote;