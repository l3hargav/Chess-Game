import "../App.css"

import { useNavigate } from "react-router-dom";
export default function Signup() {
    let navigate = useNavigate();
    function handleSubmit(e) {
        e.preventDefault();
        console.log("Submitted info")
        let name = e.target[0].value;
        let pass = e.target[1].value;

        fetch("/api/newUser", {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                username: name,
                password: pass
            })
        })
        alert("Successfully Signed in. Redirecting to login page...");
        navigate("/login");  

    }
    return (
        <div id="mainpage">
            <img src="images/king_white.jpg"/>
            <h1>Chess Game</h1>
            <h2>Signup form</h2>
            <img src = "images/king_white.jpg" />
            <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter username">

                    </input>

                    <input type="password" placeholder="Enter your password">

                    </input>
                    <input type="submit">

                    </input>
            </form>
        </div>
    )

}