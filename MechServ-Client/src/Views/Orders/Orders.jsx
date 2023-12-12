//Funcionalidad
import { bgHome } from "../../assets/Backgrounds/backgrounds";
import axios from "axios";
import { useEffect, useState } from "react";

//Components
import { Footer, Navbar, TableOrders } from "../../Components";

const Orders = () => {
  const idUser = "34ef4450-92f6-11ee-b3a6-5fed9014fd01";
  const isAdmin = false;
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const getOrders = async () => {
      try {
        if (isAdmin) {
          const res = await axios.get(`/orders`);
          console.log("Orders:", res.data);
          setOrders(res.data);
        } else {
          const res = await axios.get(`/orders/${idUser}`);
          console.log("Orders:", res.data);
          setOrders(res.data);
        }
      } catch (err) {
        console.log(err);
      }
    };

    getOrders();
  }, []);

  return (
    <div
      className="flex flex-col justify-around gap-20 bg-cover bg-center bg-no-repeat h-screen max-w-full md:flex-0 shrink-0"
      style={{
        backgroundImage: `url(${bgHome})`,
      }}
    >
      <Navbar />
      <TableOrders orders={orders ? orders : []} isAdmin={isAdmin} />

      <Footer />
    </div>
  );
};

export default Orders;
