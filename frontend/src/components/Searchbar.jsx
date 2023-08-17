import React, { useState } from "react";

const Searchbar = () => {
  const [category, setCategory] = useState("");

  return (
    <div className="bg-white mt-4 lg:mt-[-52px] px-8 shadow-lg max-w-[750px]  p-4 lg:text-left text-center h-full  items-center mx-auto rounded-lg">
      <form className=" px-4">
        <div className="flex">
          <label for="category" className="py-3 text-lg font-bold pr-10">
            Category
          </label>
          <select
            className="p-3 border rounded-md w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
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
      </form>
    </div>
  );
};

export default Searchbar;