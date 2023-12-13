//Funcionalidad
import { bgHome } from "../../assets/Backgrounds/backgrounds";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

//Components
import { Footer, Navbar, TableOrders } from "../../Components";

const Orders = () => {
  const userInfo = useSelector((state) => state.userInfo);
  const idUser = userInfo.user.uuid;
  const isAdmin = userInfo.user.UserType.isAdmin;
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
