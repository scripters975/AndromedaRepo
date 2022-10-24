const quotesService = require('../services/quotes.service')
const MESSAGE = require('../utils/errorMessges.utils')
const { appResponse } = require("../utils/appResponse.utils");
exports.QuotesController =  {

    getQuotesByCategory: async (req, res, next) => {
        try{
            const getQuotes = await quotesService.getQuotesByCategoriesId(req)
            if(getQuotes.results.length){
                res.json({
                    status:200,
                    message:'Fetch sucessfully!',
                    data:getQuotes
                })
            } else {
                return  appResponse(res, 404, MESSAGE.NOTFOUND)
            }
        } catch(error){
            next(error)
        }
    },  

    getQuotesByUser: async (req, res, next) => {
        const { email } = req.params
        try{
            const getQuotes = await quotesService.getQuotesByUser(email)
            if(getQuotes.length){
                res.json({
                    status:200,
                    message:'Fetch sucessfully!',
                    data:getQuotes
                })
            } else {
                return  appResponse(res, 404, MESSAGE.NOTFOUND)
            }
        } catch(error){
            next(error)
        }
    },  

    AddFavouritQuote: async (req, res, next) => {
        try{
            quotesService.addQuoteByUser(req.body).then((response)=>{
                if(response){
                    return appResponse(res, 200, MESSAGE.QUOTE_ADDED)
                }else{
                    return appResponse(res, 401, MESSAGE.NOTEXISTS)
                }
            }).catch((error)=>{
                next(error)
            })
        } catch(error){
            next(error)
        }
    },  
    
}

