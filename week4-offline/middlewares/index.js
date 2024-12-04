const express = require('express');
const app = express();

const port = 3000;

// kind of middleware fucntions
const isOldEnogh = function(n){
    if(n>14) return true;
    else return false;
}
// creating root routes
app.get('/ride1',(req, res)=>{
    if(isOldEnogh(req.query.age)){
        res.status(200).json(
            {
                msg:"You have successfully riden the ride 1"
            }
        );
    }
    else{
       res.status(411).json({
        msg:"Sorry You are not eligible"
       });
    }
});

app.get('/ride2',(req, res)=>{
    if(isOldEnogh(req.query.age)){
        res.status(200).json(
            {
                msg:"You have successfully riden the ride 2"
            }
        );
    }
    else{
       res.status(411).json({
        msg:"Sorry You are not eligible"
       });
    }
})
app.listen(port);

