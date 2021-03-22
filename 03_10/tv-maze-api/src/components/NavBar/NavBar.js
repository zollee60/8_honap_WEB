import { Link } from 'react-router-dom';
import './navbar.css'

export default function NavBar(){
    return(
        <div className="navbar">
            <ul>
                <li><Link to="/">Search</Link></li>
                <li><Link to="/favourites">Favourites</Link></li>
            </ul>
        </div>
    );
}