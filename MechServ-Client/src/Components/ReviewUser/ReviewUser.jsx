import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder, getUser, getUserByEmail } from '../../redux/actions';
import { useAuth0 } from "@auth0/auth0-react";
import './ReviewUser.css'; // Importar el archivo de estilos CSS
import axios from 'axios';


const ReviewUsuario = () => {
  const [tituloReseñas, setTituloReseñas] = useState('Escriba su reseña aquí');
  const [puntuacion, setPuntuacion] = useState(0);
  const storedOrders = localStorage.getItem("order");

  if (storedOrders) {
      const ordersArray = JSON.parse(storedOrders);
  
      ordersArray.forEach((order, index) => {
          const orderId = order.id_orden;
          console.log(`ID de la orden ${index + 1}: ${orderId}`);
      });
  } else {
      console.log("No hay órdenes almacenadas en el localStorage");
  }   //"8ddcbf80-9a11-11ee-a9f0-bf2f8a5d38a7"





  const handleChange = (event) => {
    setTituloReseñas(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const data = {
      contenido: tituloReseñas,
      puntuacion: puntuacion,
      id_orden: id_orden,
    };

    axios.post('https://mechserv-pf.onrender.com/reviews/', data)   // http://localhost:3001/reviews/
      .then(response => {
        
        console.log(response.data);
        alert('Reseña enviada con éxito');
      })
      .catch(error => {
        
        console.error(error);
        alert('Error en la solicitud: ' + error.message);
      });
  };

  return (
    <div className="container">
      <div className="header">
        <h2>Reseñas</h2>
      </div>
      <div className="header2">
        <input
          type="text"
          value={tituloReseñas}
          onChange={handleChange}
          maxLength={32} // Limitar a 32 caracteres
          className="input-text"
        />
      </div>
      <div id="form">
        <form onSubmit={handleSubmit}>
          <div className="clasificacion">
            <input id="radio1" type="radio" name="estrellas" value="5" onChange={e => setPuntuacion(Number(e.target.value))} />
            <label htmlFor="radio1">★</label>
            <input id="radio2" type="radio" name="estrellas" value="4" onChange={e => setPuntuacion(Number(e.target.value))} />
            <label htmlFor="radio2">★</label>
            <input id="radio3" type="radio" name="estrellas" value="3" onChange={e => setPuntuacion(Number(e.target.value))} />
            <label htmlFor="radio3">★</label>
            <input id="radio4" type="radio" name="estrellas" value="2" onChange={e => setPuntuacion(Number(e.target.value))} />
            <label htmlFor="radio4">★</label>
            <input id="radio5" type="radio" name="estrellas" value="1" onChange={e => setPuntuacion(Number(e.target.value))} />
            <label htmlFor="radio5">★</label>
            </div>
            </form>
            <form onSubmit={handleSubmit}>  
          <div className="footer">
            <button type="submit" className="enviar-button">Enviar</button>
          </div>
          </form>
      </div>
    </div>
  );
};

export default ReviewUsuario;