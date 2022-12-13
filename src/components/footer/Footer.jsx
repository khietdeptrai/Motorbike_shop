
import './Footer.scss'
import Logo from "./logo.svg";
function Footer() {
    return ( <div className="footer" >
        <div className='footer__logo'>
            <img src={Logo} alt="logo" className='footer__logo-img' />
            <p className='footer__logo-text'>Món quà đặc biệt từ mẹ thiên nhiên.</p>
        </div>
        <div className='footer__lienhe'>
            <h3 className='footer__lienhe-title'>Liên hệ</h3>
            <p className='footer__lienhe-text'>Điện thoại: 123213123</p>
            <p className='footer__lienhe-text'>Email: i123213@asda</p>
        </div>
        <div className='footer__diachi'>
        <h3 className='footer__diachi-title'>Địa chỉ</h3>
        <p className='footer__diachi-text'>9999 Nguyễn Huệ, Quận 1, TP. HCM Việt Nam</p>

        </div>
        <div className='footer__ketnoi'>
        <h3 className='footer__ketnoi-title'>Kết nối với chúng tôi</h3>
        <div className='footer__ketnoi--icons'>
                 <i class="fa fa-facebook"></i>
                 <i class="fa fa-instagram"></i>
                 <i class="fa fa-google"></i>
                 <i class="fa fa-twitter"></i>
        </div>
        </div>
    </div> );
 }
 
 export default Footer;