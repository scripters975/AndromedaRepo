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
        "deathQuotes",
        "faithQuotes",
        "godQuotes",
        "happinessQuotes",
        "hopeQuotes",
        "humorQuotes",
        "inspirationQuotes",
        "knowledgeQuotes",
        "life-lessonsQuotes",
        "lifeQuotes",
        "loveQuotes",
        "motivationQuotes",
        "motivationalQuotes",
        "philosophyQuotes",
        "poetryQuotes",
        "relationshipsQuotes",
        "religionQuotes",
        "romanceQuotes",
        "scienceQuotes",
        "spiritualityQuotes",
        "successQuotes",
        "timeQuotes",
        "truthQuotes",
        "wisdomQuotes",
        "writingQuotes"
]

collections.forEach(collection => {
    models.push({
        name: mongoose.model(collection, QuotesSchema)
    })
})

module.exports = models;