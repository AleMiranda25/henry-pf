//Funcionalidad
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

// Components
import { Login, Register, ResetPassword, Home, Services, Detail } from "./Views";

import '@fortawesome/fontawesome-free/css/all.css'

//* #####################################################

//* DATOS EJEMPLO
const email = "ejemplo@gmail.com";
const password = "1Password@";
function App() {
  const navigate = useNavigate();
  const [access, setAccess] = useState(false);

  // useEffect(() => {
  //   !access && navigate("/");
  // }, [access]);

  const login = (userData) => {
    if (userData.userPassword === password && userData.userEmail === email) {
      setAccess(true);
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
    <div>
      <Routes>
        //* HOME
        <Route
          exact
          path="/"
          // element={<Home login={login} />}
          Component={Home}
        />
        //* LOGIN
        <Route path="/login" Component={Login} />
        <Route path="/register" Component={Register} />
        <Route path="/resetPassword" Component={ResetPassword} />
        //* SERVICES
        <Route path="/services/:category" Component={Services} />
        <Route path="/detail/:id" Component={Detail}/>
        //* USER PROFILE
        {/* <Route path="/userProfile" Component={UserProfile} /> */}
        //* SHOP CART
        {/* <Route path="/shopCart" Component={ShopCart} /> */}
      </Routes>
    </div>
  );
}

export default App;