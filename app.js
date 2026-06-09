const express=require("express"); 
const app=express();
const API_KEY="sk-test-123456789";  
app.get("/",(req,res)=>{ 
res.send("DevSecOps Security Lab"); 
}); 
app.listen(3000,()=>{ 
console.log("Server Running"); 
});  
