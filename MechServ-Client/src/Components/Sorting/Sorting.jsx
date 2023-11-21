import React from "react";

const SortingOptions = ({sortOrder, sortDirection, onSortChange}) => {

    
    return (
        <div class="font-bold">

        <div class="flex flex-col justify-around p-2 items-center" >
            <label>Ordenar de forma: </label>
            <select class="rounded-md bg-blue-600 p-1 shadow-md font-bold text-white cursor-pointer" value={sortOrder} onChange={(e) => onSortChange("order", e.target.value)}>
                <option class="font-bold" value="name">Alfabética</option>
                <option class="font-bold" value="price">Por precio</option>
            </select>
        </div>

        <div class="flex flex-col justify-around p-2 items-center">
            <label>Dirección:</label>
            <select class="rounded-md bg-blue-600 p-1 shadow-md font-bold text-white cursor-pointer" value={sortDirection} onChange={(e) => onSortChange("direction", e.target.value)}>
                <option class="font-bold" value="asc">Ascendente</option>
                <option class="font-bold" value="desc">Descendente</option>
            </select>
        </div>
        </div>
    )
}

export default SortingOptions;