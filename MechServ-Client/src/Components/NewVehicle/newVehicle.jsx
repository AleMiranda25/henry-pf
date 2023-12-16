import React, { useState } from "react";
import Modal from "./Modal";
import axios from "axios";
// import { addNewVehicle } from "../../redux/actions";

const NewVehicle = () => {
  const idUser = localStorage.getItem("userId");
  const [dialogOpen, setDialogOpen] = useState(false);

  const openDialog = () => {
    setDialogOpen(true);
  };

  const closeDialog = () => {
    setDialogOpen(false);
  };

  const [form, setForm] = useState({
    users: idUser,
    marca: "",
    modelo: "",
    date: "",
    image: "",
  });

  const [errors, setErrors] = useState({
    marca: "",
    modelo: "",
    date: "",
  });

  const validate = (form) => {
    let newErrors = {};
    const genRegex = /^[A-Za-z0-9\s]+$/;
    const yearRegex = /^\d+$/;
    if (genRegex.test(form.marca) || form.marca === "") {
      setErrors({ ...errors, marca: "" });
    } else {
      newErrors["marca"] = "Sólo puede contener letras, números o espacios";
    }

    if (genRegex.test(form.modelo) || form.modelo === "") {
      setErrors({ ...errors, modelo: "" });
    } else {
      newErrors["modelo"] = "Sólo puede contener letras, números o espacios";
    }

    if (yearRegex.test(form.date) || form.date === "") {
      setErrors({ ...errors, date: "" });
    } else {
      newErrors["date"] = "Sólo puede contener números";
    }
    setErrors(newErrors);
  };

  const changeHandler = (event) => {
    const property = event.target.name;
    let value;
    value = event.target.value;
    validate({ ...form, [property]: value });
    setForm({ ...form, [property]: value });
  };

  const submitHandler = async (event) => {
    event.preventDefault();
    if (Object.values(errors).every((error) => error === "")) {
      try {
        await axios.post("/vehiculos/", form);
        alert("Vehículo agregado exitosamente.");
        setForm({
          marca: "",
          modelo: "",
          date: "",
          image: "",
        });
        setErrors({
          marca: "",
          modelo: "",
          date: "",
        });
      } catch (err) {
        console.log(err);
      }
    }
  };

  return (
    <div>
      <button
        className="hover:text-[#5770F4] hover:opacity-80 bg-[rgb(32,33,35)] text-[whitesmoke] grid place-items-center rounded-btn w-24 h-4 sm:w-24 md:lg:w-24 sm:h-3 md:lg:h-6 font-[Oswald] text-[10px] sm:md:lg:text-[10px] font-bold opacity-95"
        onClick={openDialog}
      >
        Nuevo Vehiculo
      </button>
      {dialogOpen && (
        <Modal dialogOpen={dialogOpen} closeDialog={closeDialog}>
          <form onSubmit={submitHandler}>
            <div className="flex flex-col backdrop-blur-sm bg-[#202123] bg-opacity-90 text-[whitesmoke] justify-between p-3 rounded-2xl w-80 h-96 font-[Oswald] font-bold">
              <div className="flex flex-row justify-between px-3 text-[25px]">
                <p>Nuevo vehículo</p>
                <button onClick={closeDialog}>x</button>
              </div>
              <div className="flex flex-col m-2">
                <div className="flex justify-between p-1 my-4 relative">
                  <label>Marca: </label>
                  <input
                    className="bg-[rgb(52,53,55)] rounded-xl px-2 w-48"
                    required
                    type="text"
                    value={form.marca}
                    onChange={changeHandler}
                    name="marca"
                  />
                  {errors.marca && (
                    <span className="text-[red] absolute font-bold text-[11px] m-0 z-10 bottom-[-10px] right-2">
                      {errors.marca}
                    </span>
                  )}
                </div>
                <div className="flex justify-between p-2 my-4 relative">
                  <label>Modelo: </label>
                  <input
                    className="bg-[rgb(52,53,55)] rounded-xl px-2 w-48"
                    required
                    type="text"
                    value={form.modelo}
                    onChange={changeHandler}
                    name="modelo"
                  />
                  {errors.modelo && (
                    <span className="text-[red] absolute font-bold text-[11px] m-0 z-10 bottom-[-10px] right-2">
                      {errors.modelo}
                    </span>
                  )}
                </div>
                <div className="flex justify-between p-2 my-4 relative">
                  <label>Año: </label>
                  <input
                    className="bg-[rgb(52,53,55)] rounded-xl px-2 w-48"
                    required
                    type="text"
                    value={form.date}
                    onChange={changeHandler}
                    name="date"
                  />
                  {errors.date && (
                    <span className="text-[red] absolute font-bold text-[11px] m-0 z-10 bottom-[-10px] right-11">
                      {errors.date}
                    </span>
                  )}
                </div>
                <div className="flex justify-between p-2 my-4 relative">
                  <label></label>
                  <input
                    className="file:bg-[rgb(52,53,55)] file:text-[whitesmoke] hover:file:cursor-pointer hover:file:hover:opacity-80 flex-col hover:file:text-[#5770F4] file:rounded-btn file:border-0 file:opacity-90"
                    type="file"
                    value={form.image}
                    onChange={changeHandler}
                    name="image"
                  />
                  {/* {errors.date && <span className="text-[red] absolute font-bold text-[11px] m-0 z-10 bottom-[-10px] right-11">{errors.date}</span>} */}
                </div>
                <button
                  className="hover:text-[#5770F4] hover:opacity-80 bg-[rgb(32,33,35)] text-[whitesmoke] rounded-btn font-bold opacity-95 hover:cursor-pointer"
                  type="submit"
                >
                  Cargar vehículo
                </button>
              </div>
            </div>
          </form>
        </Modal>
      )}
    </div>
  );
};

export default NewVehicle;
