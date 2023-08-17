import React from "react";
import { Routes, Route } from "react-router-dom";
import Expenseshome from "../pages/Expenseshome";
import AddExpense from "../pages/AddExpense";
import UpdateExpense from "../pages/UpdateExpense";

const RouteExpense = () => {
  return (
    <Routes>
      <Route path="/" element={<Expenseshome />} />
      <Route path="/add" element={<AddExpense />} />
      <Route path="/edit/:id" element={<UpdateExpense />} />
    </Routes>
  );
};

export default RouteExpense;
