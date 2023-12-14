//Funcionalidad
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../src/redux/actions";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";
// import '@fortawesome/fontawesome-free/css/all.css'

// Components
import {
  Login,
  Register,
  ResetPassword,
  Home,
  Services,
  Detail,
  About,
  Profile,
  Orders,
  ServicesAdm,
} from "./Views";

//* #####################################################

//* DATOS EJEMPLO
// const email = "ejemplo@gmail.com";
// const password = "1Password@";
function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } =  useAuth0();

  

  useEffect(() => {
    if(user){
      dispatch(getUserInfo(user.email))
    }
  }, [user]);

  return (
    <div>
      <Routes>
        {
          //* HOME
          <Route exact path="/" Component={Home} />
          //* LOGIN
          /* <Route path="/login" element={<Login login={login} />} />
        <Route path="/register" Component={Register} />

        <Route path="/resetPassword" Component={ResetPassword} /> */}
        {//* SERVICES
        <Route path="/services/:category" Component={Services} />}
        <Route path="/detail/:id" Component={Detail}/>
        {//* USER PROFILE
        <Route path="/profile" Component={Profile} />}
        {//* USER ORDERS
        <Route path="/orders" Component={Orders} />}
        {//* SHOP CART
        /* <Route path="/cart" Component={ShopCart} /> */
        //* ABOUT PF TEAM
        <Route exact path="/about" Component={About} />}

        {//* VIEW TO ADMIN THE SERVICES
          <Route path="/servicesadm" Component={ServicesAdm} />}

      </Routes>
    </div>
  );
}

export default App;
