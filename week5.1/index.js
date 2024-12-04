const express = require('express');
const app = express();
const port = 3000;

app.get('/multiply',(req, res ) =>{
    const a = req.query.a;
    const b = req.query.b;
    res.json({
        multiply: a*b
    });
})
app.get('/sum/:a/:b',(req, res ) =>{
    const a = parseInt(req.params.a);
    const b = parseInt(req.params.b);
    res.json({
        sum : a+b
    });
})
app.listen(port,function(err){
    if(err){
        console.log("there is issue to connect to server");
    }
    else{
        console.log("server is connected");
    }
});