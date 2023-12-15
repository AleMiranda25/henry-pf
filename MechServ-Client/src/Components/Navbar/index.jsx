//Funcionalidad
import { MechServIcon } from "../../assets/Icons/icons";
import { useNavigate, useLocation } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addNewUser, searchServiceByName } from "../../redux/actions";
//Componentes
import Searchbar from "../Searchbar";
import LoginButton from "../LoginButton";
import ProfileButton from "../ProfileButton";

const Navbar = () => {
  //* Variables
  const navigate = useNavigate();
  const location = useLocation();

  const dispatch = useDispatch();
  const [name, setName] = useState("");
  //const [error, setError] = useState(null); // agregamos un estado para el mensaje de error
  const handleChange = (e) => {
    setName(e.target.value);
    dispatch(searchServiceByName(name));
  };

  const { isAuthenticated ,isLoading,user } = useAuth0();

 if (isAuthenticated && !isLoading && user) {

    dispatch(addNewUser({email:user.email,name:user.name}))
  
 }

  return (
    <div className="navbar bg-[#202123] text-[whitesmoke] mx-auto px-2 fixed top-[0] left-[0] w-full z-10">
      <div className="navbar-start">
        {(location.pathname === "/" ||
          location.pathname.includes("/services") ||
          location.pathname === "/user") && (
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>

            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-[#202123] rounded-box w-52"
            >
              {!location.pathname.includes("/services") && (
                <li>
                  <a
                    onClick={() => navigate("/services/All")}
                    className="font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] hover:bg-zinc-800 text-[17px] font-semibold align-middle"
                  >
                    <i className="fa fa-wrench" /> Servicios
                  </a>
                </li>
              )}
              <li>
                {
                  //* SEARCHBAR
                  location.pathname.includes("/services") && (
                    <div className="form-control">
                      <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-[95%] mx-0 rounded-3xl text-[#202123] h-10"
                        onChange={handleChange}
                      />
                    </div>
                  )
                }
              </li>
            </ul>
          </div>
        )}
        <a
          className="btn btn-ghost hover:bg-zinc-700 text-2xl font-[Oswald]"
          onClick={() =>
            location.pathname === "/" ? window.location.reload() : navigate("/")
          }
        >
          <img className=" h-3/4" src={MechServIcon} alt="" />
          MechServ
        </a>
      </div>
      {(location.pathname === "/" ||
        location.pathname.includes("/services")) && (
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {!location.pathname.includes("/services") && (
              <li>
                <a
                  onClick={() => navigate("/services/All")}
                  className="font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] hover:bg-zinc-800 text-[17px] font-semibold align-middle"
                >
                  <i className="fa fa-wrench" /> Servicios
                </a>
              </li>
            )}
          </ul>
        </div>
      )}
      <div className="navbar-end">
        {
          //* SEARCHBAR
          location.pathname.includes("/services") && <Searchbar />
        }
        {
          //* BOTON LOGIN
          
          (location.pathname === "/" || location.pathname.includes("/services") || location.pathname.includes("/detail") || location.pathname.includes("/orders") || location.pathname.includes("/newservice") || location.pathname.includes("/servicesadm") || location.pathname.includes("/usersadm")) &&

           (isAuthenticated ? (
              //* PARA PERFIL DE USUARIO
              <ProfileButton />
            ) : (
              <LoginButton />
            ))
        }
      </div>
    </div>
  );
};

export default Navbar;