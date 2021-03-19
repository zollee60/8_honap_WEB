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

  function searchFn() {
    setUrl(`http://api.tvmaze.com/search/shows?q=${search}`);
  }

  return (
    <div className="App">
      <div className="search">
        <input
          type="text"
          placeholder="search for something"
          name="search"
          id="s"
          onChange={(e) => {
            setSearch(e.target.value);
          }}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              searchFn();
            }
          }}
        />

        <div className="button" id="b" onClick={() => searchFn()}>
          SEARCH
        </div>
      </div>
      {data && <GridList data={data} />}
    </div>
  );
}

export default App;
