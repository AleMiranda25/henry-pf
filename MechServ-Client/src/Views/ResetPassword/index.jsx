//Funcionalidad
import { landingBG } from "../../assets/Backgrounds/backgrounds";
//Components

//? #####################################################

const ResetPassword = () => {
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
            Resetear Contraseña
          </h2>
          <form className="flex flex-col">
            <input
              type="password"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Nueva Contraseña"
            />
            <input
              type="password"
              className="bg-gray-100 text-gray-900 border-0 rounded-md p-2 mb-4 focus:bg-gray-200 focus:outline-none focus:ring-1 focus:ring-blue-500 transition ease-in-out duration-150"
              placeholder="Confirmar Contraseña"
            />
            <button
              type="submit"
              className="bg-gradient-to-r from-indigo-500 to-blue-500 text-white font-bold py-2 px-4 rounded-md mt-4 hover:bg-indigo-600 hover:to-blue-600 transition ease-in-out duration-150"
            >
              Confirmar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
