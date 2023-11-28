//Funcionalidad
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const Carrousel = () => {
  const categories = useSelector((state) => state.categories);
  const navigate = useNavigate();
  console.log(categories);

  return (
    <div className="grid place-self-center ">
      <div className="carousel w-full md:lg:gap-5 ">
        {categories?.map((category, index) => {
          return (
            <div>
              <div id={category} key={index} className="carousel-item w-full">
                <a
                  key={index}
                  onClick={() => {
                    navigate(`/services?category=${category}`);
                  }}
                  className=" grid place-items-center w-16 h-16 md:lg:w-32 md:lg:h-32 font-[Oswald] hover:text-[#5770F4] rounded-full text-[15px] sm:md:lg:text-[30px] font-bold bg-[#202123] text-[whitesmoke] opacity-95 hover:opacity-80 cursor-pointer"
                >
                  {category}
                </a>
              </div>
            </div>
          );
        })}
        <div
          id="allServices"
          key={categories.length - 1}
          className="carousel-item w-full"
        >
          <a className=" grid place-items-center text-center w-16 h-16 md:lg:w-32 md:lg:h-32 font-[Oswald] hover:text-[#5770F4] rounded-full text-[15px] sm:md:lg:text-[30px] font-bold bg-[#202123] text-[whitesmoke] opacity-95 hover:opacity-80 cursor-pointer">
            Todos los Servicos
          </a>
        </div>
      </div>
    </div>
  );
};

export default Carrousel;
