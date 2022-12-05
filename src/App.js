import './App.css';
<<<<<<< Updated upstream
import { Router, Routes, Route } from 'react-router-dom';
import {Header, Body, Footer} from "./components/index"
=======

//App
>>>>>>> Stashed changes
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
