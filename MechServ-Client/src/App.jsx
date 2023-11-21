//Functionality
import { Routes, Route } from "react-router-dom";
import { LandingPage, Register, ResetPassword } from "./Views";
// Styles
import "./App.css";
// Components

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
}

export default App;
