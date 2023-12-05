//Funcionalidad
import { landingBG } from "../../assets/Backgrounds/backgrounds";
import { LinkedInLogo } from "../../assets/Icons/icons";

//Components
import { Navbar } from "../../Components";

//? #####################################################
const About = () => {
  return (
    <div
      className="flex flex-col justify-evenly bg-cover bg-center bg-no-repeat h-screen  w-screen"
      style={{
        backgroundImage: `url(${landingBG})`,
      }}
    >
      <Navbar />
      <div className=" text-[whitesmoke] mt-24 flex flex-col justify-evenly gap-10 sm:md:lg:gap-16">
        {
          //* TITULO
        }
        <h1 className="font-[Oswald] text-center font-bold text-[25px] sm:md:lg:text-5xl">
          HENRY PF - MECHSERV TEAM
        </h1>
        <img className="h-[75px] sm:md:lg:h-[100px]" src={LinkedInLogo} />
        <div className="grid place-self-center font-[Oswald] text-left font-bold text-lg sm:md:lg:text-3xl pb-12">
          <h3>
            -{" "}
            <a className=" cursor-pointer hover:text-[#5770F4]">
              DELDUCA, Clemente Alberto
            </a>
          </h3>
          <h3>
            -{" "}
            <a
              className=" cursor-pointer hover:text-[#5770F4]"
              href="https://www.linkedin.com/in/wguicha/"
              target="_blank"
            >
              GUICHA, William Alberto
            </a>
          </h3>
          <h3>
            -{" "}
            <a
              className=" cursor-pointer hover:text-[#5770F4]"
              href="https://www.linkedin.com/in/alemiranda2511/"
              target="_blank"
            >
              MIRANDA, Jorge Alejandro
            </a>
          </h3>
          <h3>
            -{" "}
            <a
              className=" cursor-pointer hover:text-[#5770F4]"
              href="https://www.linkedin.com/in/federico-rudiero-722243162/"
              target="_blank"
            >
              RUDIERO, Federico Martin
            </a>
          </h3>
          <h3>
            -{" "}
            <a
              className=" cursor-pointer hover:text-[#5770F4]"
              href="https://www.linkedin.com/in/nicol%C3%A1s-valdez-16585b232/"
              target="_blank"
            >
              VALDEZ, Nicolás
            </a>
          </h3>
        </div>
      </div>
    </div>
  );
};

export default About;
