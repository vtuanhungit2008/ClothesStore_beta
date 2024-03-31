
const path = require("path")
const express = require("express");
const app = express();
const configViewEng = require("./config/viewEng");

const router = require("./route/web");

const port = 3000;
configViewEng(app)
app.use("/",router);

app.use(express.static(path.join(__dirname,'public')))


app.listen(port)