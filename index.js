const express = require('express')
const app = express()
app.use(express.json())

app.post('/', function (req, res, next) {
           console.log("hello");
           req.body.name='hello';
           next();
           let m =req.body.name='hello';
           

},
function(req,res,next){

       console.log("name");
       
       next();
    
},


    function (req, res) {
        let n=req.body.name;
        res.send(`hello ${m}+${n}`)
    })
let port = 4000;
app.listen(port, function () {

    console.log(`port is running on port ${port}`);
})