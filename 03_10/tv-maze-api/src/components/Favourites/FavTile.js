import '../ShowDisplay/showdisplay.css';
import { useDispatch } from "react-redux";
import { deleteFavourite } from '../../store/showSlice';

export default function FavTile(props){

    const dispatch = useDispatch();

    const handleClick = () => {
        dispatch(deleteFavourite(props.data.show.id))
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
            <input type="button" value="DELETE" onClick={handleClick}/>

            
        </div>
    );
}