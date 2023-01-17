import React, {useState} from "react";

import { useEffect } from "react";


function Quotes() {
const [quote, setQuote]=useState()

    const fetchQuotes = async () => {
        const response = await fetch("https://quotes.rest/qod?language=en");
        const json = await response.json();

        if (response.ok) {
         
            setQuote(json.contents.quotes[0]);
            console.log("quote:", json);
        }
    };
    useEffect(() => {
        fetchQuotes();
    }, []);


  

  return (
    <div className="flex justify-center">
     
     <div class="max-w-4xl text-gray-800 bg-white bg-opacity-10 mt-8 px-8 rounded-lg shadow">
     <div class="mt-4 h-3 text-5xl text-left text-gray-600 font-bold font-serif">“</div>

         <h3 className="mt-4 text-left text-lg">{quote?.quote}</h3>
         <div class="h-3 text-5xl text-right text-gray-600 font-bold font-serif">”</div>

          <p className="m-t4 text-sm text-left">{quote?.author}</p> 
      
          </div>
     
    </div>
  );
}

export default Quotes;
