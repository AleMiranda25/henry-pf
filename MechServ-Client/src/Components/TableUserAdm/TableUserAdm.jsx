/* eslint-disable react/prop-types */
import { useState, useEffect } from 'react';
import axios from 'axios';

const TableUserAdm = (props) => {
    const { users, setUsers } = props;
    const [editUser, setEditUser] = useState("");
    const [userToUpdate, setUserToUpdate] = useState({});
    const [isAdminChecked, setIsAdminChecked] = useState(false);
    const [isActiveChecked, setIsActiveChecked] = useState(false);

    useEffect(() =>{
        console.log("userToUpdate:", userToUpdate);
    },[userToUpdate])

    const editMode = async (event) => {
        const idUser = event.target.dataset.key;
        const user = users.filter((user) => user.id == idUser)[0];

        setEditUser(idUser);

        setUserToUpdate({
            ...userToUpdate,
            id : idUser,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
            isActive: user.isActive,
        })

        setIsAdminChecked(user.isAdmin);

        setIsActiveChecked(user.isActive);

    }

    const changeUserToUpdate = (event) => {
        const propToChange = event.target.name;
        const newValue = event.target.value;

        setUserToUpdate ({...userToUpdate,
            [propToChange] : newValue
        })
    }

    const handleClick = (event) =>{
        const propToChange = event.target.name;

        setUserToUpdate ({...userToUpdate,
            [propToChange] : !userToUpdate[propToChange]
        })

        if(propToChange == "isAdmin") setIsAdminChecked(!isAdminChecked)

        if(propToChange == "isActive") setIsActiveChecked(!isActiveChecked)

    }

    const saveUser = async () => {
        try {
            const res = await axios.post(`/users/${userToUpdate.id}`, userToUpdate);
            setUserToUpdate({});
            setEditUser("");
            alert(res.data.message)
            setUsers([...users]);

        } catch (err) {
            console.log(err);
        }

    }

    return (
    <div className="mt-16 overflow-x-auto bg-white bg-opacity-50">
    <table className="table">
        {/* head */}
        <thead>
        <tr className="font-[Oswald] text-black text-[17px] font-semibold align-middle">
            <th>Nombre</th>
            <th>Email</th>
            <th>Admin</th>
            <th>Activo</th>
            <th></th>
        </tr>
        </thead>
        <tbody>
        {users?.map(user => (
            <tr key={user.id} className="font-[Oswald] text-black text-[15px] align-middle" >
                <td>{user.id == editUser
                    ?<div>
                        <input
                            type="text"
                            id="nameInput"
                            name="name"
                            placeholder={user.name}
                            onChange={changeUserToUpdate}
                        />
                    </div>
                    :user.name
                }</td>
                <td>{user.id == editUser
                    ?<div>
                        <input
                            type="number"
                            id="valorInput"
                            name="email"
                            placeholder={user.email}
                            onChange={changeUserToUpdate}
                        />
                    </div>
                    :user.email
                }</td>
                <td>{user.id == editUser
                    ?<input
                    name="isAdmin"
                    type="checkbox"
                    checked={isAdminChecked}
                    onChange={handleClick}
                    />
                    :<i
                      className={
                        user.isAdmin
                          ? "fa fa-check-circle-o fa-2x text-green-700"
                          : "fa fa-times-circle-o fa-2x text-red-700"
                      }
                    />
                }</td>
                <td>{user.id == editUser
                    ?<input
                    name="isActive"
                    type="checkbox"
                    checked={isActiveChecked}
                    onChange={handleClick}
                    />
                    :<i
                      className={
                        user.isActive
                          ? "fa fa-check-circle-o fa-2x text-green-700"
                          : "fa fa-times-circle-o fa-2x text-red-700"
                      }
                    />
                }</td>
                <td>
                    {user.id == editUser
                    ?<a data-key={user.id} className="font-[Oswald] hover:text-[#5770F4] text-black text-[17px] font-semibold align-middle cursor-pointer" onClick={saveUser}> Guardar
                    </a>
                    :<a data-key={user.id} className="font-[Oswald] hover:text-[#5770F4] text-black text-[17px] font-semibold align-middle cursor-pointer" onClick={editMode}> Editar
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

export default TableUserAdm;
