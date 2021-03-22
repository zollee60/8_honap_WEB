import "./search.css";
import {useState} from 'react';
import { useDispatch } from "react-redux";
import { setSearchResults } from '../../store/showSlice';

export default function SearchBar(props) {

  const [query, setQuery] = useState("");

  const dispatch = useDispatch();

  const fetchResults = async (query) => {
    const response = await fetch(`http://api.tvmaze.com/search/shows?q=${query}`);
    const data = await response.json();
    dispatch(setSearchResults(data));
  }

  const handleChange = (event) => {
    setQuery(event.target.value);
  }

  const handleClick = () => {
    fetchResults(query);
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