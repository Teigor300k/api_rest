const express = require("express");
const app = express();
const port = 5000;

app.use(express.json());

app.get("/", async(req, res)=>{
   
})

app.post("/", async(req, res)=>{
    res.send({msg: "Hello Word"})
})

app.put("/", async(req, res)=>{
    res.send({msg: "Hello Word"})
})

app.delete("/", async(req, res)=>{
    res.send({msg: "Hello Word"})
})


app.listen(port, (erro)=>{
    if (!erro) {
        console.log(`Server runing on port ${port}`);
    }
});