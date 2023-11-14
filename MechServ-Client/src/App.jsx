//Functionality
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Views/LandingPage";
// Styles
import "./App.css";
// Components

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" Component={LandingPage} />
      </Routes>
    </>
  );
}

export default App;
