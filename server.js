const mongoose =require("mongoose")
const express = require("express");
const app = express();
const path=require("path");
const data = require("./datasc");
let port = 8080;
app.use(express.json());

// set ejs 
app.set("views",path.join(__dirname,"views"));
app.set("view enginge","ejs");
app.use(express.static(path.join(__dirname,"public")));
app.use(express.urlencoded({extended : true}));
// coonection code of database
async function main(){
    await mongoose.connect('mongodb://127.0.0.1:27017/Google_Data');

}
main().then((result)=>{
    console.log("connection succsesfull");
    
}).catch((err)=>{
    console.log("some error in db");
    
});

app.get("/",(req,res)=>{
    res.render("login.ejs");

});
app.get("/register",(req,res)=>{
  res.render("form.ejs");
});

app.post("/register",(req,res)=>{
    let {fullname,contact,address,company,email,department,gender,inp_password} =  req.body;
    let user = new data(
        {
            full_name:fullname,
            mobile_number:contact,
            user_Adress:address,
            company_name:company,
            user_email:email,
            user_password:inp_password,
            department:department,
            user_gendar:gender


        }
    );

    data.insertOne(user).then((result)=>{
        console.log(result);
        
    }).catch((err)=>{
        console.log(err);
        
    })
    
   
    res.redirect("/");
});
app.get("/register/singup",(req,res)=>{
   res.render("sing-up.ejs")
});

app.listen(port,()=>{
console.log("port is working on 8080");

});