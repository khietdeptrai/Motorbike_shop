import Logo from "./logo.svg";
import './Header.scss'
function Header() {
  return (
    <div className="header">
        <div className="header__left">
            <img src={Logo} alt="Logo"  className="header__left-logo"/>
        </div>
        <div className="header__mid">
            <ul className="header__mid-list">
                <li className="header__mid-lis__item">Trang chủ</li>
                <li className="header__mid-lis__item">Giới thiệu</li>
                <li className="header__mid-lis__item">Cửa hàng</li>
                <li className="header__mid-lis__item">Blog</li>
                <li className="header__mid-lis__item">Liên hệ</li>
            </ul>
        </div>
        <div className="header__right">
             <i class="fa fa-search"></i>
             <button className="header__right-btn">Đăng nhập / Đăng ký</button>
             <button className="header__right-btn">
                Giỏ hàng 
                <i class="fa fa-shopping-bag"></i>
             </button>
        </div>
      
    </div>
  );
}

export default Header;
