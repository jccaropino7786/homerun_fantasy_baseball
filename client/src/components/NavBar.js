import { Link } from "react-router-dom";

function NavBar(){
    return(
            <div id = "links">
            <ul class = "nav">
                <li><Link to="/">Home</Link></li>
                <li><Link to="players">Players</Link></li>
                <li><Link to="team">My Team</Link></li>
                <li>Log in/ Log out</li>
                <li><Link to="standings">Standings</Link></li>
            </ul>
        </div>
    )
}

export default NavBar