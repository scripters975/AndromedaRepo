
const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const CategoriesSchema = new Schema({

	name: {
		type: String,
		required: true,
        trim: true
	},
    id:{
        type: Number,
        required: true
    },
    tag:{
        type: String,
        required: true
        
    },
    slug:{
        type: String,
        trim: true,
        required: true
    },
    metaTitle:{
        type: String,
        trim: true,
        required:true
    },
    iconImageUrl:{
        type:String,
        trim:true,
        required:true
    },
    activeStatus:{
        type: Boolean,
        enum: true || false,
        default: true
    },
});

const Category = mongoose.model("categories", CategoriesSchema);

module.exports =  Category;
