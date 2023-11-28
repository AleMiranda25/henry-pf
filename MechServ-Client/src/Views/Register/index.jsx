//Funcionalidad
import { Footer, Navbar } from "../../Components";
import { landingBG } from "../../assets/Backgrounds/backgrounds";

//Components

//? #####################################################

const Register = () => {
  return (
    <div
      className="grid place-items-center gap-y-[70px] h-max bg-cover bg-center bg-no-repeat max-w-full"
      style={{
        backgroundImage: `url(${landingBG})`,
      }}
    >
      <div>
        <Navbar />
      </div>
      <div className="w-full max-w-[400px] bg-white rounded-lg shadow-md p-6 my-10 mb-24">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">Registro</h2>

        <form className="flex flex-col">
          <input
            type="text"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Nombre de usuario"
          />
          <input
            type="number"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Número de teléfono"
          />
          <input
            type="email"
            id="email"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Email"
          />
          <input
            type="email"
            id="confirm-mail"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Confirma Email"
          />
          <input
            type="password"
            id="password"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Contraseña"
          />
          <input
            type="password"
            id="repeat-password"
            className="bg-gray-100 text-gray-800 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
            placeholder="Repetir Contraseña"
          />
          <input
            className="bg-gray-100 text-[#202123] hover:text-indigo-500 font-semibold cursor-pointer border- rounded-md p-2 mb-4"
            type="reset"
            value="Limpiar Valores"
          />
          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
          >
            ¡Registrarme!
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
};

export default Register;
