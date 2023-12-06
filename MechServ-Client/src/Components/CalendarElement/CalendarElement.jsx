/* eslint-disable react/prop-types */
const CalendarElement = (props) => {
    const { date, hours, turnoSeleccionado, setTurnoSeleccionado } = props;

    const changeTurnoSeleccionado = (event) => {
        setTurnoSeleccionado({... turnoSeleccionado, idTurno: event.target.dataset.key})
    }

    const styleButton = (id, disponible) => {
        if(id == turnoSeleccionado.idTurno){
            return "hover:text-[#5770F4] hover:opacity-80 bg-[#6e31e7] text-[whitesmoke]"
        } else if (disponible) {
            return "hover:text-[#5770F4] hover:opacity-80 bg-[rgb(32,33,35)] text-[whitesmoke]"
        } else {
            return "bg-[rgb(82,82,84)] text-[#8d8989] cursor-default"
        }
    }

    return (
    <div className="p-4 text-center">
    <h2 className="mb-4 grid place-items-center rounded-btn w-24 h-4 sm:w-16 md:lg:w-24 sm:h-4 md:lg:h-8 font-[Oswald] text-[15px] sm:md:lg:text-[12px] font-bold bg-[#202123] text-[whitesmoke] opacity-95">{date}</h2>
    <div className="grid grid-cols-2 gap-4">
        {hours?.map(hour => (
        <div key={hour.hora} className="flex gap-4">
            <button key={hour.id_turno} data-key={hour.id_turno} className={`${styleButton(hour.id_turno, hour.disponible)}
            " grid place-items-center rounded-btn w-8 h-4 sm:w-16 md:lg:w-16 sm:h-3 md:lg:h-6 font-[Oswald] text-[10px] sm:md:lg:text-[10px] font-bold opacity-95"`}
            onClick={hour.disponible
            ?changeTurnoSeleccionado
            : null}
            >
            {hour.hora.slice(0,5)}
            </button>
        </div>
        ))}
    </div>
    </div>
);
};

export default CalendarElement;
