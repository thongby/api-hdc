const mongoose = require('mongoose');

const rdupcuSchema = new mongoose.Schema({
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
    totalpcu:{
        type: Number
    },
    year_ri:{
        type: Number
    },
    year_ri_per:{
        type: Number
    },
    year_ad:{
        type: Number
    },
    year_ad_per:{
        type: Number
    },
    year_ri_ad:{
        type: Number
    },
    year_ri_ad_per:{
        type: Number
    },
    sem1ri:{
        type: Number
    },
    sem1ad:{
        type: Number
    },
    sem1ri_ad:{
        type: Number
    },
    sem2ri:{
        type: Number
    },
    sem2ad:{
        type: Number
    },
    sem2ri_ad:{
        type: Number
    },
    sem3ri:{
        type: Number
    },
    sem3ad:{
        type: Number
    },
    sem3ri_ad:{
        type: Number
    },
    sem4ri:{
        type: Number
    },
    sem4ad:{
        type: Number
    },
    sem4ri_ad:{
        type: Number
    },
    dreport:{
        type: Date
    },
});

module.exports = Rdupcu = mongoose.model('rdupcus', rdupcuSchema);