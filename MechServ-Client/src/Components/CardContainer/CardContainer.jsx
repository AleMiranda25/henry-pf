import Card from "../Card/Card"
import React from "react";

const CardContainer = ( {services} ) => {
    return (
        <div className='h-full w-full flex flex-wrap justify-around'>
            {services?.map((servicio) => {
                return (
                    <Card 
                        key={servicio.id}
                        name={servicio.name}
                    />
                );
            })}
        </div>
        );
};

export default CardContainer;