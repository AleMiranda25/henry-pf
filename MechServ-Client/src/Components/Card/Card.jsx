import { Link } from "react-router-dom";
// import style from "./Card.module.css"

const Card = (props) => {
    const handleClick = () => {
        console.log('Hiciste clic en la tarjeta');
      };

    return(
        <div className="m-2 flex">
            <Link to={`/detail/${props.name}`} onClick={handleClick}>
                <div className="bg-slate-50 h-32 w-32 rounded-2xl justify-around flex flex-col shadow-md p-2 align-middle items-center">
                    <i class="fa-solid fa-gear fa-2xl mt-[10px]"></i>
                    <h1 class="font-bold">{props.name.toUpperCase()}</h1>
                </div>
            </Link>
        </div>
    );

}

export default Card;