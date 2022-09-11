const Category = require("../models/categories.model")

exports.GetCategories = async(req, res)=>{
    
    try{
        const getCategories = await Category.find({activeStatus:true}).select({
          _id:0,
        })
        return getCategories
    }
    catch(error){
        throw new AppError(MESSAGE.SERVERSIDERROR,ERROR.InternalServerError,ERRORCODE.InternalServerError)
    }
}