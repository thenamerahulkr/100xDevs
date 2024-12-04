const express = require('express');
const app = express();
const jwt = require('jsonwebtoken');

app.use(express.json());

const users = [];
//  should return a random string as a token
const JWT_SECRET = "SKDJLFGHLSDFHGAKJB";
// function generateRandomString(length = 32) {
//     const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
//     let result = '';
//     for (let i = 0; i < length; i++) {
//         const randomIndex = Math.floor(Math.random() * characters.length);
//         result += characters[randomIndex];
//     }
//     return result;
// }

app.post('/signup',(req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    users.push({
        username: username,
        password:password
    })
    res.json({
        message:" hey you are signed up"
    })
});
app.post('/signin',(req, res)=>{
    const username = req.body.username;
    const password = req.body.password;
    const user = users.find((u)=>{
        if(u.username == username && u.password == password){
            return true; 
        }
        else{
            return false;
        }
    });
    if(user){
        const token = jwt.sign({
            username: username
        }, JWT_SECRET);

        // user.token = token;

        res.json({
            message: token
        })
    }
    else{
        res.status(403).send({
            message : "invalidUser"
        })
    }
});
//  lets create a another end point where user will send their token and we have to return their information
app.get('/me', (req, res)=>{
    const token = req.headers.token;
    const decodedInformation = jwt.verify(token, JWT_SECRET); // {username: "rahul"}
    const username = decodedInformation.username;
    const user = users.find((user)=>{
        if(user.username == username){
            return true;
        }
    });
    if(user){
        res.json({
            username:user.username,
            password:user.password
        })
    }
    else{
        res.json({
            message:"invalid token"
        })
    }
})
app.listen(3000, ()=>{
    console.log("server is connected")
});