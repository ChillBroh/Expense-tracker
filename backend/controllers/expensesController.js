const Expense = require("../models/expenseModel");

const createExpense = async (req, res) => {
  try {
    const newExpense = new Expense(req.body);
    const savedExpense = await newExpense.save();
    res.status(200).json({
      status: "Success",
      message: "Expense was added successful",
      data: {
        Expense: savedExpense,
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(400).json({
      status: "Unsuccess",
      message: err.message,
    });
  }
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
