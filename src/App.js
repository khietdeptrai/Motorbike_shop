import './App.css';
import { Router, Routes, Route } from 'react-router-dom';
import {Header, Body, Footer} from "./components/index"
import Register from './page/register/register';
import Login from './page/login/login';

//App
function App() {
  return (
    // <Router>
    //   <div>
    //   <Header />
    //   <Routes>
    //     Route  path='/' element={<Body />} />
    //   </Routes>
    //   <Footer />
    //   </div>
    // </Router>
    <>
    <Header />
    <Routes>
      <Route  path='/' element={<Body />} />
    </Routes>
    <Footer />
    </>
  );
  };

// function App() {
//   return(
    
//     // <Router>
//     //   <Routes>
//     //   <Route path="/">
//     //     <Homepage />
//     //   </Route>
//     //   {/* <Route path="/register">
//     //     <Register/>
//     //   </Route>
//     //   <Route path="/login">
//     //     <Login/>
//     //   </Route> */}
//     // </Routes>
//     // </Router>
//     <Homepage />
//   );
// };

export default App;
//udate
