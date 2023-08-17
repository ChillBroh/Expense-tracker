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

const getAllExpenses = async (req, res) => {
  try {
    const allExpenses = await Expense.find();
    res.status(200).send(allExpenses);
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "unsuccess",
      message: err.message,
    });
  }
};

//get a specific
const getExpense = async (req, res) => {
  try {
    const EID = req.params.id;

    const expense = await Expense.findById(EID);
    res.status(200).json({
      status: "Success",
      data: {
        expense,
      },
    });
  } catch (err) {
    console.log(err.message);
    res.status(404).json({
      status: "unsuccess",
      message: err.message,
    });
  }
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
