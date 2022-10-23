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
}

