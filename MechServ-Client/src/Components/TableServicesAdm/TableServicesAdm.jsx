/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';

const TableServicesAdm = (props) => {
    const { services, categories } = props;
    const [editService, setEditService] = useState("");
    const [serviceToUpdate, setServiceToUpdate] = useState({});
    const [category, setCategory] = useState('');

    useEffect(() =>{
        console.log("serviceToUpdate:", serviceToUpdate);
    },[serviceToUpdate, categories])

    const editMode = async (event) => {
        const idService = event.target.dataset.key;
        const service = services.filter((service) => service.idServicio == idService)[0];

        setEditService(idService);

        setServiceToUpdate({
            ...serviceToUpdate,
            idService : idService,
            name: service.name,
            category: service.category,
        })

        setCategory(service.category);
    }

    const changeServiceToUpdate = (event) => {
        const propToChange = event.target.name;
        const newValue = event.target.value;

        setServiceToUpdate ({...serviceToUpdate,
            [propToChange] : newValue
        })
    }

    const saveService = async () => {
        try {
            const res = await axios.post(`/services/${serviceToUpdate.idService}`, serviceToUpdate);
            setServiceToUpdate({});
            setEditService("");
            alert(res.data.message)

        } catch (err) {
            console.log(err);
        }
    }

    const handleSeleccion = (event) => {
        setCategory(event.target.value);
    };

    return (
    <div className="overflow-x-auto bg-white bg-opacity-50">
    <table className="table">
        {/* head */}
        <thead>
        <tr className="font-[Oswald] text-black text-[17px] font-semibold align-middle">
            <th>Servicio</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {services?.map(service => (
            <tr key={service.idServicio} className="font-[Oswald] text-black text-[15px] align-middle" >
                <td>{service.idServicio == editService
                    ?<div>
                        <input
                            type="text"
                            id="nameInput"
                            name="name"
                            placeholder={service.name}
                            onChange={changeServiceToUpdate}
                        />
                    </div>
                    :service.name
                }</td>
                <td>{service.idServicio == editService
                    ?<div>
                        <input
                            type="number"
                            id="valorInput"
                            name="price"
                            placeholder={service.price}
                            onChange={changeServiceToUpdate}
                        />
                    </div>
                    :service.price
                }</td>
                <td>{service.idServicio == editService
                    ?<div>
                        <select
                            id="listaDesplegable"
                            value={category}
                            onChange={handleSeleccion}
                        >
                            <option value="">{category}</option>
                            {categories?.map((category, index) => (
                            <option key={index} value={category}>
                                {category}
                            </option>
                            ))}
                        </select>
                    </div>
                    :service.category
                }</td>
                <td>
                    {service.idServicio == editService
                    ?<a data-key={service.idServicio} className="font-[Oswald] hover:text-[#5770F4] text-black text-[17px] font-semibold align-middle cursor-pointer" onClick={saveService}> Guardar
                    </a>
                    :<a data-key={service.idServicio} className="font-[Oswald] hover:text-[#5770F4] text-black text-[17px] font-semibold align-middle cursor-pointer" onClick={editMode}> Editar
                    </a>
                    }
                </td>
            </tr>
        ))}
        </tbody>
    </table>
    </div>
    );
};

export default TableServicesAdm;
