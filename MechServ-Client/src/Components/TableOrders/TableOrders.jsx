/* eslint-disable react/prop-types */
//Funcionalidad
import axios from "axios";
import { useNavigate } from "react-router";

const TableOrders = (props) => {
  const { orders, isAdmin, refresh, setRefresh } = props;
  const navigate = useNavigate();

  const setOrder = async (id_orden) => {
    try {
      const res =   await axios.get(`/orders/set/${id_orden}`);
      alert(res.data.message)
      setRefresh(!refresh)
    } catch (err) {
      console.log(err);
    }
  };

  //* MERCADO PAGO INIT
  const buyFunction = async (orden) => {
    let item = {
      name: orden.Servicio.name,
      price: Number(orden.Servicio.price),
    };
    console.log(item);
    try {
      const response = await axios.post(`/Mercado_Pago`, item);
      console.log(response.data);
      response.data ? (window.location.href = response.data) : null;
    } catch (error) {
      console.log(error);
    }
  };

  const handleReview = (event) => {
    const idOrden = event.target.dataset.key;
    localStorage.setItem("orderToReview", idOrden);
    navigate(`/reviews`);
  }



  //* MERCADO PAGO END

  return (
    <div className="mb-16 overflow-x-auto bg-white bg-opacity-50">
      <table className="table">
        {/* head */}
        <thead>
          <tr className="font-[Oswald] text-black text-[17px] font-semibold align-middle">
            <th>Servicio</th>
            <th>Vehiculo</th>
            <th>Turno</th>
            <th>Valor</th>
            <th>Pago</th>
            <th></th>
            {isAdmin ? <th> Is Active</th> : null}
            <th></th>
          </tr>
        </thead>
        <tbody>
          {orders?.map((order) => (
            <tr
              key={order.id_orden}
              className="font-[Oswald] text-black text-[15px] align-middle"
            >
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
                    order.payment || !order.isActive
                      ? "text-[#8d8989] cursor-default"
                      : "font-[Oswald] hover:text-[#5770F4] text-black text-[17px] font-semibold align-middle cursor-pointer"
                  }
                  onClick={
                    order.payment || !order.isActive
                      ? null
                      : () => {
                          buyFunction(order);
                        }
                  }
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
              <td>
                <a
                  className={!order.payment || !order.isActive
                      ? "text-[#8d8989] cursor-default"
                      : "font-[Oswald] hover:text-[#5770F4] text-black text-[17px] font-semibold align-middle cursor-pointer"
                  }
                  onClick={
                    !order.payment || !order.isActive
                      ? {handleReview}
                      : null
                  }

                  data-key={order.id_orden}

                >
                  <i className="fa fa-star-o  " /> Califica
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default TableOrders;