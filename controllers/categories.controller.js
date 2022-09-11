const categoryService = require('../services/categories.service')
const MESSAGE = require('../utils/errorMessges.utils')
const { appResponse } = require("../utils/appResponse.utils");

exports.GetCategoryController= async(req, res,next)=>{
    try{
        const getCategories = await categoryService.GetCategories()
        if(getCategories.length){
            res.json({
                status:200,
                message:'Fetch sucessfully!',
                data:getCategories
            })
        }else {
            return  appResponse(res, 404, MESSAGE.NOTFOUND)
        }
    }catch(error){
        next(error)
    }
}

exports.AddCategoryController = async (req,res,next)=>{
    try{

    }catch(error){
        next(error)
    }
}