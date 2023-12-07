import { gearIcon } from "../../assets/Icons/icons";
import { useNavigate } from "react-router-dom";

const Card = ({ id, name }) => {
  const navigate = useNavigate();
  // const reduceFontSize = (name) => {
  //   const maxLength = 20; // Número máximo de caracteres antes de reducir el tamaño de la fuente
  //   if (name.length > maxLength) {
  //     const scaleFactor = maxLength / name.length;
  //     const newSize = 30 * scaleFactor; // Ajusta el tamaño base según tu preferencia
  //     return newSize + "px";
  //   }
  //   return "30px"; // Tamaño de fuente predeterminado si no se necesita ajuste
  // };

  return (
    // <div className="m-2 flex items-center justify-around" key={props.id}>
    //   <a
    //     href={`/detail/${props.id}`}
    //     //w-20 h-20 sm:md:lg:w-60 sm:md:lg:h-60
    //     className=" grid place-items-center text-[8px] sm:md:lg:text-[30px] rounded-lg sm:md:lg:rounded-badge w-20 h-20 sm:w-20 md:lg:w-60 sm:h-20 md:lg:h-60 font-[Oswald] hover:text-[#5770F4] font-bold bg-[#202123] text-[whitesmoke] opacity-95 hover:opacity-80 cursor-pointer"
    //   >
    //     {/* <i className="fa fa-solid fa-gear fa-3x sm:md:lg:mt-2" /> */}
    //     <img className=" h-2/3 sm:md:lg:h-[50px]" src={gearIcon} alt="" />
    //     <h1
    //       className="font-bold text-center"
    //       // style={{ fontSize: reduceFontSize(props.name) }}
    //     >
    //       {props.name.toUpperCase()}
    //     </h1>
    //   </a>
    // </div>
    <div className="card w-60 h-60 bg-[#202123] shadow-xl cursor-pointer  hover:text-[#5770F4] hover:opacity-90">
      <a
        onClick={() => {
          navigate(`/detail/${id}`);
        }}
        className="grid place-items-center font-[Oswald] card-body text-center"
      >
        <i className="fa fa-solid fa-gear fa-3x sm:md:lg:mt-2" />
        <h2 className="card-title">{name?.toUpperCase()}</h2>
      </a>
    </div>
  );
};

export default Card;
