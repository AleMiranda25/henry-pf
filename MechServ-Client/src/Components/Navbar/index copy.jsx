//Funcionalidad
import { useNavigate, useLocation } from "react-router";
import { useEffect, useState } from "react";

//Componentes
import Searchbar from "../Searchbar";

// const Navbar = () => {
//   const navigate = useNavigate();
//   // const location = useLocation();
//   const myFunction = () => {
//     var x = document.getElementById("myTopnav");
//     x.className === "topnav"
//       ? (x.className += "responsive sm:absolute right-[0] top-[0]")
//       : (x.className = "topnav");
//   };
//   return (
//     <nav
//       className="topnav mx-auto px-2 fixed top-[0] left-[0] w-full overflow-hidden bg-[#202123] flex h-16 items-center justify-between sm:px-6 lg:px-8"
//       id="myTopnav"
//     >
//       <a
//         className="active align-middle cursor-pointer"
//         onClick={() =>
//           location.pathname === "/" ? window.location.reload() : navigate("/")
//         }
//       >
//         <i className="fa fa-wrench fa-2x text-[whitesmoke]" />
//         <span className="font-[Oswald] text-[30px] font-normal leading-[68px] tracking-normal text-left text-[whitesmoke]">
//           {" "}
//           MechServ
//         </span>
//       </a>

//       <ul className="flex flex-row items-center gap-4">
//         <li className="searchBar float-right">
//           {location.pathname === "/" && <Searchbar />}
//         </li>
//         <li>
//           {location.pathname === "/" && (
//             <a
//               className="createBtn text-[17px] hover:text-[#5770F4] text-[whitesmoke] font-semibold align-middle cursor-pointer"
//               onClick={() => navigate("/create")}
//             >
//               <i className="fa fa-plus" /> Agendar Cita
//             </a>
//           )}
//         </li>
//         <li>
//           {location.pathname === "/" && (
//             <button
//               className="bg-indigo-950 text-indigo-400 border border-indigo-400 border-b-4 font-medium overflow-hidden relative px-4 py-1 rounded-md hover:brightness-150 hover:border-t-4 hover:border-b active:opacity-75 outline-none duration-300 group"
//               onClick={() => navigate("/login")}
//             >
//               <span className="bg-indigo-400 shadow-indigo-400 absolute -top-[150%] left-0 inline-flex w-80 h-[5px] rounded-md opacity-50 group-hover:top-[150%] duration-500 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)]"></span>
//               Ingresar
//             </button>
//           )}
//         </li>
//       </ul>
//       <a className="icon hidden" onClick={myFunction}>
//         <i className="fa fa-bars" />
//       </a>
//     </nav>
//   );
// };

// export default Navbar;
