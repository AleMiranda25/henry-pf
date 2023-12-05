const Card = (props) => {
  const reduceFontSize = (name) => {
    const maxLength = 20; // Número máximo de caracteres antes de reducir el tamaño de la fuente
    if (name.length > maxLength) {
      const scaleFactor = maxLength / name.length;
      const newSize = 30 * scaleFactor; // Ajusta el tamaño base según tu preferencia
      return newSize + "px";
    }
    return "30px"; // Tamaño de fuente predeterminado si no se necesita ajuste
  };

  return (
    <div className="m-2 flex items-center justify-center" key={props.id}>
      <a
        href={`/detail/${props.id}`}
        className="grid place-items-center w-60 h-60 font-[Oswald] hover:text-[#5770F4] rounded-badge text-[30px] font-bold bg-[#202123] text-[whitesmoke] opacity-95 hover:opacity-80 cursor-pointer"
      >
        <i className="fa fa-solid fa-gear fa-2xl mt-[10px]"></i>
        <h1
          className="font-bold text-center"
          style={{ fontSize: reduceFontSize(props.name) }}
        >
          {props.name.toUpperCase()}
        </h1>
      </a>
    </div>
  );
};

export default Card;
