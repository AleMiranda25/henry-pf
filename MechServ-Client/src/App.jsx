//Funcionalidad
import { Routes, Route, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
// import '@fortawesome/fontawesome-free/css/all.css'

// Components
import { Home, Services, Detail, About, Profile } from "./Views";

//* #####################################################

//* DATOS EJEMPLO
// const email = "ejemplo@gmail.com";
// const password = "1Password@";
function App() {
  const navigate = useNavigate();
  return (
    <div>
      <Routes>
        {
          //* HOME
          <Route exact path="/" Component={Home} />
          //* LOGIN
          /* <Route path="/login" element={<Login login={login} />} />
        <Route path="/register" Component={Register} />
        <Route path="/resetPassword" Component={ResetPassword} /> */
        }
        {
          //* SERVICES
          <Route path="/services/:category" Component={Services} />
        }
        <Route path="/detail/:id" Component={Detail} />
        {
          //* USER PROFILE
          <Route path="/profile" Component={Profile} />
        }
        {
          //* SHOP CART
          /* <Route path="/cart" Component={ShopCart} /> */
          //* ABOUT PF TEAM
          <Route exact path="/about" Component={About} />
        }
      </Routes>
    </div>
  );
}

export default App;
