//Funcionalidad
import { bgHome } from "../../assets/Backgrounds/backgrounds";
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from "react-router";
//import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//Components
import { Footer, Navbar, TableServicesAdm } from "../../Components";

const ServicesAdm = () => {
  const isAdmin = true;
  const navigate = useNavigate();
  const [services, setServices] = useState([]);
  //const [fechaSeleccionada, setFechaSeleccionada] = useState(null);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    const getServices = async () => {
      try {
        if(isAdmin){
          const res = await axios.get(`/services`);
          setServices(res.data);
          const categ = await axios.get(`/categories`);
          setCategories(categ.data);
        }

      } catch (err) {
          console.log(err);
      }
    }

    getServices();
  }, [])
/*
  const handleFechaSeleccionada = date => {
    setFechaSeleccionada(date);
  };
*/
  return (
    <div
      className="flex flex-col justify-around gap-20 bg-cover bg-center bg-no-repeat h-screen max-w-full md:flex-0 shrink-0"
      style={{
        backgroundImage: `url(${bgHome})`,
      }}
    >
      <Navbar />
      <a
        onClick={() => navigate(`/newservice`)}
        className="mt-16 justify-between font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] cursor-pointer hover:bg-zinc-800 text-[17px] font-semibold"
      >
        Agregar Servicio
        {/* <span className="badge">New</span> */}
      </a>
      <TableServicesAdm services={services} setServices={setServices} categories={categories} />
      <Footer />
    </div>
  );
};

export default ServicesAdm;
