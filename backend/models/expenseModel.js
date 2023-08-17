const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const addExpense = new Schema({
  title: {
    type: String,
    required: [true, "Must Add a title for expense!"],
  },
  Category: {
    type: String,
    required: [true, "Must Select a Category!"],
  },
  Description: String,
  amount: {
    type: Number,
    required: [true, "Must Add a amount!"],
  },
  Date: {
    type: Date,
    required: [true, "Must add a Date"],
  },
});

const expenseDetails = mongoose.model("Expense Details", addExpense);
module.exports = expenseDetails;
