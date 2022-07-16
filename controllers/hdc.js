const Rduhospital = require('../models/rduhospital');
const Rdupcu = require('../models/rdupcu');
const Privatehospital = require('../models/privatehospital');
const Hpvcdata = require('../models/hpvc');
const Gppdata = require('../models/drugstoregpp')

exports.listRDUHospital = async (req, res) => {
    try {
        const dataRduhospital = await Rduhospital.find({})
        res.json(dataRduhospital)
        //console.log(dataRduhospital)
        //res.send('OK')
    } catch (error) {
        console.log(error)
        res.status(400).send('Server Error!!!')
    }
}

exports.listRDUpcu = async (req, res) => {
    try {
        const dataRdupcu = await Rdupcu.find({})
        //const dataRdupcu = ['Hello World!!!', 'Bye'] //Test
        //console.log(`data: ${dataRdupcu}`)
        res.json(dataRdupcu)
        //console.log(dataRdupcu)
    } catch (error) {
        console.log(error)
        res.status(400).send('Server Error!!!')
    }
}

exports.listPrivatehospital = async (req, res) => {
    try {
        const dataPrivatehospital = await Privatehospital.find({})
        res.json(dataPrivatehospital)
    } catch (error) {
        console.log(error)
        res.status(400).send('Server Error!!!')
    }
}

exports.listHpvcdata = async (req, res) => {
    try {
        const dataHpvcdata = await Hpvcdata.find({})
        res.json(dataHpvcdata)
    } catch (error) {
        console.log(error)
        res.status(400).send('Server Error!!!')
    }
}

exports.listGppdata = async (req, res) => {
    try {
        const dataGppdata = await Gppdata.find({})
        res.json(dataGppdata)
    } catch (error) {
        console.log(error)
        res.status(400).send('Server Error!!!')
    }
}