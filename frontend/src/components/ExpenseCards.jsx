import axios from "axios";
import { Link } from "react-router-dom";
import { BsPenFill } from "react-icons/bs";
import Swal from "sweetalert2";
import { useNavigate } from "react-router-dom";

const ExpenseCards = (props) => {
  const navigate = useNavigate();
  //delete expense
  const handleDelete = async () => {
    const confirmResult = await Swal.fire({
      title: "Are you sure you want to delete this Expense?",
      text: "This action cannot be undone",
      icon: "warning",
      showCancelButton: true,
      confirmButtonText: "Yes, delete it",
      cancelButtonText: "No, cancel",
      reverseButtons: true,
    });

    if (confirmResult.isConfirmed) {
      try {
        await axios.delete(
          `https://expensestracker-b26826f2938b.herokuapp.com/api/expenses/${props.id}`
        );
        Swal.fire("Expense Deleted!", "", "success");
        navigate("/add");
      } catch (err) {
        console.log(err);
        Swal.fire(err.message, "", "error");
      }
    }
  };

  return (
    <div className="flex flex-col w-[300px] md:w-[300px] items-left p-10 border shadow-lg m-auto mb-8  rounded-lg bg-white">
      <div className="text-right">
        <Link to={`/edit/${props.id}`}>
          <button
            type="button"
            data-te-ripple-init
            data-te-ripple-color="light"
          >
            <BsPenFill className="text-black hover:text-red-700" />
          </button>
        </Link>
      </div>
      <div className="py-5 ">
        <p className="">{props.date}</p>
      </div>
      <h1 className="py-2 text-1xl font-bold border-b">
        Spent at : {props.title}
      </h1>

      <div className="py-5">
        <p className="">{props.desc}</p>
      </div>
      <p>{props.category}</p>
      <div className="py-5 ">
        <p className="">{props.amount} LKR</p>
      </div>
      <button
        type="button"
        data-te-ripple-init
        data-te-ripple-color="light"
        onClick={handleDelete}
        class="inline-block rounded py-5 bg-red-700 px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
      >
        Delete
      </button>
    </div>
  );
};

export default ExpenseCards;
