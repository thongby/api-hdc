const mongoose = require('mongoose');

const privatehospitalSchema = new mongoose.Schema({
    hosname:{
        type: String
    },
    hossize:{
        type: String
    },
    hostype:{
        type: String
    },
    score:{
        type: String
    },
    percent:{
        type: Number
    },
    level:{
        type: Number
    },
});

module.exports = Privatehospital = mongoose.model('privatehospitals', privatehospitalSchema);