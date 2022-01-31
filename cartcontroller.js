const Cart=require("./cartschema");

function getCart(req,res){
    Cart.find({})
  .populate('user')
  .exec((err,docs)=>{
      if(err) throw(err);
      res.json(docs);
  });
  
}



async function postCart(req,res){
  let dataObj=req.body;
  let userData=await Cart.create(dataObj);
  res.json({
  message:"user purchased the project",
  data:userData
});
}

module.exports={getCart,postCart};