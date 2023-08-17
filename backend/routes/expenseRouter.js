const express = require("express");
const router = express.Router();
const expenseController = require("../controllers/expensesController");

router
  .route("/")
  .post(expenseController.createExpense)
  .get(expenseController.getAllExpenses);

router
  .route("/:id")
  .put(expenseController.updateExpense)
  .delete(expenseController.deleteExpense)
  .get(expenseController.getExpense);
module.exports = router;
