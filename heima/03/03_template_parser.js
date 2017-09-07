var express = require("express");

var app = express();

app.set("view engine", "ejs");

app.get("/", function(req, res){
    res.render("haha", {
        "news": [
            "aaaa",
            "bbbb",
            "cccc",
            "dddd",
            "eeee"
        ]
    })
});

app.listen(80);