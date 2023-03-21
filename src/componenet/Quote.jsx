import React, { useState, useEffect } from "react";
import axios from "axios";

function Quote() {
  const [quote, setQuote] = useState({ text: "", author: "" });
  const [allQuotes, setAllQuotes] = useState([]);


//  quote api   https://type.fit/api/quotes
  // Fetch all quotes on initial render
     useEffect(()=>{
        axios
        .get("https://type.fit/api/quotes")
        .then((response)=>{
            setAllQuotes(response.data);
        })
        .catch((error)=>console.log(error))
        },[])

     
   

  // Fetch a random quote from all quotes
  function getQuote() {
    const randomNumber = Math.floor(Math.random() * allQuotes.length);
    const text = allQuotes[randomNumber].text;
    const author = allQuotes[randomNumber].author;

    setQuote({ text, author });
  }

  return (
    <div className="App card"style={{"width": "50rem","margin":"200px auto 200px auto","backgroundColor":"grey","padding":"30px","borderRadius":"10px","color":"white"}}>
        <div class="card-body">
      <p><b>"{quote.text}"</b></p>
      <p><i>-{quote.author}</i></p>

      <button onClick={getQuote} className="btn btn-primary">New quote</button>
      </div>
    </div>
  );
}

export default Quote;