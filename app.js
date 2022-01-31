const express=require("express");
const { param } = require("express/lib/application");
const app=express();
const mongoose=require("mongoose");
const userModel=require("./Userschema");
const Cart=require("./cartschema");
const products=require("./productschema");
const {getProducts,postProduct}=require("./productcontroller");
const {getCart,postCart}=require("./cartcontroller");
const {getUser,postUser,patchUser,deleteUser}=require("./Usercontroller");

//middleware
 app.use(express.json());
 




app.put('/cartsProduct/:id',(req,res)=>{
    let dataToBeUpdated=req.body;
         Cart.findOneAndUpdate({_id:req.params.id},{$push:{user:req.body.userId}},{new:true},(err,doc)=>{
             if(err) throw(err);
             else res.json(doc);
         });
        
});


const userRouter=express.Router();
const productRouter=express.Router();
const cartRouter=express.Router();

app.use('/user',userRouter);
app.use('/product',productRouter);
app.use('/cartsProduct',cartRouter);

userRouter
.route('/')
.get(getUser)
.post(postUser)
.patch(patchUser)
.delete(deleteUser)



productRouter
.route('/')
.get(getProducts)
.post(postProduct)

cartRouter
.route('/')
.get(getCart)
.post(postCart)

app.listen(3000);

//mongoose
//passwrd=nYSmv6iwF4bD9lLn
const db_link='mongodb+srv://admin:nYSmv6iwF4bD9lLn@cluster0.bnazf.mongodb.net/myFirstDatabase?retryWrites=true&w=majority';
mongoose.connect(db_link)
.then(function(db){
    //console.log(db);
    console.log('db connected');
})
.catch(function(err){
    console.log(err);
});

