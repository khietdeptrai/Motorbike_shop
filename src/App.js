import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header, Home, Footer } from "./components/index"
import Register from './page/register/register';
import Login from './page/login/login';
import Shopping from './page/shopping/shopping';
import Cart from './page/cart/cart';

//App
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/homepage" />} />
            <Route path='homepage' element={<Home />}></Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/shopping' element={<Shopping />} />
      </Routes>
      <Footer />
    </>

  );
};

export default App;