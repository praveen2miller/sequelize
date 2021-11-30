const express = require("express");
const {sequelize,Books,Authers} = require("./models");
const app = express();
app.use(express.json());

app.get("/Books",async(req,res)=>{
    const Book = await Books.findAll();
    return res.status(200).json(Book);
});


app.get("/Authers",async(req,res)=>{
    const Auther = await Authers.findAll();
    return res.status(200).json(Auther);
});





app.post("/Books",async(req,res)=>{
    const {BookName} = req.body;
    const Book = await Books.create({BookName});
    return res.status(200).json(Book);
});

app.post("/Authers",async(req,res)=>{
    const {AutherName} = req.body;
    const Auther = await Authers.create({AutherName});
    return res.status(200).json(Auther);
});






const PORT = 5002;
app.listen({port:PORT},async()=>{
    console.log(`server started at ${PORT}`)
    try{
    await sequelize.sync({force:true});
    }catch(e)
    {
        console.log(e);
    }
})