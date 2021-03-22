import "../ShowDisplay/showdisplay.css";
import { selectFavourites } from "../../store/showSlice";
import { useSelector } from "react-redux";
import FavTile from "./FavTile";

export default function FavouritesDisplay() {
  const favourites = useSelector(selectFavourites);

  return (
    <div className="outer">
        <h2>Favourites</h2>
      <div className="favContainer">
        
        {favourites.length !== 0 ? (
          favourites.map((show) => <FavTile data={show} />)
        ) : (
          <h3>There are no favourites</h3>
        )}
      </div>
    </div>
  );
}
