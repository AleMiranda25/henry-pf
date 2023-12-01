//Funcionalidad

//Componentes

const Pagination = ({
  elementsPerPage,
  totalElements,
  paginate,
  currentPage,
}) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalElements / elementsPerPage); i++) {
    pageNumbers.push(i);
  }

  const totalPages = pageNumbers.length;

  const paginateAction = (num) => {
    paginate(num);
    // window.scrollTo({
    //   top: 0,
    //   behavior: "smooth",
    // });
  };
  return (
    <div>
      <ul className="flex justify-center items-center text-center align-middle font-[Oswald] font-extrabold text-[whitesmoke] text-sm sm:md:lg:text-lg pl-0 bg-transparent">
        <li>
          <a
            onClick={() => currentPage > 1 && paginateAction(1)}
            className="hover:[box-shadow:1px_1px_1px_1px_#5770F4] py-1 px-3 m-1 sm:md:lg:m-2 hover:text-[#5770F4] border-[solid] border-[whitesmoke] border-[1px] bg-[#202123] backdrop-filter backdrop-blur-[5px] rounded-lg cursor-pointer no-underline bg-opacity-80"
          >
            &laquo;
          </a>
        </li>
        <li>
          <a
            onClick={() => currentPage > 1 && paginateAction(currentPage - 1)}
            className="hover:[box-shadow:1px_1px_1px_1px_#5770F4] py-1 px-3 m-1 sm:md:lg:m-2 hover:text-[#5770F4] border-[solid] border-[whitesmoke] border-[1px] bg-[#202123] backdrop-filter backdrop-blur-[5px] rounded-lg cursor-pointer no-underline"
          >
            &lt;
          </a>
        </li>
        <a className="py-1 px-3 m-2 border-[solid] border-[whitesmoke] border-[1px] bg-[#202123] backdrop-filter backdrop-blur-[5px] rounded-[7px] text-center cursor-pointer">{`${currentPage} / ${totalPages}`}</a>
        <a
          onClick={() =>
            currentPage < totalPages && paginateAction(currentPage + 1)
          }
          className="hover:[box-shadow:1px_1px_1px_1px_#5770F4] py-1 px-3 m-1 sm:md:lg:m-2 hover:text-[#5770F4] border-[solid] border-[whitesmoke] border-[1px] bg-[#202123] backdrop-filter backdrop-blur-[5px] rounded-lg cursor-pointer no-underline"
        >
          &gt;
        </a>
        <a
          onClick={() => currentPage < totalPages && paginateAction(25)}
          className="hover:[box-shadow:1px_1px_1px_1px_#5770F4] py-1 px-3 m-1 sm:md:lg:m-2 hover:text-[#5770F4]  border-[solid] border-[whitesmoke] border-[1px] bg-[#202123] backdrop-filter backdrop-blur-[5px] rounded-lg cursor-pointer no-underline"
        >
          &raquo;
        </a>
      </ul>
    </div>
  );
};

export default Pagination;
