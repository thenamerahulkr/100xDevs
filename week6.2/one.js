const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');
const JWT_SECRET = "ksgjhkghdfsgbkasbbgajkdfbg";


app.use(express.json());
const users = [];
function auth(req, res, next) {
    const token = req.headers.token;
    const decodedData = jwt.verify(token, JWT_SECRET);
    if (decodedData.username) {
        req.username = decodedData.username;
        next();
    }
    else{
        res.json({
            messgage:"You are not logged in"
        })
    }
}
app.post('/signup', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username: username,
        password: password
    });
    res.json({
        meaage: "you are signup successfully"
    })
});

app.post('/signin', function (req, res) {
    const username = req.body.username;
    const password = req.body.password;
    let foundUser = null;
    for (let user of users) {
        if (user.username == username && user.password == password) {
            foundUser = user;
        }
    }
    if (!foundUser) {
        res.json({
            message: " credential incorrect"
        })
        return;
    }
    else {
        const token = jwt.sign({
            username
        }, JWT_SECRET);
        res.json({
            token: token
        })
    }
})
app.get('/me',auth, function (req, res) {
    
        let foundUser = null;
        for (let user of users) {
            if (user.username == req.username) {
                foundUser = user;
            }
        }
        res.json({
            username: foundUser.username,
            password: foundUser.password
        })
    
})
app.get('/', function(req, res){
    res.sendFile(__dirname + "/public/index.html");
})
app.listen(3000,
    console.log("server is started")
);