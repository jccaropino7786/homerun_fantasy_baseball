// import { Link } from "react-router-dom";

function NavBar(){
    return(
            <div id = "links">
            <ul class = "nav">
                {/* <li><Link to="/">Home</Link></li> */}
                <li>Players</li>
                <li>My Team</li>
                <li>Log in/ Log out</li>
                <li>Standings</li>
            </ul>
        </div>
    )
}

export default NavBar