const express = require('express');
const cors = require('cors');
const app = express();

app.use(express.json());
app.use(cors({
    domains:["http://google.com","http://employee.google.com"]
}));


app.get('/sum', (req, res)=>{
    const a = parseInt(req.body.a);
    const b = parseInt(req.body.b);
    res.json({
        answer: a+b
    })
});

app.listen(3000);