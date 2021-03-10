import './showdisplay.css';

export default function ShowTile(props){

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
        </div>
    );
}