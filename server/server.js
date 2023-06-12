const express = require("express") //IMPORT EXPRESS

const app = express();

app.get("/", (req, res) => {
    res.json({"users": [1, 2, 3]})
})

app.listen(5000, () => {
    console.log("Server running on port 5000")
})