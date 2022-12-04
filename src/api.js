const express = require("express");
var fileupload = require("express-fileupload");
const app = express();
app.use(fileupload());
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));
app.post("/api", (req, res) => {
    let prompt = req.body.prompt;
    let size = req.body.size;
    let number = req.body.number;
    console.log(size);
    res.send(`
      Your prompt is: ${prompt}
      Uploaded image file name is ${size.name}
    `);
});

app.listen(3001, () => {
    console.log("Server started on port 3001");
});