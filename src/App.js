import React, { useState, useRef, useEffect } from 'react';
import './App.css';

function App() {

  console.log("Entering function App");

  const [quote, setQuote] = useState([]);
  const [db, setDb] = useState(0);

  // Similar to instance variable in a class.
  const indx = useRef(1);

  /**
   * Similar to componentDidMount and componentDidUpdate.
   * 
   * Warning:  The effect hook runs when the component mounts 
   * but also when the component updates. Because we are setting 
   * the state after every data fetch, the component updates and 
   * the effect runs again. It fetches the data again and again. 
   * That's a bug and needs to be avoided. We only want to fetch 
   * data when the component mounts. That's why you can provide 
   * an empty array as second argument to the effect hook to avoid 
   * activating it on component updates but only for the 
   * mounting of the component.
   */

  useEffect(() => {
    console.log("fetch");
    fetch("https://type.fit/api/quotes")
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(JSON.stringify(data));
        setDb(data);  // Data is an array of structure that conatins text and author
        setQuote(data[0]);  // Init the quotes to the first element
      });
  }, []);

  return (
    <div className="container">
      <h1 className="title">Random Quote Generator</h1>

      <div className="quote">
        "{quote.text}"
      </div>

      <div className="author">{quote.author}</div>
      <div className="center">
        <button className="button" onClick={() => {
          setQuote(db[indx.current]);
          indx.current = indx.current + 1;
          console.log("Index is now " + indx.current);
        }}>
          Get a new Quote
      </button>
      </div>

    </div>
  );
}

export default App;
