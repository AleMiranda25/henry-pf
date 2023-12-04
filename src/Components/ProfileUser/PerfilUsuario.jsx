import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getOrders } from "../../redux/actions";
import { useAuth0 } from "@auth0/auth0-react";

const PerfilUsuario = () => {
  const { user } = useAuth0();
  const dispatch = useDispatch();
  const { idUser } = useParams();
  const orders = useSelector((state) => state.orders);

  useEffect(() => {
    if (idUser) {
      dispatch(getOrders(idUser));
    }
  }, [dispatch, idUser, orders]);

  console.dir(orders, { depth: null });

  return (
    <div className="flex justify-center items-center h-screen">
      {user ? (
        <div className="card w-96 bg-base-100 shadow-xl mr-6">
          <figure><img src={user.picture} alt="Shoes" /></figure>
          <div className="card-body">
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

      <div className='flex flex-col items-center justify-center gap-6'>
        <button className="btn" onClick={() => document.getElementById('my_modal_1').showModal()}>Turnos solicitados</button>
        <dialog id="my_modal_1" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Turnos</h3>
            {orders ? (
              orders.map((order) => (
                <div key={order.id_orden}>
                  <p>Día: {order.Turno.dia}</p>
                  <p>Hora: {order.Turno.hora}</p>
                </div>
              ))
            ) : (
              <p>Cargando...</p>
            )}
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>

        <button className="btn" onClick={() => document.getElementById('my_modal_2').showModal()}>Servicios solicitados</button>
        <dialog id="my_modal_2" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Servicios</h3>
            {orders ? (
              orders.map((order) => (
                <div key={order.id_orden}>
                  <p>Nombre: {order.Servicio.name}</p>
                  <p>Categoría: {order.Servicio.category}</p>
                  <p>Descripción: {order.Servicio.description}</p>
                  <p>Precio: {order.Servicio.price}</p>
                </div>
              ))
            ) : (
              <p>Cargando...</p>
            )}
            <div className="modal-action">
              <form method="dialog">
                <button className="btn">Close</button>
              </form>
            </div>
          </div>
        </dialog>

        <button className="btn" onClick={() => document.getElementById('my_modal_3').showModal()}>Vehiculos</button>
        <dialog id="my_modal_3" className="modal">
          <div className="modal-box">
            <h3 className="font-bold text-lg">Vehiculos</h3>
            {orders ? (
              orders.map((order) => (
                <div key={order.id_orden}>
                  <p>Marca: {order.Vehiculo.marca}</p>
                  <p>Modelo: {order.Vehiculo.modelo}</p>
                </div>
              ))
            ) : (
              <p>Cargando...</p>
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

