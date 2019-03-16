const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    userId: mongoose.Schema.Types.ObjectId,
    transactionDate: { type: Date, required: true },
    transactionType: { type: String, required: true },
    description: { type: String, required: true },
    charge: { type: Number, default: 0 },
    deposit: { type: Number, default: 0 },
    note: { type: String, default: '' },
    createdOn: { type: Date, default: Date.now },
});

const Transaction = mongoose.model('Transaction', transactionSchema);

module.exports = Transaction;