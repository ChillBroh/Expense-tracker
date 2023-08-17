import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Ripple, initTE } from "tw-elements";
import Swal from "sweetalert2";
import axios from "axios";

const UpdateExpense = () => {
  const { id } = useParams();
  const [Expenses, setExpenses] = useState([]);
  const navigate = useNavigate();

  //store database states
  const [title, setTitle] = useState(Expenses.title);
  const [Category, setCategory] = useState(Expenses.Category);
  const [Description, setDescription] = useState(Expenses.Description);
  const [amount, setAmount] = useState(Expenses.amount);
  const [Date, setDate] = useState(Expenses.Date);

  useEffect(() => {
    initTE({ Ripple });
    const getExpenses = async () => {
      try {
        const response = await axios.get(
          `http://localhost:5000/api/expenses/${id}`
        );
        console.log(response.data.data.expense.Date);
        setExpenses(response.data.data.expense);
      } catch (err) {
        console.log(err.message);
      }
    };
    getExpenses();
  }, []);

  //send data to database
  const handleUpdate = async (e) => {
    e.preventDefault();

    if (title === "" || Category === "" || amount === 0 || Date === "") {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "missing required fields!",
      });
      return;
    }

    try {
      const result = await Swal.fire({
        title: "Confirm Expenses Details Update",
        showDenyButton: true,
        confirmButtonText: "confirm",
        denyButtonText: `cancel`,
      });

      if (result.isConfirmed) {
        const response = await axios.put(
          `http://localhost:5000/api/expenses/${id}`,
          {
            title,
            Category,
            Description,
            amount,
            Date,
          }
        );
        Swal.fire(response.data.message, "", "success");
        navigate("/");
      } else {
        Swal.fire("Expense adding Cancelled!", "", "error");
      }
    } catch (err) {
      // using err instead of error1111111111
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
      });
    }
  };

  const handeleCancel = async (e) => {
    e.preventDefault();

    try {
      const result = await Swal.fire({
        title: "Are You Sure You want to cancel?",
        showDenyButton: true,
        confirmButtonText: "confirm",
        denyButtonText: `cancel`,
        icon: "warning",
      });

      if (result.isConfirmed) {
        navigate("/");
      }
    } catch (err) {
      // using err instead of error
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: err.message,
      });
    }
  };

  return (
    <div className="mx-auto max-w-2xl px-4 py-10 sm:px-4 sm:py-15 lg:max-w-7xl lg:px-8">
      <form>
        <div className="space-y-12">
          <div>
            <h2 className="text-3xl font-semibold leading-7 text-[#41A4FF] text-center">
              Update Expense
            </h2>

            <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              {/* add title */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="title"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Add a Title
                </label>
                <div className="mt-2">
                  <input
                    defaultValue={Expenses.title}
                    type="text"
                    name="title"
                    id="title"
                    placeholder="Title"
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      setTitle(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* select category */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="category"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Select Expense Category
                </label>
                <div className="mt-2">
                  <select
                    value={Expenses.Category}
                    id="category"
                    name="category"
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      setCategory(e.target.value);
                    }}
                  >
                    <option>--Select one--</option>
                    <option value={"FOOD"}>Food</option>
                    <option value={"HOUSE HOLD"}>House Hold</option>
                    <option value={"SOCIAL LIFE"}>Social Life</option>
                    <option value={"TRANSPOTATION"}>Transpotation</option>
                    <option value={"HEALTH"}>Health</option>
                    <option value={"MISCELLANEOUS"}>Miscellaneous</option>
                  </select>
                </div>
              </div>

              {/* add description */}
              <div className="col-span-full">
                <label
                  htmlFor="description"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Add a Description
                </label>

                <div className="mt-2">
                  <textarea
                    defaultValue={Expenses.Description}
                    rows={10}
                    type="text"
                    name="description"
                    id="description"
                    className="block w-full rounded-md border-0 px-3 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    placeholder="Description"
                    onChange={(e) => {
                      setDescription(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* add date*/}
              <div className="sm:col-span-3">
                <label
                  htmlFor="date"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Date
                </label>
                <div className="mt-2">
                  <input
                    value={Expenses.Date}
                    type="Date"
                    name="date"
                    id="date"
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      setDate(e.target.value);
                    }}
                  />
                </div>
              </div>
              {/* amount */}
              <div className="sm:col-span-3">
                <label
                  htmlFor="amount"
                  className="block text-lg font-medium leading-6 text-gray-900"
                >
                  Add Amount
                </label>
                <div className="mt-2">
                  <input
                    value={Expenses.amount}
                    type="number"
                    name="amount"
                    id="amount"
                    placeholder="Amount spent"
                    className="block w-full px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                    onChange={(e) => {
                      setAmount(e.target.value);
                    }}
                  />
                </div>
              </div>

              {/* reset submit button */}
              <div className="mt-6 flex text-rightjustify-end gap-x-6">
                <button
                  type="reset"
                  className="text-lg font-semibold leading-6  text-red-700"
                  onClick={handeleCancel}
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="rounded-md text-right bg-black px-3 py-2 text-lg font-semibold text-white shadow-sm hover:bg-[#41A4FF] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  onClick={handleUpdate}
                >
                  Update
                </button>
              </div>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
export default UpdateExpense;
