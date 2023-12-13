//Funcionalidad
import axios from "axios";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router";

const TableOrders = (props) => {
  const { orders, isAdmin } = props;
  const navigate = useNavigate();
  const [forceUpdate, setForceUpdate] = useState(false);

  const setOrder = async (id_orden) => {
    try {
      await axios.get(`/orders/set/${id_orden}`);
      setForceUpdate((prev) => !prev);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    setForceUpdate(false);
  }, [forceUpdate]);

  //* MERCADO PAGO INIT
  const buyFunction = async (order) => {
    let item = {
      name: order.Servicio.name,
      price: order.Servicio.price,
    };
    console.log(item);
    try {
      const response = await axios.post(`/Mercado_Pago`, item);
      window.location.href = response.data;
    } catch (error) {
      console.log(error);
    }
  };

  //* MERCADO PAGO END

  return (
    <div className="overflow-x-auto bg-white bg-opacity-50">
      <table className="table">
        {/* head */}
        <thead>
          <tr>
            <th>Servicio</th>
            <th>Vehiculo</th>
            <th>Turno</th>
            <th>Valor</th>
            <th>Pago</th>
            <th></th>
            {isAdmin ? <th> Is Active</th> : null}
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr key={order.id_orden}>
              <td>{order.Servicio.name}</td>
              <td>{`${order.Vehiculo.marca} - ${order.Vehiculo.modelo}`}</td>
              <td>{`${order.Turno.dia} - ${order.Turno.hora}`}</td>
              <td>{order.Servicio.price}</td>
              <td>
                <i
                  className={
                    order.payment
                      ? "fa fa-check-circle-o fa-2x text-green-700"
                      : "fa fa-times-circle-o fa-2x text-red-700"
                  }
                />
              </td>
              <td>
                <a
                  className={
                    order.payment
                      ? "text-[#8d8989] cursor-default"
                      : "font-[Oswald] hover:text-[#5770F4] text-black text-[17px] font-semibold align-middle cursor-pointer"
                  }
                  onClick={order.payment ? null : buyFunction(order)}
                >
                  <i className="fa fa-money" /> Pagar
                </a>
              </td>
              {isAdmin ? (
                <td>
                  <a
                    className="font-[Oswald] hover:text-[#5770F4] text-black font-semibold align-middle cursor-pointer"
                    onClick={() => setOrder(order.id_orden)}
                  >
                    <i
                      className={
                        order.isActive
                          ? "fa fa-check-circle-o fa-2x text-green-700"
                          : "fa fa-times-circle-o fa-2x text-red-700"
                      }
                    />
                  </a>
                </td>
              ) : null}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableOrders;
