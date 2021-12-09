const mongoose= require("mongoose");
mongoose.connect("mongodb://localhost:27017/MCU").then(()=>console.log("connection succsses")).catch((err)=>console.log(err));
