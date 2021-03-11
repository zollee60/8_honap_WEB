import "./search.css";
import {useState} from 'react';

export default function SearchBar(props) {

  const [query, setQuery] = useState("");

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const handleClick = () => {
    props.search(query);
  }

  return (
    <div className="searchBar">
      <form>
        <input type="text" name="query" id="query" onChange={handleChange}/>
        <input type="button" value="Search" id="search" onClick={handleClick} />
      </form>
    </div>
  );
}