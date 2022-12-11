import Logo from "./logo.svg";
import {Link} from 'react-router-dom'
import './Header.scss'
function Header() {
  return (
    <div className="header">
        <div className="header__left">
            <img src={Logo} alt="Logo"  className="header__left-logo"/>
        </div>
        <div className="header__mid">
            <ul className="header__mid-list">
              <Link className="header__mid-lis__item" to='/'> <li className="header__mid-lis__item">Trang chủ</li></Link> 
              <Link className="header__mid-lis__item" to='/gioithieu'>  <li className="header__mid-lis__item">Giới thiệu</li></Link> 
              <Link className="header__mid-lis__item" to='/cuahang'> <li className="header__mid-lis__item">Cửa hàng</li></Link> 
              <li className="header__mid-lis__item">Liên hệ</li>
            </ul>
        </div>
        <div className="header__right">
             <i class="fa fa-search"></i>
             <Link className="header__right-btn" to='/login'>Đăng nhập / Đăng ký</Link>
             <Link to='/cart' className="header__right-btn">
                Giỏ hàng 
                <i class="fa fa-shopping-bag"></i>
             </Link>
        </div>
    </div>
  );
}

export default Header;
