const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expensesController");

router.route("/").post(expenseController.createExpense);
