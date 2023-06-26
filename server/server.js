require("dotenv").config();
const express = require("express");
const mysql = require("mysql2");


const { createServer } = require("http");
const { Server } = require("socket.io");

const app = express();
const httpServer = createServer(app);



const io = new Server(httpServer, {
    cors: "http://localhost:3000"
})

/*
const userIo = io.of("/game");
userIo.on("connection", socket => {
    console.log("user connected to game");
})
*/

io.on("connection", socket => {
    console.log(socket.id);
})

app.use(express.json());

const pool = mysql.createPool({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    database: process.env.DB_NAME,
    password: process.env.DB_PASSWORD 
})

app.get("/api/users", (req, result) => {
    pool.query("SELECT * FROM user", (err, res) => {
        if(err) throw err;

        result.send(res);
    })
})

app.post("/api/newUser", (req, result) => {
    console.log("recieving data...");
    console.log(req.body);
    //console.log(typeof(req.body));
    //let o = JSON.parse(req.body);
    
    let obj = req.body;
    console.log(obj.username);
    
    pool.query("INSERT INTO USER VALUES(?, ?)", [obj.username, obj.password], (err, result) => {
        if(err) throw err;
    })
})

app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send("Something broke!!");
})

httpServer.listen(5000, () => {
    console.log("Server is running on port 5000");
});