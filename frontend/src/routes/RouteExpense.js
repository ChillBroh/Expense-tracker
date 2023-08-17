import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Expenseshome from "../pages/Expenseshome";
import AddExpense from "../pages/AddExpense";

const RouteExpense = () => {
  return (
    <Routes>
      <Route path="/" element={<Expenseshome />} />
      <Route path="/add" element={<AddExpense />} />
    </Routes>
  );
};

export default RouteExpense;
