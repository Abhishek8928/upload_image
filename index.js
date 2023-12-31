

const express = require("express");
const port = 3000;
const app = express();
const multer = require("multer");
require('dotenv').config();

const {storage} = require("./cloudConfig")

app.set("view engine", "ejs")

// to initilaize the multer
const Upload = multer({storage})

app.listen(port, function () {
    console.log(`Server is running on ${port}`)
})

app.get("/", function (req,res){
    res.render("from.ejs")
})


app.post("/getimage",Upload.single('image'), function (req, res) {
    res.send(req.file) // file related data
})