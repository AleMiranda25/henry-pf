//Funcionalidad
import { landingBG } from "../../assets/Backgrounds/backgrounds";
import { LinkedInLogo } from "../../assets/Icons/icons";

//Components
import { Navbar } from "../../Components";

//? #####################################################
const About = () => {
  return (
    <div
      className="flex flex-col bg-cover bg-center bg-no-repeat h-screen max-w-full md:flex-0 shrink-0"
      style={{
        backgroundImage: `url(${landingBG})`,
      }}
    >
      <Navbar />
      <div className=" text-[whitesmoke] mt-24 flex flex-col justify-evenly gap-16">
        {
          //* TITULO
        }
        <h1 className="font-[Oswald] text-center font-bold text-5xl">
          HENRY PF - MECHSERV TEAM
        </h1>
        <img className="h-[100px]" src={LinkedInLogo} />
        <div className="grid place-self-center font-[Oswald] text-left font-bold text-3xl">
          <h3>
            -{" "}
            <a
              className=" cursor-pointer hover:text-[#5770F4]"
              href="https://www.linkedin.com/in/clemente-delduca-6691181a7/"
              target="_blank"
            >
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
            <a className=" cursor-pointer hover:text-[#5770F4]"
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
