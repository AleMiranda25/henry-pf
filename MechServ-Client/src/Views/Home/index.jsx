//Funcionalidad
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { bgHome } from "../../assets/Backgrounds/backgrounds";
import { getAllCategories } from "../../redux/actions";

//Components
import { CategoriesContainer, Footer, Navbar } from "../../Components/index";

//? #####################################################
const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);

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
