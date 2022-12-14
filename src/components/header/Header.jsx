import Logo from "./logo.svg";
import {Link} from 'react-router-dom'
import './Header.scss'
function Header() {
  return (
    <div className="header">
        <div className="header__left">
          <Link to='/homepage'>
            <img src={Logo} alt="Logo"  className="header__left-logo"/>
          </Link>
        </div>
        <div className="header__mid">
            <ul className="header__mid-list">
              <Link className="header__mid-lis__item" to='/homepage'> <li className="header__mid-lis__item">Trang chủ</li></Link> 
              <Link className="header__mid-lis__item" to='/introduction'>  <li className="header__mid-lis__item">Giới thiệu</li></Link> 
              <Link className="header__mid-lis__item" to='/shopping'> <li className="header__mid-lis__item">Cửa hàng</li></Link> 
              <li className="header__mid-lis__item">Liên hệ</li>
            </ul>
        </div>
        <div className="header__right">
          <i class="fa fa-search"></i>
            <Link className="header__right-btn" to='/login'>Đăng nhập / Đăng ký</Link>
            <Link className="header__right-btn" to='/cart'>Giỏ hàng 
              <i class="fa fa-shopping-bag"></i> 
            </Link>
        </div>
    </div>
  );
}

export default Header;
