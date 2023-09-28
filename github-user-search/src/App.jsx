import { useState } from "react";
import "./App.css";
import Form from "./components/Form";
import Users from "./components/Users";
import Header from "./components/Header";

const API_URL = "https://api.github.com";

async function fetchResult(query) {
  try {
    const response = await fetch(`${API_URL}/search/users?q=${query}`);
    if (!response.ok) {
      console.log("error");
    }
    const data = await response.json();

    return data.items;
  } catch (err) {
    console.log("error");
  }
}

function App() {
  const [query, setQuery] = useState("");
  const [result, setResult] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const [empty, setEmpty] = useState(null);

  async function onSearchSubmit(event) {
    event.preventDefault();
    setIsLoading(true);
    setError(null);
    try {
      const results = await fetchResult(query);
      setResult(results);
      if (results.length === 0) {
        setError("No users Found");
      } else {
        setError(null);
      }
    } catch (err) {
      setError("an error occured");
    } finally {
      setIsLoading(false);
    }
  }

  function onSearchChange(event) {
    // if(event.target.value === 0){
    //   setEmpty("search your legend")
    // }
    setQuery(event.target.value);
  }

  return (
    <>
      <div>
        <Header />
        <p className="subtext">Discover and explore GitHub users</p>
        <Form
          onChange={onSearchChange}
          onSubmit={onSearchSubmit}
          value={query}
        />
        <div className="users-wrapper">
          {/* {empty && <p>search your legend</p>} */}
          {isLoading && <p>Loading...</p>}
          {error && <p>{error}</p>}
          {result.length === 0 && !error && <p>No users found</p>}
          {result.map((user) => (
            <Users
              key={user.login}
              avatar={user.avatar_url}
              url={user.html_url}
              type={user.type}
              username={user.login}
              score={user.score}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
