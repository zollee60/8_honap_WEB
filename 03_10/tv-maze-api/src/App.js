import logo from './logo.svg';
import './App.css';
import {useState} from 'react';
import SearchBar from './components/SearchBar/SearchBar';
import ShowDisplay from './components/ShowDisplay/ShowDisplay';

function App() {

  const [shows, setShows] = useState([]);

  const fetchResults = async (query) => {
    const response = await fetch(`http://api.tvmaze.com/search/shows?q=${query}`);
    const data = await response.json();
    setShows(data);
  }

  return (
    <div className="App">
      <SearchBar search={fetchResults}/>
      <ShowDisplay shows={shows} />
    </div>
  );
}

export default App;
