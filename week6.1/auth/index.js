const express = require('express');
const app = express();

app.use(express.json());

const users = [];
//  should return a random string as a token

function generateRandomString(length = 32) {
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    let result = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characters.length);
        result += characters[randomIndex];
    }
    return result;
}

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
        const token = generateRandomString();
        user.token = token;
        res.json({
            message: token
        })
    }
    else{
        res.status(403).send({
            message : "invalidUser"
        })
    }
    console.log(users);
});
//  lets create a another end point where user will send their token and we have to return their information
app.get('/me', (req, res)=>{
    const token = req.headers.token;
    const user = users.find((user)=>{
        if(user.token == token){
            return user;
        }
    });
    
})
app.listen(3000, ()=>{
    console.log("server is connected")
});