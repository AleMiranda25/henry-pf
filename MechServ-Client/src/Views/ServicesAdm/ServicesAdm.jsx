//Funcionalidad
import { useState, useEffect } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';

//Components
import { TableServicesAdm  } from "../../Components";

const ServicesAdm = () => {
  const isAdmin = true;
  const [services, setServices] = useState([]);

  const [fechaSeleccionada, setFechaSeleccionada] = useState(null);

  useEffect(() => {
    const getServices = async () => {
      try {
        if(isAdmin){
          const res = await axios.get(`/services`);
          setServices(res.data);
        }

      } catch (err) {
          console.log(err);
      }
    }

    getServices();
  }, [])

  const handleFechaSeleccionada = date => {
    setFechaSeleccionada(date);
  };

  return (
    <div>
      <TableServicesAdm services={services} />
      <h1>Selecciona una fecha</h1>
      <DatePicker
        selected={fechaSeleccionada}
        onChange={handleFechaSeleccionada}
        dateFormat="dd/MM/yyyy"
        placeholderText="Selecciona una fecha"
      />
    </div>
  );
};

export default ServicesAdm;
