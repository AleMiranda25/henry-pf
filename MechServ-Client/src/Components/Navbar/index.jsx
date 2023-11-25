//Funcionalidad
import { useNavigate, useLocation } from "react-router";

//Componentes
import Searchbar from "../Searchbar";
import { MechServIcon } from "../../assets/Icons/icons";

const Navbar = () => {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="navbar bg-[#202123] text-[whitesmoke] mx-auto px-2 fixed top-[0] left-[0] w-full">
      <div className="navbar-start">
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
              <a className="font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] hover:bg-zinc-800 text-[17px] font-semibold align-middle">
                <i className="fa fa-plus" /> Agendar Cita
              </a>
            </li>
            <li>
              <a className="font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] hover:bg-zinc-800 text-[17px] font-semibold align-middle">
                <i className="fa fa-wrench" /> Servicios
              </a>
            </li>
          </ul>
        </div>
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

      <div className="navbar-end">
        {(location.pathname === "/" || location.pathname === "/user") && (
          <div className="hidden lg:flex">
            <ul className="menu menu-horizontal px-1">
              <li>
                <a className="font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] hover:bg-zinc-800 text-[17px] font-semibold align-middle">
                  <i className="fa fa-plus" /> Agendar Cita
                </a>
              </li>
              <li>
                <a className="font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] hover:bg-zinc-800 text-[17px] font-semibold align-middle">
                  <i className="fa fa-wrench" /> Servicios
                </a>
              </li>
            </ul>
          </div>
        )}
        {location.pathname === "/" && <Searchbar />}
        {location.pathname === "/" && (
          <button
            className="hover:brightness-110 hover:animate-pulse font-bold py-2 px-6 rounded-full bg-[#5770F4] shadow-lg shadow-[#5770F4]/50 text-white"
            onClick={() => navigate("/login")}
          >
            Ingresar
          </button>
        )}
        {/*
        //* PARA USUARIO 
        */}
        {/* <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                alt="Tailwind CSS Navbar component"
                src="/images/stock/photo-1534528741775-53994a69daeb.jpg"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-[#202123] rounded-box w-52"
          >
            <li>
              <a className="justify-between font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] hover:bg-zinc-800 text-[17px] font-semibold">
                Profile
                <span className="badge">New</span>
              </a>
            </li>
            <li>
              <a className="font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] hover:bg-zinc-800 text-[17px] font-semibold">
                Settings
              </a>
            </li>
            <li>
              <a className="font-[Oswald] hover:text-[#5770F4] text-[whitesmoke] hover:bg-zinc-800 text-[17px] font-semibold">
                Logout
              </a>
            </li>
          </ul>
        </div> */}
      </div>
    </div>
  );
};

export default Navbar;
