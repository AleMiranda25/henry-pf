import { useParams } from "react-router-dom";
import { Navbar } from "../../Components";
import { bgHome } from "../../assets/Backgrounds/backgrounds";
import { getService } from "../../redux/actions";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

const Detail = () => {
  const { id } = useParams();
  const dispatch = useDispatch();
  const services = useSelector((state) => state.serviceId);

  useEffect(() => {
    dispatch(getService(id));
  }, [dispatch, id]);

  console.log(services);

  return (
    <div
      className="flex flex-col justify-center align-middle items-center bg-cover bg-center bg-no-repeat h-screen max-w-full md:flex-0 shrink-0 overflow-auto"
      style={{
        backgroundImage: `url(${bgHome})`,
      }}
    >
      <Navbar />
      <div className="flex flex-col h-2/3 w-1/2 rounded-3xl p-10 justify-evenly text-center text-[30px] backdrop-blur-sm font-bold bg-[#202123] bg-opacity-80 text-[whitesmoke] font-[Oswald]">
        {services && <h1>{services.name.toUpperCase()}</h1>}
        {services && <h1>Precio: ${services.price}</h1>}
        {/* {services && (<h1>Turnos disponibles: {services.Turnos}</h1>)} */}
        {services && (
          <p className=" text-2xl text-justify">{services.description}</p>
        )}
      </div>
    </div>
  );
};

export default Detail;
