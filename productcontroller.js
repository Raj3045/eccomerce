const products=require("./productschema");

async function getProducts(req,res){

    const {page=1,limit=10}=req.query;
    let allUsers=await products.find()
    .limit(limit*1)
    .skip((page-1)*limit);
    res.json({
        message:"list of all products",
        data:allUsers
    });

}

async function postProduct(req,res){
        //console.log(req.body);
        let dataObj=req.body;
        let userData=await products.create(dataObj);
        res.json({
            message:"Product added successfully",
            data:userData
        });
}
module.exports={getProducts,postProduct};