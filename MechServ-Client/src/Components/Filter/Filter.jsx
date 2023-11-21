import React from "react";

const Filter = ({selectedFilter, onFilterByService}) => {
    const handleFilterChange = (event) => {
        const selectedValue = event.target.value;
        onFilterByService(selectedValue);
    }

    console.log();
    return (
        <div class="flex flex-col justify-around p-2 items-center">
            <label class="font-bold">Categorías: </label>
            <select class="rounded-md bg-blue-600 p-1 shadow-md font-bold text-white cursor-pointer" value={selectedFilter} onChange={handleFilterChange}>
                <option value="">Todos los servicios</option>
                <option value="frenos">Frenos</option>
                <option value="llantas">Llantas</option>
                <option value="suspension">Suspensión</option>
                <option value="motor">Motor</option>
                <option value="carroceria">Carrocería</option>
            </select>
        </div>
    )
}

export default Filter;