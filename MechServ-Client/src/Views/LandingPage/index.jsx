//Funcionalidad
import { useState } from "react";
import { landingBG } from "../../assets/Backgrounds/backgrounds";
import { useNavigate } from "react-router";
import validation from "./validation";
//Components

//? #####################################################

const LandingPage = () => {
  const [userData, setUserData] = useState({
    userEmail: "",
    userPassword: "",
  });

  const [errors, setErrors] = useState({
    userEmail: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    console.log(userData);
    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
  };
  const navigate = useNavigate();
  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full max-w-full px-3 mx-0 mt-0 md:flex-0 shrink-0"
      style={{
        backgroundImage: `url(${landingBG})`,
      }}
    >
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Iniciar sesión
          </h2>
          <form className="flex flex-col">
            <input
              type="email"
              value={userData.userEmail}
              name="userEmail"
              onChange={handleChange}
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Email"
            />
            {errors.e1 ? (
              <p className=" text-[red] py-2 mb-2">{errors.e1}</p>
            ) : errors.e2 ? (
              <p className=" text-[red] py-2 mb-2">{errors.e2}</p>
            ) : (
              <p className=" text-[red] py-2 mb-2">{errors.e3}</p>
            )}
            <input
              type="password"
              value={userData.userPassword}
              name="userPassword"
              onChange={handleChange}
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Password"
            />
            {errors.p1 ? (
              <p className=" text-[red] py-2 mb-2">{errors.p1}</p>
            ) : errors.p2 ? (
              <p className=" text-[red] py-2 mb-2">{errors.p2}</p>
            ) : errors.p3 ? (
              <p className=" text-[red] py-2 mb-2">{errors.p3}</p>
            ) : errors.p4 ? (
              <p className=" text-[red] py-2 mb-2">{errors.p4}</p>
            ) : errors.p5 ? (
              <p className=" text-[red] py-2 mb-2">{errors.p5}</p>
            ) : (
              <p className=" text-[red] py-2 mb-2">{errors.p6}</p>
            )}
            <div className="flex items-center justify-between flex-wrap">
              <label
                htmlFor="remember-me"
                className="text-sm text-gray-900 cursor-pointer"
              >
                <input type="checkbox" id="remember-me" className="mr-2" />
                Recuerdame
              </label>
              <a
                href="#"
                className="text-sm text-blue-500 hover:underline mb-0.5"
                onClick={() => navigate("/resetPassword")}
              >
                ¿Olvidaste la contraseña?
              </a>
              <p className="text-gray-900 mt-4">
                {" "}
                ¿No tienes una cuenta?{" "}
                <a
                  href="#"
                  className="text-sm text-blue-500 -200 hover:underline mt-4"
                  onClick={() => navigate("/register")}
                >
                  Registrarme
                </a>
              </p>
            </div>
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            >
              Iniciar sesión
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
