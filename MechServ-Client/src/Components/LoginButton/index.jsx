//Funcionalidad
import { useAuth0 } from "@auth0/auth0-react";
import React, { useEffect } from 'react';
//Componentes

const LoginButton = () => {
  const { loginWithPopup, loginWithRedirect } = useAuth0();


  useEffect(() => {
    // Eliminar elementos del almacenamiento local al desmontar el componente
    return () => {
      localStorage.removeItem('userId');
      
        localStorage.removeItem('order');
      
    };
  }, []);

  return (
    <>
      <button
        className="font-[Oswald] hover:brightness-110 hover:animate-pulse font-bold py-2 px-4 rounded-full bg-[#5770F4] shadow-lg shadow-[#5770F4]/50 text-white"
        onClick={loginWithRedirect}
      >
        Ingresar
      </button>
    </>
  );
};

export default LoginButton;
