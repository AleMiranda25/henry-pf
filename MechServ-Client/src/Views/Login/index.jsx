//Funcionalidad
import { useState } from "react";
import { landingBG } from "../../assets/Backgrounds/backgrounds";
import { useNavigate } from "react-router";
import validation from "./validation";
import { Footer, Navbar } from "../../Components";
//Components

//? #####################################################

const Login = ({ login }) => {
  const navigate = useNavigate();

  const [userData, setUserData] = useState({
    userEmail: "",
    userPassword: "",
  });

  const [errors, setErrors] = useState({
    userEmail: "",
    userPassword: "",
  });

  const handleChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
    // console.log(userData);
    setErrors(validation({ ...userData, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // console.log(login);
    login(userData);
    navigate("/");
  };

  return (
    <div
      className="bg-cover bg-center bg-no-repeat w-full max-w-full px-3 mx-0 mt-0 md:flex-0 shrink-0"
      style={{
        backgroundImage: `url(${landingBG})`,
      }}
    >
      <Navbar />
      <div className="flex flex-col items-center justify-center h-screen">
        <div className="w-full max-w-md bg-white rounded-lg shadow-md p-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">
            Iniciar sesión
          </h2>
          <form className="flex flex-col" onSubmit={handleSubmit}>
            <input
              type="email"
              value={userData.userEmail}
              name="userEmail"
              onChange={handleChange}
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Email"
            />

            <div className="text-[red] text-[13px] mb-1">
              <p>{errors.e1 ? errors.e1 : errors.e2}</p>
            </div>

            <input
              type="password"
              value={userData.userPassword}
              name="userPassword"
              onChange={handleChange}
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mt-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Contraseña"
            />
            <div className="text-[red] text-[13px] mb-1">
              {errors.p1 ? (
                <p>{errors.p1}</p>
              ) : errors.p2 ? (
                <p>{errors.p2}</p>
              ) : errors.p3 ? (
                <p>{errors.p3}</p>
              ) : errors.p4 ? (
                <p>{errors.p4}</p>
              ) : errors.p5 ? (
                <p>{errors.p5}</p>
              ) : (
                <p>{errors.p6}</p>
              )}
            </div>

            <div className="flex items-center justify-between flex-wrap pt-4">
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
      <Footer />
    </div>
  );
};

export default Login;
