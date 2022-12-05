import './App.css';

import { Router, Routes, Route } from 'react-router-dom';
import {Header, Body, Footer} from "./components/index"
import {useState} from "react"

//App
 
function App() {
  return (
    <>
    <Header />
    <Routes>
      <Route  path='/' element={<Body />} />
    </Routes>
    <Footer />
    </>
  );
}

export default App;
//lai update
