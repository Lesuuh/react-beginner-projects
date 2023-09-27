import { useEffect, useState } from "react";
import "./App.css";

function App() {
  const [quotes, setQuotes] = useState([]);
  const [quote, setQuote] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  function getRandomQuote(quotes) {
    return quotes[Math.floor(Math.random() * quotes.length)];
  }

  useEffect(() => {
    fetch("https://type.fit/api/quotes")
      .then((res) => res.json())
      .then((data) => {
        if (data && data.length > 0) {
          setQuotes(data);
          setQuote(getRandomQuote(quotes));
          setIsLoading(false);
        } else {
          setError("No quotes found");
          setIsLoading(false);
        }
      })
      .catch(() => {
        setError("An error occurred while loading the page");
        setIsLoading(false);
      });
  },[]);

  function getNewQuotes() {
    setQuote(getRandomQuote(quotes));
  }

  return (
    <>
      <div className="quote-wrapper">
        {isLoading ? (
          <p>Loading...</p>
        ) : error ? (
          <p>{error}</p>
        ) : (
          <>
            <button onClick={() => getNewQuotes()}>Next Quote</button>
            {quote && (
              <>
                <p>{quote.text}</p>
                <small>
                  <i>- {quote.author || "Unknown"}</i>
                </small>
              </>
            )}
          </>
        )}
      </div>
    </>
  );
}

export default App;
