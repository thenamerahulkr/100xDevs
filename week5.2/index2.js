const express = require('express');
const app = express();
const port = 3000;

// adding middlewares function to all the routes 
let reqCount = 0;
function reqInc(){
    reqCount++;
    console.log(`Total number of request is ${reqCount}`);
    // next();
};

function realSumCalculator(req, res, next){
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        sum : a+b
    });
}
// better routing and middlewares

// app.get('/sum/:a/:b', reqInc, realSumCalculator);  or 


//  more way tp write middleware 
app.use(reqCount);

app.get('/sum/:a/:b', realSumCalculator); 

app.listen(port, function(err){
    if(err){
        console.log("there is issue to connect to server");
    }
    else{
        console.log("server is connected Successfully");
    }
});