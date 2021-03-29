import logo from "./logo.svg";
import "./App.css";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { selectSearchResults, fetchBeers } from "./store/beerSlice";

function App() {
  const [query, setQuery] = useState("");

  const searchRes = useSelector(selectSearchResults);

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const handleClick = () => {
    dispatch(fetchBeers(query));
  };

  return (
    <div>
      <div className="searchBar">
        <form>
          <input type="text" name="query" id="query" onChange={handleChange} />
          <input
            type="button"
            value="Search"
            id="search"
            onClick={handleClick}
          />
        </form>
      </div>
      <div className="showContainer">
        {searchRes.map((show) => (
          <div className="showTile">
            {show.image_url !== null ? (
              <img style={{width: 50}} src={show.image_url} />
            ) : (
              ""
            )}
            <h3>{show.name}</h3>
            {show.ibu}
            
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
