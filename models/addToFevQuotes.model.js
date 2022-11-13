const mongoos = require('mongoose')

const Schema = mongoos.Schema

const addToFevQuoteSchemal = new Schema({
    userEmail: {
        type: String,
        default: null
    },
    deviceId: {
        type: String,
        required: [true, 'Device id is required']
    },

    favouriteQuotes : [
        {
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
                unique: true,
                required: [true, 'Content is required']
            },
            tags: {
                type: Array,
                default: []
        
            }
        }
    ]
    
})

const FavouriteQuote = mongoos.model('favouritequote', addToFevQuoteSchemal)

module.exports =  FavouriteQuote;