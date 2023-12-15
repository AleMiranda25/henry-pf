//Funcionalidad
import { bgHome } from "../../assets/Backgrounds/backgrounds";
import axios from "axios";
import { useEffect, useState } from "react";

//Components
import { Footer, Navbar, TableOrders } from "../../Components";

const Orders = () => {
const idUser = localStorage.getItem('userId');
//const idUser = "da368930-9a37-11ee-a17d-c557fe83a6d3"
const isAdmin = localStorage.getItem('isAdmin');
//const isAdmin = false;
const [ orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        if (isAdmin) {
          const res = await axios.get(`/orders`);
          setOrders(res.data);
        } else {
          const res = await axios.get(`/orders/${idUser}`);
          setOrders(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getOrders();
  }, [orders]);

  return (
    <div
      className="flex flex-col justify-around gap-20 bg-cover bg-center bg-no-repeat h-screen max-w-full md:flex-0 shrink-0"
      style={{
        backgroundImage: `url(${bgHome})`,
      }}
    >
      <Navbar />
      <TableOrders orders={orders ? orders : []} setOrders={setOrders} isAdmin={isAdmin} />

      <Footer />
    </div>
  );
};

export default Orders;
