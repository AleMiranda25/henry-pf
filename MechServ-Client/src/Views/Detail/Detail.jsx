import { useParams } from "react-router-dom";
import { Navbar } from "../../Components";
import { bgHome } from "../../assets/Backgrounds/backgrounds";
import { getService } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import CalendarCarousel from "../../Components/CalendarCarousel/CalendarCarousel";
import VehiculeList from "../../Components/VehiculeList/VehiculeList";

const Detail = () => {
    const { id } = useParams();
    const dispatch = useDispatch()
    const [ turnoSeleccionado, setTurnoSeleccionado ] = useState({
        idUser : "",
        idVehiculo : "",
        idServicio : "",
        idTurno : "",
    });
    const services = useSelector((state) => state.serviceId);

    useEffect(() => {
        dispatch(getService(id));
        setTurnoSeleccionado({... turnoSeleccionado, idServicio : id })
    }, [])

    console.log("turnoSeleccionado detail:", turnoSeleccionado)

return (
    <div
      className="flex flex-col justify-center align-middle items-center bg-cover bg-center bg-no-repeat h-screen max-w-full md:flex-0 shrink-0 overflow-auto"
      style={{
        backgroundImage: `url(${bgHome})`,
      }}
    >
        <Navbar/>
        <div className="flex">
            <div>
        <div className="flex flex-col h-2/3 w-1/2 rounded-3xl p-10 justify-center items-center text-[16px] font-bold bg-[#202123] text-[whitesmoke]">
            {services && (<h1>{services.name}</h1>)}
            {services && (<h1>Precio: ${services.price}</h1>)}
            {services && (<h1>{services.description}</h1>)}
        </div>
            </div>
            <div>
                <div className="h-2/3 w-1/3" >
                <CalendarCarousel turnos={services ? services.turnos : undefined} turnoSeleccionado={turnoSeleccionado} setTurnoSeleccionado={setTurnoSeleccionado}/>
                </div>
            </div>
            <div>
                <div className="h-2/3 w-1/3" >
                <VehiculeList turnoSeleccionado={turnoSeleccionado} setTurnoSeleccionado={setTurnoSeleccionado}/>
                </div>
            </div>
        </div>
    </div>
)
}

export default Detail;