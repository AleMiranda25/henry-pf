//Funcionalidad
import { bgHome } from "../../assets/Backgrounds/backgrounds";

//Components
import { Footer, Navbar } from "../../Components";

//? #####################################################
const Services = () => {
  return (
    <div
      className="flex flex-col bg-cover bg-center bg-no-repeat h-screen max-w-full md:flex-0 shrink-0"
      style={{
        backgroundImage: `url(${bgHome})`,
      }}
    >
      <Navbar />
      <div className="flex flex-col justify-around gap-20 ">
        <div className=" text-[whitesmoke] mt-24">
          {
            //* TITULO
          }
          <h1 className="font-[Oswald] text-center font-bold text-5xl">
            SERVICIOS
          </h1>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Services;
