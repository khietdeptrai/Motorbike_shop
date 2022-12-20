import Logo from "./logo192.svg";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import authService from "../../service/user.service";
import eventBus from "../../common/EventBus";


import "./Header.scss";

function Header() {
  
  const [isUser, setIsUser] = useState(undefined);
  const [isAdmin, setIsAdmin]= useState(false)

  useEffect(()=>{
    const user = authService.getCurrentUser()
    
    if (user){
      setIsUser(user)
      if(user.roles[0]==='ROLE_ADMIN')
      {
        setIsAdmin(true)
      }
    }
    
    eventBus.on("logout", () => {
      logOut();
    });
    return () => {
      eventBus.remove("logout");
    };
    
  },[]);

  let navigate=useNavigate()
    const logOut = () => {
      authService.logout();
      setIsUser(undefined);
      navigate("/login")
        window.location.reload();
    };


  return (
    <div className="header">
      <div className="header__left">
        <Link to="/homepage">
          <img src={Logo} alt="Logo" className="header__left-logo" />
        </Link>
      </div>
      <div className="header__mid">
        <ul className="header__mid-list">
          <li className="header__mid-list__item">
            {" "}
            <Link className="header__mid-list__item-link" to="/homepage">
              Trang chủ
            </Link>
          </li>
          <li className="header__mid-list__item">
            {" "}
            <Link className="header__mid-list__item-link" to="/about">
              Giới thiệu
            </Link>
          </li>
          <li className="header__mid-list__item">
            {" "}
            <Link className="header__mid-list__item-link" to="/shopping">
              Cửa hàng
            </Link>
          </li>
          <li className="header__mid-list__item">
            {" "}
            <Link className="header__mid-list__item-link" to="/contact">
              Liên hệ
            </Link>
          </li>
        </ul>
      </div>
      <div className="header__right">
        <i class="fa fa-search"></i>
        {isUser ? (
          <div className="user">
            <i class="fa fa-user"></i>

            <ul className="user-list">
              <li className="user-list--item"><Link className="item-link" to='/thongtincanhan'>Thông tin</Link></li>
              <li className="user-list--item"><Link className="item-link">Đổi mật khẩu</Link></li>
              {isAdmin ?<>
                <li className="user-list--item"><Link className="item-link" to="/quanlykhachhang">Quản lý khách hàng</Link></li>
              <li className="user-list--item"><Link className="item-link"  to="/quanlysanpham">Quản lý sản phẩm</Link></li>
              </> : <></>}
              
              <li className="user-list--item"><Link className="item-link">Cài đặt</Link></li>
              <li className="user-list--item"><Link className="item-link" onClick={logOut}>Đăng xuất</Link></li>
            </ul>
          </div>
        ) : (
          <Link className="header__right-btn" to="/login">
            Đăng nhập / Đăng ký
          </Link>
        )}

        <Link className="header__right-btn" to="/cart">
          Giỏ hàng
          <i class="fa fa-shopping-bag"></i>
        </Link>
      </div>
    </div>
  );
}

export default Header;
