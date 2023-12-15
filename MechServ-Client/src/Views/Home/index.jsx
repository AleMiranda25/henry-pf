//Funcionalidad
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { bgHome } from "../../assets/Backgrounds/backgrounds";
import { getAllCategories, getUserByEmail } from "../../redux/actions";

//Components
import { CategoriesContainer, Footer, Navbar } from "../../Components/index";
import { useAuth0 } from "@auth0/auth0-react";

//? #####################################################
const Home = () => {
  const { user } = useAuth0();
  const usuario = useSelector((state) => state.user); //uso el estado global de user para guardar el usuario
  const orders = useSelector((state) => state.orders);
  const idUser = localStorage.getItem('userId');// aca guardo el id en el local storage
  const storedOrders = localStorage.getItem('order');// aca guardo la orden en el localstorage
  const parsedOrders = JSON.parse(storedOrders);
  const email = user?.email;
  const [isNewUser, setIsNewUser] = useState(false); 
  const [localOrders, setLocalOrders] = useState([]);
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

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



  return (
    <div
      className="flex flex-col justify-evenly bg-cover bg-center bg-no-repeat h-screen w-screen"
      style={{
        backgroundImage: `url(${bgHome})`,
      }}
    >
      <Navbar />
      <div className="flex flex-col justify-evenly bg-black bg-opacity-30 rounded-md backdrop-blur-sm min-h-full">
        {
          //* TITULO
        }
        <h1 className="font-[Oswald] text-[whitesmoke] text-center font-bold text-[40px] sm:md:lg:text-5xl mt-10">
          ¡Nuestra experiencia marca la diferencia!
        </h1>
        <div className="grid place-items-center">
          {
            //* CARRUSEL
          }
          <h2 className="font-[Oswald] text-center text-white font-bold text-[30px] mb-5">
            Categorias
          </h2>
          <CategoriesContainer />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
