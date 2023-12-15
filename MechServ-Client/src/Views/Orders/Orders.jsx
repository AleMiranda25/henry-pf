//Funcionalidad
import { bgHome } from "../../assets/Backgrounds/backgrounds";
import axios from "axios";
import { useEffect, useState, useRef } from "react";

//Components
import { Footer, Navbar, TableOrders } from "../../Components";

const Orders = () => {
  const idUser = localStorage.getItem('userId');
  const isAdmin = localStorage.getItem('isAdmin');
  const [orders, setOrders] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [viewAll, setViewAll] = useState(false);
  const shouldRenderRef = useRef(true);

  useEffect(() => {
    const getOrders = async () => {
      try {
        if (isAdmin && viewAll) {
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

    if (shouldRenderRef.current) {
      getOrders();
      shouldRenderRef.current = false;
    }
  }, [isAdmin, idUser, viewAll]);

  const handleButtonView = () => {
    setViewAll(!viewAll);
    shouldRenderRef.current = true;
  };

  return (
    <div
      className="flex flex-col gap-20 bg-cover bg-center bg-no-repeat h-screen max-w-full md:flex-0 shrink-0"
      style={{
        backgroundImage: `url(${bgHome})`,
      }}
    >
      <Navbar />
      {isAdmin
      ?<a
        onClick={handleButtonView}
        className="mt-16 justify-between font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] cursor-pointer hover:bg-zinc-800 text-[17px] font-semibold"
      >{viewAll
        ? `Ver Ordenes de Usuario`
        : `Ver Todas las Ordenes`
      }
      </a>
      : <></>
      }
      <TableOrders orders={orders ? orders : []} isAdmin={isAdmin} refresh={refresh} setRefresh={setRefresh}/>

      <Footer />
    </div>
  );
};

export default Orders;