//Funcionalidad
import { useState, useEffect } from 'react';
import axios from 'axios';
import { bgHome } from "../../assets/Backgrounds/backgrounds";
import validationForm from '../../utils/validationForm';

//Components
import { Footer, Navbar } from "../../Components";

const ServiceForm = () => {
  const initialService = {
    name: '',
    description: '',
    price: 0,
    category: 'Seleccionar',
    isActive: false,
    dates: []
  }
  const [categories, setCategories] = useState([]);
  const [nextDays, setNextDays] = useState([]);
  const [errors, setErrors] = useState([]);
  const [serviceData, setServiceData] = useState(initialService);
 
  useEffect(() => {
    const getServices = async () => {
      try {
          const categ = await axios.get(`/categories`);
          setCategories(categ.data);
      } catch (err) {
          console.log(err);
      }
    }
    getServices();

    const getNextDays = () => {
      const days = [];
      const today = new Date();

      for (let i = 0; i < 7; i++) {
        const nextDay = new Date(today);
        nextDay.setDate(today.getDate() + i);
        days.push(nextDay.toISOString().split('T')[0]);
      }

      return days;
    };

    setNextDays(getNextDays());


  }, [serviceData])

  const handleInputChange = (event) => {
    const { name, value, type, checked } = event.target;
    setServiceData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      if(validationForm(serviceData).length == 0){
        const response = await axios.post(`/services/`, serviceData);
        setErrors([]);
        setServiceData(initialService);
        alert(response.data.message);
      }else{
        setErrors(validationForm(serviceData));
        alert('Por favor revise los errores');
      }
    } catch (error) {
      console.error('Error al enviar datos:', error);
    }
  };

  const selectDate = (event) => {
    event.preventDefault();

    const date = event.target.dataset.key;

    if(serviceData.dates.includes(date)){
      const filteredDates = serviceData.dates.filter(((element) => element !== date));
      setServiceData({...serviceData, dates: filteredDates})
    }else{
      const newDates = [...serviceData.dates, date]
      setServiceData({...serviceData, dates: newDates})
    }
  }

  const styleButton = (date) => {
    if(serviceData.dates.includes(date)){
        return "hover:text-[#5770F4] hover:opacity-80 bg-[#6e31e7] text-[whitesmoke]"
    } else {
        return "hover:text-[#5770F4] hover:opacity-80 bg-[rgb(32,33,35)] text-[whitesmoke]"
    }
  }

  return (
    <div
      className="flex flex-col justify-around gap-20 bg-cover bg-center bg-no-repeat h-screen max-w-full md:flex-0 shrink-0"
      style={{
        backgroundImage: `url(${bgHome})`,
      }}
    >
      <Navbar />

        <form onSubmit={handleSubmit}>
          <div className="flex">
            <div>
              <label className="font-[Oswald] flex flex-col text-center bg-white font-bold text-2xl mb-5">
                Nombre:
                <input className="input" type="text" name="name" value={serviceData.name} onChange={handleInputChange} />
              </label>
              <label className="font-[Oswald] flex flex-col text-center bg-white font-bold text-2xl mb-5">
                Descripción:
                <textarea name="description" value={serviceData.description} onChange={handleInputChange} />
              </label>
            </div>
            <div>
              <label className="font-[Oswald]  flex flex-col text-center bg-white font-bold text-2xl mb-5">
                Precio:
                <input type="number" name="price" value={serviceData.price} onChange={handleInputChange} />
              </label>
              <label className="font-[Oswald]  flex flex-col text-center bg-white font-bold text-2xl mb-5">
                Categoría:
                <div>
                  <select name="category" value={serviceData.category} onChange={handleInputChange}>
                      <option value="Seleccionar">... seleccionar</option>
                      {categories?.map((category, index) => (
                      <option key={index} value={category}>
                          {category}
                      </option>
                      ))}
                  </select>
                </div>
              </label>
            </div>
            <div>
              <label className="font-[Oswald] text-center bg-white font-bold text-2xl mb-5">
                Activo:
                <input
                  type="checkbox"
                  name="isActive"
                  checked={serviceData.isActive}
                  onChange={handleInputChange}
                />
              </label>
            </div>
            <div>
              {nextDays.map((day) => (
              <div key={`"div-${day}"`} value={day} className="flex w-24 h-4 sm:w-24 md:lg:w-24 sm:h-3 md:lg:h-6">
                  <button key={day} data-key={day} className={`${styleButton(day)}
                  " grid place-items-center rounded-btn w-24 h-4 sm:w-24 md:lg:w-24 sm:h-3 md:lg:h-6 font-[Oswald] text-[14px] sm:md:lg:text-[14px] font-bold opacity-95"`}
                  onClick={selectDate}
                  >
                  {`${day}`}
                  </button>
              </div>
              ))}
            </div>
          </div>
          <button type="submit" className="font-[Oswald] text-center bg-white font-bold text-2xl mb-5"
            onClick={handleSubmit}
          >Guardar</button>
          <div>
          {errors.map((error,index) => (
            <div key={`"div-error${index}"`} className="flex bg-black gap-4 w-60 h-4 sm:w-20 md:lg:w-60 sm:h-3 md:lg:h-6">
                <p key={`"error${index}"`} className="font-[Oswald] text-center text-red-400 font-bold text-1xl mb-5"
                >
                {`${error}`}
                </p>
            </div>
            ))}
          </div>
        </form>
        <Footer />
    </div>
  );
};

export default ServiceForm;
