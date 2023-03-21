import React, { useState, useEffect } from "react";
// import axios from "axios";

function Quote() {
  const [quote, setQuote] = useState({ text: "A weed is no more than a flower in disguise.", author: "James Lowell" });
  const [allQuotes, setAllQuotes] = useState([]);
  const [col,setCol]=useState("grey");

  const url="https://type.fit/api/quotes"


  //  quote api   https://type.fit/api/quotes
// featch the data with axios  method_1
  // Fetch all quotes on initial render
    //  useEffect(()=>{
    //     axios
    //     .get(url)
    //     .then((response)=>{
    //         setAllQuotes(response.data);
    //     })
    //     .catch((error)=>console.log(error))
    //     },[])


// fetching the data  with out axios method_2
    // useEffect(()=>{
    // fetch(url)
    // .then(response=>response.json())
    // .then(data=>setAllQuotes(data))
    // },[])


//feach the data through differnt way method_3
    // useEffect(() => {
    //     const requrest = new XMLHttpRequest();
    //     requrest.open('GET', url);
    //     requrest.onload = () => {
    //       if (requrest.status === 200) {
    //         setAllQuotes(JSON.parse(requrest.responseText));
    //       }
    //     };
    //     requrest.send();
    //   }, []);
    

//using the async method to feach the data method_4
// useEffect(() => {
//     const fetchData = async () => {
//       const response = await fetch(url);
//       const data = await response.json();
//       console.log(data)
//       setAllQuotes(data);
//     };
//     fetchData();
//   }, []);


//with error handling the method_5
useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(url);
        const data = await response.json();
        setAllQuotes(data);
      } catch (error) {
        console.error(error);
      }
    };
    fetchData();
  }, []);



// random color genrator
function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
      if (color==="#FFFFFF"){
        continue;
      }
    }
    
    return color;
  }

  // Fetch a random quote from all quotes
  function getQuote() {
    const randomNumber = Math.floor(Math.random() * allQuotes.length);
    const text = allQuotes[randomNumber].text;
    const author = allQuotes[randomNumber].author;
    setQuote({ text, author });
    setCol(getRandomColor())
  }

  return (
    <div className="App card"style={{"width": "50rem","margin":"200px auto 200px auto","fontFamily": "cursive","backgroundColor":`${col}`,"padding":"30px","borderRadius":"10px","color":"white"}}>
        <div className="card-body">
      <p><b>"{quote.text}"</b></p>
      <p><i>-{quote.author}</i></p>

      <button onClick={getQuote} className="btn btn-primary">New quote</button>
      </div>
    </div>
  );
}

export default Quote;


