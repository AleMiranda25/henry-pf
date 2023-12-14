//Funcionalidad
import { bgHome } from "../../assets/Backgrounds/backgrounds";
import { useState, useEffect } from 'react';
import axios from 'axios';
//import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//Components
import { Footer, Navbar, TableServicesAdm } from "../../Components";

const ServicesAdm = () => {
  const isAdmin = true;
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
      <TableServicesAdm services={services} categories={categories} />
      <h1>Selecciona una fecha</h1>
{/*      <DatePicker
        selected={fechaSeleccionada}
        onChange={handleFechaSeleccionada}
        dateFormat="dd/MM/yyyy"
        placeholderText="Selecciona una fecha"
      />*/}
      <Footer />
    </div>
  );
};

export default ServicesAdm;
