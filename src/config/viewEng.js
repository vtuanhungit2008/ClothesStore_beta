
const path = require("path");
 const configViewEng = (app)=>{
    app.set('views',path.join('./src','views'))
app.set('view engine','ejs')}


module.exports = configViewEng;

