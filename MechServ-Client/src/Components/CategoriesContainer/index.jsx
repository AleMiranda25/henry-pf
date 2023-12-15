//Funcionalidad
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
// Componentes
import Pagination from "../Pagination";

const CategoriesContainer = () => {
  const categories = useSelector((state) => state.categories);
  categories.includes("All") ? null : categories.unshift("All");
  console.log(categories);
  const [currentPage, setCurrentPage] = useState(1);
  const categoriesPerPage = 5;

  // Obtiene las categorias actuales para mostrar
  const indexOfLastCategory = currentPage * categoriesPerPage;
  const indexOfFirstCategory = indexOfLastCategory - categoriesPerPage;
  const currentCategories = categories.slice(
    indexOfFirstCategory,
    indexOfLastCategory
  );

  // Cambia de pagina
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  const navigate = useNavigate();

  return (
    <div>
      {categories.length !== 1 ? (
        <div>
          <div className="flex flex-row justify-evenly text-[10px] sm:md:lg:text-[30px] gap-3 m-2 sm:md:lg:m-5">
            {currentCategories.map((category, index) => {
              console.log(category);
              return (
                <div key={index}>
                  <a
                    className=" grid place-items-center text-center rounded-lg sm:md:lg:rounded-badge w-10 h-10 sm:w-16 md:lg:w-32 sm:h-16 md:lg:h-32 font-[Oswald] hover:text-[#5770F4] font-bold bg-[#202123] text-[whitesmoke] opacity-95 hover:opacity-80 cursor-pointer"
                    onClick={() => {
                      navigate(`/services/${category}`);
                    }}
                  >
                    {category === "All" ? "Todos los Servicios" : `${category}`}
                  </a>
                </div>
              );
            })}
          </div>
          <Pagination
            elementsPerPage={categoriesPerPage}
            totalElements={categories.length}
            paginate={paginate}
            currentPage={currentPage}
          />
        </div>
      ) : (
        <span className=" text-indigo-500 loading loading-spinner loading-lg"></span>
      )}
    </div>
  );
};

export default CategoriesContainer;
