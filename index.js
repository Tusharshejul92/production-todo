const express = require("express")
require("dotenv").config({ path: "./.env" })
const mongoose = require("mongoose")
const cors = require("cors")
const path = require("path")

mongoose.connect(process.env.MONGO_URL)
const app = express()

app.use(express.json())
app.use(cors())

app.use(express.static(path.join(__dirname, "dist")))

app.use("/api/admin", require("./routes/todoRoutes"))

app.use("*", (req, res) => {
    res.status(path.join(__dirname, "dist", "index.html"))
})



mongoose.connection.once("open", () => {
    console.log("MONGO CONNECTED");
    app.listen(5000, console.log("server runnging"))
})





// H33LbTm4prq63Gqp