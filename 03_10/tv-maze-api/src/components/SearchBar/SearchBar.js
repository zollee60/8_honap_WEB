import "./search.css";
import {useState} from 'react';
import { useDispatch } from "react-redux";
import { fetchSearchResults, setSearchResults } from '../../store/showSlice';

export default function SearchBar(props) {

  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const handleClick = () => {
    dispatch(fetchSearchResults(query));
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