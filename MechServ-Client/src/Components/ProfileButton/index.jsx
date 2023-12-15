//Funcionalidad
import { useAuth0 } from "@auth0/auth0-react";
import { useNavigate } from "react-router";
//Componentes

const ProfileButton = () => {
  const { user, logout } = useAuth0();
  const navigate = useNavigate();
  const isAdmin = localStorage.getItem("isAdmin");
  //const isAdmin = true;

  const handleLogout = () => {
    // Limpiar localStorage
    localStorage.clear();

    // Realizar el logout
    logout({
      logoutParams: { returnTo: window.location.origin },
    });
  };

  return (
    <>
      <div className="dropdown dropdown-end">
        <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
          <div className="w-10 rounded-full">
            <img alt={user?.name} src={user?.picture} />
          </div>
        </label>
        <ul
          tabIndex={0}
          className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#202123] rounded-box w-52"
        >
          <li>
            <a
              onClick={() => navigate(`/profile`)}
              className="justify-between font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] hover:bg-zinc-800 text-[17px] font-semibold"
            >
              Perfil
              {/* <span className="badge">New</span> */}
            </a>
          </li>
          <li>
            <a
              onClick={() => navigate(`/orders`)}
              className="justify-between font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] hover:bg-zinc-800 text-[17px] font-semibold"
            >
              Ordenes
              {/* <span className="badge">New</span> */}
            </a>
          </li>
          {isAdmin ? (
            <li>
              <a
                onClick={() => navigate(`/servicesadm`)}
                className="justify-between font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] hover:bg-zinc-800 text-[17px] font-semibold"
              >
                Servicios
                {/* <span className="badge">New</span> */}
              </a>
            </li>
          ) : (
            <></>
          )}
          {isAdmin ? (
            <li>
              <a
                onClick={() => navigate(`/usersadm`)}
                className="justify-between font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] hover:bg-zinc-800 text-[17px] font-semibold"
              >
                Usuarios
                {/* <span className="badge">New</span> */}
              </a>
            </li>
          ) : (
            <></>
          )}
          {/*
            <li>
            <a className="font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] hover:bg-zinc-800 text-[17px] font-semibold">
            Settings
            </a>
            </li> 
         */}
          <li>
            <a
              onClick={handleLogout}

              className="font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] hover:bg-zinc-800 text-[17px] font-semibold"
            >
              Salir
            </a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default ProfileButton;
