const express = require("express");
const app = express();
const port = 5001;

const auth  = require("./src/middlewares/auth");
const Address = require("./src/models/Address");

require("./src/database/Connection");
app.use(express.json());

app.get("/", async(req, res)=>{
     try{
        const address = await Address.findAll();

        if(!address){
            return res.status(400).send({message:"Dados não encontrado!"});
        }

        return res.status(200).send({data:address});

     }catch(err){
        return res.status(400).send({error : err})
     }
   
})

app.post("/", async(req, res)=>{
    
    try{
        const {country, city, street, number, district} = req.body;

        const address = await Address.create({country, city, street, number, district});
        if(!address){
            return res.status(400).send({message:"Dados não encontrado!"});
        }

        return res.status(200).send({data:address});

     }catch(err){
        return res.status(400).send({error : err})
     }
})

app.put("/:id", async(req, res)=>{

    try{
        const {id} = req.params;

        const {country, city, street, number, district} = req.body;

        const address = await Address.update({country, city, street, number, district}, {where : {id} });

        if(!address){
            return res.status(400).send({message:"Dados não encontrado!"});
        }

        return res.status(200).send({message:"Dados atualizado com sucessso!"});

     }catch(err){
        return res.status(400).send({error : err})
     }
})

app.delete("/:id", async(req, res)=>{
    try{
        const {id} = req.params;
        
        const address = await Address.destroy( {where : {id} });

        if(!address){
            return res.status(400).send({message:"Dados não encontrado!"});
        }

        return res.status(200).send({message:"Dados deletado com sucessso!"});

     }catch(err){
        return res.status(400).send({error : err});
     }
})


app.listen(port, (erro)=>{
    if (!erro) {
        console.log(`Server runing on port ${port}`);
    }
});