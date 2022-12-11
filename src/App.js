import './App.css';
import { Routes, Route, Navigate } from 'react-router-dom';
import { Header, Body, Footer } from "./components/index"
import Register from './page/register/register';
import Login from './page/login/login';
import Shopping from './page/shopping/shopping'
//App
function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Navigate replace to="/homepage" />} />
            <Route path='homepage' element={<Body />}></Route>
        <Route path='/register' element={<Register />} />
        <Route path='/login' element={<Login />} />
        <Route path='/shopping' element={<Shopping />} />
      </Routes>
      <Footer />
    </>

  );
};

export default App;