//Funcionalidad
import { useNavigate } from "react-router";

//Componentes

const Footer = () => {
  const navigate = useNavigate();

  return (
    <>
      <footer className="footer footer-center p-4 bg-[#202123] text-[whitesmoke] mx-auto fixed bottom-0 left-[0] w-full">
        <aside>
          <p className=" text-[8px] lg:text-[15px]">
            Copyright © 2023 - All right reserved by{" "}
            <a
              onClick={() => {
                navigate("/about");
              }}
              className="hover:text-[#5770F4] cursor-pointer underline"
            >
              MechServ Production Team
            </a>
          </p>
        </aside>
      </footer>
    </>
  );
};

export default Footer;
