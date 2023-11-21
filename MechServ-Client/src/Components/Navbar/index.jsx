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
          location.pathname === "/home"
            ? window.location.reload()
            : navigate("/home")
        }
      >
        <i className="fa fa-wrench fa-2x text-[whitesmoke]" />
        <span className="text-[25px] text-[whitesmoke] font-bold">
          {" "}
          MechServ
        </span>
      </a>

      <ul className="flex flex-row items-center gap-4">
        <li class="searchBar float-right">
          {location.pathname === "/" && <Searchbar />}
        </li>
        <li>
          <a
            className="createBtn text-[17px] hover:text-[#5770F4] text-[whitesmoke] font-semibold align-middle cursor-pointer"
            onClick={() => navigate("/create")}
          >
            <i className="fa fa-plus" /> Agendar Cita
          </a>
        </li>
        <li>
          <div class="relative flex items-center">
            <a class="mr-4 text-[whitesmoke] hover:text-[#5770F4]" href="#">
              <span class="[&>svg]:w-5">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  class="h-5 w-5"
                >
                  <path d="M2.25 2.25a.75.75 0 000 1.5h1.386c.17 0 .318.114.362.278l2.558 9.592a3.752 3.752 0 00-2.806 3.63c0 .414.336.75.75.75h15.75a.75.75 0 000-1.5H5.378A2.25 2.25 0 017.5 15h11.218a.75.75 0 00.674-.421 60.358 60.358 0 002.96-7.228.75.75 0 00-.525-.965A60.864 60.864 0 005.68 4.509l-.232-.867A1.875 1.875 0 003.636 2.25H2.25zM3.75 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0zM16.5 20.25a1.5 1.5 0 113 0 1.5 1.5 0 01-3 0z" />
                </svg>
              </span>
            </a>
          </div>
        </li>
      </ul>
      <a className="icon hidden" onClick={myFunction}>
        <i className="fa fa-bars" />
      </a>
    </nav>
  );
};

export default Navbar;
