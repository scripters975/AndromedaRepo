// const Quotes = require("../models/quotes.model")
const models = require("../models/quotes.model")
const { AppError,ERROR,ERRORCODE } = require("../utils/appError.utils")
const MESSAGE = require('../utils/errorMessges.utils')
const FavouriteQuote = require('../models/addToFevQuotes.model')
// const { findOneAndUpdate } = require("../models/addToFevQuotes.model")
let quoteCategoryEnumObj = {

    1:'lovequotes',
    2: 'lifequotes',
    3: 'humorquotes',
    4: 'philosophyquotes',
    5: 'poetryquotes',
    6: 'happinessquotes',
    7: 'truthquotes',
    8: 'romancequotes',
    9: 'inspirationquotes',
    10: 'godquotes',
    11: 'wisdomquotes',
    12: 'hopequotes',
    13: 'deathquotes',
    14: 'life-lessonsquotes',
    15: 'faithquotes',
    16: 'writingquotes',
    17: 'successquotes',
    18: 'relationshipsquotes',
    19: 'timequotes',
    20: 'sciencequotes',
    21: 'motivationquotes',
    22: 'motivationalquotes',
    23: 'religionquotes',
    24: 'spiritualityquotes',
    25: 'knowledgequotes'
    
    }



exports.getQuotesByCategoriesId = async(req, res)=>{

    const model = models.find(model=> model.collectionName === quoteCategoryEnumObj[req.params.id])

    let  page =1
    let  limit=10
    if(Object.keys(req.query).length && req.query.hasOwnProperty('page')){
      page = parseInt(req.query.page)
    }
    
    if(Object.keys(req.query).length && req.query.hasOwnProperty('limit')){
      limit = parseInt(req.query.limit)
    }

      const startIndex = (page - 1) * limit
      let documentsCount = await model.modelName.countDocuments().exec()
      console.log(documentsCount)
      totalPage = Math.ceil(documentsCount/limit)
      const results = {}
      results.pagination ={
      page: page,
      limit: limit,
      totalPage:totalPage
    }

//   if (endIndex <  await AdminUser.countDocuments().exec()) {
//       results.next = {
//         page: page + 1,
//         limit: limit
//       }
     
//     }
    
//     if (startIndex > 0) {
  
//       results.previous = {
//         page: page - 1,
//         limit: limit
//       }
     
//     }

    try{
        results.results = await model.modelName.find({}).skip(startIndex).limit(limit).exec()
        return results
    }
    catch(error){
        throw new AppError(MESSAGE.SERVERSIDERROR,ERROR.InternalServerError,ERRORCODE.InternalServerError)
    }
}

exports.getQuotesByUser = async (email) => {
  try{
    const getQuotes = await FavouriteQuote.find({userEmail:email}).select({
      "favouriteQuote":1
    })
    return getQuotes

  }catch(error){
    throw new AppError(MESSAGE.SERVERSIDERROR,ERROR.InternalServerError,ERRORCODE.InternalServerError)
  }
}

exports.addQuoteByUser = async (requestBody) => {
  try{
    const { userEmail, favouriteQuote } = requestBody;
    const result = await FavouriteQuote.findOne({userEmail:userEmail})
    
      if(result != null){
        const updateAddToFavourite = await FavouriteQuote.findOneAndUpdate({userEmail:userEmail},{
          $push:{
            favouriteQuote:favouriteQuote
            
          },
        },{
          new:true
        })
         return updateAddToFavourite
      }else{
        const newQuote = new FavouriteQuote(requestBody)
        const newQuoteAdded = await newQuote.save()
        return newQuoteAdded;
      }    

  }catch(error){
    throw new AppError(MESSAGE.SERVERSIDERROR,ERROR.InternalServerError,ERRORCODE.InternalServerError)
  }
}

