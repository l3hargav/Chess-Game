import "../App.css"
import { useParams } from "react-router-dom";


export default function Home() {
    let { id } = useParams();
    return (
        <div id="mainpage">
            <div id="link">
                <h2>Copy this link to play with a friend</h2>
                <a href="{`http://localhost:3000/game/${id}`}">{`http://localhost:3000/game/${id}`}</a>
            </div>
            <div id="input-link">
                <input type="text" placeholder="Enter game link"></input>
                <button type="submit">Submit</button>
            </div>
        </div>
    )
}