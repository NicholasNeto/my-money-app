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

const billingCycleSchema = new mongoose.Schema({
    name: { type: String, require: true },
    month: {type: Number, min: 1, max: 12, require: true},
    year: {type: Number, min: 1993, max: 2021, require: true },
    credits: [creditSchema],
    debts: [debtSchema]
})

module.exports = restfull.model("BillingCycle", billingCycleSchema)