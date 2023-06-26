import "../App.css"
import { Link } from "react-router-dom"
export default function Main() {
    return(
        <div id="main">
            <img src="images/king_white.jpg"/>
            <h1>Chess Game</h1>
            <img src = "images/king_white.jpg" />
            <Link to="/signup">
                <div id="signup">
                    <button type="button">Signup</button>
                </div>
            </Link>
            <Link to="/login">
                <div id="login">
                    <button type="button">Login</button>
                </div>
            </Link>
        </div>
    )
}