/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';

const TableServicesAdm = (props) => {
    const { services } = props;
    const [editService, setEditService] = useState("");
    const [serviceToUpdate, setServiceToUpdate] = useState({});

    useEffect(() =>{
        console.log("serviceToUpdate:", serviceToUpdate)
    },[serviceToUpdate])

    const editMode = (event) => {   
        const idService = event.target.dataset.key;
        const service = services.filter((service) => service.idServicio == idService)[0];

        setEditService(idService);

        setServiceToUpdate({
            ...serviceToUpdate,
            idService : idService,
            name: service.name,
            category: service.category,
        })
    }

    const changeServiceToUpdate = (event) => {
        const propToChange = event.target.name;
        const newValue = event.target.value;

        setServiceToUpdate ({...serviceToUpdate,
            [propToChange] : newValue
        })
    }

    return (
    <div className="overflow-x-auto bg-white bg-opacity-50">
    <table className="table">
        {/* head */}
        <thead>
        <tr>
            <th>Servicio</th>
            <th>Precio</th>
            <th>Categoria</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {services?.map(service => (
            <tr key={service.idServicio} >
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
                <td>{service.category}</td>
                <td>
                    {service.idServicio == editService
                    ?<a data-key={service.idServicio} className="font-[Oswald] hover:text-[#5770F4] text-black text-[17px] font-semibold align-middle cursor-pointer" onClick={editMode}> Guardar
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
