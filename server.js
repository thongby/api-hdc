const express = require('express');
const mongoose = require('mongoose');
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
require('dotenv').config();
const { readdirSync } = require('fs');

//app
const app = express();

//connect DB
// This script can not connect to Mongodb server.
/* mongoose.connect(process.env.DATABASE, {
    useNewUrlParser: true
    //useCreateIndex: true,
    //useFindAndModify: true
}).then(()=> console.log('DB connected.'))
    .catch((err)=> console.log('DB connect Err ', err)) */

// This script works!
mongoose.connect(process.env.DATABASE).then(()=> console.log('DB connected.'))
        .catch((err)=> console.log('DB connect Err ', err))

//Result: DB connected
//DB: Atlas
//mongoose.connect('mongodb+srv://admin:admin@cluster0.9unuy.mongodb.net/rducountry?retryWrites=true&w=majority')
//        .then(()=> console.log('DB connected.'))
//        .catch((err)=> console.log('DB connect Err ', err))


//Result: DB connected
// Local Host
//mongoose.connect('mongodb://localhost:27017/rducountry', { useNewUrlParser: true, useUnifiedTopology: true })
//        .then(()=> console.log('DB connected.'))
//        .catch((err)=> console.log('DB connect Err ', err));

// VPS Host: 212.80.212.203
//mongoose.connect('mongodb://212.80.212.203:27017/rducountry', {user:'rducountry', pass:'RdcFdaNdi0479', auth: {authSource:'admin'}}) // Not work
//mongoose.connect('mongodb://rducountry:RdcFdaNdi0479@212.80.212.203:27017/rducountry?retryWrites=true&w=majority')  // Not work
//mongoose.connect('mongodb://212.80.212.203:27017/rducountry',{"user": "rducountry", "pass": "RdcFdaNdi0479"}) // Not work
//mongoose.connect('mongodb://rducountry:RdcFdaNdi0479@212.80.212.203:27017/rducountry?authSource=admin')
//        .then(()=> console.log('DB connected.'))
//        .catch((err)=> console.log('DB connect Err ', err))

//middleware
app.use(morgan("dev"));
app.use(bodyParser.json({limit:"2mb"}));
app.use(cors());

// routes
readdirSync('./routes')
    .map((r)=>app.use("/api",require('./routes/'+r)));


// Server up
const port = process.env.PORT;
//const port = 8000;
app.listen(port, ()=>console.log(`Server is running on port ${port}.`));
