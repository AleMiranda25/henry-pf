import { useEffect, useState } from "react";
import axios from "axios";

const VehiculeList = (props) => {
    const { turnoSeleccionado, setTurnoSeleccionado } = props;
    const idUser = "34ef4450-92f6-11ee-b3a6-5fed9014fd01"
    //setTurnoSeleccionado({... turnoSeleccionado, userId : userId})
    const [ vehiculos, setVehiculos] = useState([]);

    useEffect(() => {
        const getVehiculos = async () => {
            try {
                const res = await axios.get(`/vehiculos/${idUser}`);
                setVehiculos(res.data.vehiculos);
            } catch (err) {
                console.log(err);
            }
        };

        getVehiculos();
    }, [])


    const changeVehiculoSeleccionado = (event) => {
        setTurnoSeleccionado({... turnoSeleccionado, idVehiculo: event.target.dataset.key, idUser : idUser })
    }

    const styleButton = (id) => {
        if(id == turnoSeleccionado.idVehiculo){
            return "hover:text-[#5770F4] hover:opacity-80 bg-[#6e31e7] text-[whitesmoke]"
        } else {
            return "hover:text-[#5770F4] hover:opacity-80 bg-[rgb(32,33,35)] text-[whitesmoke]"
        }
    }

    return (
    <div className="p-4 text-center">
    <h2 className="mb-4 grid place-items-center rounded-btn w-24 h-4 sm:w-16 md:lg:w-24 sm:h-4 md:lg:h-8 font-[Oswald] text-[15px] sm:md:lg:text-[12px] font-bold bg-[#202123] text-[whitesmoke] opacity-95">VEHICULOS</h2>
    <div className="grid grid-cols-1 gap-4">
    {vehiculos?.map(vehiculo => (
        <div key={`"div-${vehiculo.id_vehiculo}"`} className="flex gap-4 w-24 h-4 sm:w-24 md:lg:w-24 sm:h-3 md:lg:h-6">
            <button key={vehiculo.id_vehiculo} data-key={vehiculo.id_vehiculo} className={`${styleButton(vehiculo.id_vehiculo)}
            " grid place-items-center rounded-btn w-24 h-4 sm:w-24 md:lg:w-24 sm:h-3 md:lg:h-6 font-[Oswald] text-[10px] sm:md:lg:text-[10px] font-bold opacity-95"`}
            onClick={changeVehiculoSeleccionado}
            >
            {`${vehiculo.marca} - ${vehiculo.modelo}`}
            </button>
        </div>
        ))}
        <div key="divNuevoVehiculo" className="flex gap-4 w-24 h-4 sm:w-24 md:lg:w-24 sm:h-3 md:lg:h-6">
            <button key="nuevoVehiculo" className="hover:text-[#5770F4] hover:opacity-80 bg-[rgb(32,33,35)] text-[whitesmoke] grid place-items-center rounded-btn w-24 h-4 sm:w-24 md:lg:w-24 sm:h-3 md:lg:h-6 font-[Oswald] text-[10px] sm:md:lg:text-[10px] font-bold opacity-95"
            onClick={changeVehiculoSeleccionado}
            >
            Nuevo Vehiculo
            </button>
        </div>
    </div>
    </div>
);
};

export default VehiculeList;