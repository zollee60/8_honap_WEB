import { useState, useEffect } from "react";
import { GridList } from "./components/GridList";

import "./App.css";

function App() {
  const [url, setUrl] = useState("");
  const [data, setData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        console.log(data);
      });
  }, [url]);

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          placeholder="search for something"
          name="search"
          id="s"
          onChange={(e) => setSearch(e.target.value)}
        />

        <div
          className="button"
          id="b"
          onClick={() => setUrl(`http://api.tvmaze.com/search/shows?q=${search}`)}>
          SEARCH
        </div>
      </div>
      {data && <GridList data={data} />}
    </div>
  );
}

export default App;
