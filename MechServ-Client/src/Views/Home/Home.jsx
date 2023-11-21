import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getServices } from "../../Redux/actions";
import Filter from "../../Components/Filter/Filter";
import SortingOptions from "../../Components/Sorting/Sorting";
import CardContainer from "../../Components/CardContainer/CardContainer";
import 'tailwindcss/tailwind.css'
import { useNavigate } from "react-router-dom";

const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const filteredServices = useSelector((state) => state.services) || [];
    const [selectedService, setSelectedService] = useState("");
    const [sortOrder, setSortOrder] = useState("name");
    const [sortDirection, setSortDirection] = useState("asc");

    useEffect(() => {
        dispatch(getServices(selectedService, sortOrder, sortDirection))
    },[dispatch, selectedService, sortOrder, sortDirection])

    const handleSortChange = (field, value) => {
        if (field === "order") {
          setSortOrder(value);
        } else if (field === "direction") {
          setSortDirection(value);
        }
      };
    
    
    return (
        <div class="flex flex-row">
          <div className='flex flex-col flex-wrap bg-white justify-start items-center w-1/5'>
            <Filter selectedFilter={selectedService} onFilterByService={setSelectedService}/>
            <SortingOptions sortOrder={sortOrder} sortDirection={sortDirection} onSortChange={handleSortChange}/>
            <button class="h-auto w-40 m-1 bg-blue-600 p-1 shadow-md font-bold text-white cursor-pointer rounded-md"
            onClick={() => navigate('/date')}>
              {"Agendar un turno"}
            </button>
          </div>
          <div className='flex flex-col flex-wrap bg-white justify-around w-4/5'>
            <CardContainer services={filteredServices}/>
          </div>
        </div>
    )

}

export default Home;