import axios from "axios";
import { useParams } from "react-router-dom";
import { Navbar } from "../../Components";
import { bgHome } from "../../assets/Backgrounds/backgrounds";
import { getService } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch, useSelector } from "react-redux";
import CalendarCarousel from "../../Components/CalendarCarousel/CalendarCarousel";
import VehiculeList from "../../Components/VehiculeList/VehiculeList";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const [turnoSeleccionado, setTurnoSeleccionado] = useState({
    idUser: "",
    idVehiculo: "",
    idServicio: "",
    idTurno: "",
  });
  const services = useSelector((state) => state.serviceId);
  const navigate = useNavigate();

  //const URL = 'http://localhost:3001/'
  const URL = "https://mechserv-pf.onrender.com/";

  useEffect(() => {
    dispatch(getService(id));
    setTurnoSeleccionado({ ...turnoSeleccionado, idServicio: id });
  }, []);

    const postOrder = async () => {
        try {
            if (validateOrder(turnoSeleccionado)){
                const res = await axios.post(`${URL}order`, turnoSeleccionado);
                alert(res.data.message);
                navigate('/orders')
            }
        } catch (error) {
            console.error(error.message);

        }
    }
  };

  const validateOrder = (order) => {
    if (
      order.idOrder == "" ||
      order.idTurno == "" ||
      order.idServicio == "" ||
      order.idVehiculo == ""
    ) {
      return alert("Debes escoger turno y vehiculo");
    } else {
      return true;
    }
  };

  console.log("Turno Seleccionado:", turnoSeleccionado);

  return (
    <div
      className="flex flex-col justify-center align-middle items-center bg-cover bg-center bg-no-repeat h-screen max-w-full md:flex-0 shrink-0 overflow-auto"
      style={{
        backgroundImage: `url(${bgHome})`,
      }}
    >
      <Navbar />
      <div className="flex">
        <div>
          <div className="flex flex-col h-auto w-4/5 sm:md:lg:w-1/2 rounded-3xl p-10 justify-evenly gap-3 sm:md:lg:gap-10 text-center text-lg sm:md:lg:text-[30px] backdrop-blur-sm font-bold bg-[#202123] bg-opacity-80 text-[whitesmoke] ">
            {services && <h1>{services.name.toUpperCase()}</h1>}
            {services && <h1>Precio: ${services.price}</h1>}
            {services && (
              <p className=" text-2xl text-justify">{services.description}</p>
            )}
          </div>
        </div>
        <div>
          <div className="h-2/3 w-1/3">
            <CalendarCarousel
              turnos={services ? services.turnos : undefined}
              turnoSeleccionado={turnoSeleccionado}
              setTurnoSeleccionado={setTurnoSeleccionado}
            />
          </div>
        </div>
        <div>
          <div className="h-2/3 w-1/3">
            <VehiculeList
              turnoSeleccionado={turnoSeleccionado}
              setTurnoSeleccionado={setTurnoSeleccionado}
            />
          </div>
        </div>
      </div>

      <div
        key="divCrearOrden"
        className="flex gap-4 w-24 h-4 sm:w-24 md:lg:w-24 sm:h-3 md:lg:h-6"
      >
        <button
          key="crearOrden"
          className="hover:text-[#5770F4] hover:opacity-80 bg-[rgb(32,33,35)] text-[whitesmoke] grid place-items-center rounded-btn w-24 h-4 sm:w-24 md:lg:w-24 sm:h-3 md:lg:h-6 font-[Oswald] text-[10px] sm:md:lg:text-[10px] font-bold opacity-95"
          onClick={postOrder}
        >
          Confirma tu Cita
        </button>
      </div>
    </div>
  );
};

export default Detail;
