const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const Schema = mongoose.Schema;

const partnerSchema = new Schema({
    name:{
        type: String,
        unique: true,
        required: true
    },
    image:{
        type: String,
        required: true
    },
    featured:{
        type: String,
        required: false
    },
    description:{
        type: String,
        required: true
    },
}, {
    timestamps: true
});

const Partner = mongoose.model('Partner', partnerSchema);
module.exports = Partner;