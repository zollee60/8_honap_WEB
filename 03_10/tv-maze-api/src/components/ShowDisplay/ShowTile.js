import './showdisplay.css';
import { useDispatch } from "react-redux";
import { addFavourite, selectFavourites } from '../../store/showSlice';
import { useSelector } from 'react-redux';

export default function ShowTile(props){

    const dispatch = useDispatch();
    const favourites = useSelector(selectFavourites)

    const handleClick = () => {
        dispatch(addFavourite(props.data))
    }

    return(
        <div className="showTile">
            {
                props.data.show.image !== null ?
                <img src={props.data.show.image.medium} /> :
                ""
            }
            <h3>{props.data.show.name}</h3>
            {
                props.data.show.rating.average !== null ?
                props.data.show.rating.average :
                "Nincs értékelés"
            }
            {
                favourites.includes(props.data) ?
                <input type="button" value="ADDED" disabled/> :
                <input type="button" value="ADD TO FAV" onClick={handleClick}/>
            }

            
        </div>
    );
}