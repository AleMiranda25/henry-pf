/* eslint-disable react/prop-types */
import CalendarElement from "../CalendarElement/CalendarElement";

const CalendarCarousel = (props) => {
  console.log("props", props.turnos? true : false)
  const { turnos, turnoSeleccionado, setTurnoSeleccionado } = props;
  //const dates = [... new Set(turnos.map((x) => x.dia))]
  //const dates = ['2023-12-01', '2023-12-02', '2023-12-03']

  //console.log("Turnos:", turnos)
  //console.log("Dates:", dates)

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
