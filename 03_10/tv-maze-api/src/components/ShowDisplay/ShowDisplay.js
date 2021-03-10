import './showdisplay.css';
import ShowTile from './ShowTile';

export default function ShowDisplay(props){
    return(
        <div className="showContainer">
            {props.shows.map(show => <ShowTile data={show}/>)}
        </div>
    );
}