const express = require('express');
const app = express();

const port = 3000;

      //middleware fucntions

const middlewareIsOldEnogh = function(req, res, nextMiddleware){
    const age = req.query.age;
    if(age >14){
        nextMiddleware();
    }
    else{
        res.json({
            msg:"YOU ARE UNDER THE AGE OF 14 ! SORRY "
        });
    }
}

// if we want to use above middleware use to all route handlers then use => app.use 
app.use(middlewareIsOldEnogh);
// creating root routes
app.get('/ride1',(req, res)=>{
        res.status(200).json(
            {
                msg:"You have successfully riden the ride 1"
            }
        );
});

app.get('/ride2',(req, res)=>{
        res.status(200).json(
            {
                msg:"You have successfully riden the ride 2"
            }
        );
})
app.listen(port);

