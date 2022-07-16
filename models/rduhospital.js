const mongoose = require('mongoose');

const rduhospitalSchema = new mongoose.Schema({
    chw_id:{
        type: String
    },
    chw_name:{
        type: String
    },
    amp_id:{
        type: String
    },
    amp_name:{
        type: String
    },
    total:{
        type: Number
    },
    lt6:{
        type: Number
    },
    lt6per:{
        type: Number
    },
    bw6to9:{
        type: Number
    },
    bw6to9per:{
        type: Number
    },
    pass9to12:{
        type: Number
    },
    pass_percent:{
        type: Number
    },
    k1:{
        type: Number
    },
    k2:{
        type: Number
    },
    k3:{
        type: Number
    },
    k4:{
        type: Number
    },
    k5:{
        type: Number
    },
    k6:{
        type: Number
    },
    k7:{
        type: Number
    },
    k8:{
        type: Number
    },
    k9:{
        type: Number
    },
    k10:{
        type: Number
    },
    k11:{
        type: Number
    },
    k12:{
        type: Number
    },
    dreport:{
        type: Date
    }
});

module.exports = Rduhospital = mongoose.model('rduhospitals', rduhospitalSchema);