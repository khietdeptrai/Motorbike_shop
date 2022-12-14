import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header, Home, Footer } from "./components/index"
import Register from './page/register/register';
import Login from './page/login/login';
import Shopping from './page/shopping/shopping';
import Cart from './page/cart/cart';
import Thongtincanhan from './page/thongtincanhan/Thongtincanhan'
import Quanlykhachhang from './page/quanlykhachhang/Quanlykhachhang';
import Quanlysanpham from './page/quanlysanpham/Quanlysanpham';
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
        <Route path='/thongtincanhan' element={<Thongtincanhan />} />
        <Route path='/quanlykhachhang' element={<Quanlykhachhang />} />
        <Route path='/quanlysanpham' element={<Quanlysanpham />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App
