//Funcionalidad
import { useSelector } from "react-redux";

const Carrousel = () => {
  const categories = useSelector((state) => state.categories);
  console.log(categories);

  return (
    <div className="grid place-self-center">
      <div className="carousel w-full gap-5">
        {categories?.map((category, index) => {
          return (
            <div>
              <div id={category} key={index} className="carousel-item w-full">
                <a className=" grid place-items-center w-40 h-40 font-[Oswald] hover:text-[#5770F4] rounded-full text-[30px] font-bold bg-[#202123] text-[whitesmoke] opacity-95 hover:opacity-80 cursor-pointer">
                  {category}
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Carrousel;
