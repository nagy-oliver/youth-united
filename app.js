const express = require("express")
const app = express()
const PORT = process.env.PORT || 3000

app.set("view engine", "ejs")
app.use(express.static("public"))

app.get("/", (req, res) => {
    res.render("index")
})

app.get("/posts/:post", (req, res) => {
    res.render("posts/" + req.params.post)
})

app.get("*", (req, res) => {
    res.redirect("/")
})

app.listen(PORT, () => {
    console.log("Listening on " + PORT)
})