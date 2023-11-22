//Functionality
import { Routes, Route } from "react-router-dom";
import { LandingPage, Register, ResetPassword } from "./Views";
// Styles
import "./App.css";
// Components
import { Route, Routes } from 'react-router-dom';
import Home from './Views/Home/Home.jsx';
import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.css';

function App() {

  return (
    <>
      <Routes>
        <Route exact path="/" Component={LandingPage} />
        <Route path="/register" Component={Register} />
        <Route path="/resetPassword" Component={ResetPassword} />
        {/* <Route exact path="/home" Component={}/> */}
      </Routes>
    </>
  );
      <div>
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
        {/* <Route exact path="/" component={Landing} /> */}
        {/* <Route exact path="/form" component={Form}/> */}
        </Routes>
      </div>
  )
}

export default App;
