const express=require('express');
const app=express();
const body_parser=require('body-parser');
const fs=require('fs');
var multer  = require('multer')

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, './uploads')
    },
    filename: function (req, file, cb) {
    //   const uniqueSuffix = file.originalname
      cb(null, file.originalname)
    }
  })
  
var upload = multer({ storage: storage })

app.use(body_parser.urlencoded({
    extended:true
} ))



app.listen(3000,function(){
    console.log("Sever Starting!");
    
})


app.post("/",upload.single('photo'),function(req,res){
   console.log(req.file.filename);  
   const firstName=req.body.FirstName;
   const lastName=req.body.LastName;
   const mrOrMrs=req.body.MrOrMrs;
   const company=req.body.Company;
   const title=req.body.Title;
   const photo=req.file.filename;
   const workPhone=req.body.Work_Phone;
   const homePhone=req.body.Home_Phone;
   const workAddress=req.body.Work_address;
   const homeAddress=req.body.Home_address;
   const email=req.body.User_email;
  console.log("You submited!");
//   res.sendFile(__dirname+"/SaveInputContent.vcf");



console.log(firstName);


let saveInformation;
try{
 saveInformation=info.getInformation({
    firstName:firstName,
    lastName:lastName,
    mrOrMrs:mrOrMrs,
    company:company,
    title:title,
    photo:photo,
    phoneNumberWork:workPhone,
    phoneNumberHome:homePhone,
    workAddress:workAddress,
    secondWorkAddress:workAddress,
    homeAddress:homeAddress,
    secondHomeAddress:homeAddress,
    email:email,

});}
catch(e){
    console.log(e);
}




fs.writeFileSync("./SaveInputContent.vcf",saveInformation,{})

res.sendFile(__dirname+"/SaveInputContent.vcf");
})

app.post("/delete", function(req, res) {
  res.send("Hello World")
})

app.post("/thantsin", function(req, res) {
  res.send("Hello World")
})
