require('dotenv').config({path: '.env'});
const express = require('express');
const db = require('./config/dbConnection');
const {defaultErrorHandler} = require('./middleware/common/errorHandler')
const CategoriesRouter = require('./routes/categories.router')
const QuotessRouter = require('./routes/quotes.router')
const app = express();
const { AppError } = require('./utils/appError.utils');
const cors = require('cors')
app.use(cors(
  {
    origin: true, 
    credentials: true, 
  }
));
db.databseConnection()

app.use(express.json());
app.use(express.urlencoded({extended: true}));


app.use('/Api/QuotesCategoryApi',CategoriesRouter)
app.use('/Api/QuotesApi',QuotessRouter)







app.all('*', (req, res, next) => {
    throw new AppError(`Requested URL ${req.path} not found!`, 404);
  })


app.use(defaultErrorHandler)



app.listen(process.env.PORT || 8080,()=>{
    console.log(`Server listening on ${process.env.PORT}`)
})