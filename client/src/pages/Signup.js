export default function Signup() {
    function handleSubmit() {
        console.log("Submitted info")
    }
    return (
        <div id="homepage">
            <img src="images/king_white.jpg"/>
            <h1>Chess Game</h1>
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