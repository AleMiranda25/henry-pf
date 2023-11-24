//Functionality
import axios from "axios";
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import { LandingPage, Register, ResetPassword, Home } from "./Views";

//* URL POR DEFECTO
axios.defaults.baseURL = "https://mechserv-pf.onrender.com";

//* DATOS EJEMPLO
const email = "ejemplo@gmail.com";
const password = "1Password@";
function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  const login = (userData) => {
    if (userData.userPassword === password && userData.userEmail === email) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Email o Password incorrecto");
    }
  };

  //* PARA EL LOGIN

  //   async function login(userData) {
  //     try {
  //        const { userEmail, userPassword } = userData;
  //        const URL = '/login';
  //        const { data } = await axios(URL + `?email=${email}&password=${password}`)
  //        const { access } = data;
  //        setAccess(data);
  //        access && navigate('/home');
  //     } catch (error) {
  //        console.log(error)
  //     }
  //  }

  return (
    <>
      <Routes>
        //* LOGIN
        <Route exact path="/" element={<LandingPage login={login} />} />
        <Route path="/register" Component={Register} />
        <Route path="/resetPassword" Component={ResetPassword} />
        //* HOME
        <Route path="/home" Component={Home} />
      </Routes>
    </>
  );
}

export default App;
