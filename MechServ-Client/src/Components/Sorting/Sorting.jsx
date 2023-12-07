import React from "react";

const SortingOptions = ({ sortOrder, sortDirection, onSortChange }) => {
  return (
    <div className="font-bold font-[Oswald] bg-[#202123] bg-opacity-60 flex flex-row w-screen justify-evenly sm:md:lg:justify-around p-4 text-sm sm:md:lg:text-xl">
      <div>
        <label>Ordenar de forma: </label>
        <select
          className="font-bold bg-[#202123] bg-opacity-90 p-2 rounded-lg"
          value={sortOrder}
          onChange={(e) => onSortChange("order", e.target.value)}
        >
          <option className="font-bold bg-[#202123]" value="name">
            Alfabética
          </option>
          <option className="font-bold bg-[#202123]" value="price">
            Por precio
          </option>
        </select>
      </div>

      <div>
        <label>Dirección: </label>
        <select
          className="font-bold bg-[#202123] bg-opacity-90 p-2 rounded-lg"
          value={sortDirection}
          onChange={(e) => onSortChange("direction", e.target.value)}
        >
          <option className="font-bold bg-[#202123]" value="asc">
            Ascendente
          </option>
          <option className="font-bold bg-[#202123]" value="desc">
            Descendente
          </option>
        </select>
      </div>
    </div>
  );
};

export default SortingOptions;
