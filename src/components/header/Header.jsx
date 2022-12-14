import Logo from "./logo.svg";
import { Link } from "react-router-dom";
import "./Header.scss";
function Header() {
  const isUser = true;
  const isAdmin = true;
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
            <Link className="header__mid-list__item-link" to="/introduction">
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
              <li className="user-list--item"><Link className="item-link" to="/login">Đăng xuất</Link></li>
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
