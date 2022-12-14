const express = require("express");
const path = require("path");
const app = express(),
    bodyParser = require("body-parser");
    port = 3080;
const router = require("./routes");

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, '../my-app/build')));

app.use("/api", router);
app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname, '../my-app/build/index.html'));
});

app.listen(port, () => {
    console.log(`server is running at port ${port}`);
});