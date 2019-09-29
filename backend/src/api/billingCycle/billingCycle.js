const restfull = require('node-restfull')
const mongoose = restfull.mongoose

const creditSchema = new mongoose.Schema({
    name: {type: String, required: true },
    value: {type: Number, min: 0, required: true }
})


const debtSchema = new mongoose.Schema({
    name: {type: String, required: true },
    value: {type: Number, min: 0, required: true },
    status: {type: String, require: false, uppercase: true},
    enum: ['PAGO', 'PENDENTE', 'AGENDADO']
})