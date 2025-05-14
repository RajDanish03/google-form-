const mongoose=require("mongoose");

const dataSchema = new mongoose.Schema ({
  full_name:{
    type:String
  },
   mobile_number:{
    type:Number
  },
    user_Adress:{
    type:String
  },
    company_name:{
    type:String
  },  
    user_email:{
    type:String
  },
  user_password:{
    type:String
  },
   department:{
    type:String
  },  
     
  user_gendar:{
    type:String
  }
});

const data = mongoose.model("data",dataSchema);

module.exports = data;