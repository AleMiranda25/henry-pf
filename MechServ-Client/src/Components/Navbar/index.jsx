//Funcionalidad
import { MechServIcon } from "../../assets/Icons/icons";
import { useNavigate, useLocation } from "react-router";
import { useAuth0 } from "@auth0/auth0-react";
//Componentes
import Searchbar from "../Searchbar";
import LoginButton from "../LoginButton";
import ProfileButton from "../ProfileButton";

const Navbar = () => {
  //* Variables
  const navigate = useNavigate();
  const location = useLocation();
  const { isAuthenticated } = useAuth0();

  return (
    <div className="navbar bg-[#202123] text-[whitesmoke] mx-auto px-2 fixed top-[0] left-[0] w-full z-10">
      <div className="navbar-start">
        {(location.pathname === "/" || location.pathname === "/services") && (
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
              <li>
                <a
                  onClick={() => navigate("/services")}
                  className="font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] hover:bg-zinc-800 text-[17px] font-semibold align-middle"
                >
                  <i className="fa fa-wrench" /> Servicios
                </a>
              </li>
              {/* <li>
                <a
                  onClick={() => navigate("/agendar")}
                  className="font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] hover:bg-zinc-800 text-[17px] font-semibold align-middle"
                >
                  <i className="fa fa-plus" /> Agendar Cita
                </a>
              </li> */}
              <li>
                {
                  //* SEARCHBAR
                  location.pathname === "/services" && (
                    <div className="form-control">
                      <input
                        type="text"
                        placeholder="Search"
                        className="input input-bordered w-[95%] mx-0 rounded-3xl text-[#202123] h-10"
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

      {(location.pathname === "/" || location.pathname === "/services") && (
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {location.pathname !== "/services" && (
              <li>
                <a
                  onClick={() => navigate("/services")}
                  className="font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] hover:bg-zinc-800 text-[17px] font-semibold align-middle"
                >
                  <i className="fa fa-wrench" /> Servicios
                </a>
              </li>
            )}
            {/* <li>
              <a
                onClick={() => navigate("/agendar")}
                className="font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] hover:bg-zinc-800 text-[17px] font-semibold align-middle"
              >
                <i className="fa fa-plus" /> Agendar Cita
              </a>
            </li> */}
          </ul>
        </div>
      )}
      <div className="navbar-end">
        {
          //* SEARCHBAR
          location.pathname === "/services" && <Searchbar />
        }
        {
          //* CARRITO DE COMPRA
          // (location.pathname === "/services" ||
          //   location.pathname === "/profile") && (
          //   <div className="dropdown dropdown-end pr-2 hidden lg:flex">
          //     <label tabIndex={0} className="btn btn-ghost btn-circle">
          //       <div className="indicator">
          //         <svg
          //           xmlns="http://www.w3.org/2000/svg"
          //           className="h-5 w-5"
          //           fill="none"
          //           viewBox="0 0 24 24"
          //           stroke="currentColor"
          //         >
          //           <path
          //             strokeLinecap="round"
          //             strokeLinejoin="round"
          //             strokeWidth="2"
          //             d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          //           />
          //         </svg>
          //         <span className="badge badge-sm indicator-item">8</span>
          //       </div>
          //     </label>
          //     <div
          //       tabIndex={0}
          //       className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
          //     >
          //       <div className="card-body">
          //         <span className="font-bold text-lg">8 Items</span>
          //         <span className="text-info">Subtotal: $999</span>
          //         <div className="card-actions">
          //           <button className="btn btn-primary btn-block">
          //             View cart
          //           </button>
          //         </div>
          //       </div>
          //     </div>
          //   </div>
          // )
        }
        {
          //* BOTON LOGIN

          (location.pathname === "/" || location.pathname === "/services") &&
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
