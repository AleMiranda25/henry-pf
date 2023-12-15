//Funcionalidad
import { Routes, Route, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getUserInfo } from "../src/redux/actions";
import { useEffect } from "react";
import { useAuth0 } from "@auth0/auth0-react";

// Components
import {
  Home,
  Services,
  Detail,
  About,
  Profile,
  Orders,
  ServicesAdm,
  Reviews
  Review,
=======
   main
} from "./Views";

//* #####################################################

function App() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user } = useAuth0();

  useEffect(() => {
    if (user) {
      dispatch(getUserInfo(user.email));
    }
  }, [user]);

  return (
    <div>
      <Routes>
        {
          //* HOME
        }
        <Route exact path="/" Component={Home} />
        {
          //* SERVICES
        }
        <Route path="/services/:category" Component={Services} />
        <Route path="/newservice" Component={ServiceForm} />
        <Route path="/detail/:id" Component={Detail} />
        {
          //* USER PROFILE
        }
        <Route path="/profile" Component={Profile} />
        {
          //* USER REVIEWS
        }
        <Route path="/review" Component={Review} />
        {
          //* USER ORDERS
        }
        <Route path="/orders" Component={Orders} />
        {
          //* ABOUT PF TEAM
        }
        <Route exact path="/about" Component={About} />
        {
          //* VIEW TO ADMIN THE SERVICES
        }
        <Route path="/servicesadm" Component={ServicesAdm} />

        {
          //* VIEW TO ADMIN THE USERS
        }
        <Route path="/usersadm" Component={UserAdm} />
      </Routes>
    </div>
  );
}

export default App;
