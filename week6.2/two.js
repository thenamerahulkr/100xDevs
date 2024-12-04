const express = require('express');
const app = express();
const jwt = require('jsonwebtoken')
app.use(express.json());

const secret_key = "ilove100xdevs";

// this variable contains users 

const users = [
    { id: 1, username: 'john', password: '12345', role: 'admin' },
    { id: 2, username: 'jane', password: '54321', role: 'user' }
];

function auth(req,res,next){
    const usersToken = req.headers.token;
    if(!usersToken){
        res.status(401).json({
            message:"no token provided"
        })
    }
    const decodedData = jwt.verify(usersToken, secret_key);
    const { username, password,role } = req.body;
    if(decodedData.username == username && decodedData.password == password){
        if(decodedData.role == role){
            next();
        }
    }
}
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    const user = users.find((user) => {
        if (user.username == username && user.password == password) {
            return true;
        }
        else {
            return false;
        }
    })
    if (!user) {
        res.status(401).json({
            message: "invalid user"
        })
    }
    const token = jwt.sign(user, secret_key);
    res.json({
        yourToken: token
    })
});
app.post('/private',auth,(req, res)=>{
    res.json({
        message: " you are allowed"
    })
});
app.listen(3000);

