//Funcionalidad
import { useDispatch, useSelector } from "react-redux";
import { bgHome } from "../../assets/Backgrounds/backgrounds";
import { getAllServices } from "../../redux/actions";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

//Components
import { Footer, Navbar, CardContainer } from "../../Components";
import SortingOptions from "../../Components/Sorting/Sorting";

//? #####################################################
const Services = () => {
  const dispatch = useDispatch();
  const services = useSelector((state) => state.services) || [];
  const [offset, setOffset] = useState(0);
  const [sortOrder, setSortOrder] = useState("name");
  const [sortDirection, setSortDirection] = useState("asc");
  const categoria = useParams().category;

  useEffect(() => {
    dispatch(getAllServices(sortOrder, sortDirection, categoria));
  }, [dispatch, sortOrder, sortDirection, categoria]);

  const Paging = () => {
    const page = services.slice(offset * 8, offset * 8 + 8);
    return page;
  };

  const handleSortChange = (field, value) => {
    if (field === "order") {
      setSortOrder(value);
    } else if (field === "direction") {
      setSortDirection(value);
    }
  };

  return (
    <div
      className="flex flex-col bg-cover bg-center bg-no-repeat h-screen max-w-full overflow-auto"
      style={{
        backgroundImage: `url(${bgHome})`,
      }}
    >
      <Navbar />
      <div className="bg-black bg-opacity-30 rounded-md backdrop-blur-sm min-h-auto">
        <div className="flex flex-col justify-around gap-20 ">
          <div className=" text-[whitesmoke] mt-24 mb-20">
            {
              //* TITULO
            }
            <h1 className="font-[Oswald] text-center font-bold text-5xl mb-5">
              SERVICIOS
            </h1>
            <SortingOptions
              sortOrder={sortOrder}
              sortDirection={sortDirection}
              onSortChange={handleSortChange}
            />
            <div>
              <div className="flex flex-row justify-between">
                <div className="hover:text-[#5770F4] relative rounded-badge text-[30px] font-bold bg-[#202123] text-[whitesmoke] opacity-95 hover:opacity-80 cursor-pointer m-4">
                  {offset > 0 && (
                    <button onClick={() => setOffset(offset - 1)}>
                      <i className="hover:text-[#5770F4] h-auto w-12 rounded-badge fa fa-solid fa-chevron-left fa-xl text-[whitesmoke] opacity-95 hover:opacity-80 cursor-pointer"></i>
                    </button>
                  )}
                </div>
                <div className="hover:text-[#5770F4] rounded-full text-[30px] font-bold bg-[#202123] text-[whitesmoke] opacity-95 hover:opacity-80 cursor-pointer m-4">
                  {offset >= 0 && offset < Math.trunc(services.length / 8) && (
                    <button onClick={() => setOffset(offset + 1)}>
                      <i className="hover:text-[#5770F4] h-auto w-12 rounded-badge fa fa-solid fa-chevron-right fa-xl text-[whitesmoke] opacity-95 hover:opacity-80 cursor-pointer"></i>
                    </button>
                  )}
                </div>
              </div>
              <CardContainer services={Paging()} />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
