import { useState, useEffect, useContext } from "react"
import { SocketContext } from "../socket";
import { useNavigate } from "react-router-dom"
import "../App.css"


//const socket = io("http://localhost:5000");
//const socket = useContext(SocketContext);


export default function Login() {

    const [data, setData] = useState({});
    const socket = useContext(SocketContext);
    socket.connect();
    let navigate = useNavigate();

    useEffect(() => {
        fetch("/api/users").then(
            res => res.json()
        ).then(
            data => setData(data)   
        )

    }, []);
    
    //console.log(data);
    function handleSubmit(e) {
        console.log("Verifying with database")
        e.preventDefault();
        let name = e.target[0].value;
        let pass = e.target[1].value;
        //console.log(name, typeof(name));
        let val = 0;

        for(let key in data){

            if(name === data[key].username && pass === data[key].password) {
                val = 1;
            }
            else {
                continue;
            }
            /*
            let user = data[key].username;
            let passwd = data[key].password;
            console.log(user, typeof(user));
            if(name !== user || passwd !== pass) {
                val = false;
            }
            else {
                val = true;
                break;
            }
        }
        console.log(val);
        */
        }
        if(val === 1) {
            console.log(true);
            alert("User Logged in Successfully");
            navigate(`/user/${socket.id}`);
        }
        else {
            console.log(false);
        }
    }


    return (
        <div id="mainpage">
            <img src="images/king_white.jpg"/>
            <h1>Chess Game</h1>
            <h2>Login form</h2>
            <img src = "images/king_white.jpg" />
            <form onSubmit={handleSubmit}>
                    <input type="text" placeholder="Enter username" />

                    <input type="password" placeholder="Enter your password" />

                    <input type="submit" />

            </form>
        </div>
    )
}