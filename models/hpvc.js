const mongoose = require('mongoose');

const hpvcdataSchema = new mongoose.Schema({
    hpvcno:{
        type: String
    },
    prodcat:{
        type: String
    },
    sexcode:{
        type: String
    },
    sex:{
        type: String
    },
    age:{
        type: String
    },
    patienttype:{
        type: String
    },
    reptype:{
        type: String
    },
    repquality:{
        type: String
    },
    relationlevel:{
        type: String
    },
    severity:{
        type: String
    },
    severitytype:{
        type: String
    },
    result:{
        type: String
    },
    regcenter:{
        type: String
    },
    changwat:{
        type: String
    },
    amphoe:{
        type: String
    },
    tambon:{
        type: String
    },
    repgroup:{
        type: String
    },
    repsource:{
        type: String
    },
    sentsource:{
        type: String
    },
    repdate:{
        type: Date
    },
    repreceivedate:{
        type: Date
    },
    dsensitivehis:{
        type: String
    },
    dsensdetail:{
        type: String
    },
    othersymptoms:{
        type: String
    },
    othersymptomsdetail:{
        type: String
    },
    druggroup:{
        type: String
    },
    drugsubgroup:{
        type: String
    },
    drugcode:{
        type: String
    },
    drugname:{
        type: String
    },
    drugtype:{
        type: String
    },
    tradename:{
        type: String
    },
    amtuse:{
        type: String
    },
    units:{
        type: String
    },
    freq:{
        type: String
    },
    method:{
        type: String
    },
    usedate:{
        type: Date
    },
    stopdate:{
        type: Date
    },
    from:{
        type: String
    },
    aecode:{
        type: String
    },
    aename:{
        type: String
    },
    organcode:{
        type: String
    },
    organname:{
        type: String
    },
    eventstart:{
        type: Date
    },
    eventstop:{
        type: Date
    },
});

module.exports = Hpvcdata = mongoose.model('hpvcs', hpvcdataSchema);