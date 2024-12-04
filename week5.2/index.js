const express = require('express');
const app = express();
const port = 3000;

// adding middlewares function to all the routes 
let reqCount = 0;
function reqInc(){
    reqCount++;
    console.log(`Total number of request is ${reqCount}`);
};

app.get('/multiply',reqInc,(req, res ) =>{
    // reqInc();
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        multiply: a*b
    });
});
app.get('/sum/:a/:b',reqInc,(req, res ) =>{
    // reqInc();
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        sum : a+b
    });
});



app.listen(port, function(err){
    if(err){
        console.log("there is issue to connect to server");
    }
    else{
        console.log("server is connected Successfully");
    }
});