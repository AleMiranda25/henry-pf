//Funcionalidad

//Componentes

const Searchbar = () => {
  return (
    <div className="relative pr-2 pl-1 hidden md:flex">
      <div className="absolute inset-y-0 start-0 flex items-center ps-4 pointer-events-none">
        <svg
          className="w-4 h-4 text-gray-500 dark:text-gray-400"
          aria-hidden="true"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 20 20"
        >
          <path
            stroke="currentColor"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
          />
        </svg>
        <span className="sr-only">Search icon</span>
      </div>
      <input
        type="text"
        id="search-navbar"
        className="block w-full md:w-auto p-2 ps-9 text-sm text-gray-900 border border-gray-300 rounded-3xl bg-gray-50 dark:bg-[#202123] dark:border-[whitesmoke] dark:placeholder-gray-400 dark:text-[#202123] dark:focus:bg-[whitesmoke]"
        placeholder="Buscar..."
      />
    </div>
  );
};

export default Searchbar;
