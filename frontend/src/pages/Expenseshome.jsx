import React, { useEffect, useState } from "react";
import Searchbar from "../components/Searchbar";
import { Ripple, initTE } from "tw-elements";
import ExpenseCards from "../components/ExpenseCards";
import axios from "axios";
import { Link } from "react-router-dom";

const Expenseshome = () => {
  useEffect(() => {
    initTE({ Ripple });
  }, []);

  const [allExpenses, setExpenses] = useState([]);
  const [filterExpenses, setFilter] = useState([]);

  let total_amount = 0;
  useEffect(() => {
    const getExpenses = async () => {
      try {
        const response = await axios.get(
          "https://expensestracker-b26826f2938b.herokuapp.com/api/expenses"
        );
        setExpenses(response.data);
        setFilter(response.data);
      } catch (err) {
        console.log(err.message);
      }
    };
    getExpenses();
  }, []);

  const handleCategoryChange = (category) => {
    if (category === "ALL") {
      setFilter(allExpenses);
    } else {
      const select = allExpenses.filter(
        (expense) => expense.Category === category
      );
      setFilter(select);
    }
  };

  //get total amount
  filterExpenses.map((exp) => {
    return (total_amount = total_amount + exp.amount);
  });

  return (
    <div className="mx-auto max-w-2xl px-4  sm:px-6  lg:max-w-7xl lg:px-8">
      <div className="pt-48 flex flex-col-2">
        <Searchbar
          onCategoryChange={handleCategoryChange}
          className="inline-block"
        />

        <div className="text-black grid grid-rows-2 gap-8 ">
          <div className="text-xl">
            Total Expenses :
            <span className="text-red-700">{total_amount} </span>LKR
          </div>
          <div className="grid grid-cols-2">
            <div></div>
            <div>
              <Link to={"/add"}>
                <button
                  type="button"
                  data-te-ripple-init
                  data-te-ripple-color="light"
                  className="inline-block items-end rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                >
                  Create Expense
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
        {filterExpenses.map((exp) => (
          <ExpenseCards
            key={exp._id}
            title={exp.title}
            category={exp.Category}
            desc={exp.Description}
            amount={exp.amount}
            date={exp.Date}
            id={exp._id}
          />
        ))}
      </div>
    </div>
  );
};

export default Expenseshome;
