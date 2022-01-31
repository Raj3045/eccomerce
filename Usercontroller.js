 //const User =require('UserSchema.js');
 const userModel=require("./Userschema");
 

 async function getUser(req,res){
    let allUsers=await userModel.find();
    res.json({
        message:"list of all user",
        data:allUsers
    });

}





async function postUser(req,res){
        //console.log(req.body);
        let dataObj=req.body;
        let userData=await userModel.create(dataObj);
        res.json({
            message:"user signedup successfully",
            data:userData
        });
}

async function patchUser(req,res){
        // console.log(req.body);
        // for(key in req.body)
        // {
        //     users[key]=req.body[key];
        // }
        let dataToBeUpdated=req.body;
        let userData=await userModel.findOneAndUpdate({email:"abc@gmail.com"},{$push:{products:dataToBeUpdated}});
        res.json({
            message:"data updated successfully"
        });
}

async function deleteUser(req,res){

        //users={};
        let dataToBeDeleted=req.body;
        let userData=await userModel.findOneAndDelete(dataToBeDeleted);
        res.json({
            message:"data deleted successfully"
        });
}
module.exports={getUser,postUser,patchUser,deleteUser};