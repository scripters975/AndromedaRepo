// const Quotes = require("../models/quotes.model")
const models = require("../models/quotes.model")
const { AppError,ERROR,ERRORCODE } = require("../utils/appError.utils")
const MESSAGE = require('../utils/errorMessges.utils')

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
    console.log(req.query)
    const model = models.find(model=> model.collectionName === quoteCategoryEnumObj[req.params.id])

    let  page =1
    let  limit=10
    console.log(req.query.hasOwnProperty('page'))
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