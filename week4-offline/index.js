const express = require('express')
const app = express()
function calculateSum(n){
    let ans = 0;
    for(let i = 0; i<=n; i++){
        ans += i;
    }
    return ans;
}
app.get('/', function(req, res){
    const n = req.query.n;
    const result = calculateSum(n);
    res.send(result.toString());
})

app.listen(3000);
