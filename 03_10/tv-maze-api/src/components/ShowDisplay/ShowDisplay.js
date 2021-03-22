import './showdisplay.css';
import ShowTile from './ShowTile';
import {selectSearchResults} from '../../store/showSlice';
import { useSelector } from 'react-redux';

export default function ShowDisplay(){

    const searchRes = useSelector(selectSearchResults);

    return(
        <div className="showContainer">
            {searchRes.map(show => <ShowTile data={show}/>)}
        </div>
    );
}