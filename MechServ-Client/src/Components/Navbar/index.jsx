//Funcionalidad
import { useNavigate, useLocation } from "react-router";

//Componentes
import Searchbar from "../Searchbar";

const Navbar = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const myFunction = () => {
    var x = document.getElementById("myTopnav");
    x.className === "topnav"
      ? (x.className += "responsive sm:absolute right-[0] top-[0]")
      : (x.className = "topnav");
  };
  return (
    <nav
      className="topnav mx-auto px-2 fixed top-[0] left-[0] w-full overflow-hidden bg-[#202123] flex h-16 items-center justify-between sm:px-6 lg:px-8"
      id="myTopnav"
    >
      <a
        className="active align-middle cursor-pointer"
        onClick={() =>
          location.pathname === "/" ? window.location.reload() : navigate("/")
        }
      >
        <i className="fa fa-wrench fa-2x text-[whitesmoke]" />
        <span className="font-[Oswald] text-[30px] font-normal leading-[68px] tracking-normal text-left text-[whitesmoke]">
          {" "}
          MechServ
        </span>
      </a>

      <ul className="flex flex-row items-center gap-4">
        <li class="searchBar float-right">
          {location.pathname === "/" && <Searchbar />}
        </li>
        <li>
          {location.pathname === "/" && (
            <a
              className="createBtn text-[17px] hover:text-[#5770F4] text-[whitesmoke] font-semibold align-middle cursor-pointer"
              onClick={() => navigate("/create")}
            >
              <i className="fa fa-plus" /> Agendar Cita
            </a>
          )}
        </li>
        {/* <li>
          <label className="cursor-pointer grid place-items-center">
            <input
              type="checkbox"
              value="synthwave"
              className="toggle theme-controller bg-base-content row-start-1 col-start-1 col-span-2"
            />
            <svg
              className="col-start-1 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="5" />
              <path d="M12 1v2M12 21v2M4.2 4.2l1.4 1.4M18.4 18.4l1.4 1.4M1 12h2M21 12h2M4.2 19.8l1.4-1.4M18.4 5.6l1.4-1.4" />
            </svg>
            <svg
              className="col-start-2 row-start-1 stroke-base-100 fill-base-100"
              xmlns="http://www.w3.org/2000/svg"
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
            </svg>
          </label>
        </li> */}
        <li>
          {location.pathname === "/" && (
            <button
              className="bg-indigo-950 text-indigo-400 border border-indigo-400 border-b-4 font-medium overflow-hidden relative px-4 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
              onClick={() => navigate("/login")}
            >
              <span className="bg-indigo-400 shadow-indigo-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
              Ingresar
            </button>
          )}
        </li>
      </ul>
      <a className="icon hidden" onClick={myFunction}>
        <i className="fa fa-bars" />
      </a>
    </nav>
  );
};

export default Navbar;
