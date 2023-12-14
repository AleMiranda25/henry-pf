//Funcionalidad
import { useAuth0  } from "@auth0/auth0-react";
import React, { useEffect } from 'react';
import { addNewUser } from "../../redux/actions";

//Componentes

const LoginButton = () => {
  const { loginWithPopup, loginWithRedirect, } = useAuth0();

 

  

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
