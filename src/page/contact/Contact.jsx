
import "./Contact.scss"
function Contact() {
    return ( <div className="contact">
        
        <form className="contact-form">
        <h1 className="title">Contact Us</h1>
        <div className="input-box">
            <p className="text">
                Full Name
            </p>
            <input type="text" className="name" placeholder="Name" required/>
        </div>
        <div className="input-box">
            <p className="text">
            Phone Number
            </p>
            <input type="text" className="phone" placeholder="Phone" required/>
        </div>
        <div className="input-box">
            <p className="text">
            Email
            </p>
            <input type="text" className="email" placeholder="Email" required/>
        </div>
        <div className="input-box">
            <p className="text">
            Message
            </p>
            <input type="text" className="message" placeholder="Message" required/>
        </div>

        <div className="submit-box">
            <button className="btn">Gửi</button>
        </div>
        </form>
    </div> );
}

export default Contact;