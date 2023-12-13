//Funcionalidad
import { useSelector } from "react-redux";
<<<<<<< HEAD

const Carrousel = () => {
  const categories = useSelector((state) => state.categories);

  return (
    <div className="grid place-self-center">
      <div className="carousel w-full gap-5">
        {categories?.map((category, index) => {
          return (
            <div>
              <div id={category} key={index} className="carousel-item w-full">
                <a
                  href={`/services/${category}`}
                  className=" grid place-items-center w-40 h-40 font-[Oswald] hover:text-[#5770F4] rounded-badge text-[30px] font-bold bg-[#202123] text-[whitesmoke] opacity-95 hover:opacity-80 cursor-pointer"
=======
import { useNavigate } from "react-router-dom";

const Carrousel = () => {
  const categories = useSelector((state) => state.categories);
  const navigate = useNavigate();

  return (
    <div className="grid place-self-center ">
      <div className="carousel w-auto sm:md:lg:gap-5 ">
        {categories?.map((category, index) => {
          return (
            <div key={index}>
              <div id={category} className="carousel-item w-auto">
                <a
                  onClick={() => {
                    navigate(`/services?category=${category}`);
                  }}
                  className=" grid place-items-center rounded-badge w-16 h-16 sm:w-16 md:lg:w-32 sm:h-16 md:lg:h-32 font-[Oswald] hover:text-[#5770F4] text-[15px] sm:md:lg:text-[30px] font-bold bg-[#202123] text-[whitesmoke] opacity-95 hover:opacity-80 cursor-pointer"
>>>>>>> 63430cd2afda9828bd4cd18d6aa1920467eb6ed6
                >
                  {category}
                </a>
              </div>
            </div>
          );
        })}
        <div
          id="allServices"
<<<<<<< HEAD
          key={categories.length - 1}
          className="carousel-item w-full"
        >
          <a href={"/services/All"} className=" grid place-items-center text-center w-40 h-40 font-[Oswald] hover:text-[#5770F4] rounded-badge text-[30px] font-bold bg-[#202123] text-[whitesmoke] opacity-95 hover:opacity-80 cursor-pointer">

=======
          key={categories.length}
          className="carousel-item w-full"
        >
          <a className=" grid place-items-center text-center w-16 h-16 md:lg:w-32 md:lg:h-32 font-[Oswald] hover:text-[#5770F4] rounded-badge text-[15px] sm:md:lg:text-[30px] font-bold bg-[#202123] text-[whitesmoke] opacity-95 hover:opacity-80 cursor-pointer">
>>>>>>> 63430cd2afda9828bd4cd18d6aa1920467eb6ed6
            Todos los Servicos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
<<<<<<< HEAD

=======
>>>>>>> 63430cd2afda9828bd4cd18d6aa1920467eb6ed6
