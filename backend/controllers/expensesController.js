const expense = require("../models/expenseModel");

const createExpense = (req, res) => {
  res.send("saved");
};

const updateExpense = (req, res) => {
  res.send("Updated");
};

const getAllExpenses = (req, res) => {
  res.send("all get");
};

const getExpense = (req, res) => {
  res.send("one get");
};

const deleteExpense = (req, res) => {
  res.send("deleted");
};

module.exports = {
  createExpense,
  updateExpense,
  getAllExpenses,
  getExpense,
  deleteExpense,
};
