/* eslint-disable react/prop-types */
import { useNavigate } from "react-router";

const TableOrders = (props) => {
    const { orders } = props;
    const navigate = useNavigate();

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
        </tr>
        </thead>
        <tbody>
        {orders?.map(order => (
            <tr key={order.id_orden}>
                <td>{order.Servicio.name}</td>
                <td>{`${order.Vehiculo.marca} - ${order.Vehiculo.modelo}`}</td>
                <td>{`${order.Turno.dia} - ${order.Turno.hora}`}</td>
                <td>{order.Servicio.price}</td>
                <td>
                    <i className={order.payment? "fa fa-check-circle-o fa-2x" : "fa fa-times-circle-o fa-2x"} />
                </td>
                <td>
                    <a className={order.payment
                                ? "text-[#8d8989] cursor-default"
                                : "font-[Oswald] hover:text-[#5770F4] text-black text-[17px] font-semibold align-middle cursor-pointer"
                                }
                    onClick={order.payment? () => navigate("/") : null}
                    >
                    <i className="fa fa-money" /> Pagar
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
