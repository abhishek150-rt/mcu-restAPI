const express= require("express");
const app= new express();
const port =process.env.PORT || 8800;
app.use(express.json());
require("./db/database");
const Superhero= require("./model/superheroes")
app.get("/",(req,res)=>{
    res.status(200).send("Welcome to the MCU Rest Api.")
});
const error={
    error:404
}
//Insert Documents into Collections
app.post("/superheroes",async(req,res)=>{
    try{
        const superheroes= new Superhero(req.body);
        const insertResult= await superheroes.save();
        res.status(200).send(insertResult);
    }
    catch(err){
        res.status(400).send(err)
    }
});

// Read documents from collection
app.get("/superheroes",async(req,res)=>{
    try{
        const readResult=await Superhero.find({}).sort({ranking:1});
        res.status(200).send(readResult);
    }
    catch(err){
        res.status(400).send(err)
    }
});

app.get("/superheroes/:id",async(req,res)=>{
    try{
        const id= req.params.id;
        const response=await Superhero.find({_id:id});
        res.status(200).send(response)
    }
    catch(err){
        res.status(404).send(err)
    }
});

// Update Documents
app.patch("/superheroes/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const result = await Superhero.findByIdAndUpdate({ _id: id }, req.body, {
            new: true
        });
        res.status(201).send(result)
    }
    catch (err) {
        res.status(400).send(err);
    }
});

//Delete Documents
app.delete("/superheroes/:id",async(req,res)=>{
    try {
        const id = req.params.id;
        const result = await Superhero.findByIdAndDelete({ _id: id });
        res.status(201).send(result)
    }
    catch (err) {
        res.status(400).send(err);
    }
});
app.listen(port,()=>{
    console.log(`Your App is running at the http://localhost:${port}`)
})