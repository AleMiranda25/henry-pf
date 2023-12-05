import Card from "../Card/Card"
import React from "react";

const CardContainer = ( {services} ) => {
    return (
        <div className='h-full flex flex-wrap justify-around'>
            {services?.map((servicio) => {
                return (
                    <div key={servicio.idServicio} className={"w-1/4 p-4"}>                        
                        <Card 
                            id={servicio.idServicio}
                            name={servicio.name}
                            />
                    </div>
                );
            })}
        </div>
        );
};

export default CardContainer;