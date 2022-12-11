import './App.css';
import { Routes, Route } from 'react-router-dom';
import { Header, Body, Footer } from "./components/index"
import Register from './page/register/register';
import Login from './page/login/login';
import Cuahang from './page/cuahang/Cuahang'
//App
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/' element={<Body />} />
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cuahang' element={<Cuahang />} />
      </Routes>
      <Footer />
    </>

  );
};

export default App;