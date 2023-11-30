//Funcionalidad
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bgHome } from "../../assets/Backgrounds/backgrounds";
import { getAllCategories } from "../../redux/actions";

//Components
import { Carrousel, Footer, Navbar } from "../../Components";

//? #####################################################
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
    // dispatch(getAllServices());
  }, []);
  return (
    <div
      className="flex flex-col bg-cover bg-center bg-no-repeat h-screen max-w-full md:flex-0 shrink-0"
      style={{
        backgroundImage: `url(${bgHome})`,
      }}
    >
      <Navbar />
      <div className="flex flex-col justify-around gap-20 ">
        <div className=" text-[whitesmoke] mt-24">
          {
            //* TITULO
          }
          <h1 className="font-[Oswald] text-center font-bold text-5xl">
            ¡Bienvenidos a nuestro sitio web!
          </h1>
        </div>
        <div className="grid place-items-center">
          {
            //* CARRUSEL
          }
          <h2 className="font-[Oswald] text-center text-white font-bold astext-[30px] mt-10 mb-5">
            Categorías
          </h2>
          <Carrousel />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Home;