const mongoose = require('mongoose');

const drugstoregppSchema = new mongoose.Schema({
    chw_id: {
        type: String
    },
    chw_name: {
        type: String
    },
    licno:{
        type: String
    },
    dstore_name:{
        type: String
    },
    tam_id: {
        type: String
    },
    tam_name: {
        type: String
    },
    amp_id: {
        type: String
    },
    amp_name: {
        type: String
    },
    examdate:{
        type: Date
    },
    gppexpire:{
        type: String
    },
    passgpp:{
        type: Boolean
    },
    cat1:{
        type: Number
    },
    cat2:{
        type: Number
    },
    cat3:{
        type: Number
    },
    cat4:{
        type: Number
    },
    cat5:{
        type: Number
    },
});

module.exports = Drugstoregpp = mongoose.model('drugstoregpps', drugstoregppSchema);