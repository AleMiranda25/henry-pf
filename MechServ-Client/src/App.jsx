import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom';
import Home from './Views/Home/Home.jsx';
import 'tailwindcss/tailwind.css'
import '@fortawesome/fontawesome-free/css/all.css';

function App() {

  return (
      <div>
        <Routes>
          <Route exact path="/home" element={<Home/>}/>
        {/* <Route exact path="/" component={Landing} /> */}
        {/* <Route exact path="/form" component={Form}/> */}
        </Routes>
      </div>
  )
}

export default App
