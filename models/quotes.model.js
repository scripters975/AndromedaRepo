const mongoose = require('mongoose')
const Schema = mongoose.Schema;
const QuotesSchema = new Schema({

	authorInfo: {
        name: {
            type: String,
            required: [true, 'Name is required'],
            default: 'Anonymous'
        },
        imageUrl: {
            type: String,
        }
    },
    content: {
        type: String,
        required: [true, 'Content is required']
    },
    tags: {
        type: Array,
        default: []

    }
});

const models = []
const collections = [
    "deathquotes",
    "faithquotes",
    "godquotes",
    "happinessquotes",
    "hopequotes",
    "humorquotes",
    "inspirationquotes",
    "knowledgequotes",
    "life-lessonsquotes",
    "lifequotes",
    "lovequotes",
    "motivationquotes",
    "motivationalquotes",
    "philosophyquotes",
    "poetryquotes",
    "relationshipsquotes",
    "religionquotes",
    "romancequotes",
    "sciencequotes",
    "spiritualityquotes",
    "successquotes",
    "timequotes",
    "truthquotes",
    "wisdomquotes",
    "writingquotes"
]

collections.forEach(collection => {
    models.push({
        
        collectionName: collection,
        modelName: mongoose.model(collection, QuotesSchema)

    })
})

// const Quotes = mongoose.model("writingQuotes", QuotesSchema);
module.exports = models;