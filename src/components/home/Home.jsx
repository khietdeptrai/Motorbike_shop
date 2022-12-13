import "./Home.css";
import {useState, useEffect} from "react";
import {NavLink, useLocation} from "react-router-dom";
import {ListBookDefault} from './dataDefault'

function Home() {
    let url = useLocation()
    const [currentBook, setCurrentBook] = useState(Math.floor(Math.random() * ListBookDefault.length))
    useEffect(() => {
        const inter = setInterval(() => {
            setCurrentBook(currentBook < (ListBookDefault.length - 1) ? currentBook + 1 : 0);
            console.log(currentBook)
        }, 5000);

        return() => clearInterval(inter);
    }, [currentBook]);

    return (
        <div className="Home">
            <div className="Home__Header-book">
                {
                ListBookDefault.map((book, index) => {
                    if (index === currentBook) 
                        return (

                            <div key={index}
                                className="Home__Header-book--container">
                                <div className="Home__Header-book__info">
                                    <h3 className="Home__Header-book__info-status">
                                        New Release
                                    </h3>
                                    <h1 className="Home__Header-book__info-name">
                                        {
                                        book.name
                                    }</h1>
                                    <p className="Home__Header-book__info-descrip">
                                        {
                                        book.description || "Lorem ipsum dolor sit amet consectetur adipisicing elit. At facere odit reiciendis, vitae, iste ab temporibus eligendi sunt maiores possimus distinctio architecto quisquam natus dolore quam obcaecati pariatur? Ullam, earum?"
                                    }
                                        {" "} </p>
                                    <div className="Home__Header-book__info--action">
                                        <NavLink className="Home__Header-book__info--btn-buy" 
                                            to={
                                                `${url}/detailbook`
                                            }
                                            BookId={
                                                book.id
                                        }>
                                            Buy Now
                                        </NavLink>
                                        <button className="Home__Header-book__info--btn-read">
                                            View Detail
                                        </button>
                                    </div>
                                </div>
                                <div className="Home__Header-book__img-box">
                                    <img src={
                                            book.urlImg
                                        }
                                        alt="imgBook"
                                        className="Home__Header-book__img"/>
                                </div>
                            </div>

                        );
                    
                })
            } </div>
        </div>
    );
}

export default Home;
