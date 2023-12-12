/* eslint-disable react/prop-types */
import CalendarElement from "../CalendarElement/CalendarElement";

const CalendarCarousel = (props) => {
  const { turnos, turnoSeleccionado, setTurnoSeleccionado } = props;

  return (
    <div className="carousel">
        {turnos?.map((date) =>{
            return (
                <CalendarElement key={date.date} date={date.date} hours={date.turnos} setTurnoSeleccionado={setTurnoSeleccionado} turnoSeleccionado={turnoSeleccionado} className="carousel-item w-full"/>
            )
        })}
    </div>
    );
};

export default CalendarCarousel;
