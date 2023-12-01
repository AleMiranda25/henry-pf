//Funcionalidad
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import {
  Login,
  Register,
  ResetPassword,
  Home,
  Services,
  About,
  Profile,
  Agendar,
} from "./Views";

//* #####################################################

//* DATOS EJEMPLO
// const email = "ejemplo@gmail.com";
// const password = "1Password@";
function App() {
  const navigate = useNavigate();
  // const [access, setAccess] = useState(false);

  // useEffect(() => {
  //   !access && navigate("/");
  // }, [access]);

  // const login = (userData) => {
  //   if (userData.userPassword === password && userData.userEmail === email) {
  //     setAccess(true);
  //   }
  // };

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
    <div>
      <Routes>
        //* HOME
        <Route exact path="/" Component={Home} />
        //* LOGIN
        {/* <Route path="/login" element={<Login login={login} />} />
        <Route path="/register" Component={Register} />
        <Route path="/resetPassword" Component={ResetPassword} /> */}
        //* SERVICES
        <Route path="/services" Component={Services} />
        //* USER PROFILE
        <Route path="/profile" Component={Profile} />
        //* SHOP CART
        {/* <Route path="/cart" Component={ShopCart} /> */}
        //* ABOUT PF TEAM
        <Route exact path="/about" Component={About} />
        //* AGENDAR
        <Route path="/agendar" Component={Agendar} />
      </Routes>
    </div>
  );
}

export default App;
