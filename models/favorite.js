const mongoose = require('mongoose');
require('mongoose-currency').loadType(mongoose);
const Currency = mongoose.Types.Currency;

const Schema = mongoose.Schema;

const favoriteSchema = new Schema({
    user : {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
        unique: true
    },
    campsites : [{
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Campsite'
    }]
}, {
    timestamps: true

})

const Favorite = mongoose.model('Favorite', favoriteSchema);
module.exports = Favorite;