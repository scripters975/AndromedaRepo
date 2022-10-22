const categoryService = require('../services/categories.service')
const MESSAGE = require('../utils/errorMessges.utils')
const { appResponse } = require("../utils/appResponse.utils");

exports.CategoryController = {

    getCategory: async (req, res, next) => {
        try{
            const getCategories = await categoryService.GetCategories()
            if(getCategories.length){
                res.json({
                    status:200,
                    message:'Fetch sucessfully!',
                    data:getCategories
                })
            } else {
                return  appResponse(res, 404, MESSAGE.NOTFOUND)
            }
        } catch(error){
            next(error)
        }
    },

    addCategory: async (req,res,next) => {
        try {
    
        } catch(error) {
            next(error)
        }
    }
}