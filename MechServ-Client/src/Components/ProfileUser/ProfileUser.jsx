import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getOrder, getUser, getUserByEmail } from '../../redux/actions';
import { useAuth0 } from "@auth0/auth0-react";

const PerfilUsuario = () => {
  const usuario = useSelector((state) => state.user); //uso el estado global de user para guardar el usuario
  const orders = useSelector((state) => state.orders); //estado global de orders
  const { user } = useAuth0(); // aca me traigo el uusario de auth0
  const dispatch = useDispatch(); //ejecuto las acciones
  const email = user?.email;// aca guardo el email del usuario de auth0
  const idUser = localStorage.getItem('userId');// aca guardo el id en el local storage
  const storedOrders = localStorage.getItem('order');// aca guardo la orden en el localstorage
  const parsedOrders = JSON.parse(storedOrders);// aca hago un parseo para que la orden aparezca como un json en el local storage
  const [localOrders, setLocalOrders] = useState([]); //creo un stado para guardar la orden en mi componente
  const [isNewUser, setIsNewUser] = useState(false); 

  useEffect(() => {
    setIsNewUser(false); // Reinicia el indicador de nuevo usuario
    if (email) {
      dispatch(getUserByEmail(email));
    }
  }, [email, dispatch]);

  useEffect(() => {
    
    if (usuario.user && usuario.user.uuid) {
      console.log("Usuario :", usuario.user.UserType.isAdmin)
      if (idUser !== usuario.user.uuid) {
        setIsNewUser(true); // Establece el indicador de nuevo usuario
        localStorage.setItem('userId', usuario.user.uuid);
        localStorage.setItem('isAdmin', usuario.user.UserType.isAdmin);
      }
    }
  }, [usuario.user, idUser]);




  useEffect(() => {
    if (idUser) {
      dispatch(getOrder(idUser));
    }
  }, [idUser, dispatch]);




  useEffect(() => {
    if (orders && orders.length > 0) {
      setLocalOrders(orders);
      try {
        const ordersString = JSON.stringify(orders);
        localStorage.setItem('order', ordersString);
      } catch (error) {
        console.error('Error al convertir a cadena JSON:', error);
      }
    }
  }, [orders]);



 


  // useEffect(() => {
  //   // Eliminar elementos del almacenamiento local al desmontar el componente
  //   return () => {
  //     localStorage.removeItem('userId');
  //     if (isNewUser) {
  //       localStorage.removeItem('order');
  //     }
  //   };
  // }, [isNewUser]);






  return (
    <div className="flex justify-center items-center h-screen">
      {user ? (
        <div className="card w-96 bg-base-100 shadow-xl mr-6 h-[250px] w-[400px] flex items-center justify-center bg-neutral">
          <figure><img src={user.picture} alt="User" /></figure>
          <div className="card-body d-flex align-items-center justify-content-center  text-white">
            <h2 className="card-title">
              Perfil de Usuario
              <div className="badge badge-secondary">{user.name.split('@')[0]}</div>
            </h2>
            <p>{user.email}</p>
          </div>
        </div>
      ) : (
        <p>Cargando perfil...</p>
      )}





        <div className='flex justify-center items-center h-screen flex gap-5'>


        <button className="btn" onClick= {()=>document.getElementById('my_modal_1').showModal()}>Mis turnos y servicos solicitados</button>
<dialog id="my_modal_1" className="modal ">
  <div className="modal-box bg-neutral text-white gap-6">
    
    {localOrders && localOrders.length > 0 ? (
        <div>
          <h3 style={{ fontWeight: 'bold' }}>Turnos solicitados</h3>
          <ul>
            {localOrders.map((order) => (
              <li key={order.id_orden}>
                 <h2 style={{ fontWeight: 'bold' }}>Día:</h2><p>{order.Turno?.dia || 'Sin información de día'}</p>
                 <h2 style={{ fontWeight: 'bold' }}>Hora:</h2><p>{order.Turno?.hora || 'Sin información de hora'}</p>
                 <h2 style={{ fontWeight: 'bold' }}>servicio:</h2> <p> {order.Servicio?.name || 'Sin información de día'}</p>
               <h2 style={{ fontWeight: 'bold' }}>categoria del servicio:</h2><p> {order.Servicio?.category || 'Sin información de día'}</p>
               <h2 style={{ fontWeight: 'bold' }}>precio del servicio:</h2><p> ${order.Servicio?.price || 'Sin información de día'}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No hay órdenes disponibles.</p>
      )}
   
    <div className="modal-action">
      <form method="dialog">
      
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>




<button className="btn" onClick={()=>document.getElementById('my_modal_2').showModal()}>Historial del servicio</button>
<dialog id="my_modal_2" className="modal ">
  <div className="modal-box bg-neutral text-white gap-6">
    
    {localOrders && localOrders.length > 0 ? (
        <div>
          <h3 style={{ fontWeight: 'bold' }}>servicios solicitados</h3>
          <ul>
            {localOrders.map((order) => (
              <li key={order.id_orden}>
                <p> {order.Servicio?.name || 'Sin información de día'}</p>
               <h2 style={{ fontWeight: 'bold' }}>categoria del servicio:</h2><p> {order.Servicio?.category || 'Sin información de día'}</p>
               <h2 style={{ fontWeight: 'bold' }}>precio del servicio:</h2><p> ${order.Servicio?.price || 'Sin información de día'}</p>
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No hay órdenes disponibles.</p>
      )}
   
    <div className="modal-action">
      <form method="dialog">
      
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>



<button className="btn " onClick={()=>document.getElementById('my_modal_3').showModal()}>Mis vehiculos</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-neutral text-white gap-6">
    
    {localOrders && localOrders.length > 0 ? (
        <div>
          <h3 style={{ fontWeight: 'bold' }}>Vehiculos</h3>
          <ul>
            {localOrders.map((order) => (
               <li key={order.id_orden}>
               <h2 style={{ fontWeight: 'bold' }}>Marcca del vehiculo:</h2> <p> {order.Vehiculo?.marca || 'Sin información de día'}</p>
               <h2 style={{ fontWeight: 'bold' }}>Modelo del vehiculo:</h2><p> {order.Vehiculo?.modelo || 'Sin información de día'}</p>
              
              </li>
            ))}
          </ul>
        </div>
      ) : (
        <p>No hay órdenes disponibles.</p>
      )}
   
    <div className="modal-action">
      <form method="dialog">
      
        <button className="btn">Close</button>
      </form>
    </div>
  </div>
</dialog>


        </div>


    </div>
  );
};

export default PerfilUsuario;

