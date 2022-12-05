import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import {Header, Body, Footer} from "./components/index"

//app
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
