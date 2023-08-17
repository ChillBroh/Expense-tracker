const Expense = require("../models/expenseModel");

//create a expense
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

const updateExpense = async (req, res) => {
  try {
    const EID = req.params.id;
    const updatedExpense = await Expense.findByIdAndUpdate(EID, req.body, {
      new: true,
    });

    res.status(200).json({
      status: "Success",
      data: {
        expense: updatedExpense,
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

//get all expenses
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

//get a specific Expense
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

//delete a expense
const deleteExpense = async (req, res) => {
  try {
    const EID = req.params.id;
    const deletedExpense = await Expense.findByIdAndDelete(EID);

    res.status(204).json({
      status: "Success",
      data: {
        old: deletedExpense,
        Expense: "Null",
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

module.exports = {
  createExpense,
  updateExpense,
  getAllExpenses,
  getExpense,
  deleteExpense,
};
