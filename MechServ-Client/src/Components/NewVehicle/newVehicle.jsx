import React, { useState } from "react";
import Modal from "./Modal"
import { addNewVehicle } from "../../redux/actions";

const NewVehicle = (idUser) => {
    const [dialogOpen, setDialogOpen] = useState(false);

    const openDialog = () => {
        setDialogOpen(true);
    };

    const closeDialog = () => {
        setDialogOpen(false);
    };

    const [form, setForm] = useState({
        brand: "",
        model: "",
        year: ""
    })

    const [errors, setErrors] = useState({
        brand: "",
        model: "",
        year: ""
    })

    const validate = (form) => {
        let newErrors = {}
        const genRegex = /^[A-Za-z0-9\s]+$/
        const yearRegex = /^\d+$/
        if(genRegex.test(form.brand) || form.brand === ""){
            setErrors({...errors, brand:""})
        } else {
            newErrors["brand"] = "Sólo puede contener letras, números o espacios"
        }

        if(genRegex.test(form.model) || form.model === ""){
            setErrors({...errors, model:""})
        } else {
            newErrors["model"] = "Sólo puede contener letras, números o espacios"
        }

        if(yearRegex.test(form.year) || form.year === ""){
            setErrors({...errors, year:""})
        } else {
            newErrors["year"] = "Sólo puede contener números"
        }
        setErrors(newErrors)
    }

    const changeHandler = (event) => {
        const property = event.target.name;
        let value;
        value = event.target.value;      
        validate({...form, [property]:value});  
        setForm({...form, [property]:value})
    }
    
    const submitHandler = async (event) => {
        event.preventDefault()
        if (Object.values(errors).every((error)=> error === "")){
            addNewVehicle(idUser, form)
            setForm({
                brand: "",
                model: "",
                year: ""
            })
            setErrors({
                brand: "",
                model: "",
                year: ""
            })
        }
    }

    return (
        <div>         
            <button
                className="hover:text-[#5770F4] hover:opacity-80 bg-[rgb(32,33,35)] text-[whitesmoke] grid place-items-center rounded-btn w-24 h-4 sm:w-24 md:lg:w-24 sm:h-3 md:lg:h-6 font-[Oswald] text-[10px] sm:md:lg:text-[10px] font-bold opacity-95"
                onClick={openDialog}>
                Nuevo Vehiculo
            </button>
            {
            dialogOpen && <Modal dialogOpen={dialogOpen} closeDialog={closeDialog}>
                <form onSubmit={submitHandler}>                    
                    <div className="flex flex-col backdrop-blur-sm bg-[#202123] bg-opacity-90 text-[whitesmoke] justify-between p-3 rounded-2xl w-80 h-80 font-[Oswald] font-bold">
                        <div className="flex flex-row justify-between px-3 text-[25px]">
                            <p>Nuevo vehículo</p>
                            <button onClick={closeDialog}>x</button>
                        </div>
                        <div className="flex flex-col m-2">
                            <div className="flex justify-between p-2 my-4 relative">
                                <label>Marca: </label>
                                <input className="bg-[rgb(52,53,55)] rounded-xl px-2 w-48" type="text" value={form.brand} onChange={changeHandler} name="brand"/>
                                {errors.brand && <span className="text-[red] absolute font-bold text-[11px] m-0 z-10 bottom-[-10px] right-2">{errors.brand}</span>}
                            </div>
                            <div className="flex justify-between p-2 my-4 relative">
                                <label>Modelo: </label>
                                <input className="bg-[rgb(52,53,55)] rounded-xl px-2 w-48" type="text" value={form.model} onChange={changeHandler} name="model"/>
                                {errors.model && <span className="text-[red] absolute font-bold text-[11px] m-0 z-10 bottom-[-10px] right-2">{errors.model}</span>}
                            </div>
                            <div className="flex justify-between p-2 my-4 relative">
                                <label>Año: </label>
                                <input className="bg-[rgb(52,53,55)] rounded-xl px-2 w-48" type="text" value={form.year} onChange={changeHandler} name="year"/>
                                {errors.year && <span className="text-[red] absolute font-bold text-[11px] m-0 z-10 bottom-[-10px] right-11">{errors.year}</span>}
                            </div>
                            <button className="hover:text-[#5770F4] hover:opacity-80 bg-[rgb(32,33,35)] text-[whitesmoke] rounded-btn font-[Oswald] font-bold opacity-95 hover:cursor-pointer" type="submit">Cargar vehículo</button>
                        </div>
                    </div>
                </form>
            </Modal>
            }
        </div>
        
    )
}

export default NewVehicle;