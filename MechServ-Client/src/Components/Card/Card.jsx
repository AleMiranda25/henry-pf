import { gearIcon } from "../../assets/Icons/icons";
import { useNavigate } from "react-router-dom";

const Card = ({ id, name, price }) => {
  const navigate = useNavigate();
  return (
    <div className="card w-60 h-60 bg-[#202123] shadow-xl cursor-pointer  hover:text-[#5770F4] hover:opacity-90">
      <a
        onClick={() => {
          navigate(`/detail/${id}`);
        }}
        className="grid place-items-center font-[Oswald] card-body text-center"
      >
        <i className="fa fa-solid fa-gear fa-3x sm:md:lg:mt-2" />
        <h2 className="card-title">{name?.toUpperCase()}</h2>
        <h3>{`Precio: $${price}`}</h3>
      </a>
    </div>
  );
};

export default Card;
