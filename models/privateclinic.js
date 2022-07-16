const mongoose = require('mongoose');

const privateclinicSchema = new mongoose.Schema({
    clinicname:{
        type: String
    },
    clinictype:{
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

module.exports = Privateclinic = mongoose.model('privateclinics', privateclinicSchema);