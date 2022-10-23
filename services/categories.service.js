const Category = require("../models/categories.model")
const { AppError,ERROR,ERRORCODE } = require("../utils/appError.utils")
const MESSAGE = require('../utils/errorMessges.utils')
exports.GetCategories = async(req, res)=>{
    console.log(Category)
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