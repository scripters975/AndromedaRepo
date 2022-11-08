
const { AppError,ERROR,ERRORCODE } = require("../utils/appError.utils")
const MESSAGE = require('../utils/errorMessges.utils')
exports.GoogleLogin = async(req, res)=>{
    try{

    }
    catch(error){
        throw new AppError(MESSAGE.SERVERSIDERROR,ERROR.InternalServerError,ERRORCODE.InternalServerError)
    }
}