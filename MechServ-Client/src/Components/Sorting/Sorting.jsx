import React from "react";

const SortingOptions = ({sortOrder, sortDirection, onSortChange}) => {

    return (
        <div className="font-bold bg-[#202123] flex flex-row w-auto justify-around">

        <div>
            <label>Ordenar de forma: </label>
            <select className="font-bold bg-[#202123]" value={sortOrder} onChange={(e) => onSortChange("order", e.target.value)}>
                <option className="font-bold" value="name">Alfabética</option>
                <option className="font-bold" value="price">Por precio</option>
            </select>
        </div>

        <div >
            <label>Dirección:</label>
            <select className="font-bold bg-[#202123]" value={sortDirection} onChange={(e) => onSortChange("direction", e.target.value)}>
                <option className="font-bold" value="asc">Ascendente</option>
                <option className="font-bold" value="desc">Descendente</option>
            </select>
        </div>
        </div>
    )
}

export default SortingOptions;