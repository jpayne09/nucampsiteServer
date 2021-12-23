const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const Schema = mongoose.Schema;

const promotionSchema = new Schema({
    name: {
        type: String,
        unique: true,
        required: true
    },
    image:{
        type: String,
        required:true
    },
    featured:{
        type: String
    },
    cost:{
        type: Currency,
        required: true 
    },
    description:{
        type: String,
        required: true
    },
}, {
    timestamps: true
})

const Promotion = mongoose.model('Promotion', promotionSchema);
module.exports = Promotion;