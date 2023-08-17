import React, { useState } from "react";

const Searchbar = () => {
  const today = new Date().toISOString().slice(0, 10);

  const [category, setCategory] = useState("");

  return (
    <div className="bg-white mt-4 lg:mt-[-52px] px-8 shadow-lg max-w-[750px]  p-4 lg:text-left text-center h-full  items-center mx-auto rounded-lg">
      <form className="flex lg:flex-row justify-between  px-4">
        <div className="flex">
          <label for="category" className="py-3 text-lg font-bold pr-10">
            Category
          </label>
          <select
            className="p-3 border rounded-md w-full"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="">All</option>
            <option>Food</option>
            <option>House Hold</option>
            <option>Social Life</option>
            <option>Transpotation</option>
            <option>Health</option>
            <option>Miscellaneous</option>
          </select>
        </div>
      </form>
    </div>
  );
};

export default Searchbar;
