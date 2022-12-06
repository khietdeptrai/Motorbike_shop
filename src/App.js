import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import {Header, Body, Footer} from "./components/index"
import Register from './page/register/register';
import Login from './page/login/login';

//App
function App() {
  return(
    // <>
    // <Header />
    // <Routes>
    //   <Route  path='/' element={<Body />} />
    // </Routes>
    // <Footer />
    // </>
      <Register/>);
};

export default App;
//udate
