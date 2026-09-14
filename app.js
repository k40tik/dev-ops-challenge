const express = require ('express')
const app = express();
const port = 3000;
app.get('/hello',(req,res) =>{
res.send("HELLO, welcome to HehA");
})
app.listen(port,()=>{console.log(`server running on port ${port}`)})
