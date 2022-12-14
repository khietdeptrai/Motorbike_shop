import { Add, Remove } from "@material-ui/icons";
import {Link} from 'react-router-dom'
import { useState } from "react";
import './Cart.scss'

const data ={
  price: 254490000,
  name: "Honda CBR650R 2023",
  img: "https://xe360.com/uploads/forum/photo/ru/rul/rul3wx2liwmn.jpg"
};
const Cart = () => {
  
  const [numberItem, setNumberItem] = useState(0)
  const handdleRemoveNumberItem = () => {
    if(numberItem < 1)
    {
      setNumberItem(0)
    }
    else {
      setNumberItem(numberItem - 1)
    }

  }
  const handdleAddNumberItem = () => {
    setNumberItem(numberItem + 1)
  }

  return (
    <div className="Container">

      <div className="Wrapper">
        <h1 className="Title">YOUR BAG</h1>
        <div className="Top">
          <Link to ='/shopping'><button className="TopButton-left">CONTINUE SHOPPING</button></Link>
          <div className="TopTexts">
            <div className="TopTexts-item">Shopping Bag(2)</div>
            <div className="TopTexts-item">Your Wishlist (0)</div>
          </div>
          <button className="TopButton-right" type="filled">CHECKOUT NOW</button>
        </div>
        <div className="Bottom">
          <ul className="Info">
            <li className="Product">
              <div className="ProductDetail">
                <img className="ProductDetail-img" src={data.img} alt="Img Product"/>
                <div className="Details">
                  <span className="ProductName">
                    <b>Product:</b> {data.name}
                  </span>
                  <span className="ProductId">
                    <b>ID:</b> 93813718293
                  </span>
                  <div className="box-color black"></div>
                  <span className="ProductSize">
                    <b>Size:</b> 37.5
                  </span>
                </div>
              </div>
              <div className="PriceDetail">
                <div className="ProductAmountContainer">
                <button className="removeproduct btn" onClick={handdleRemoveNumberItem}>
                  <Remove />
                  </button>
                  <span className="ProductAmount ">{numberItem}</span>

                  <button className="addproduct btn" onClick={handdleAddNumberItem}>
                  <Add />
                  </button>
                 
                </div>
                <div className="ProductPrice">$ {data.price}</div>
              </div>
            </li>
            
          </ul>
          <div className="Summary">
            <h1 className="SummaryTitle">ORDER SUMMARY</h1>
            <div className="SummaryItem">
              <span className="SummaryItemText">Subtotal</span>
              <span className="SummaryItemPrice">$ 80</span>
            </div>
            <div className="SummaryItem">
              <span className="SummaryItemText">Estimated Shipping</span>
              <span className="SummaryItemPrice">$ 5.90</span>
            </div>
            <div className="SummaryItem">
              <span className="SummaryItemText">Shipping Discount</span>
              <span className="SummaryItemPrice">$ -5.90</span>
            </div>
            <div className="SummaryItem" type="total">
              <strong className="SummaryItemText">Total</strong>
              <strong className="SummaryItemPrice">$ {numberItem * data.price}</strong>
            </div>
            <button className="Button">CHECKOUT NOW</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
