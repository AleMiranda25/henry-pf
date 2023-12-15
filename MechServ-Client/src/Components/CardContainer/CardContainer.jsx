import Card from "../Card/Card";
import React from "react";

const CardContainer = ({ services }) => {
  return (
    <div>
      {services.length !== 0 ? (
        <div>
          <div className="h-full flex flex-col sm:md:lg:flex-row flex-wrap justify-evenly sm:md:lg:justify-center">
            {services?.map((servicio) => {
              return (
                <div
                  key={servicio.idServicio}
                  className="grid place-items-center w-auto p-4"
                >
                  <Card
                    id={servicio.idServicio}
                    name={servicio.name}
                    price={servicio.price}
                  />
                </div>
              );
            })}
          </div>
        </div>
      ) : (
        <div className="grid place-items-center text-indigo-500 mb-40">
          <span className="loading loading-spinner loading-lg"></span>
        </div>
      )}
    </div>
  );
};

export default CardContainer;
